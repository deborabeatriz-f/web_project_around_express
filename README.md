# Tripleten Web Project Around Express - API

This project involves creating a basic API with three main routes to handle users and cards data.
The API will be tested using Postman and will use local JSON files as a temporary database.
Below is a detailed description of the project setup, requirements, and functionalities.

---

## Features

The API includes the following routes:

1. **GET /users**

   - Returns a JSON list of all users.

2. **GET /cards**

   - Returns a JSON list of all cards.

3. **GET /users/:id**

   - Returns the JSON data for a specific user based on the `id` provided in the URL.
   - If the `id` does not exist, the API returns a `404` status with the following JSON:
     ```json
     { "message": "ID do usuário não encontrado" }
     ```

4. **Default 404 Handling**
   - For any request to an undefined route, the API returns a `404` status with the JSON response:
     ```json
     { "message": "A solicitação não foi encontrada" }
     ```

---

## Local Setup

### Prerequisites

- Node.js installed on your machine.
- Postman or a similar tool for testing API endpoints.

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Server

To start the server on `localhost:3000`:

```bash
npm start
```

### Testing

Use Postman or a similar tool to send requests to the API endpoints.

---

## Data Sources

The API uses the following JSON files as data sources:

- **Users**: [users.json](https://practicum-content.s3.us-west-1.amazonaws.com/web-developer/project-12/moved_users.json)
- **Cards**: [cards.json](https://practicum-content.s3.us-west-1.amazonaws.com/web-developer/project-12/moved_cards.json)

These files are read using the `fs` module and the `readFile()` method. The `path` module is used with `join()` to handle file paths reliably across different operating systems.

---

## Error Handling

- **Invalid User ID**:
  - Returns a `404` status and the message: `ID do usuário não encontrado`.
- **Undefined Route**:
  - Returns a `404` status and the message: `A solicitação não foi encontrada`.

---

## Future Enhancements

- Implement database integration to replace JSON files.
- Connect the front-end to the back-end.
