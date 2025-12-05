import { defineConfig } from 'vitepress'
import llmstxt from 'vitepress-plugin-llms'

export default defineConfig({
    vite: {
        plugins: [
            llmstxt({
                // 1. Обязательно укажите ваш публичный домен
                hostname: 'https://zhenyagr.github.io/TGZ-Doc',

                // 2. Игнорируем технические файлы и примеры JSON, чтобы не тратить токены LLM
                ignore: [
                    '**/json/**',
                    '**/404.md'
                ],

                // 3. Настройки генерации (по умолчанию true, но можно настроить)
                llmsFile: {
                    indexTOC: 'only-llms', // В оглавлении оставить только ссылки на .md версии (чище)
                },
                llmsFullFile: true, // Генерировать полный дамп
                mdFiles: true,      // Создавать зеркала страниц в .md (guide.html -> guide.md)
            })
        ]
    },

    lang: 'ru-RU',
    title: "Telegram-Z",
    description: "Документация библиотеки TGZ",
    base: "/TGZ-Doc/",
    cleanUrls: true,
    // srcDir: './docs',
    appearance: 'dark',
    lastUpdated: true,

    head: [
        ['link', {rel: 'icon', href: '/logo.png'}]
    ],

    themeConfig: {

        editLink: {
            pattern: 'https://github.com/ZhenyaGR/TGZ-Doc/edit/main/docs/:path',
            text: 'Редактировать страницу'
        },

        outline: {label: 'Содержание страницы'},

        docFooter: {
            prev: 'Предыдущая страница',
            next: 'Следующая страница'
        },

        lastUpdated: {
            text: 'Обновлено'
        },

        darkModeSwitchLabel: 'Оформление',
        lightModeSwitchTitle: 'Переключить на светлую тему',
        darkModeSwitchTitle: 'Переключить на тёмную тему',
        sidebarMenuLabel: 'Меню',
        returnToTopLabel: 'Вернуться к началу',
        langMenuLabel: 'Изменить язык',
        skipToContentLabel: 'Перейти к содержимому',

        // logo: '/ico.ico',

        socialLinks: [
            {icon: 'github', link: 'https://github.com/zhenyagr/tgz'},
        ],

        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: 'Поиск',
                        buttonAriaLabel: 'Поиск',
                    },
                    modal: {
                        noResultsText: 'Нет результатов для',
                        resetButtonTitle: 'Очистить запрос',
                        footer: {
                            selectText: 'выбрать',
                            navigateText: 'перейти',
                            closeText: 'закрыть',
                        },
                    },
                },
            }
        },

        sidebar: [
            {
                text: 'Начало работы',
                collapsed: false,
                items: [
                    {text: 'Почему TGZ?', link: '/install/who_tgz'},
                    {text: 'Установка и подключение', link: '/install/requirements'},
                    {text: 'Создание бота в TG', link: '/install/create_bot'},
                    {text: 'Примеры ботов', link: '/install/examples'},
                ]
            },
            {
                text: 'Использование',
                link: '/using/main',
                collapsed: false,
                items: [
                    {text: 'Получение обновлений', link: '/using/getting-updates'},
                    {text: 'Конструктор сообщений', link: '/using/messages'},
                    {text: 'Конструктор опросов', link: '/using/poll'},
                    {text: 'Обработчики', link: '/using/handlers'},
                    {text: 'Middleware', link: '/using/middleware'},
                    {text: 'Пагинация страниц', link: '/using/pagination'},
                ]
            },
            {
                text: 'Классы',
                collapsed: false,
                link: '/classes/main',
                items: [
                    {
                        text: 'TGZ',
                        link: '/classes/tgz',
                        collapsed: true,
                        items: [
                            // 1. Фабрики (создание других объектов) - с чего начинается код
                            {text: 'msg', link: '/classes/tgzMethods/msg'},
                            {text: 'poll', link: '/classes/tgzMethods/poll'},
                            {text: 'pagination', link: '/classes/tgzMethods/pagination'},
                            {text: 'inline', link: '/classes/tgzMethods/inline'},
                            {text: 'file', link: '/classes/tgzMethods/file'},

                            // 2. Работа с контекстом и данными (получение инфы)
                            {text: 'initVars', link: '/classes/tgzMethods/initVars'},
                            {text: 'get', link: '/classes/tgzMethods/get'}, // Группа геттеров
                            {text: 'getFileID', link: '/classes/tgzMethods/getFileID'},

                            // 3. Глобальные настройки
                            {text: 'defaultParseMode', link: '/classes/tgzMethods/defaultParseMode'},
                            {text: 'errors', link: '/classes/tgzMethods/errors'},

                            // 4. Простые действия (отправка/удаление без конструктора)
                            {text: 'sendMessage', link: '/classes/tgzMethods/sendMessage'},
                            {text: 'reply', link: '/classes/tgzMethods/reply'},
                            {text: 'copyMsg', link: '/classes/tgzMethods/copyMsg'},
                            {text: 'delMsg', link: '/classes/tgzMethods/delMsg'},
                            {text: 'sendAction', link: '/classes/tgzMethods/sendAction'},
                            {text: 'answers', link: '/classes/tgzMethods/answers'},

                            // 5. Хелперы и низкий уровень
                            // {text: 'buttons', link: '/classes/tgzMethods/buttons'}, Устаревшие кнопки
                            {text: 'callAPI', link: '/classes/tgzMethods/callAPI'},
                        ]
                    },

                    {text: 'LongPoll', link: '/classes/longpoll'},

                    {
                        text: 'Bot',
                        link: '/classes/bot',
                        collapsed: true,
                        items: [
                            // 1. Основные команды и старт
                            {text: 'onStart', link: '/classes/botMethods/onStart'},
                            {text: 'onBotCommand', link: '/classes/botMethods/onBotCommand'},
                            {text: 'onCommand', link: '/classes/botMethods/onCommand'},
                            {text: 'onReferral', link: '/classes/botMethods/onReferral'},

                            // 2. Текст и кнопки
                            {text: 'onText', link: '/classes/botMethods/onText'},
                            {text: 'onTextPreg', link: '/classes/botMethods/onTextPreg'},
                            {text: 'btn', link: '/classes/botMethods/btn'},
                            {text: 'onCallback', link: '/classes/botMethods/onCallback'},
                            {text: 'onCallbackPreg', link: '/classes/botMethods/onCallbackPreg'},
                            {text: 'onInline', link: '/classes/botMethods/onInline'},

                            // 3. Медиа и файлы
                            {text: 'onPhoto', link: '/classes/botMethods/onPhoto'},
                            {text: 'onVideo', link: '/classes/botMethods/onVideo'},
                            {text: 'onAudio', link: '/classes/botMethods/onAudio'},
                            {text: 'onVoice', link: '/classes/botMethods/onVoice'},
                            {text: 'onVideoNote', link: '/classes/botMethods/onVideoNote'},
                            {text: 'onDocument', link: '/classes/botMethods/onDocument'},
                            {text: 'onSticker', link: '/classes/botMethods/onSticker'},

                            // 4. Системные события чата
                            {text: 'onNewChatMember', link: '/classes/botMethods/onNewChatMember'},
                            {text: 'onLeftChatMember', link: '/classes/botMethods/onLeftChatMember'},
                            {text: 'onEditedMessage', link: '/classes/botMethods/onEditedMessage'},

                            // 5. Fallback (если ничего не подошло)
                            {text: 'onMessage', link: '/classes/botMethods/onMessage'}, // Текстовый fallback
                            {text: 'onDefault', link: '/classes/botMethods/onDefault'}, // Глобальный fallback

                            // 6. Ядро и запуск
                            {text: 'redirect', link: '/classes/botMethods/redirect'},
                            {text: 'middleware', link: '/classes/botMethods/middleware'},
                            {text: 'tgz', link: '/classes/botMethods/tgz'},
                            {text: 'run', link: '/classes/botMethods/run'},

                            {
                                text: 'Action',
                                link: '/classes/action',
                                collapsed: false,
                                items: [
                                    // 1. Логика обработки
                                    {text: 'func', link: '/classes/actionMethods/func'},
                                    {text: 'access', link: '/classes/actionMethods/access'},
                                    {text: 'noAccess', link: '/classes/actionMethods/noAccess'},
                                    {text: 'middleware', link: '/classes/actionMethods/middleware'},
                                    {text: 'redirect', link: '/classes/actionMethods/redirect'},

                                    // 2. Простой ответ
                                    {text: 'text', link: '/classes/actionMethods/text'},
                                    {text: 'parseMode', link: '/classes/actionMethods/parseMode'},
                                    {text: 'query', link: '/classes/actionMethods/query'}, // Всплывашка

                                    // 3. Медиа ответ
                                    {text: 'img', link: '/classes/actionMethods/img'},
                                    {text: 'video', link: '/classes/actionMethods/video'},
                                    {text: 'audio', link: '/classes/actionMethods/audio'},
                                    {text: 'voice', link: '/classes/actionMethods/voice'},
                                    {text: 'doc', link: '/classes/actionMethods/doc'},
                                    {text: 'gif', link: '/classes/actionMethods/gif'},
                                    {text: 'sticker', link: '/classes/actionMethods/sticker'},

                                    // 4. Клавиатуры
                                    {text: 'kbd', link: '/classes/actionMethods/kbd'},
                                    {text: 'inlineKbd', link: '/classes/actionMethods/inlineKbd'},
                                    {text: 'removeKbd', link: '/classes/actionMethods/removeKbd'},

                                    // 5. Дополнительно и редактирование
                                    {text: 'reply', link: '/classes/actionMethods/reply'},
                                    {text: 'params', link: '/classes/actionMethods/params'},
                                    {text: 'editText', link: '/classes/actionMethods/editText'},
                                    {text: 'editCaption', link: '/classes/actionMethods/editCaption'},
                                ]
                            },
                        ]
                    },

                    {
                        text: 'Message',
                        link: '/classes/message',
                        collapsed: true,
                        items: [
                            // 1. Основной контент
                            {text: 'text', link: '/classes/messageMethods/text'},

                            // 2. Медиа (группируем вместе)
                            {text: 'img', link: '/classes/messageMethods/img'},
                            {text: 'video', link: '/classes/messageMethods/video'},
                            {text: 'audio', link: '/classes/messageMethods/audio'},
                            {text: 'voice', link: '/classes/messageMethods/voice'},
                            {text: 'doc', link: '/classes/messageMethods/doc'},
                            {text: 'gif', link: '/classes/messageMethods/gif'},
                            {text: 'sticker', link: '/classes/messageMethods/sticker'},
                            {text: 'dice', link: '/classes/messageMethods/dice'},
                            {text: 'mediaPreview', link: '/classes/messageMethods/mediaPreview'},

                            // 3. Клавиатуры
                            {text: 'kbd', link: '/classes/messageMethods/kbd'},
                            {text: 'inlineKbd', link: '/classes/messageMethods/inlineKbd'},
                            {text: 'removeKbd', link: '/classes/messageMethods/removeKbd'},

                            // 4. Настройки сообщения
                            {text: 'parseMode', link: '/classes/messageMethods/parseMode'},
                            {text: 'reply', link: '/classes/messageMethods/reply'},
                            {text: 'params', link: '/classes/messageMethods/params'},

                            // 5. Финальные действия (отправка/редактирование)
                            {text: 'send', link: '/classes/messageMethods/send'},
                            {text: 'editText', link: '/classes/messageMethods/editText'},
                            {text: 'editCaption', link: '/classes/messageMethods/editCaption'},
                            {text: 'editMedia', link: '/classes/messageMethods/editMedia'},
                        ]
                    },

                    {text: 'Button', link: '/classes/button'},

                    {
                        text: 'File',
                        link: '/classes/file',
                        collapsed: true,
                        items: [
                            // Сначала получение информации о файле
                            {text: 'getFileId', link: '/classes/fileMethods/getFileId'},
                            {text: 'getFileInfo', link: '/classes/fileMethods/getFileInfo'},
                            {text: 'getFileSize', link: '/classes/fileMethods/getFileSize'},
                            {text: 'getFilePath', link: '/classes/fileMethods/getFilePath'},
                            // В конце действие (скачивание)
                            {text: 'save', link: '/classes/fileMethods/save'},
                        ]
                    },

                    {
                        text: 'Poll',
                        link: '/classes/poll',
                        collapsed: true,
                        items: [
                            // 1. Контент
                            {text: 'question', link: '/classes/pollMethods/question'},
                            {text: 'addAnswers', link: '/classes/pollMethods/addAnswers'},

                            // 2. Настройки поведения
                            {text: 'isAnonymous', link: '/classes/pollMethods/isAnonymous'},
                            {text: 'multipleAnswers', link: '/classes/pollMethods/multipleAnswers'},
                            {text: 'openPeriod', link: '/classes/pollMethods/openPeriod'},
                            {text: 'closeDate', link: '/classes/pollMethods/closeDate'},
                            {text: 'close', link: '/classes/pollMethods/close'},
                            {text: 'parseMode', link: '/classes/pollMethods/parseMode'},

                            // 3. Настройки викторины (Quiz)
                            {text: 'correctAnswer', link: '/classes/pollMethods/correctAnswer'},
                            {text: 'explanation', link: '/classes/pollMethods/explanation'},

                            // 4. Отправка
                            {text: 'send', link: '/classes/pollMethods/send'},
                        ]
                    },

                    {
                        text: 'Pagination',
                        link: '/classes/pagination',
                        collapsed: true,
                        items: [
                            {text: 'setItems', link: '/classes/paginationMethods/setItems'},
                            {text: 'setPerPage', link: '/classes/paginationMethods/setPerPage'},
                            {text: 'setPrefix', link: '/classes/paginationMethods/setPrefix'},
                            {text: 'setPage', link: '/classes/paginationMethods/setPage'},
                            {text: 'setColumns', link: '/classes/paginationMethods/setColumns'},
                            {text: 'setNavigationLayout', link: '/classes/paginationMethods/setNavigationLayout'},
                            {text: 'setMode', link: '/classes/paginationMethods/setMode'},
                            {text: 'setSigns', link: '/classes/paginationMethods/setSigns'},
                            {text: 'setSideSigns', link: '/classes/paginationMethods/setSideSigns'},
                            {text: 'setMaxPageBtn', link: '/classes/paginationMethods/setMaxPageBtn'},
                            {text: 'setNumberStyle', link: '/classes/paginationMethods/setNumberStyle'},
                            {text: 'setActivePageFormat', link: '/classes/paginationMethods/setActivePageFormat'},
                            {text: 'addReturnBtn', link: '/classes/paginationMethods/addReturnBtn'},
                            {text: 'addHeaderBtn', link: '/classes/paginationMethods/addHeaderBtn'},
                            {text: 'getTotalPage', link: '/classes/paginationMethods/getTotalPage'},
                            {text: 'create', link: '/classes/paginationMethods/create'},
                        ]
                    },

                    {
                        text: 'Inline',
                        link: '/classes/inline',
                        collapsed: true,
                        items: [
                            // 1. Обязательные мета-данные
                            {text: 'id', link: '/classes/inlineMethods/id'},
                            {text: 'title', link: '/classes/inlineMethods/title'},
                            {text: 'description', link: '/classes/inlineMethods/description'},

                            // 2. Контент (Текст или файлы)
                            {text: 'text', link: '/classes/inlineMethods/text'},
                            {text: 'fileUrl', link: '/classes/inlineMethods/fileUrl'},
                            {text: 'fileID', link: '/classes/inlineMethods/fileID'},
                            {text: 'mimeType', link: '/classes/inlineMethods/mimeType'},
                            {text: 'coordinates', link: '/classes/inlineMethods/coordinates'},
                            {text: 'address', link: '/classes/inlineMethods/address'},

                            // 3. Дополнительные настройки
                            {text: 'thumb', link: '/classes/inlineMethods/thumb'},
                            {text: 'kbd', link: '/classes/inlineMethods/kbd'},
                            {text: 'parseMode', link: '/classes/inlineMethods/parseMode'},
                            {text: 'params', link: '/classes/inlineMethods/params'},

                            // 4. Сборка
                            {text: 'create', link: '/classes/inlineMethods/create'},
                        ]
                    },

                    {text: 'DTO', link: '/classes/dto'},

                ]
            },
            {
                text: 'Примеры с обновлениями',
                link: '/json/main',
                collapsed: false,
                items: [
                    {text: 'Новое сообщение', link: '/json/message'},
                    {text: 'Новое сообщение с медиа', link: '/json/message_media'},
                    {text: 'Голосовое и видео-сообщение', link: '/json/message_voice&videoNote'},
                    {text: 'Редактирование сообщения', link: '/json/message_edit'},
                    {text: 'Обновления с чатом', link: '/json/message_chats'},
                    {text: 'Нажатие на кнопку', link: '/json/message_button'},
                ]
            },
        ],

        footer: {
            message: 'Опубликовано под лицензией MIT.',
        },
    }
})