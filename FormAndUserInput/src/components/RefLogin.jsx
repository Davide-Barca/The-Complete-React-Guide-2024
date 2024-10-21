import { useRef } from "react";

/**
 * MANAGE A FORM INPUTS WITH REF
 */

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit() {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            ref={emailRef}
            id="email"
            type="text"
            name="email"
            autoComplete="username"
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            ref={passwordRef}
            id="password"
            type="password"
            name="password"
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
