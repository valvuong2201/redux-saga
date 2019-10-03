import React, { Component } from 'react';
import classnames from 'classnames';

class TodoTextInput extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.newText = React.createRef();
  }

  handleSubmit(e){
    const text = this.newText.current.value.trim();
    if (text) {
      if (e.which === 13) {
        this.props.onSave(text);
        this.newText.current.value = "";
      }
    }
  }

  render(){
    return(
      <input className={classnames({
          edit: this.props.editing,
          "new-todo": this.props.newTodo
        })}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus={true}
        onKeyDown={this.handleSubmit}
        ref={this.newText} />
    );
  }
}

export default TodoTextInput;
