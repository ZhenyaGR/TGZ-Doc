---
title: Новое сообщение с медиа
description: "JSON-структура сообщения с медиафайлами."
---

# Сообщение с прикреплённым медиа
Представляет собой обычное сообщение, но с добавленным к нему медиа, например фотография или видео.

## Фотография
```json
{
    "update_id": 123,
    "message": {
        "message_id": 123,
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
        "date": 123,
        "photo": [
            {
                "file_id": "AgACAgIAAyEFAASRVpKkAAIG7WdlNfnUx45k2KCuLyo4EHHcEvWHAAIJ5jEbqlwpS3IQJCLujLnXAQADAgADcwADNgQ",
                "file_unique_id": "AQADCeYxG6pcKUt4",
                "file_size": 670,
                "width": 90,
                "height": 32
            },
            {
                "file_id": "AgACAgIAAyEFAASRVpKkAAIG7WdlNfnUx45k2KCuLyo4EHHcEvWHAAIJ5jEbqlwpS3IQJCLujLnXAQADAgADbQADNgQ",
                "file_unique_id": "AQADCeYxG6pcKUty",
                "file_size": 6535,
                "width": 320,
                "height": 113
            },
            {
                "file_id": "AgACAgIAAyEFAASRVpKkAAIG7WdlNfnUx45k2KCuLyo4EHHcEvWHAAIJ5jEbqlwpS3IQJCLujLnXAQADAgADeAADNgQ",
                "file_unique_id": "AQADCeYxG6pcKUt9",
                "file_size": 15287,
                "width": 514,
                "height": 182
            }
        ],
        "caption": "Message text"
    }
}
```

## Документ
```json
{
    "update_id": 123,
    "message": {
        "message_id": 123,
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
        "date": 123,
        "document": {
            "file_name": "app.exe",
            "mime_type": "application\/octet-stream",
            "file_id": "BQACdgIAAxkBAAIRcGi0MT0fhujc0OH7aptjeQ3YyIq5AAK5eQACsEWgSY6DPvthrl69NgQ",
            "file_unique_id": "AhADuXkAArBFoEk",
            "file_size": 869624
        }
    }
}
```

## Аудио
```json
{
    "update_id": 123,
    "message": {
        "message_id": 123,
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
        "date": 123,
        "audio": {
            "duration": 1,
            "file_name": "359c24fc-31f2-40ed-8b5b-8bc2b7f154c9.mp3",
            "mime_type": "audio\/mpeg",
            "title": "359c24fc-31f2-40ed-8b5b-8bc2b7f154c9",
            "performer": "<unknown>",
            "file_id": "CQACAgIAAxkBAAIRami0L3swXDfsSXhvF0Ljm7iSbYRFAAKheQACsEWgSYkNqRrPqni0NgQ",
            "file_unique_id": "AgADoXkAArBFoEk",
            "file_size": 12525
        }
    }
}
```

## Стикер
```json
{
    "update_id": 123,
    "message": {
        "message_id": 123,
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
        "date": 123,
        "sticker": {
            "width": 512,
            "height": 512,
            "emoji": "\ud83e\uddcd",
            "set_name": "Sabirouuu",
            "is_animated": false,
            "is_video": false,
            "type": "regular",
            "thumbnail": {
                "file_id": "AAMCAgADGQEAAhFjaKCwHqFGsBESjYfy11MrAAFZO7AdAAKCagACaWQpSXpQuFOHYRJRAQAHbQADNgQ",
                "file_unique_id": "AQADgmoAAmlkKUly",
                "file_size": 6144,
                "width": 320,
                "height": 320
            },
            "thumb": {
                "file_id": "AAMCAgADGQEAAhFjaKCwHqFGsBESjYfy11MrAAFZO7AdAAKCagACaWQpSXpQuFOHYRJRAQAHbQADNgQ",
                "file_unique_id": "AQADgmoAAmlkKUly",
                "file_size": 6144,
                "width": 320,
                "height": 320
            },
            "file_id": "CAACAgIAAxkBAAIRY2igsB2hRrAREo2H8vfDKwABWTuwHQACgmoAAmlkKUl6ULhTh2ESUTYE",
            "file_unique_id": "AgADgmoAAmlkKUk",
            "file_size": 14124
        }
    }
}
```
