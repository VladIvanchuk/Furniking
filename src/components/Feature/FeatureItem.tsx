import s from "./Feature.module.scss";

interface IFeatureItem {
  img: string;
  name: string;
  dsc: string;
}

function FeatureItem({ img, name, dsc }: IFeatureItem) {
  return (
    <div className={s.item}>
      <img src={img} alt="" />
      <div className={s.text}>
        <h3>{name}</h3>
        <span>{dsc}</span>
      </div>
    </div>
  );
}

export default FeatureItem;
