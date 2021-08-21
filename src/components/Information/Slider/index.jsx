import React from "react";
import styles from "./style.module.scss";
import classnames from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";
import "./swiper.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Pagination, Navigation, Autoplay]);

const cx = classnames.bind(styles);

export default function Slider({ img }) {
  return (
    <div className={cx("slider")}>
      <Swiper
        speed={500}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
        {img.map((element, index) => (
          <SwiperSlide key={index}>
            <div
              className={cx("img-detail")}
              style={{ backgroundImage: `url(${element})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
