import s from "./Button.module.scss";

const Button = ({ text, primary = false }: { text: string; primary?: boolean }) => {
  return <button className={`${s.button} ${primary && s.primary}`}>{text}</button>;
};

export default Button;
