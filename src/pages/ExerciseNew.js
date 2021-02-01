import React, { Component } from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'

class ExerciseNew extends Component{

    state = {
        form: {
            title : '',
            description : '',
            img : '',
            leftColor : '',
            rightColor : ''
        }
    }

    handleChange = e =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render(){
        return(
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm">
                        <Card 
                            {...this.state.form}
                        />
                    </div>
                    <div className="col-sm">
                        <ExerciseForm
                            onChange={this.handleChange}
                            form={this.state.form}
                        />
                    </div>
                </div>
                
            </div>
        )
    }
}

export default ExerciseNew;