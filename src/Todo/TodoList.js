import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'
import '../css/TodoList.css'
import uuid from 'uuid/v4'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            TodoList:[]
        }
    }
    addTodo = (Todo) => {
        var newTodo = {name:Todo,id:uuid(),completed:false}
        if(Todo.trim() !== "") {
            this.setState(state=>({
                TodoList:[...state.TodoList,newTodo]
            }))
        } else {
            alert('please fill up the form!')
        }
    }
    deleteTodo = (Todo) => {
        this.setState({
            TodoList:this.state.TodoList.filter(box => box.id !== Todo)
        })
    }
    editTodo = (Todo) => {
        const updatedTodos = this.state.TodoList.map(todo => {
            if(todo.id == Todo.id ){
                return {...todo,name:Todo.name}
            } 

            return todo
        })

        this.setState({TodoList:updatedTodos})
    }
    toggleCompletion = (Todo) => {
        const updatedTodos = this.state.TodoList.map(todo => {
            if(todo.id == Todo.id ){
                return {...todo,completed:!todo.completed}
            } 

            return todo
        })

        this.setState({TodoList:updatedTodos})
    }
    render(){
        var TodoList = this.state.TodoList.map(todo=>(
             <Todo key={todo.id} todo={todo} toggleTodo={this.toggleCompletion} deleteTodo={this.deleteTodo} editTodo={this.editTodo} completed={todo.completed}/>
        ))
        // var TodoList = this.state.TodoList.map(Todo => (
        //     <li className="Todos" key={Todo.id}><span>{Todo.name}</span><div><a href="#" deleteTodo={this.deleteTodo}>Delete</a><span>Edit</span></div></li>
        // ))
        return (
            <div className="TodoList">
                <h1>Todo List!</h1>
                <p>A Simple React Todo List App</p>
                <ul>{TodoList}</ul>
                <br/>
                <NewTodoForm addTodo={this.addTodo}/>
            </div>
        )
    }
}


export default TodoList