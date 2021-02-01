import React from 'react'
import ButtonImg from '../images/add.png'
import './style/ButtonAdd.css'
import { Link } from "react-router-dom";

const ButtonAdd = (props) =>(
    <div className="button">
        <Link to="/exercises/new">
            <img src={ButtonImg}/>
        </Link>
    </div>
)

export default ButtonAdd;