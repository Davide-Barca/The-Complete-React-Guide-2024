import { useState } from "react";

/**
 * MANAGE A FORM INPUTS WITH STATE
 */

export default function Login() {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(userInput);
  }

  function handleInputChange(identifier, event) {
    setUserInput((prevValues) => ({
      ...prevValues,
      [identifier]: event.target.value, // target an object key dyamically
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            onChange={(event) => handleInputChange("email", event)}
            value={userInput.email}
            autoComplete="username"
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => handleInputChange("password", event)}
            value={userInput.password}
            autoComplete="current-password"
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
