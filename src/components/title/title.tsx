import React from 'react';
import { LoadingIcon } from '../LoadingIcon/LoadingIcon';
import '../../App.css';

type TitleProps = any;

export const Title: React.SFC<TitleProps> = props => {
	return(
		<div className="Container">
			<img className="Logo" src={require('../../assets/logoNew.png')} alt="Logo"/>
			<LoadingIcon/>
		</div>
	)
}
