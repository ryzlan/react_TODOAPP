import React, { Component } from 'react';

import Item from './Item';

class ListWrapper extends Component {
    render() { 

        let renderList = this.props.data.map((d,index)=>{
           return( <Item key={index} data={d} index={index}  crossTodo={this.props.crossTodo} deleteTodo={this.props.deleteTodo} />)
        })
        return (
            <div className="list-wrapper">
                {renderList}
            </div>
          )
    }
}
 
export default ListWrapper;