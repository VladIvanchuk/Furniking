import { Link } from "react-router-dom";
import s from "./Cart.module.scss";

import CloseIcon from "@mui/icons-material/Close";

import { Button, SwipeableDrawer } from "@mui/material";
import CartItem from "./CartItem";

type CartProps = {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<any>>;
};
const Cart = ({ state, setState }: CartProps) => {
  return (
    <SwipeableDrawer
      anchor="right"
      open={state}
      onClose={() => setState(false)}
      onOpen={() => setState(true)}
    >
      <div className={s.drawer}>
        <div className={s.drawer_header}>
          <h2>Cart</h2>
          <Button onClick={() => setState(false)}>
            <CloseIcon />
          </Button>
        </div>
        <div className={s.drawer_body}>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className={s.drawer_footer}>
          <span className={s.checkout}>
            <p>Taxes and shipping calculated at checkout</p> <div>$1254.55</div>
          </span>
          <Link to="" className={s.buy}>
            Checkout
          </Link>
        </div>
      </div>
    </SwipeableDrawer>
  );
};

export default Cart;
