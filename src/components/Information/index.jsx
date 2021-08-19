import React, { useState, useEffect } from "react";
import classnames from "classnames/bind";
import styles from "./style.module.scss";
import { getInfomation } from "../../api";
import { ReactComponent as Logo } from "../../img/logo_block.svg";
import Amenity from "./Amenity";
import Loading from "../Loading"

const cx = classnames.bind(styles);

export default function Information() {
  const [info, setInfo] = useState();
  useEffect(() => {
    try {
      getInfomation(
        "3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu"
      ).then((response) => setInfo(response.data.room[0]));
    } catch (error) {
      console.error(error);
    }
  }, []);


  if (!info) {
    return (
      <div className={cx("loading")}>
        <Loading />
      </div>
    );
  }

  return (
    <div className={cx("container")}>
      <div className={cx("room-photo")}>
        <div
          className={cx("colunm_1")}
          style={{ backgroundImage: `url(${info.imageUrl[2]})` }}
        >
          <Logo className={cx("logo")} />
        </div>
        <div className={cx("colunm_2")}>
          <div style={{ backgroundImage: `url(${info.imageUrl[0]})` }} />
          <div style={{ backgroundImage: `url(${info.imageUrl[1]})` }} />
        </div>
      </div>
      <div className={cx("room-info")}>
        <div className={cx("detail")}>
          <span className={cx("name")}>{info.name}</span>
          <div className={cx("description-short")}>
            房客人數限制：{info.descriptionShort["GuestMin"]} -
            {info.descriptionShort["GuestMax"]} 人<br />
            床型：{info.descriptionShort["Bed"]}
            <br />
            衛浴數量：{info.descriptionShort["Private-Bath"]} 間<br />
            房間大小：{info.descriptionShort["Footage"]} 平方公尺
          </div>
          <div className={cx("description")}>{info.description}</div>
          <div className={cx("divider")}>
            <div />
            <div />
            <div />
          </div>
          <div className={cx("checkInAndOut")}>
            <div>
              <span>Check In</span>
              <span>
                {info.checkInAndOut["checkInEarly"]} -{" "}
                {info.checkInAndOut["checkInLate"]}
              </span>
            </div>
            <div>
              <span>Check Out</span>
              <span>{info.checkInAndOut["checkOut"]} </span>
            </div>
          </div>
          <Amenity amenitiesState={info.amenities}/>
        </div>
      </div>
    </div>
  );
}
