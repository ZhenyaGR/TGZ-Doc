import fs from 'node:fs';
import path from 'node:path';

// 1. ГЛОБАЛЬНЫЙ КОНТЕКСТ
const GLOBAL_CONTEXT = `=== LIBRARY CONTEXT ===
Library: ZenithGram (PHP 8.2+)
Namespace: ZenithGram\\ZenithGram

Implicit Setup & Imports for all code examples:
<?php
require_once __DIR__ . '/vendor/autoload.php';

// Core
use ZenithGram\\ZenithGram\\ZG;
use ZenithGram\\ZenithGram\\LongPoll;
use ZenithGram\\ZenithGram\\Bot;
use ZenithGram\\ZenithGram\\Message;
use ZenithGram\\ZenithGram\\Button;
use ZenithGram\\ZenithGram\\Pagination;
use ZenithGram\\ZenithGram\\Poll;
use ZenithGram\\ZenithGram\\File;
use ZenithGram\\ZenithGram\\Inline;

// DTOs
use ZenithGram\\ZenithGram\\Dto\\UserDto;
use ZenithGram\\ZenithGram\\Dto\\ChatDto;
use ZenithGram\\ZenithGram\\Dto\\MessageDto;

// Enums
use ZenithGram\\ZenithGram\\Enums\\MessageParseMode;
use ZenithGram\\ZenithGram\\Enums\\MessageDice;
use ZenithGram\\ZenithGram\\Enums\\ChatAction;
use ZenithGram\\ZenithGram\\Enums\\PaginationMode;
use ZenithGram\\ZenithGram\\Enums\\PaginationLayout;
use ZenithGram\\ZenithGram\\Enums\\PaginationNumberStyle;

// Initialization
$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);

=== EXECUTION MODES ===

1. Webhook Mode (Standard HTTP)
Used for standard script execution via web server (e.g., index.php).
Pattern: Create ZG -> Create Bot with ZG -> Define Routes -> Run.

<?php
$tg = ZG::create(BOT_TOKEN);
$bot = new Bot($tg);

// Define handlers
$bot->onStart()->text('Bot Work For Webhook');

// Process request
$bot->run();

2. LongPoll Mode (CLI Daemon)
Used for running a daemon script in CLI.
Pattern: Create LongPoll -> Create Empty Bot -> Define Routes -> Listen Loop -> Inject ZG into Bot.

<?php
$lp = LongPoll::create(BOT_TOKEN);
$bot = new Bot(); // Note: Instantiated without $tg

// Define handlers outside the loop
$bot->onStart()->text('Bot Work For LongPoll');

// Start listening loop
$lp->listen(function (ZG $tg) use ($bot) {
    // Inject the received ZG instance into the bot and run routing
    $bot->zg($tg)->run();
});
===`;

const CLASS_MAP = {
  'zenithMethods': 'ZG', 'zenith': 'ZG',
  'botMethods': 'Bot', 'bot': 'Bot',
  'actionMethods': 'Action', 'action': 'Action',
  'messageMethods': 'Message', 'message': 'Message',
  'pollMethods': 'Poll', 'poll': 'Poll',
  'fileMethods': 'File', 'file': 'File',
  'inlineMethods': 'Inline', 'inline': 'Inline',
  'paginationMethods': 'Pagination', 'pagination': 'Pagination',
  'longpoll': 'LongPoll', 'storage': 'Storage',
  'dto': 'DTO', 'enum': 'Enum', 'errorhandler': 'ErrorHandler'
};

const DATA_TYPES = ['string', 'int', 'bool', 'boolean', 'array', 'float', 'mixed', 'void', 'object', 'callable', 'null', 'true', 'false'];

export function optimizeLlmsFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const originalSize = content.length; // Переменная на месте
  const lines = content.split(/\r?\n/);
  const newLines = [];

  let inCodeBlock = false;
  let inTable = false;
  let inMetadataBlock = false;
  let tableHeaderIndices = null;
  let pendingClass = null;
  let skipCurrentSection = false;

  // Проверка начала метаданных (границы файлов)
  function isMetadataStart(index, allLines) {
    if (allLines[index].trim() !== '---') return false;
    for (let i = 1; i < 6; i++) {
      if (!allLines[index + i]) break;
      const check = allLines[index + i].trim();
      if (check === '---') return false;
      if (check.match(/^(url|description|title|prev|next):/)) return true;
    }
    return false;
  }

  // Извлечение имени класса из URL
  function deriveClassFromUrl(urlLine) {
    try {
      const match = urlLine.match(/\/classes\/([a-zA-Z0-9]+)/);
      if (match && match[1]) {
        const folder = match[1];
        return CLASS_MAP[folder] || folder.charAt(0).toUpperCase() + folder.slice(1);
      }
    } catch (e) { return null; }
    return null;
  }

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    const trimmed = line.trim();

    // 1. ОБРАБОТКА МЕТАДАННЫХ
    if (isMetadataStart(i, lines)) {
      inMetadataBlock = true;
      skipCurrentSection = false;
      if (newLines.length > 0) {
        const lastLine = newLines[newLines.length - 1].trim();
        if (lastLine !== '---') newLines.push('', '---', '');
      }
      continue;
    }

    if (skipCurrentSection) continue;

    if (inMetadataBlock) {
      if (trimmed.startsWith('url:')) {
        const cls = deriveClassFromUrl(trimmed);
        if (cls) pendingClass = cls;
      }
      if (trimmed === '---') inMetadataBlock = false;
      continue;
    }

    // 2. УДАЛЕНИЕ РАЗДЕЛА УСТАНОВКИ
    if (trimmed.includes('# Установка и подключение библиотеки')) {
      skipCurrentSection = true;
      if (newLines.length > 0 && newLines[newLines.length - 2] === '---') {
        newLines.splice(newLines.length - 3, 3);
      }
      continue;
    }

    // 3. БЛОКИ КОДА
    if (trimmed.startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      newLines.push(line);
      continue;
    }

    if (inCodeBlock) {
      // Удаляем только технический бойлерплейт
      if (
        trimmed === '<?php' ||
        trimmed.match(/^require(_once)?\s+['"]/) ||
        trimmed.match(/^require(_once)?\s+__DIR__/) ||
        trimmed.startsWith('use ZenithGram') ||
        trimmed.includes('ZG::create') ||
        trimmed.includes('new Bot(') ||
        trimmed.includes('new FileStorage(') ||
        trimmed.includes('new LongPoll(')
      ) { continue; }
      newLines.push(line);
      continue;
    }

    // 4. ЗАГОЛОВКИ
    if (trimmed.startsWith('# ') && pendingClass) {
      let methodName = trimmed.substring(2).trim();
      methodName = methodName.replace(/\*\*/g, '');

      if (methodName.toLowerCase() === pendingClass.toLowerCase()) {
        newLines.push(`# ${pendingClass}`);
      } else if (methodName.includes('::')) {
        newLines.push(`# ${methodName}`);
      } else if (!methodName.toLowerCase().startsWith(pendingClass.toLowerCase())) {
        newLines.push(`# ${pendingClass}::${methodName}`);
      } else {
        const cleanName = methodName.replace(new RegExp('^' + pendingClass + '[:\\s]*', 'i'), '');
        newLines.push(`# ${pendingClass}::${cleanName}`);
      }
      pendingClass = null;
      continue;
    }

    // 5. МУСОР
    if (trimmed.startsWith('[//]:') || trimmed.startsWith('<!--')) continue;
    if (trimmed.match(/^!\[.*?\]\(.*?\)$/)) continue;

    // 6. ТАБЛИЦЫ (УМНЫЙ ПАРСИНГ)
    const headerRegex = /Название|Name|Параметр|Parameter|Свойство|Property|Поле|Field/i;

    if (trimmed.startsWith('|') && headerRegex.test(trimmed)) {
      inTable = true;
      const cols = line.split('|').map(c => c.trim());

      const nameIdx = cols.findIndex(c => headerRegex.test(c));
      const typeIdx = cols.findIndex(c => /Тип|Type/i.test(c));
      const descIdx = cols.findIndex(c => /Описание|Description/i.test(c));

      if (nameIdx === -1) {
        inTable = false;
        newLines.push(line);
        continue;
      }

      tableHeaderIndices = { name: nameIdx, type: typeIdx, desc: descIdx };
      newLines.push('__PARAMS_START__');
      continue;
    }

    if (inTable) {
      if (!trimmed.startsWith('|')) {
        inTable = false;
        tableHeaderIndices = null;
        if (trimmed !== '') newLines.push(line);
        continue;
      }
      if (trimmed.match(/^\|[- :|]+$/)) continue;

      let cols = line.split('|').map(c => c.trim());
      if (cols[0] === '') cols.shift();
      if (cols[cols.length - 1] === '') cols.pop();

      let pName = '', pType = 'mixed', pDesc = '';

      // Извлечение данных
      if (tableHeaderIndices && cols.length > 3) {
        const nameVal = cols[tableHeaderIndices.name - 1];
        const descVal = cols[cols.length - 1];
        const typeParts = cols.slice(tableHeaderIndices.name, cols.length - 1);
        const typeVal = typeParts.join('|');

        pName = nameVal.replace(/[*`]/g, '');
        pType = typeVal.replace(/`/g, '');
        pDesc = descVal;
      } else {
        const nameIdx = tableHeaderIndices?.name;
        const typeIdx = tableHeaderIndices?.type;
        const descIdx = tableHeaderIndices?.desc;

        if (nameIdx > -1 && cols[nameIdx]) {
          pName = cols[nameIdx].replace(/[*`]/g, '');
          pType = (typeIdx > -1 && cols[typeIdx]) ? cols[typeIdx].replace(/`/g, '') : 'mixed';
          pDesc = (descIdx > -1 && cols[descIdx]) ? cols[descIdx] : '';
        }
      }

      // === ВАЛИДАЦИЯ СТРОКИ ===
      // Если имя содержит пробелы или является типом данных -> это не параметр функции.
      // Скорее всего это DTO или ошибка парсинга. Оставляем как обычный текст.
      if (pName && !pName.includes(' ') && !DATA_TYPES.includes(pName.toLowerCase())) {
        newLines.push(`- ${pName} (${pType}): ${pDesc}`);
      } else {
        if (pName) {
          // Fallback: выводим как текстовую строку, но без форматирования параметра
          newLines.push(`- ${pName} ${pType !== 'mixed' ? pType : ''} ${pDesc}`.trim());
        }
      }
      continue;
    }

    newLines.push(line);
  }

  let finalContent = newLines.join('\n');

  // === ФИНАЛЬНАЯ ПОЛИРОВКА ===
  finalContent = finalContent.replace(/__PARAMS_START__\n(?=-)/g, '\n**Parameters:**\n');
  finalContent = finalContent.replace(/__PARAMS_START__\n/g, '');

  while (finalContent.match(/```[a-z]*\s*\n\s*```/)) {
    finalContent = finalContent.replace(/```[a-z]*\s*\n\s*```/g, '');
  }

  finalContent = finalContent.replace(/## Подключение классов[\s\S]*?(?=\n(#|---))/g, '');
  finalContent = finalContent.replace(/(# .*?)\*\*(.*?)\*\*/g, '$1$2');
  finalContent = finalContent.replace(/\n{3,}/g, '\n\n');
  finalContent = finalContent.replace(/---\n\n---/g, '---');

  finalContent = GLOBAL_CONTEXT + finalContent.trim();

  fs.writeFileSync(filePath, finalContent, 'utf8');

  const newSize = finalContent.length;
  const reduced = ((originalSize - newSize) / originalSize * 100).toFixed(1);
  console.log(`✨ Optimized ${path.basename(filePath)}: reduced by ${reduced}% (${originalSize} -> ${newSize} chars)`);
}