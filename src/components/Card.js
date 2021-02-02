import React, { Component } from 'react'
import circlesImg from '../images/circles.png'
import EmptyImg from '../images/emptyImg.png'
import ExerciseNewContainer from '../pages/ExerciseNewContainer'
import './style/Card.css'


class Card extends Component{
    handleClick = (e) => {
        // this.props.history.push('/exercises/new')
        console.log('clicked')
    }

    render(){
        const {leftColor, rightColor, img, title, description} = this.props;
        return (
            <div className="card mx-auto Fitness-Card" onClick={this.handleClick}
                style={{
                    backgroundImage:`
                    url(${circlesImg}), 
                    linear-gradient(to right, ${leftColor || '#56CCF2'}, ${rightColor || '#2F80ED'})`
                }}
            >
                <div className="card-body">
                    <div className="row center"> 
                        <div className="col-6">
                            <img src={img || EmptyImg} className="float-right"/>
                        </div> 
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;