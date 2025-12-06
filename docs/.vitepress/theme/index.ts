// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import { useData, useRoute, inBrowser } from 'vitepress'
import { watch, nextTick } from 'vue'
import Card from './components/Card.vue'
import CardGrid from './components/CardGrid.vue'
import './style.css'

export default {
    extends: DefaultTheme,

    enhanceApp({ app }) {
        app.component('Card', Card)
        app.component('CardGrid', CardGrid)
    },

    setup() {
        const { theme, page, site } = useData()
        const route = useRoute()

        // Улучшенная функция нормализации
        const normalize = (path) => {
            if (!path) return ''

            let cleanPath = decodeURIComponent(path)

            // Получаем базовый URL из конфига (например, '/TGZ-Doc/')
            const base = site.value.base || '/'

            // Если текущий путь начинается с base, отрезаем его
            // (чтобы /TGZ-Doc/foo/bar превратилось в /foo/bar)
            if (base !== '/' && cleanPath.startsWith(base)) {
                cleanPath = cleanPath.slice(base.length)
            }

            return cleanPath
                .toLowerCase()
                .replace(/(\.html|\/)$/, '') // убираем .html и слеш в конце
                .replace(/^\//, '')          // убираем слеш в начале (чтобы сравнивать без ведущего слэша)
        }

        const findParentTitle = (sidebar, currentPath) => {
            const sidebarItems = Array.isArray(sidebar)
                ? sidebar
                : Object.values(sidebar).flat()

            const targetPath = normalize(currentPath)

            for (const group of sidebarItems) {
                if (group.items && group.items.length > 0) {
                    for (const child of group.items) {
                        // Нормализуем ссылку из сайдбара
                        const childLink = normalize(child.link)

                        // Сравнение
                        if (childLink === targetPath) {
                            return group.text
                        }
                    }

                    // Рекурсивный поиск
                    const foundDeep = findParentTitle(group.items, currentPath)
                    if (foundDeep) return foundDeep
                }
            }
            return null
        }

        watch(
            () => route.path,
            (newPath) => {
                if (!inBrowser) return

                nextTick(() => {
                    if (!theme.value.sidebar) return

                    const parentTitle = findParentTitle(theme.value.sidebar, newPath)
                    const pageTitle = page.value.title
                    const siteTitle = site.value.title || 'Telegram-Z'

                    // Логи для проверки (можно удалить, если заработает)
                    // console.log('Нормализованный путь:', normalize(newPath))
                    // console.log('Родитель:', parentTitle)

                    if (parentTitle) {
                        document.title = `${parentTitle} > ${pageTitle} | ${siteTitle}`
                    } else {
                        document.title = `${pageTitle} | ${siteTitle}`
                    }
                })
            },
            { immediate: true }
        )
    }
}