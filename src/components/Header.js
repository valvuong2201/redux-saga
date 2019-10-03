import React, { Component } from 'react';
import TodoTextInput from './TodoTextInput';
import { addTodo } from '../actions/todos';

class Header extends Component {
  constructor(props){
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }
  handleSave(text) {
    if (text.length !== 0) {
      this.props.dispatch(addTodo(text));
    }
  }

  render(){
    return(
      <header className="header">
        <h1>todos</h1>
        <TodoTextInput newTodo
                        onSave={(text) => this.handleSave(text)}
                        placeholder="what needs to be done?" />
      </header>
    );
  }
}

export default Header;
