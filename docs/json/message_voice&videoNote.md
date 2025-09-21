---
title: Обновления
---

# Голосовое и видео-сообщения
Представляет собой сообщение, записанное голосом и "Кружок".

## Голосовое сообщение
```json
{
    "update_id": 806793387,
    "message": {
        "message_id": 4461,
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
        "date": 1756639352,
        "voice": {
            "duration": 1,
            "mime_type": "audio\/ogg",
            "file_id": "AwACAgIAAxkBAAIRbWi0MHiwus_Z8wLzqAOhnB7RCcojAAKxeQACsEWgSYfFCOuR3HyYNgQ",
            "file_unique_id": "AgADsXkAArBFoEk",
            "file_size": 6379
        }
    }
}
```

## Видео-сообщение
```json
{
    "update_id": 806793389,
    "message": {
        "message_id": 4467,
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
        "date": 1756639748,
        "video_note": {
            "duration": 3,
            "length": 400,
            "thumbnail": {
                "file_id": "AAMCAgADGQEAAhFzaLQyBK3p0AgMzNw9uIH1qDa4xrgAAsZ5AAKwRaBJUTi3ISaffsMBAAdtAAM2BA",
                "file_unique_id": "AQADxnkAArBFoEly",
                "file_size": 22340,
                "width": 320,
                "height": 320
            },
            "thumb": {
                "file_id": "AAMCAgADGQEAAhFzaLQyBK3p0AgMzNw9uIH1qDa4xrgAAsZ5AAKwRaBJUTi3ISaffsMBAAdtAAM2BA",
                "file_unique_id": "AQADxnkAArBFoEly",
                "file_size": 22340,
                "width": 320,
                "height": 320
            },
            "file_id": "DQACAgIAAxkBAAIRc2i0MgSt6dAIDMzcPbiB9ag2uMa4AALGeQACsEWgSVE4tyEmn37DNgQ",
            "file_unique_id": "AgADxnkAArBFoEk",
            "file_size": 381346
        }
    }
}
```
