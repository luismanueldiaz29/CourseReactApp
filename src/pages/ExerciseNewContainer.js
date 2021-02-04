import React, { Component } from 'react'
import ButtonBack from '../components/ButtonBack'
import FatalError from './500'
import ExerciseNew from './ExerciseNew'
import urlApi from '../config'

class ExerciseNewContainer extends Component{

    state = {
        form: {
            title : '',
            description : '',
            img : '',
            leftColor : '',
            rightColor : ''
        },
        loading: false,
        error: null
    }

    handleChange = e =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async (e) =>{
        this.setState({
            loading: true
        })
        e.preventDefault();
        try {
            let config = {
                method : 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify(this.state.form)
            }

            let res = await fetch(`${urlApi}/exercises`, config);
            let json = await res.json();

            this.setState({
                loading: false
            })

            this.props.history.push('/exercises')
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
        console.log(this.state.form)
    }

    render(){
        if(this.state.error)
            return <FatalError/>
        return(
            <React.Fragment>
                <ExerciseNew
                    form={this.state.form}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                />
                <ButtonBack/>
            </React.Fragment>
        )
    }
}

export default ExerciseNewContainer;