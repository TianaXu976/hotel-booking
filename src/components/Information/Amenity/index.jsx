import React from "react";
import classnames from "classnames/bind";
import styles from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faWifi, faPhone, faMountain, faUtensils, faWind, faSmoking, faCocktail, faArchive, faBaby, faConciergeBell, faCouch, faDog} from "@fortawesome/free-solid-svg-icons";

const cx = classnames.bind(styles);

export default function Amenity(props) {
  const {amenitiesState} = props;
  const amenities = [
    { icon: faWifi, name: "Wi-Fi", state: amenitiesState["Wi-Fi"] },
    { icon: faPhone, name: "電話", state: amenitiesState["Television"] },
    { icon: faMountain, name: "漂亮的視野", state: amenitiesState["Great-View"] },
    { icon: faUtensils, name: "早餐", state: amenitiesState["Breakfast"] },
    { icon: faWind, name: "空調", state: amenitiesState["Air-Conditioner"] },
    { icon: faSmoking, name: "禁止吸煙", state: amenitiesState["Smoke-Free"] },
    { icon: faCocktail, name: "Mini Bar", state: amenitiesState["Mini-Bar"] },
    { icon: faArchive, name: "冰箱", state: amenitiesState["Refrigerator"] },
    { icon: faBaby, name: "適合兒童", state: amenitiesState["Child-Friendly"] },
    { icon: faConciergeBell, name: "Room Service", state: amenitiesState["Room-Service"] },
    { icon: faCouch, name: "沙發", state: amenitiesState["Sofa"] },
    { icon: faDog, name: "寵物攜帶", state: amenitiesState["Pet-Friendly"] },
  ];


  return (
    <div className={cx("amenities")}>
      {amenities.map((element, index) => (
        <div key={index} className={cx('amenity',{active: element.state})}>
          <div className={cx('icon')}><FontAwesomeIcon  icon={element.icon} size="lg"/></div>
          <span>{element.name} </span>
        </div>
      ))}
    </div>
  );
}
