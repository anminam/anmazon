import React, { useState } from "react";
import "./Login.scss";
import Logo from "Components/Logo/Logo";
import { useHistory } from "react-router-dom";
import { auth } from "firebaseAnmazon";
import { FirebaseError } from "firebase";
import { useDispatch } from "react-redux";
import { setUser } from "core/data/actions";

const Login = () => {
  // const list = useSelector((state: RootState) => state.data.baskets);
  //  baskets
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // 로그인
  const handleSignInSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          const user = auth.user;
          if (user) {
            dispatch(setUser(user));
            history.push("/");
          }
        }
        console.log(auth);
      })
      .catch((error: FirebaseError) => {
        alert(error.message);
      });
  };

  const handleRegister = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
        console.log(auth);
      })
      .catch((error: FirebaseError) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <Logo />

      <div className="login__container">
        <h1>Sign-in</h1>
        <form onSubmit={handleSignInSubmit}>
          <label htmlFor="login-email">E-mail</label>
          <input
            type="text"
            id="login-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="login-email">Password</label>
          <input
            type="password"
            id="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign In</button>
        </form>
        <p>By signing-in agree to the ANMAZON FAKE of us sales</p>
      </div>

      <div className="login__buttom">
        <div className="login__buttom__label">
          <p>New to Amazon?</p>
        </div>
        <button className="login__register" onClick={handleRegister}>
          Create Your Anmazon account
        </button>
      </div>
      {/* <div className="divider"></div> */}
    </div>
  );
};

export default Login;
