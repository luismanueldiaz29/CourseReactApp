import React, {Component} from 'react'

class ExerciseForm extends Component{

    state = {}

    handleClick(){
        console.log('Clicked')
    }

    handleSubmit = (e) =>{
        e.preventDefault();
    }

    render(){
        const { onChange, form } = this.props;
        return(
            <div className="container">
                <form
                    onSubmit={this.handleSubmit}
                >
                    <div className="form-group">
                        <label>Title</label>
                        <input 
                            type="text" 
                            name="title" 
                            className="form-control" 
                            placeholder="title"
                            onChange={onChange}
                            value={form.title}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input 
                            type="text" 
                            name="description" 
                            className="form-control" 
                            placeholder="description"
                            onChange={onChange}
                            value={form.description}
                        />
                    </div>
                    <div className="form-group">
                        <label>Img</label>
                        <input 
                            type="text" 
                            name="img" 
                            className="form-control" 
                            placeholder="Url Img"
                            onChange={onChange}
                            value={form.img}
                        />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Left Color</label>
                                <input 
                                    type="text" 
                                    name="leftColor" 
                                    className="form-control" 
                                    placeholder="leftColor"
                                    onChange={onChange}
                                    value={form.leftColor}
                                />
                            </div>                                                      
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Rigth Color</label>
                                <input 
                                    type="text" 
                                    name="rightColor" 
                                    className="form-control" 
                                    placeholder="rightColor"
                                    onChange={onChange}
                                    value={form.rightColor}
                                />
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={this.handleClick}>Button</button>
                </form>
            </div>
        )
    }
}

export default ExerciseForm;