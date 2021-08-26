import React, { useState, useEffect } from "react";
import classnames from "classnames/bind";
import styles from "./style.module.scss";
import { getRooms } from "../../api";

import Loading from "../Loading";

import { ReactComponent as Logo } from "../../img/logo_white.svg";
import Contact from "./Contact";
import RoomCard from "./RoomCard";

const cx = classnames.bind(styles);
const bannerList = ["room_4-2", "room_5-1", "room_5-3"];

export default function RoomList() {
  const [bannerImg, setBannerImg] = useState(bannerList[0]);
  const [roomList, setRoomList] = useState([]);

  useEffect(() => {
    const timeId = setInterval(() => {
      bannerList.push(bannerList.shift());
      setBannerImg(bannerList[0]);
    }, 4000);
    return () => {
      clearInterval(timeId);
    };
  }, []);

  useEffect(() => {
    getRooms()
      .then((response) => setRoomList(response.data.items))
      .catch((error) => console.error(error));
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
      {roomList.length > 0 ? (
        <div className={cx("room-cards")}>
          {roomList.map((item) => (
            <RoomCard key={item.id} info={item} />
          ))}
        </div>
      ) : (
        <div className={cx("loading")}>
          <Loading />
        </div>
      )}
    </div>
  );
}
