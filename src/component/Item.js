import React, { Component } from 'react';


class Item extends Component {



    render() {
        const {name , done } = this.props.data;
        const index= this.props.index;
        
        return (
               <div className={done?"item cross":"item"}>
                <h3> {name } </h3>
                <div>
                <button 
                onClick={()=>{this.props.crossTodo(index)}}
                >
               {!done?"cross":"uncross"}
               </button> 
               <button 
               onClick={()=>this.props.deleteTodo(index)}>
               &times;
               </button>
                </div>
               </div>     );
    }
}
 
export default Item;