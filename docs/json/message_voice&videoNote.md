---
title: Голосовое и видео-сообщение
description: "JSON-структура голосовых и видео-сообщений."
---

# Голосовое и видео-сообщения
Представляет собой сообщение, записанное голосом и "Кружок".

## Голосовое сообщение
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
        "voice": {
            "duration": 1,
            "mime_type": "audio\/ogg",
            "file_id": "AwAsAgIAAxkBAAIRbWi0MHiwus_Z8wLzqAOhnB7RCcojAAKxeQACsEWgSYfFCOuR3HyYNgQ",
            "file_unique_id": "AgAssXkAArBFoEk",
            "file_size": 6379
        }
    }
}
```

## Видео-сообщение
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
        "video_note": {
            "duration": 3,
            "length": 400,
            "thumbnail": {
                "file_id": "AAMCAgADGQEAAhFzaLQyBK3p0AgMzNw9uIH1qDa4xrgAAsZ5AAKwRaBJUTi3ISaffsMBAAdtfAM2BA",
                "file_unique_id": "AQADxnkAArBFosly",
                "file_size": 22340,
                "width": 320,
                "height": 320
            },
            "thumb": {
                "file_id": "AAMCAgADGQEAAhFzaLQyaK3p0AgMzNw9uIH1qDa4xrgAAsZ5AAKwRaBJUTi3ISaffsMBAAdtAAM2BA",
                "file_unique_id": "AQAsxnkAArBFoEly",
                "file_size": 22340,
                "width": 320,
                "height": 320
            },
            "file_id": "DQACAgIAAxkBAAaRc2i0MgSt6dAIDMzcPbiB9ag2uMa4AALGeQACsEWgSVE4tyEmn37DNgQ",
            "file_unique_id": "AgAgxnkAArBFoEk",
            "file_size": 381346
        }
    }
}
```
