import { useNavigate } from "react-router-dom";
import "./MyCommunity.scss";
import Button from "../Button/Button";
import myCommunity1 from "../../assests/My_Community_1.png";
import myCommunity2 from "../../assests/My_Community_2.png";
import myCommunity3 from "../../assests/My_Communityt_3.png";

function MyCommunity() {
  const navigate = useNavigate();
  const handleClick = (route) => {
    console.log("Clicked!!!");
    navigate(route);
  };
  return (
    <div className="section">
      <div className="section-title">
        <h2 className="section-title-text">My Community</h2>
      </div>
      <ul className="section-list">
        <li className="section-list-item" onClick={() => handleClick("/")}>
          <div className="section-list-item-img">
            <img
              className="section-list-item-img-file"
              src={myCommunity1}
              alt="image1"
            />
          </div>
          <div className="section-list-item-name">
            <h2 className="section-title-text">Gamers United</h2>
          </div>
          <div className="section-list-item-members">
            <h3 className="section-list-item-members-title">238 members</h3>
          </div>
        </li>
        <li className="section-list-item" onClick={() => handleClick("/")}>
          <div className="section-list-item-img">
            <img
              className="section-list-item-img-file"
              src={myCommunity2}
              alt="image2"
            />
          </div>
          <div className="section-list-item-name">
            <h2 className="section-title-text">GamerSquad</h2>
          </div>
          <div className="section-list-item-members">
            <h3 className="section-list-item-members-title">302 members</h3>
          </div>
        </li>
        <li className="section-list-item" onClick={() => handleClick("/")}>
          <div className="section-list-item-img">
            <img
              className="section-list-item-img-file"
              src={myCommunity3}
              alt="image3"
            />
          </div>
          <div className="section-list-item-name">
            <h2 className="section-title-text">PlayConnect</h2>
          </div>
          <div className="section-list-item-members">
            <h3 className="section-list-item-members-title">471 members</h3>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default MyCommunity;
