# API Documentation

## Table of Contents

1. [Overview](#overview)
2. [Authentication](#authentication)
3. [Base URL](#base-url)
4. [Endpoints](#endpoints)
   - [GET /endpoint](#get-endpoint)
   - [POST /endpoint](#post-endpoint)
   - [PUT /endpoint](#put-endpoint)
   - [DELETE /endpoint](#delete-endpoint)
5. [Request Structure](#request-structure)
6. [Response Structure](#response-structure)
7. [Error Codes](#error-codes)
8. [Examples](#examples)
9. [Rate Limiting](#rate-limiting)
10. [Contact](#contact)

## Overview

This REST API accepts and responds with JSON. I used nouns instead of verbs in endpoint paths with logical nesting on endpoints. Also supports filtering, sorting, and pagination. Payload will be compressed using [gzip](https://www.npmjs.com/package/node-gzip).

## Authentication

I had already built an custom auth system from scratch so i do not want to repeat that since i am using [Clerk](https://clerk.com/docs/quickstarts/nextjs) for authentication.

## Base URL

```plaintext
https://vercel.starnaut.com/api/v1/
```

## Endpoints
I have Used Nouns instead of verbs.

### POST `/api/v1/persona`
- **Description**: Create a persona.
- **Request Body**:
  ```json
  {
    "name": "",
    "description": "",
    "example_conversation": "",
    "instructions": "",
    "image": "",
    "category": "",
    "creatorId": 0
  }
  ```
- **Response**: Returns the created persona's details.

### GET `/api/v1/persona?page=2`
- **Description**: Retrieve a list of personas.
- **Response**: Returns an array of personas with pagination. 20 items in one page.

### GET `/api/v1/persona/{id}`
- **Description**: Retrieve a persona by ID.
- **Response**: Returns the persona's details.

### PUT `/api/v1//persona/{id}`
- **Description**: Update a persona by ID.
- **Request Body**:
  ```json
  {
    "name": "",
    "description": "",
    "example_conversation": "",
    "instructions": "",
    "image": "",
    "category": ""
  }
  ```
- **Response**: Returns the updated persona's details.

### DELETE `/api/v1/persona/{id}`
- **Description**: Delete a persona by ID.
- **Response**: Returns a success message.

### POST `/api/v1/chat`
- **Description**: Create a new chat.
- **Request Body**:
  ```json
  {
    "personaId": 0,
    "userId": 0
  }
  ```
- **Response**: Returns the created chat's details.

### GET `/api/v1/chat`
- **Description**: Retrieve a list of chats.
- **Response**: Returns an array of chats.

### GET `/api/v1/chat/{id}`
- **Description**: Retrieve a chat by ID.
- **Response**: Returns the chat's details.

### POST `/api/v1/message`
- **Description**: Create a new message.
- **Request Body**:
  ```json
  {
    "chatId": 0,
    "senderId": 0,
    "content": ""
  }
  ```
- **Response**: Returns the created message's details.

### GET `/api/v1/message`
- **Description**: Retrieve a list of messages.
- **Response**: Returns an array of messages.

### GET `/api/v1/message/{id}`
- **Description**: Retrieve a message by ID.
- **Response**: Returns the message's details.

## Request Structure

Describe the general structure of requests, including headers and body content.

## Response Structure

Describe the general structure of responses, including headers and body content.

```json
{
  "status" : "SUCCESS" | "FAIL" | "ERROR",
  "statusCode" : 200,
  "payload" : "",
}
```

## Error Codes

List common error codes and their meanings.

| Code | Description           |
| ---- | --------------------- |
| 200  | OK                    |
| 201  | Created               |
| 204  | No Content            |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 404  | Not Found             |
| 409  | Conflict              |
| 422  | Unprocessable Entity  |
| 500  | Internal Server Error |
| 502  | Bad Gateway           |
| 503  | Service Unavailable   |
| 504  | Gateway Timeout       |

## Examples

Provide example requests and responses for clarity.

### Example GET Request

```http
GET /endpoint?param1=value1 HTTP/1.1
Host: api.example.com
Authorization: Bearer YOUR_TOKEN
```

### Example Response

```json
{
  "data": "value",
  "status": "success"
}
```

## Rate Limiting

Explain any rate limiting policies that apply to the API.

## Contact

Provide contact information for support or inquiries.

- Email: contact.yourwebdev@gmail.com
- Documentation: [Link to Documentation](/README.md)
