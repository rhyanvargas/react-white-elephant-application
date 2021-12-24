import React from "react";

export default function Login() {
  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Password:
          <input type="text" name="Password" />
        </label>
        <input type="submit" value="Sign In" />
      </form>
      <div>
        <p>
          <a href="#">Forgot Password?</a>
        </p>
        <p>
          <a href="#">Don't have an account? Sign up</a>
        </p>
      </div>
    </div>
  );
}
