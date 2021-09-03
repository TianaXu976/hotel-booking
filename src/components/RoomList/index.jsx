import React, { useState, useEffect } from "react";
import classnames from "classnames/bind";
import styles from "./style.module.scss";

// api
import { getRooms } from "../../api";
import useApi from "../../api/useApi";

// components
import Loading from "../base/Loading";
import { ReactComponent as Logo } from "../../img/logo_white.svg";
import room1 from "../../img/room_4-2.jpeg";
import room2 from "../../img/room_5-1.jpeg";
import room3 from "../../img/room_5-3.jpeg";
import Contact from "./Contact";
import RoomCard from "./RoomCard";
import BannerCrossFade from "./BannerCrossFade";

const cx = classnames.bind(styles);
const bannerList = [room1, room2, room3];

export default function RoomList() {
  const [roomList, setRoomList] = useState([]);
  const { getApiResult } = useApi(getRooms);

  useEffect(() => {
    getApiResult().then((response) => {
      if (response) {
        setRoomList(response.data.items);
      }
    });
  }, [getApiResult]);

  return (
    <div className={cx("container")}>
      <div className={cx("banner")}>
        <BannerCrossFade bannerList={bannerList} />
        <Logo className={cx("logo")} title="logo" />
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
