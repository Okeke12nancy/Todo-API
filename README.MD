## Installation

- clone the repository
- install the dependencies: using `npm install`
- create a new file named `.env` in root folder of the project.

- You are adviced to use atlas for the `DATABASE_URL` key but local database url is fine
- start the server in development by running: `npm start` and read the terminal output to make sure that the server is running and the database is connected properly

## The App url

- localhost:3000/api/v1/todos
- NB: Your port above may differ from this port

## Sample request and response

### Creating a new todo

- endpoint: localhost:3000/api/v1/todos
- method: POST
  Sample request

```json
{
  "success": true,
  "message": "Todo created successfully",
  "data": {
    "title": "coding",
    "description": "I will code for 2hours everyday",
    "priority": "high",
    "completed": true,
    "_id": "63ecc5cf037c4e4fc92d14a6",
    "createdAt": "2023-02-15T11:45:19.763Z",
    "updatedAt": "2023-02-15T11:45:19.763Z"
  }
}
```

### Creating another todo

- endpoint: localhost:3000/api/v1/todos
- method: POST
  Sample request

```json
{
  "success": true,
  "message": "Todo created successfully",
  "data": {
    "title": "writing",
    "description": "I will write for 1 article everyday",
    "priority": "high",
    "completed": false,
    "_id": "63ecc75b037c4e4fc92d14a9",
    "createdAt": "2023-02-15T11:51:55.642Z",
    "updatedAt": "2023-02-15T11:51:55.642Z"
  }
}
```

### Find all your Todos

- endpoint: localhost:3000/api/v1/todos
- method: GET
  Sample request
  ```json
  {
    "success": true,
    "message": "Todos found successfully",
    "data": [
      {
        "_id": "63ecc5cf037c4e4fc92d14a6",
        "title": "coding",
        "description": "I will code for 2hours everyday",
        "priority": "high",
        "completed": true,
        "createdAt": "2023-02-15T11:45:19.763Z",
        "updatedAt": "2023-02-15T11:45:19.763Z"
      },
      {
        "_id": "63ecc75b037c4e4fc92d14a9",
        "title": "writing",
        "description": "I will write for 1 article everyday",
        "priority": "high",
        "completed": false,
        "createdAt": "2023-02-15T11:51:55.642Z",
        "updatedAt": "2023-02-15T11:51:55.642Z"
      }
    ]
  }
  ```

### Find your Todos by ID

- endpoint: localhost:3000/api/v1/todos/:id
- method: GET
  Sample request

```json
{
  "success": true,
  "message": "todo found successfully",
  "data": {
    "_id": "63ecc5cf037c4e4fc92d14a6",
    "title": "coding",
    "description": "I will code for 2hours everyday",
    "priority": "high",
    "completed": true,
    "createdAt": "2023-02-15T11:45:19.763Z",
    "updatedAt": "2023-02-15T11:45:19.763Z"
  }
}
```

### Update your Todo

- endpoint: localhost:3000/api/v1/todos/:id
- method: PUT
  Sample request
  ```json
  {
    "success": true,
    "message": "todo updated successfully",
    "data": {
      "_id": "63ecc5cf037c4e4fc92d14a6",
      "title": "write articles",
      "description": "I will write for 1 article today",
      "priority": "high",
      "completed": false,
      "createdAt": "2023-02-15T11:45:19.763Z",
      "updatedAt": "2023-02-15T12:00:36.333Z"
    }
  }
  ```

### Delete your Todo

- endpoint: localhost:3000/api/v1/todos/:id
- method: DELETE
  Sample request

  ```json
  {
    "success": true,
    "message": "todos deleted successfully",
    "data": {
      "_id": "63ecc5cf037c4e4fc92d14a6",
      "title": "write articles",
      "description": "I will write for 1 article today",
      "priority": "high",
      "completed": false,
      "createdAt": "2023-02-15T11:45:19.763Z",
      "updatedAt": "2023-02-15T12:00:36.333Z"
    }
  }
  ```
