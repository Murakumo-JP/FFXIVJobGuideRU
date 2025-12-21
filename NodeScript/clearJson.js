// remove-updates.js
import { readFile, writeFile, readdir, stat } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Получаем текущую директорию скрипта
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function processDirectory(dirPath) {
    console.log(`📂 Обработка папки: ${dirPath}`);
    
    try {
        const items = await readdir(dirPath);
        
        for (const item of items) {
            const fullPath = join(dirPath, item);
            const stats = await stat(fullPath);
            
            if (stats.isDirectory()) {
                await processDirectory(fullPath);
            } else if (item.endsWith('.json')) {
                await processJsonFile(fullPath);
            }
        }
    } catch (error) {
        console.error(`❌ Ошибка: ${dirPath}`, error.message);
    }
}

async function processJsonFile(filePath) {
    try {
        const content = await readFile(filePath, 'utf8');
        let data;
        
        try {
            data = JSON.parse(content);
        } catch {
            console.log(`⚠️  Пропускаем: ${filePath}`);
            return;
        }
        
        const originalJson = JSON.stringify(data, null, 2);
        const cleanedData = removeSkillUpdate(data);
        const cleanedJson = JSON.stringify(cleanedData, null, 2);
        
        if (originalJson !== cleanedJson) {
            await writeFile(filePath, cleanedJson, 'utf8');
            console.log(`✅ Очищен: ${filePath}`);
        }
        
    } catch (error) {
        console.error(`❌ Ошибка: ${filePath}`, error.message);
    }
}

function removeSkillUpdate(obj) {
    if (Array.isArray(obj)) {
        return obj.map(item => removeSkillUpdate(item));
    } else if (obj && typeof obj === 'object') {
        const newObj = {};
        for (const [key, value] of Object.entries(obj)) {
            if (key !== 'skill_new') {
                newObj[key] = removeSkillUpdate(value);
            }
        }
        return newObj;
    }
    return obj;
}

async function main() {
    // Путь к папке DB (на уровень выше от NodeScript)
    const DB_DIR = join(__dirname, '..', 'DB');
    
    console.log('🔍 Поиск JSON файлов...');
    console.log(`📁 Путь: ${DB_DIR}`);
    console.log('========================================\n');
    
    try {
        await processDirectory(DB_DIR);
        console.log('\n========================================');
        console.log('🎉 Все файлы обработаны!');
        console.log('✅ Удалены все ключи "skill_update"');
    } catch (error) {
        console.error('❌ Критическая ошибка:', error);
        process.exit(1);
    }
}

main().catch(console.error);