---
title: Обновления
---

# Редактирование сообщения
При изменении пользователем сообщения, бот получает обновление в виде `message_edit`.

## Голосовое сообщение
```json
{
    "update_id": 115539710,
    "edited_message": {
        "message_id": 142,
        "from": {
            "id": USER_ID,
            "is_bot": false,
            "first_name": "FirstName",
            "username": USERNAME,
            "language_code": "ru"
        },
        "chat": {
            "id": USER_ID,
            "first_name": "FirstName",
            "username": USERNAME,
            "type": "private"
        },
        "date": 1758130813,
        "edit_date": 1758130816,
        "text": "Edited message text"
    }
}
```