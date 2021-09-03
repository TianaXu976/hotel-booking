import React, { useState, useEffect } from "react";
import classnames from "classnames/bind";
import styles from "./style.module.scss";

const cx = classnames.bind(styles);

export default function BannerCrossFade({ bannerList }) {
  const [hidden, setHidden] = useState(false);
  const [index, setIndex] = useState({
    top: 0,
    bottom: 0,
  });

  useEffect(() => {
    const timeId = setTimeout(() => {
      if (hidden === true) {
        setHidden(false);
        setIndex({
          ...index,
          top: index.bottom === bannerList.length - 1 ? 0 : index.bottom + 1,
        });
      } else {
        setHidden(true);
        setIndex({
          ...index,
          bottom: index.top === bannerList.length - 1 ? 0 : index.top + 1,
        });
      }
    }, 4000);
    return () => {
      clearInterval(timeId);
    };
  }, [hidden, index, bannerList]);

  return (
    <div className={cx("banner-img")}>
      <img
        src={bannerList[index.top]}
        alt="banner"
        className={cx("top", { hidden: hidden })}
      />
      <img src={bannerList[index.bottom]} alt="banner" />
    </div>
  );
}
