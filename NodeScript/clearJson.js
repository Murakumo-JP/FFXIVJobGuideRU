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
        
        // Фиксируем текущие отступы из файла
        const lines = content.split('\n');
        const hasTabs = lines.some(line => line.includes('\t'));
        
        // Удаляем нужные ключи, сохраняя оригинальное содержимое
        let cleanedContent = content;
        
        // Удаляем PVE Update и PVP Update строки полностью
        cleanedContent = cleanedContent.replace(/\s*"PVE Update":\s*"[^"]*",?\n?/g, '');
        cleanedContent = cleanedContent.replace(/\s*"PVP Update":\s*"[^"]*",?\n?/g, '');
        
        // Удаляем skill_new и skill_update строки
        cleanedContent = cleanedContent.replace(/\s*"skill_new":\s*[^,}\n]*,?\n?/g, '');
        cleanedContent = cleanedContent.replace(/\s*"skill_update":\s*[^,}\n]*,?\n?/g, '');
        
        // Удаляем лишние запятые после удаления свойств
        cleanedContent = cleanedContent.replace(/,(\s*})/g, '$1');
        cleanedContent = cleanedContent.replace(/,(\s*\n\s*})/g, '$1');
        
        // Парсим обратно чтобы проверить валидность JSON
        try {
            JSON.parse(cleanedContent);
            
            if (content !== cleanedContent) {
                await writeFile(filePath, cleanedContent, 'utf8');
                console.log(`✅ Очищен: ${filePath}`);
            }
        } catch (parseError) {
            console.error(`❌ Ошибка JSON после очистки: ${filePath}`, parseError.message);
            // Если не получилось текстовой заменой, делаем через JSON
            await processViaJson(data, filePath, hasTabs);
        }
        
    } catch (error) {
        console.error(`❌ Ошибка: ${filePath}`, error.message);
    }
}

async function processViaJson(data, filePath, hasTabs) {
    // Удаляем ключи из объекта
    const removeKeys = (obj) => {
        if (Array.isArray(obj)) {
            return obj.map(item => removeKeys(item));
        } else if (obj && typeof obj === 'object') {
            const newObj = {};
            for (const [key, value] of Object.entries(obj)) {
                if (key !== 'skill_new' && key !== 'skill_update' && 
                    key !== 'PVE Update' && key !== 'PVP Update') {
                    newObj[key] = removeKeys(value);
                }
            }
            return newObj;
        }
        return obj;
    };
    
    const cleanedData = removeKeys(data);
    
    // Пытаемся сохранить оригинальное форматирование
    let cleanedJson;
    if (hasTabs) {
        cleanedJson = JSON.stringify(cleanedData, null, '\t');
    } else {
        cleanedJson = JSON.stringify(cleanedData, null, 2);
    }
    
    await writeFile(filePath, cleanedJson, 'utf8');
    console.log(`✅ Очищен (через JSON): ${filePath}`);
}

async function main() {
    const DB_DIR = join(__dirname, '..', 'DB');
    
    console.log('🔍 Поиск JSON файлов...');
    console.log(`📁 Путь: ${DB_DIR}`);
    console.log('========================================\n');
    
    try {
        await processDirectory(DB_DIR);
        console.log('\n========================================');
        console.log('🎉 Все файлы обработаны!');
        console.log('✅ Удалены: skill_new, skill_update, PVE Update, PVP Update');
    } catch (error) {
        console.error('❌ Критическая ошибка:', error);
        process.exit(1);
    }
}

main().catch(console.error);