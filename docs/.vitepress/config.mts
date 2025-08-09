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
        ['link', {rel: 'icon', href: '/TGZ2.ico'}] //withBase почему-то не работает
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
            pattern: 'https://github.com/digitalstars/simplevk-doc/edit/master/docs/:path',
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

        logo: '/TGZ.png',

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
                            {text: 'callAPI', link: '/classes/tgzMethods/callAPI'},
                            {text: 'getWebhookUpdate', link: '/classes/tgzMethods/getWebhookUpdate'},
                            {text: 'init', link: '/classes/tgzMethods/init'},
                            {text: 'defaultParseMode', link: '/classes/tgzMethods/defaultParseMode'},
                            {text: 'delMsg', link: '/classes/tgzMethods/delMsg'},
                            {text: 'copyMsg', link: '/classes/tgzMethods/copyMsg'},
                            {text: 'getFileID', link: '/classes/tgzMethods/getFileID'},
                            {text: 'reply', link: '/classes/tgzMethods/reply'},
                            {text: 'buttons', link: '/classes/tgzMethods/buttons'},
                            {text: 'answers', link: '/classes/tgzMethods/answers'},
                            {text: 'errors', link: '/classes/tgzMethods/errors'},
                        ]
                    },
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
                    {text: 'Inline', link: '/classes/inline'},
                    {text: 'Bot', link: '/classes/bot'},

                ]
            }
        ],

        footer: {
            message: 'Опубликовано под лицензией MIT.',
        },
    }
})