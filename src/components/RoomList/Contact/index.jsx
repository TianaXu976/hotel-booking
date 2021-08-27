import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.module.scss';

// components
import { ReactComponent as Ig } from '../../../img/instagram-brands.svg';
import { ReactComponent as Fb } from '../../../img/facebook-square-brands.svg';
import { ReactComponent as Phone } from '../../../img/phone-alt-solid.svg';
import { ReactComponent as Email } from '../../../img/envelope-solid.svg';
import { ReactComponent as Adress } from '../../../img/home-solid.svg';


const cx = classnames.bind(styles);

export default function Contact() {
    return(
        <div className={cx('contact')}>
            <div className={cx('fanpage')}>
                <Ig className={cx('brand')} />
                <Fb className={cx('brand')} />
            </div>
            <div className={cx('contact-wrap')}>
                <div className={cx('contact-info')}>
                    <Phone className={cx('icon')} />
                    <span>02-17264937</span>
                </div>
                <div className={cx('contact-info')}>
                    <Email className={cx('icon')} />
                    <span>whitespace@whitespace.com.tw</span>
                </div>
                <div className={cx('contact-info')}>
                    <Adress className={cx('icon')} />
                    <span>台北市羅斯福路十段30號</span>
                </div>
            </div>
        </div>
    )
}