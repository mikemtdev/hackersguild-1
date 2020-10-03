import React from "react";
import Hackerthons from "../../assets/images/pngs/hackerthons.png";
import ImageComp from "../../components/Img/image-componet";
import "./learn-more.css";
import BaseButton from "../../components/button/base-button";
import { WHAT_WE_DO } from "../../data/constants";
const SchoolClubsPage = () => {
  const {
    schoolClubs: {
      title,
      discription,
      button: { pageButton },
    },
  } = WHAT_WE_DO;
  return (
    <div className="learn_more__conatiner">
      <div className="learn_more__text">
        <h1>{title} </h1>
        <p>{discription}</p>
        <BaseButton
          btnData={{
            content: pageButton,
            className: "btn__normal",
          }}
        />
      </div>
      <div className="learn_more__image">
        <ImageComp imgSrc={Hackerthons} className={"learn_more__image"} />
      </div>
    </div>
  );
};

export default SchoolClubsPage;