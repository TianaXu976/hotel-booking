import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.module.scss';

import { ReactComponent as Logo } from '../../img/logo_white.svg';
import Contact from './Contact';
import RoomCard from './RoomCard';
import roomInfo from './RoomCard/roomInfo';

const cx = classnames.bind(styles);

export default function RoomList() {
    return(
        <div className={cx('container')}>
            <div className={cx('banner')} >       
                <Logo className={cx('logo')} />
                <Contact />
            </div>
            <div className={cx('room-cards')}>
                {
                  roomInfo.map((item) => (
                    <RoomCard info={item}/>
                  ))  
                }
            </div>
        </div>
    )
}
