import React, { Component } from 'react';
import '../css/NewTodoForm.css'

class NewTodoForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            todoName:""
        }
    }
    handleChange = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.addTodo(this.state.todoName)
        this.setState({todoName:""})
    }
    render(){
        return(

                <div className="todoForm" onSubmit={this.handleSubmit}>
                    <form>
                        <label htmlFor="todoName">New Todo: </label>
                        <input type="text" id="todoName" value={this.state.todoName} name="todoName" onChange={this.handleChange}/>
                        <button>ADD TODO</button>
                    </form>
                </div>
        )
    }
}

export default NewTodoForm;