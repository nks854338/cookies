# 🍪 Cookie Handling and JSON Response Codes in Express.js with React Frontend

This project demonstrates how to handle cookies, send JSON responses with different HTTP status codes in an Express.js backend, and interact with these routes via a React frontend. It provides a full-stack solution where the frontend and backend communicate to manage cookies and handle server responses.

## 🌐 Demo

- Frontend Link: [Click here](https://cookies-zuip.vercel.app/) 
- Backend Link: [Click here](https://cookies-backend-nu.vercel.app/) 
- Frontend Repository Link: [Click here](https://github.com/nks854338/cookies) 
- Backend Repository Link: [Click here](https://github.com/nks854338/cookiesBackend) 

## ✨ Features

### Backend (Express.js)
- **Cookie Handling**: Set and retrieve cookies from client requests.
- **JSON Responses**: Send JSON responses with different HTTP status codes (200, 201, 400, 404, 500).
- **Status Codes**: Example routes to demonstrate how various status codes are handled on the backend.

### Frontend (React.js)
- **Cookie Management**: Trigger the backend to set and retrieve cookies.
- **Response Handling**: Display server responses, including different HTTP status codes and JSON data.
- **User Interaction**: Simple UI to interact with the backend for cookie operations and status code demonstrations.

---

## 🚀 Technologies

- **Backend**: Node.js, Express.js, Cookie-Parser
- **Frontend**: React.js, Axios
- **Other**: JavaScript (ES6+), HTML, CSS

---

## 🎨 Frontend

### React Components
- **HomePage**: Trigger actions like setting and retrieving cookies, as well as making requests to the status code routes.
- **CookieHandler**: Displays the cookie data from the server.
- **StatusCodeHandler**: Displays JSON responses with the respective status codes.

### Axios Services
- **cookieService.js**: Handles requests for setting and retrieving cookies.
- **statusService.js**: Handles requests for different status codes.
