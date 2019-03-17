import React from 'react';
import './LoadingIcon.css';

type LoadingIconProps = any;

export const LoadingIcon: React.SFC<LoadingIconProps> = props => {
    return (
        <div className="LoadingIcon">
            <div className="b b1"></div>
            <div className="b b2"></div>
            <div className="b b3"></div>
            <div className="b b4"></div>
        </div>
    )
}