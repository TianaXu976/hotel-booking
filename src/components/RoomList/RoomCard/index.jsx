import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.module.scss';
import PropTypes from 'prop-types';

RoomCard.propTypes = {
    info: PropTypes.object
}

const cx = classnames.bind(styles);

export default function RoomCard(props) {
    const { info } = props;
    return(
        <div className={cx('room-card')}>
            <img src={require('../../../img/room_1-3.jpeg')} alt="preview"/>
            {info.type}

        </div>
    )
}