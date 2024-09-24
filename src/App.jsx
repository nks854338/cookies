import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [username, setUsername] = useState("");
  const [cookieResponse, setCookieResponse] = useState("");
  const [statusCode, setStatusCode] = useState(null);
  const [jsonResponse, setJsonResponse] = useState("");
  const [statusCookie, setStatusCookie] = useState("");

  const handleSetCookie = async () => {
    try {
      const response = await axios.post(
        "https://cookies-backend-nu.vercel.app/setCookie",
        { username },
        { withCredentials: true }
      );
      setCookieResponse(response.data.message);
    } catch (error) {
      setCookieResponse("Error setting cookie");
    }
  };

  const handleGetCookie = async () => {
    try {
      const response = await axios.get(
        "https://cookies-backend-nu.vercel.app/getCookie",
        { withCredentials: true }
      );
      setCookieResponse(response.data.username || "No cookie found");
    } catch (error) {
      setCookieResponse(error.response.data.message);
    }
  };

  const handleResponseCode = async (code) => {
    try {
      const response = await axios.get(
        `https://cookies-backend-nu.vercel.app/response/${code}`,
        { withCredentials: true }
      );
      setJsonResponse(response.data.message);
      setStatusCode(code);

      const statusResponse = await axios.get(
        "https://cookies-backend-nu.vercel.app/getCookie",
        { withCredentials: true }
      );
      setStatusCookie(statusResponse.data.username || "No status cookie found");
    } catch (error) {
      setJsonResponse(error.response.data.message);
      setStatusCode(error.response.status);
    }
  };

  return (
    <div>
      <h1>Cookie Handling and JSON Response</h1>
      <div className="mainContainer">
        <div className="container">
          <div className="formContainer">
            <div>
              <h2>Set Cookie</h2>
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="btn">
                <button onClick={handleSetCookie}>Set Cookie</button>
              </div>
            </div>
          </div>

          <div className="formContainer">
            <h2>Get Cookie</h2>
            <div className="cookie">
              <p>{cookieResponse}</p>
            </div>
            <div className="btn">
              <button onClick={handleGetCookie}>Get Cookie</button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="response">Response Code</h2>
          <div className="statusContainer">
            <div className="statusBox">
              <button
                className="status"
                onClick={() => handleResponseCode(200)}
              >
                200
              </button>
              <button
                className="status"
                onClick={() => handleResponseCode(201)}
              >
                201
              </button>
              <button
                className="status"
                onClick={() => handleResponseCode(400)}
              >
                400
              </button>
              <button
                className="status"
                onClick={() => handleResponseCode(404)}
              >
                404
              </button>
              <button
                className="status"
                onClick={() => handleResponseCode(500)}
              >
                500
              </button>
            </div>
          </div>
          <div className="statusBox">
            <p>Status Code: {statusCode}</p>
            <p>Response: {jsonResponse}</p>
            <p>Status Cookie: {statusCookie}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
