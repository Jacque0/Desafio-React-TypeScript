import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bar, Title } from './styleHeader';
import arrowback from '../../assets/arrowbackoutline.png'

export default function Header(props: any) {
    const title: string | undefined = props.title
    const backButton: boolean | undefined = props.backButton

    const navigate = useNavigate();

    return (
        <Bar>
            {backButton && <button className='BackIcon' onClick={() => navigate(-1)}>
                <img src={arrowback} alt={"arrow-back"}/>
                </button>}
            <Title>
                {title && title}
            </Title>
        </Bar>
    )
}