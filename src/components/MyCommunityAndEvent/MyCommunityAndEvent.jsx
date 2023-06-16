import { useNavigate } from "react-router-dom";
import "./MyCommunityAndEvent.scss";

import myCommunityEvent from "../../assests/MyCommunityEvent.png";

function MyCommunityAndEvent() {
  const navigate = useNavigate();
  const handleClick = (route) => {
    console.log("Clicked!!!");
    navigate(route);
  };
  return (
    <div className="section">
      <img
        onClick={() => handleClick("/")}
        className="section-list-item-img"
        src={myCommunityEvent}
        alt="image1"
      />
    </div>
  );
}

export default MyCommunityAndEvent;
