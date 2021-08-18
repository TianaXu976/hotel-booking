import React, { useState, useEffect } from "react";
import classnames from "classnames/bind";
import styles from "./style.module.scss";

import { ReactComponent as Logo } from "../../img/logo_white.svg";
import Contact from "./Contact";
import RoomCard from "./RoomCard";
import roomInfo from "./RoomCard/roomInfo";

const cx = classnames.bind(styles);
const bannerList = ["room_4-2", "room_5-1", "room_5-3"];

export default function RoomList() {
  const [bannerImg, setBannerImg] = useState(bannerList[0]);

  useEffect(() => {
    const timeId = setInterval(() => {
      bannerList.push(bannerList.shift());
      setBannerImg(bannerList[0]);
    }, 4000);
		return () => {
			clearInterval(timeId);
		}
			
  }, []);

  return (
    <div className={cx("container")}>
      <div
        className={cx("banner")}
        style={{
          background: `url(${require(`../../img/${bannerImg}.jpeg`)}) no-repeat center center /cover`,
        }}
      >
        <Logo className={cx("logo")} />
        <Contact />
      </div>
      <div className={cx("room-cards")}>
        {roomInfo.map((item) => (
          <RoomCard info={item} />
        ))}
      </div>
    </div>
  );
}
