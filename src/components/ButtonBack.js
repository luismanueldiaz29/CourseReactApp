import React from 'react'
import ButtonImg from '../images/backImg.jpg'
import './style/ButtonAdd.css'
import { Link } from "react-router-dom";

const ButtonAdd = (props) =>(
    <div className="button">
        <Link to="/exercises">
            <img src={ButtonImg} width="180"/>
        </Link>
    </div>
)

export default ButtonAdd;