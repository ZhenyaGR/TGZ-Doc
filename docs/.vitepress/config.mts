import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
    lang: 'ru-RU',
    title: "Telegram-Z",
    description: "Документация библиотеки TGZ",
    base: "/TGZ-Doc/",
    cleanUrls: true,
    // srcDir: './docs',
    appearance: 'dark',
    lastUpdated: true,

    head: [
        // Основной скрипт Яндекс.Метрики
        [
            'script',
            {type: 'text/javascript'},
            `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      ym(100539088, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true
      });`
        ],
        // Noscript для Яндекс.Метрики
        [
            'noscript',
            {},
            `<div><img src="https://mc.yandex.ru/watch/100539088" style="position:absolute; left:-9999px;" alt="" /></div>`
        ],

        ['link', {rel: 'icon', href: '/TGZ3.png'}] //withBase почему-то не работает
    ],

    // head: [
    // ['meta', { name: 'robots', content: 'index, follow' }], // Разрешаем индексацию
    // ['meta', { name: 'keywords', content: 'ключевые слова, seo, vuepress' }], // Ключевые слова
    // ['meta', { name: 'author', content: 'Твоё Имя' }], // Автор страницы
    // ['meta', { property: 'og:title', content: 'Название сайта' }], // Open Graph для соцсетей
    // ['meta', { property: 'og:description', content: 'Описание сайта' }],
    // ['meta', { property: 'og:type', content: 'website' }],
    // ['meta', { property: 'og:image', content: '/images/preview.jpg' }], // Картинка для соцсетей
    // ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    // ],

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

        logo: '/ico.ico',

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
                    {text: 'Установка', link: '/install/requirements'},
                    {text: 'Подключение', link: '/install/install'},
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
                    {text: 'Обработчики', link: '/using/handlers'},
                    {text: 'Middleware', link: '/using/middleware'},
                ]
            },
            {
                text: 'Классы',
                collapsed: false,
                items: [
                    {
                        text: 'TGZ',
                        link: '/classes/tgz',
                        collapsed: true,
                        items: [
                            {text: 'msg', link: '/classes/tgzMethods/msg'},
                            {text: 'poll', link: '/classes/tgzMethods/poll'},
                            {text: 'inline', link: '/classes/tgzMethods/inline'},
                            {text: 'file', link: '/classes/tgzMethods/file'},
                            {text: 'callAPI', link: '/classes/tgzMethods/callAPI'},
                            {text: 'initVars', link: '/classes/tgzMethods/initVars'},
                            {text: 'get', link: '/classes/tgzMethods/get'},
                            {text: 'defaultParseMode', link: '/classes/tgzMethods/defaultParseMode'},
                            {text: 'delMsg', link: '/classes/tgzMethods/delMsg'},
                            {text: 'copyMsg', link: '/classes/tgzMethods/copyMsg'},
                            {text: 'getFileID', link: '/classes/tgzMethods/getFileID'},
                            {text: 'sendMessage', link: '/classes/tgzMethods/sendMessage'},
                            {text: 'reply', link: '/classes/tgzMethods/reply'},
                            {text: 'buttons', link: '/classes/tgzMethods/buttons'},
                            {text: 'answers', link: '/classes/tgzMethods/answers'},
                            {text: 'errors', link: '/classes/tgzMethods/errors'},
                        ]
                    },
                    {text: 'LongPoll', link: '/classes/longpoll'},
                    {text: 'File', link: '/classes/file'}, /*collapsed: false,items: [{text: 'func', link: '/classes/fileMethods/func'},{text: 'text', link: '/classes/fileMethods/text'}]*/
                    {
                        text: 'Message',
                        link: '/classes/message',
                        collapsed: true,
                        items: [
                            {text: 'kbd', link: '/classes/messageMethods/kbd'},
                            {text: 'text', link: '/classes/messageMethods/text'},
                            {text: 'reply', link: '/classes/messageMethods/reply'},
                            {text: 'parseMode', link: '/classes/messageMethods/parseMode'},
                            {text: 'img', link: '/classes/messageMethods/img'},
                            {text: 'video', link: '/classes/messageMethods/video'},
                            {text: 'gif', link: '/classes/messageMethods/gif'},
                            {text: 'voice', link: '/classes/messageMethods/voice'},
                            {text: 'audio', link: '/classes/messageMethods/audio'},
                            {text: 'dice', link: '/classes/messageMethods/dice'},
                            {text: 'doc', link: '/classes/messageMethods/doc'},
                            {text: 'sticker', link: '/classes/messageMethods/sticker'},
                            {text: 'mediaPreview', link: '/classes/messageMethods/mediaPreview'},
                            {text: 'params', link: '/classes/messageMethods/params'},
                            {text: 'action', link: '/classes/messageMethods/action'},
                            {text: 'send', link: '/classes/messageMethods/send'},
                            {text: 'editText', link: '/classes/messageMethods/editText'},
                            {text: 'editCaption', link: '/classes/messageMethods/editCaption'},
                        ]
                    },
                    {
                        text: 'Poll',
                        link: '/classes/poll',
                        collapsed: true,
                        items: [
                            {text: 'question', link: '/classes/pollMethods/question'},
                            {text: 'addAnswers', link: '/classes/pollMethods/addAnswers'},
                            {text: 'parseMode', link: '/classes/pollMethods/parseMode'},
                            {text: 'isAnonymous', link: '/classes/pollMethods/isAnonymous'},
                            {text: 'multipleAnswers', link: '/classes/pollMethods/multipleAnswers'},
                            {text: 'openPeriod', link: '/classes/pollMethods/openPeriod'},
                            {text: 'closeDate', link: '/classes/pollMethods/closeDate'},
                            {text: 'close', link: '/classes/pollMethods/close'},
                            {text: 'correctAnswer', link: '/classes/pollMethods/correctAnswer'},
                            {text: 'explanation', link: '/classes/pollMethods/explanation'},
                            {text: 'send', link: '/classes/pollMethods/send'},
                        ]
                    },
                    {
                        text: 'Inline',
                        link: '/classes/inline',
                        collapsed: true,
                        items: [
                            {text: 'id', link: '/classes/inlineMethods/id'},
                            {text: 'title', link: '/classes/inlineMethods/title'},
                            {text: 'description', link: '/classes/inlineMethods/description'},
                            {text: 'text', link: '/classes/inlineMethods/text'},
                            {text: 'parseMode', link: '/classes/inlineMethods/parseMode'},
                            {text: 'fileUrl', link: '/classes/inlineMethods/fileUrl'},
                            {text: 'fileID', link: '/classes/inlineMethods/fileID'},
                            {text: 'mimeType', link: '/classes/inlineMethods/mimeType'},
                            {text: 'kbd', link: '/classes/inlineMethods/kbd'},
                            {text: 'params', link: '/classes/inlineMethods/params'},
                            {text: 'thumb', link: '/classes/inlineMethods/thumb'},
                            {text: 'coordinates', link: '/classes/inlineMethods/coordinates'},
                            {text: 'address', link: '/classes/inlineMethods/address'},
                            {text: 'create', link: '/classes/inlineMethods/create'},
                        ]
                    },

                    {
                        text: 'Bot',
                        link: '/classes/bot',
                        collapsed: true,
                        items: [
                            {text: 'onBotCommand', link: '/classes/botMethods/onBotCommand'},
                            {text: 'onCommand', link: '/classes/botMethods/onCommand'},
                            {text: 'onText', link: '/classes/botMethods/onText'},
                            {text: 'onTextPreg', link: '/classes/botMethods/onTextPreg'},
                            {text: 'onCallback', link: '/classes/botMethods/onCallback'},
                            {text: 'onMessage', link: '/classes/botMethods/onMessage'},
                            {text: 'onPhoto', link: '/classes/botMethods/onPhoto'},
                            {text: 'onVideo', link: '/classes/botMethods/onVideo'},
                            {text: 'onAudio', link: '/classes/botMethods/onAudio'},
                            {text: 'onDocument', link: '/classes/botMethods/onDocument'},
                            {text: 'onVoice', link: '/classes/botMethods/onVoice'},
                            {text: 'onVideoNote', link: '/classes/botMethods/onVideoNote'},
                            {text: 'onSticker', link: '/classes/botMethods/onSticker'},
                            {text: 'onNewChatMember', link: '/classes/botMethods/onNewChatMember'},
                            {text: 'onLeftChatMember', link: '/classes/botMethods/onLeftChatMember'},
                            {text: 'onDefault', link: '/classes/botMethods/onDefault'},
                            {text: 'btn', link: '/classes/botMethods/btn'},
                            {text: 'redirect', link: '/classes/botMethods/redirect'},
                            {text: 'middleware', link: '/classes/botMethods/middleware'},
                            {text: 'run', link: '/classes/botMethods/run'},
                            {
                                text: 'Action',
                                link: '/classes/action',
                                collapsed: false,
                                items: [
                                    {text: 'func', link: '/classes/actionMethods/func'},
                                    {text: 'text', link: '/classes/actionMethods/text'},
                                    {text: 'parseMode', link: '/classes/actionMethods/parseMode'},
                                    {text: 'reply', link: '/classes/actionMethods/reply'},
                                    {text: 'img', link: '/classes/actionMethods/img'},
                                    {text: 'voice', link: '/classes/actionMethods/voice'},
                                    {text: 'video', link: '/classes/actionMethods/video'},
                                    {text: 'audio', link: '/classes/actionMethods/audio'},
                                    {text: 'gif', link: '/classes/actionMethods/gif'},
                                    {text: 'doc', link: '/classes/actionMethods/doc'},
                                    {text: 'sticker', link: '/classes/actionMethods/sticker'},
                                    {text: 'params', link: '/classes/actionMethods/params'},
                                    {text: 'kbd', link: '/classes/actionMethods/kbd'},
                                    {text: 'inlineKbd', link: '/classes/actionMethods/inlineKbd'},
                                    {text: 'removeKbd', link: '/classes/actionMethods/removeKbd'},
                                    {text: 'editText', link: '/classes/actionMethods/editText'},
                                    {text: 'editCaption', link: '/classes/actionMethods/editCaption'},
                                    {text: 'redirect', link: '/classes/actionMethods/redirect'},
                                    {text: 'middleware', link: '/classes/actionMethods/middleware'},
                                    {text: 'access', link: '/classes/actionMethods/access'},
                                    {text: 'noAccess', link: '/classes/actionMethods/noAccess'},
                                    {text: 'query', link: '/classes/actionMethods/query'},
                                ]
                            },
                        ]
                    },

                    {text: 'DTO', link: '/classes/Dto'},

                ]
            }
        ],

        footer: {
            message: 'Опубликовано под лицензией MIT.',
        },
    }
})