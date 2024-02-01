import React from 'react';

import {resetStyles} from '../styles/reset.css'
import {fontStyles} from '../styles/fonts.css'
import {Styles} from '../styles/style.css'

export const Notfoundpage = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>404 - Not Found</h1>
            <p style={styles.text}>Sorry, the page you are looking for might not exist.</p>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: "center",
        width:'100vw',
        height: '100vh',
        background: 'rgb(10, 10, 10)',
        color: 'rgba(255, 255, 255, 0.6)',
        textAlign: 'center',
        borderRadius: '8px',
    },
    heading: {
        color: 'rgb(189, 254, 0)',
    },
    text: {
        fontSize: '16px',
    },
};