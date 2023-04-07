import s from "./Details.module.scss";
import { useState } from "react";

import VerticalSlider from "../../components/UI/VerticalDetailSlider/VerticalDetailSlider";
import ImgDetailSlider from "../../components/UI/ImgDetailSlider/ImgDetailSlider";
import InterestSlider from "../../components/UI/InterestingDetailSlider/InterestingDetailSlider";

import BuyBtn from "../../components/UI/BuyBtn/BuyBtn";
import AddBtn from "../../components/UI/AddToCartBtn/AddToCartBtn";

const categories = ["About", "Characteristics", "Reviews and questions"];

const Details = () => {
  const [selected, setSelected] = useState(categories[0]);
  return (
    <div className={s.details}>
      <div className={s.detailsHeader}>
        <div className={s.detailsHeader_top}>Minimal iconic chair</div>
        <div className={s.detailsHeader_bottom}>
          <div className={s.bottomLeft}>
            {categories.map((category, i) => (
              <button
                key={i}
                className={selected === category ? s.active : ""}
                onClick={() => setSelected(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className={s.bottomRight}>
            <div className={s.rightTitle}>Users rating:</div>
            <div className={s.rightStars}>
              <span> (36)</span>
              <svg
                width="25"
                height="25"
                viewBox="0 0 21 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.05495 6.0021L7.36232 5.95949L7.50518 5.68404L9.97724 0.917749C10.197 0.494535 10.8637 0.493498 11.0855 0.918182C11.0856 0.918337 11.0857 0.918492 11.0858 0.918647L13.5574 5.68404L13.7002 5.95949L14.0076 6.0021L19.5388 6.76892L19.5392 6.76898C20.0739 6.84273 20.1987 7.4083 19.8836 7.69999L19.8834 7.70016L15.8818 11.4082L15.6407 11.6316L15.6992 11.955L16.6455 17.1927C16.6455 17.1927 16.6456 17.1928 16.6456 17.1928C16.6835 17.4036 16.5943 17.5931 16.4123 17.7176C16.2265 17.8447 15.9764 17.8774 15.7478 17.7631L15.7477 17.763L10.7995 15.2898L10.5313 15.1557L10.263 15.2898L5.31488 17.763L5.31304 17.7639C5.08524 17.8788 4.83624 17.8464 4.65074 17.7193C4.46852 17.5944 4.37904 17.4039 4.41701 17.1928C4.41701 17.1928 4.41701 17.1927 4.41702 17.1927L5.36341 11.955L5.42184 11.6316L5.18078 11.4082L1.17911 7.70016L1.17894 7.69999C0.8639 7.4083 0.988636 6.84273 1.52338 6.76898L1.52379 6.76892L7.05495 6.0021Z"
                  stroke="#7AC751"
                  stroke-width="1.2"
                />
              </svg>
              <svg
                width="25"
                height="25"
                viewBox="0 0 21 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.05495 6.0021L7.36232 5.95949L7.50518 5.68404L9.97724 0.917749C10.197 0.494535 10.8637 0.493498 11.0855 0.918182C11.0856 0.918337 11.0857 0.918492 11.0858 0.918647L13.5574 5.68404L13.7002 5.95949L14.0076 6.0021L19.5388 6.76892L19.5392 6.76898C20.0739 6.84273 20.1987 7.4083 19.8836 7.69999L19.8834 7.70016L15.8818 11.4082L15.6407 11.6316L15.6992 11.955L16.6455 17.1927C16.6455 17.1927 16.6456 17.1928 16.6456 17.1928C16.6835 17.4036 16.5943 17.5931 16.4123 17.7176C16.2265 17.8447 15.9764 17.8774 15.7478 17.7631L15.7477 17.763L10.7995 15.2898L10.5313 15.1557L10.263 15.2898L5.31488 17.763L5.31304 17.7639C5.08524 17.8788 4.83624 17.8464 4.65074 17.7193C4.46852 17.5944 4.37904 17.4039 4.41701 17.1928C4.41701 17.1928 4.41701 17.1927 4.41702 17.1927L5.36341 11.955L5.42184 11.6316L5.18078 11.4082L1.17911 7.70016L1.17894 7.69999C0.8639 7.4083 0.988636 6.84273 1.52338 6.76898L1.52379 6.76892L7.05495 6.0021Z"
                  stroke="#7AC751"
                  stroke-width="1.2"
                />
              </svg>
              <svg
                width="25"
                height="25"
                viewBox="0 0 21 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.05495 6.0021L7.36232 5.95949L7.50518 5.68404L9.97724 0.917749C10.197 0.494535 10.8637 0.493498 11.0855 0.918182C11.0856 0.918337 11.0857 0.918492 11.0858 0.918647L13.5574 5.68404L13.7002 5.95949L14.0076 6.0021L19.5388 6.76892L19.5392 6.76898C20.0739 6.84273 20.1987 7.4083 19.8836 7.69999L19.8834 7.70016L15.8818 11.4082L15.6407 11.6316L15.6992 11.955L16.6455 17.1927C16.6455 17.1927 16.6456 17.1928 16.6456 17.1928C16.6835 17.4036 16.5943 17.5931 16.4123 17.7176C16.2265 17.8447 15.9764 17.8774 15.7478 17.7631L15.7477 17.763L10.7995 15.2898L10.5313 15.1557L10.263 15.2898L5.31488 17.763L5.31304 17.7639C5.08524 17.8788 4.83624 17.8464 4.65074 17.7193C4.46852 17.5944 4.37904 17.4039 4.41701 17.1928C4.41701 17.1928 4.41701 17.1927 4.41702 17.1927L5.36341 11.955L5.42184 11.6316L5.18078 11.4082L1.17911 7.70016L1.17894 7.69999C0.8639 7.4083 0.988636 6.84273 1.52338 6.76898L1.52379 6.76892L7.05495 6.0021Z"
                  stroke="#7AC751"
                  stroke-width="1.2"
                />
              </svg>
              <svg
                width="25"
                height="25"
                viewBox="0 0 21 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.05495 6.0021L7.36232 5.95949L7.50518 5.68404L9.97724 0.917749C10.197 0.494535 10.8637 0.493498 11.0855 0.918182C11.0856 0.918337 11.0857 0.918492 11.0858 0.918647L13.5574 5.68404L13.7002 5.95949L14.0076 6.0021L19.5388 6.76892L19.5392 6.76898C20.0739 6.84273 20.1987 7.4083 19.8836 7.69999L19.8834 7.70016L15.8818 11.4082L15.6407 11.6316L15.6992 11.955L16.6455 17.1927C16.6455 17.1927 16.6456 17.1928 16.6456 17.1928C16.6835 17.4036 16.5943 17.5931 16.4123 17.7176C16.2265 17.8447 15.9764 17.8774 15.7478 17.7631L15.7477 17.763L10.7995 15.2898L10.5313 15.1557L10.263 15.2898L5.31488 17.763L5.31304 17.7639C5.08524 17.8788 4.83624 17.8464 4.65074 17.7193C4.46852 17.5944 4.37904 17.4039 4.41701 17.1928C4.41701 17.1928 4.41701 17.1927 4.41702 17.1927L5.36341 11.955L5.42184 11.6316L5.18078 11.4082L1.17911 7.70016L1.17894 7.69999C0.8639 7.4083 0.988636 6.84273 1.52338 6.76898L1.52379 6.76892L7.05495 6.0021Z"
                  stroke="#7AC751"
                  stroke-width="1.2"
                />
              </svg>
              <svg
                width="25"
                height="25"
                viewBox="0 0 21 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.05495 6.0021L7.36232 5.95949L7.50518 5.68404L9.97724 0.917749C10.197 0.494535 10.8637 0.493498 11.0855 0.918182C11.0856 0.918337 11.0857 0.918492 11.0858 0.918647L13.5574 5.68404L13.7002 5.95949L14.0076 6.0021L19.5388 6.76892L19.5392 6.76898C20.0739 6.84273 20.1987 7.4083 19.8836 7.69999L19.8834 7.70016L15.8818 11.4082L15.6407 11.6316L15.6992 11.955L16.6455 17.1927C16.6455 17.1927 16.6456 17.1928 16.6456 17.1928C16.6835 17.4036 16.5943 17.5931 16.4123 17.7176C16.2265 17.8447 15.9764 17.8774 15.7478 17.7631L15.7477 17.763L10.7995 15.2898L10.5313 15.1557L10.263 15.2898L5.31488 17.763L5.31304 17.7639C5.08524 17.8788 4.83624 17.8464 4.65074 17.7193C4.46852 17.5944 4.37904 17.4039 4.41701 17.1928C4.41701 17.1928 4.41701 17.1927 4.41702 17.1927L5.36341 11.955L5.42184 11.6316L5.18078 11.4082L1.17911 7.70016L1.17894 7.69999C0.8639 7.4083 0.988636 6.84273 1.52338 6.76898L1.52379 6.76892L7.05495 6.0021Z"
                  stroke="#7AC751"
                  stroke-width="1.2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className={s.detailsInfo}>
        <div className={s.detailsInfo_top}>
          <div className={s.topLeft}>
            <VerticalSlider />
            <ImgDetailSlider />
          </div>
          <div className={s.topRight}>
            <div className={s.rightSell}>
              <div className={s.sellInfo}>
                <span className={s.oldPrice}>$250</span>
                <span className={s.newPrice}>$180</span>
                <span className={s.isInStock}>Product in stock</span>
              </div>
              <div className={s.sellBtn}>
                <AddBtn />
                <BuyBtn />
              </div>
            </div>
            <div className={s.sellGarantee}>
              <div className={s.like}>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.4245 21.7535L4.18364 13.503C3.09071 12.4089 2.47665 10.925 2.47656 9.37763C2.47647 7.83028 3.09035 6.34626 4.18315 5.25205C5.27595 4.15783 6.75816 3.54306 8.30371 3.54297C9.84925 3.54288 11.3315 4.15748 12.4245 5.25156C13.5179 4.15871 14.9998 3.54492 16.5449 3.54492C18.0899 3.54492 19.5718 4.15871 20.6653 5.25156C21.7564 6.34655 22.3691 7.8301 22.3691 9.3768C22.3691 10.9235 21.7564 12.4071 20.6653 13.502L12.4245 21.7535ZM8.30357 5.48784C7.53513 5.48781 6.78394 5.71595 6.14502 6.14338C5.50609 6.57082 5.00814 7.17836 4.71413 7.88916C4.42012 8.59996 4.34326 9.38209 4.49329 10.1366C4.64331 10.8912 5.01347 11.5842 5.55695 12.1281L12.4245 19.0037L19.292 12.1281C19.6864 11.742 19.9942 11.2762 20.1949 10.7617C20.3955 10.2472 20.4844 9.69587 20.4557 9.14431C20.4269 8.59276 20.2812 8.05366 20.0281 7.56289C19.7751 7.07212 19.4205 6.64093 18.988 6.29803C18.5556 5.95512 18.0551 5.70836 17.52 5.57416C16.9849 5.43996 16.4273 5.4214 15.8845 5.51972C15.3416 5.61804 14.8259 5.83098 14.3717 6.14437C13.9174 6.45776 13.5351 6.86442 13.25 7.33727L12.4245 8.67135L11.5989 7.33727C11.2581 6.76847 10.7748 6.29875 10.1967 5.97468C9.61866 5.6506 8.96604 5.48345 8.30357 5.48979V5.48784Z" />
                </svg>

                <span>Add to favorite</span>
              </div>
              <div className={s.row}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 16H9M19 16H22V12.85C22.0007 12.6121 21.9165 12.3816 21.7625 12.2002C21.6085 12.0187 21.3949 11.8981 21.16 11.86L16 11L13.3 7.40005C13.2069 7.27585 13.0861 7.17505 12.9472 7.10562C12.8084 7.03619 12.6552 7.00005 12.5 7.00005H5.24C4.86727 6.99745 4.50123 7.09907 4.18318 7.29344C3.86513 7.4878 3.60772 7.76718 3.44 8.10005L2.64 9.73005C2.22015 10.5647 2.00099 11.4858 2 12.42V16H4"
                    stroke="#7AC751"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.5 19C7.88071 19 9 17.8807 9 16.5C9 15.1193 7.88071 14 6.5 14C5.11929 14 4 15.1193 4 16.5C4 17.8807 5.11929 19 6.5 19Z"
                    stroke="#7AC751"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 19C17.8807 19 19 17.8807 19 16.5C19 15.1193 17.8807 14 16.5 14C15.1193 14 14 15.1193 14 16.5C14 17.8807 15.1193 19 16.5 19Z"
                    stroke="#7AC751"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Free Shipping to your city.</span>
              </div>
              <div className={s.row}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 12V8H6C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 4.9 4.9 4 6 4H18V8"
                    stroke="#7AC751"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 6V18C4 19.1 4.9 20 6 20H20V16"
                    stroke="#7AC751"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18 12C17.4696 12 16.9609 12.2107 16.5858 12.5858C16.2107 12.9609 16 13.4696 16 14C16 15.1 16.9 16 18 16H22V12H18Z"
                    stroke="#7AC751"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span>
                  Payment upon receipt of goods, Cashless for legal entities and
                  individuals
                </span>
              </div>
              <div className={s.row}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
                    stroke="#7AC751"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="#7AC751"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>
                  Guarantee. The Law on the Protection of Consumer Rights does
                  not provide for the return of this good quality product.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.detailsDesc}>
        <h3>Description</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et leo
          efficitur, commodo tortor sit amet, suscipit dui. Proin at mi quis
          mauris luctus mollis. Aliquam dictum quam et lectus mattis vulputate.
          Duis quis orci imperdiet, bibendum urna nec, convallis neque.
          Vestibulum non nisi nec leo vestibulum dignissim. Fusce euismod
          fringilla magna, ut tincidunt ex pretium eu. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed
          nisi elit, cursus in fringilla dignissim, tempor sit amet dui. Mauris
          blandit dui interdum, pulvinar metus non, convallis lectus. Praesent
          feugiat vitae leo non tempus.
        </p>
      </div>
      <div className={s.detailsInteresting}>
        <h3>You may also be interested in</h3>
        <InterestSlider />
      </div>
    </div>
  );
};

export default Details;
