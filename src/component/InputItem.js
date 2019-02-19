import React, { Component } from 'react';

class Inputitem extends Component {
    state = { 
        item:""
     }
     handleChange=(e)=>{
         const{name, value}= e.target;
         this.setState({
             [name]:value
         });
     }

     handleSubmit=(e)=>{
        e.preventDefault();
        
        this.props.AddTodo(this.state.item);
        this.setState({
            item:""
        })
     }


    render() { 
        return (
             <form onSubmit={this.handleSubmit}>
                 <input 
                    type="text"
                    name="item"
                    value={this.state.item} 
                    placeholder="Add a Todo"
                    onChange={this.handleChange}
                    className="input"
                 />
                 <button>Add</button>
        </form>);
    }
}
 
export default Inputitem;