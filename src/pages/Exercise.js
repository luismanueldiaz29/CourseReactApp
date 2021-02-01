import React, { Component } from 'react'
import Wellcome from '../components/Wellcome'
import ExerciseList from '../components/ExerciseList'
import ButtonAdd from "../components/ButtonAdd";
import {data} from '../data.json'

class Exercise extends Component{
    constructor(props){
        super()
        this.state = {
            data: data
        }
    }
    render(){
        return(
            <div>
                <Wellcome
                    username="User"
                />
                <ExerciseList
                    exercises={this.state.data}
                />
                <ButtonAdd/>
            </div>
        )
    }
}

export default Exercise;