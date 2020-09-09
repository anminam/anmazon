import React from "react";
import "./Login.scss";
import Logo from "Components/Logo/Logo";

const Login = () => {
  // const list = useSelector((state: RootState) => state.data.baskets);
  //  baskets
  return (
    <div className="login">
      <Logo />

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <label htmlFor="login-email">E-mail</label>
          <input type="text" id="login-email" />
          <label htmlFor="login-email">Password</label>
          <input type="password" id="login-password" />
          <button>Sign In</button>
        </form>
        <p>By signing-in agree to the ANMAZON FAKE of us sales</p>
      </div>

      <div className="login__footer">
        <div className="login__footer__label">
          <p>New to Amazon?</p>
        </div>
        <button className="login__register">Create Your Anmazon account</button>
      </div>
    </div>
  );
};

export default Login;
