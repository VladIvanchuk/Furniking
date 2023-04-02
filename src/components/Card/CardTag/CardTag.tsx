import s from "../Card.module.scss";

const CardTag = ({ type }: Props) => {
  return <div className={`${s.tag} ${s[type]}`}>{type}</div>;
};

export default CardTag;

interface Props {
  type: "New" | "Sale" | "";
}
