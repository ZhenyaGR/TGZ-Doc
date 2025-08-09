import DefaultTheme from 'vitepress/theme'
import './style.css' // Подключаем кастомные стили

export default {
    // Добавляем секцию head для иконки
    head: [
        ['link', { rel: 'icon', href: '/TGZ3.ico' }] // Путь к вашей иконке
    ],
    ...DefaultTheme
}