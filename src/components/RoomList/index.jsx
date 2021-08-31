import React, { useState, useEffect } from "react";
import classnames from "classnames/bind";
import styles from "./style.module.scss";

// api
import { getRooms } from "../../api";
import useApi from "../../api/useApi";

// components
import Loading from "../base/Loading";
import { ReactComponent as Logo } from "../../img/logo_white.svg";
import Contact from "./Contact";
import RoomCard from "./RoomCard";

const cx = classnames.bind(styles);
const bannerList = ["room_4-2", "room_5-1", "room_5-3"];

export default function RoomList() {
  const [bannerImg, setBannerImg] = useState(bannerList[0]);
  const [roomList, setRoomList] = useState([]);
  const { getApiResult } = useApi(getRooms);

  useEffect(() => {
    const timeId = setInterval(() => {
      bannerList.push(bannerList.shift());
      setBannerImg(bannerList[0]);
    }, 4000);
    console.log(timeId);
    return () => {
      clearInterval(timeId);
    };
  }, []);

  useEffect(() => {
    getApiResult().then((response) => {
      if (response) {
        setRoomList(response.data.items);
      }
    });
  }, [getApiResult]);

  return (
    <div className={cx("container")}>
      <div
        className={cx("banner")}
        style={{
          background: `url(${require(`../../img/${bannerImg}.jpeg`)}) no-repeat center center /cover`,
        }}
      >
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
