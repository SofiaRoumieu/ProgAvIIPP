import React from 'react';
import '../styles/Card.css';
import { Link } from "react-router-dom";
import pokebola from '../assets/images/pokebola.png';

const Card = ({item}) => {
    const {id, nombre, imagen} = item;

    return ( 
        <div className='card'>
            <div className='img-card'>
                <img src={pokebola} alt={`Pokebola`} ></img>
            </div>
            
            <Link className='card-title' to={`/detalle/${nombre}`} >¿ ?</Link>
        </div>
    );
}

export default Card;