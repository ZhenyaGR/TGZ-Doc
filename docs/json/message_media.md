---
title: Обновления
---

# Сообщение с прикреплённым медиа
Представляет собой обычное сообщение, но с добавленным к нему медиа, например фотография или видео.

## Фотография
```json
{
    "update_id": 410164509,
    "message": {
        "message_id": 1777,
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
        "date": 1734686260,
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
    "update_id": 806793388,
    "message": {
        "message_id": 4464,
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
        "date": 1756639549,
        "document": {
            "file_name": "app.exe",
            "mime_type": "application\/octet-stream",
            "file_id": "BQACAgIAAxkBAAIRcGi0MT0fhujc0OH7sptjeQ3YyIq5AAK5eQACsEWgSY6DPvthrl69NgQ",
            "file_unique_id": "AgADuXkAArBFoEk",
            "file_size": 869624
        }
    }
}
```

## Аудио
```json
{
    "update_id": 806793386,
    "message": {
        "message_id": 4458,
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
        "date": 1756639090,
        "audio": {
            "duration": 1,
            "file_name": "359c24fc-31f2-40ed-8b5b-8bc2b7f154c9.mp3",
            "mime_type": "audio\/mpeg",
            "title": "359c24fc-31f2-40ed-8b5b-8bc2b7f154c9",
            "performer": "<unknown>",
            "file_id": "CQACAgIAAxkBAAIRami0L3JwXDfsSXhvF0Ljm7iSbYRFAAKheQACsEWgSYkNqRrPqni0NgQ",
            "file_unique_id": "AgADoXkAArBFoEk",
            "file_size": 12525
        }
    }
}
```
