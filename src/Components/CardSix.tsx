import React from "react";

type CardSixProp = {
  text_one: string;
  text_two: string;
};

const CardSix: React.FC<CardSixProp> = ({text_one, text_two}) => {
  return (
    <div className="card_six overflow-hidden">
      <div className="card_six_head">
        <h1 className="six_h1">{text_one}</h1>
        <p>{text_two}</p>
      </div>
    </div>
  );
};

export default CardSix;
