import { useState } from "react";
import s from "./Cart.module.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Button } from "@mui/material";

const CartItem = () => {
  const [count, setCount] = useState(1);

  return (
    <div className={s.drawer_item}>
      <div className={s.img}></div>
      <div className={s.info}>
        <div className={s.left}>
          <div className={s.goods_title}>Minimal LCD chair</div>
          <div className={s.qty_box}>
            <Button onClick={() => count > 0 && setCount(count - 1)}>
              <RemoveIcon />
            </Button>
            <span className={s.qty}>{count}</span>
            <Button onClick={() => setCount(count + 1)}>
              <AddIcon />
            </Button>
          </div>
        </div>
        <div className={s.right}>
          <div className={s.price}>
            <div className={s.current}>$1004.25</div>
            <div className={s.sale}>$1234.25</div>
          </div>
          <Button className={s.remove}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
