import React from "react";
import classnames from "classnames/bind";
import styles from "./style.module.scss";
import PropTypes from "prop-types";

// router
import { Link } from "react-router-dom";

RoomCard.propTypes = {
  info: PropTypes.object,
};

const cx = classnames.bind(styles);

export default function RoomCard({ info }) {
  return (
    <div className={cx("room-card")}>
      <Link to={`/hotel-booking/${info.id}`}>
        <div className={cx("room-photo")}>
          <img src={info.imageUrl} alt="preview" />
        </div>
        <div className={cx("room-info")}>
          <span className={cx("room-name")}>{info.name}</span>
          <div className={cx("price-info")}>
            <span>
              NT.{info.normalDayPrice} <span>平日</span>
            </span>
            <span>NT.{info.holidayPrice} 假日</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
