import React, { useState, useEffect } from "react";
import classnames from "classnames/bind";
import styles from "./style.module.scss";
import { getInfomation } from "../../api";
import { ReactComponent as Logo } from "../../img/logo_block.svg";
import Amenity from "./Amenity";
import Loading from "../Loading";
import Slider from "./Slider";
import DatePicker from "./DatePicker";
import { useHistory } from "react-router-dom";

const cx = classnames.bind(styles);

export default function Information() {
  const [info, setInfo] = useState();

  const history = useHistory();

  useEffect(() => {
    try {
      getInfomation(history.location.pathname).then((response) =>
        setInfo(response.data.room[0])
      );
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
        <Slider img={info.imageUrl} />
        <div className={cx("logo")} onClick={() => history.push("/")}>
          <Logo />
        </div>
      </div>

      <div className={cx("room-info")}>
        <div className={cx("detail")}>
          <h1 className={cx("name")}>{info.name}</h1>
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
          <Amenity amenitiesState={info.amenities} />
        </div>
        <div className={cx("room-price")}>
          {/* <div className={cx("normal-day")}> */}
          <span className={cx("normal-day")}>NT.{info.normalDayPrice}</span>
          <span>平日(一～四)</span>

          {/* <div className={cx("holiday-day")}> */}
          <span className={cx("holiday-day")}>NT.{info.holidayPrice}</span>
          <span>假日(五～日)</span>
        </div>
  
          <DatePicker price={{normalDay:info.normalDayPrice, holiday:info.holidayPrice}}/>

      </div>
    </div>
  );
}
