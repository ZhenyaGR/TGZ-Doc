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
        ['link', {rel: 'icon', href: '/favicon.ico'}] //withBase почему-то не работает
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

        logo: '/logo.png',

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
                    {text: 'Message', link: '/classes/message'},
                    {text: 'Poll', link: '/classes/poll'},
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