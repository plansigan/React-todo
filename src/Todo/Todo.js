import React, { Component } from 'react';
import '../css/Todo.css'

class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
            isEditing:false,
            task:this.props.todo.name
        }
    }
    toggleForm = () => {
        this.setState({isEditing: !this.state.isEditing})
    }
    handleDelete = () => {
        this.props.deleteTodo(this.props.todo.id)
    }
    handleUpdate = (evt) => {
        evt.preventDefault()
        //take a new task data and pass up to parent

        this.props.editTodo({...this.props.todo,name:this.state.task})

        this.setState({isEditing:false})
    }
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }
    handleToggle = (evt) => {
        this.props.toggleTodo(this.props.todo)
    }
    render(){
        let result;
        if(this.state.isEditing) {
            result = (
                <div className="Todo">
                    <form onSubmit={this.handleUpdate}>
                        <input type="text" value={this.state.task} name="task" onChange={this.handleChange}/>
                        <button>Save</button>
                    </form>
                </div>
            ) 
        } else {
            result = (
                <div className="Todo">
                    <li className={this.props.completed ? 'Completed Todo-task' : 'Todo-task'} key={this.props.todo.id}><span onClick={this.handleToggle}>{this.props.todo.name}</span><div><button onClick={this.handleDelete}>Delete</button><button onClick={this.toggleForm}>Edit</button></div></li>
                </div>
            )
        }
        return result
    }
}


export default Todo;