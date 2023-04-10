import s from "./AuthPopup.module.scss";
import React from "react";

type Props = {
  setState: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthPopup = ({setState}: Props) => {
  const handleState = () => {
    setState(false);
  }

  return (
    <section className={s.popup} onClick={handleState}>
      <form className={s.popup__window} onClick={(e) => (e.stopPropagation())}>
        <h1 className={s.popup__title}>
          Sign in
        </h1>

        <p className={s.popup__subtitle}>
          Sign in and start managing your candidates!
        </p>

        <input
          type="text"
          className={s.popup__input}
          required
          placeholder={"Login"}
        />
        <input
          type="password"
          className={s.popup__input}
          required
          placeholder={"Password"}
        />

        <div className={s.popup__help}>
          <div className={s.popup__label}>
            <label htmlFor="remember" className={s.popup__checkbox}>
              <input
                id="remember"
                type="checkbox"
                className={s.popup__remember}
              />
            </label>
            Remember me
          </div>

          <a href="/" className={s.popup__forgot}>
            Forgot password ?
          </a>
        </div>

        <button type={"submit"} className={s.popup__btn}>
          Login
        </button>
      </form>
    </section>
  );
};

export default AuthPopup;
