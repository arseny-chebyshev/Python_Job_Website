import "./card.css";
import { Button } from "../button/button";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
const Card = ({ role, salary, mode, location, technology }) => {
  const [showButton, setshowButton] = useState(false);
  return (
    <div
      className="card"
      onMouseEnter={() => setshowButton(true)}
      onMouseLeave={() => setshowButton(false)}
    >
      <div className="card__role">
        <span className="card__role-title">{role}</span>
      </div>
      <hr className="card__line" />
      <div className="card__info">
        <div className="card__info-salary">{salary}₽</div>
        <div className="card__info-mode">{mode}</div>
        <div className="card__info-location">
          <span className="card__info-location-title">Локация: </span>
          <span className="card__info-location-city">{location}</span>
        </div>
        <div className="card__info-technology">
          <div className="card__info-technology-title">Технологии:</div>
          <ul className="card__info-technology__list">
            {technology.map((el) => (
              <li className="card__info-technology__list-li">{el}</li>
            ))}
          </ul>
        </div>
        <CSSTransition
          in={showButton}
          classNames="alert"
          timeout={500}
          unmountOnExit
        >
          <Button />
        </CSSTransition>
      </div>
    </div>
  );
};
export { Card };
