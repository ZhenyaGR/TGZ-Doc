// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import Card from './components/Card.vue'
import CardGrid from './components/CardGrid.vue'
import './style.css' // по желанию, для доп. стилей

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        // регистрируем компоненты глобально
        app.component('Card', Card)
        app.component('CardGrid', CardGrid)
    }
}