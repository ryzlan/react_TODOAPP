import React, { Component } from 'react';
import './App.css';

import ListWrapper from './component/ListWrapper';
import InputItem from './component/InputItem';


class App extends Component {
  state={
    data :[
      {"name":"learn to talk", done:false },
      {"name":"learn to see", done:true },
      {"name":"learn to walk", done:false },
      {"name":"learn to fuck", done:false },
    ]
  }

  AddTodo=(item)=>{
    
    let newItem= {"name":item, done:false }
    const newdata= [...this.state.data, newItem]
   this.setState({
     data:newdata
   })
   
  
  }

  crossTodo=(id)=>{
    console.log(id);
    const newTodos = [...this.state.data];
    if(newTodos[id].done){
      newTodos[id].done = false;
    }else{
      newTodos[id].done = true;
    }
    
this.setState({
      data:newTodos
    })
    
    
  }
  deleteTodo=(id)=>{
    const newTodos = [...this.state.data]
    newTodos.splice(id,1)
    this.setState({
      data:newTodos
    })
    
  }

  render() {
    return (
      <div className="app">
      <h1>  A simple React Todo App</h1>
        <InputItem AddTodo={this.AddTodo}  />
        <ListWrapper data= {this.state.data}  crossTodo={this.crossTodo} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
