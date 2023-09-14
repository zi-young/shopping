'use client'
import React from 'react';
import styles from './MovieSwiper.css';

const MovieSwiper1 = () => {
    return (
        <div className={styles.banner}>
            <img className='banner1__img' src="/img/banner01.jpg" alt="slide" />
            <img className='banner1__img' src="/img/banner02.jpg" alt="slide" />
        </div>

    );
};

export default MovieSwiper1;