import React from "react";
import { useHistory } from "react-router-dom";
import "./button.css";

const BaseButton = ({ btnData: { className, content, href, page } }) => {
  console.log("page", page);
  const history = useHistory();
  const Hackerthons = () => {
    history.push("/learn_more");
    history.go("/learn_more");
  };
  return (
    <a href={href}>
      <button onClick={Hackerthons} className={className}>
        {content}
      </button>
    </a>
  );
};

export default BaseButton;
