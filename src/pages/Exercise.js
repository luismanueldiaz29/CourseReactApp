import React from 'react'
import Wellcome from '../components/Wellcome'
import ExerciseList from '../components/ExerciseList'
import ButtonAdd from "../components/ButtonAdd";
import Loading from '../components/Loading'
import FatalError from './500'
import useFetch from '../hooks/useFetch'
import urlApi from '../config'
// import {data} from '../data.json'

const Exercise = () =>{

    const { data, loading, error } = useFetch(`${urlApi}/exercises`);

    if(loading){
        return <Loading/>
    }
    if(error)
        return <FatalError/>  
    return(
        <React.Fragment>
            <Wellcome
                username="User"
            />
            <ExerciseList
                exercises={data}
            />
            <ButtonAdd/>
        </React.Fragment>
    )
}

// class Exercise extends Component{
//     constructor(props){
//         super()
//         this.state = {
//             data: [],
//             loading: true,
//             error: null
//         }
//     }

//     async componentDidMount(){
//         await this.fetchExercises();
//     }

//     fetchExercises = async () =>{
//         try {
//             const res = await fetch('http://localhost:8000/api/exercises');
//             const data = await res.json();

//             this.setState({
//                 data,
//                 loading: false
//             })   
//         } catch (error) {
//             this.setState({
//                 loading: false,
//                 error 
//             })
//         }
//     }

//     render(){
//         if(this.state.loading){
//             return <Loading/>
//         }
//         if(this.state.error)
//             return <FatalError/>  
//         return(
//             <React.Fragment>
//                 <Wellcome
//                     username="User"
//                 />
//                 <ExerciseList
//                     exercises={this.state.data}
//                 />
//                 <ButtonAdd/>
//             </React.Fragment>
//         )
//     }
// }

export default Exercise;