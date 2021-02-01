import React from 'react'
import './style/Wellcome.css'

const Wellcome = ({username}) =>(
    <div className="info">
        <h3>Wellcome {username}!</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, labore facere repellat</p>
    </div>
)

export default Wellcome;