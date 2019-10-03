import React, { Component } from 'react';
import TodoItem from './TodoItem';
import Footer from './Footer';
import { clearCompleted, completeAll } from '../actions/todos';
const SHOW_ALL = 'show_all';
const SHOW_COMPLETED = 'show_completed';
const SHOW_ACTIVE = 'show_active';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

class MainSection extends Component {
  constructor(props) {
    super(props);
    this.state = {filter: SHOW_ALL};
  }

  handleClearCompleted(){
    this.props.dispatch(clearCompleted());
  }

  handleShow(filter){
    this.setState({ filter });
  }

  toggleAll(){
    this.props.dispatch(completeAll());
  }

  render(){
    const { todos } = this.props;
    const { filter } = this.state;

    const filteredTodos = todos.filter(TODO_FILTERS[filter]);
    const completedCount = todos.reduce((count, todo) => todo.completed ? count + 1 : count, 0);

    let renderToggleAll;
    if (todos.length > 0) {
      renderToggleAll = (
        <input className="toggle-all"
                type="checkbox"
                checked={true}
                onChange={this.toggleAll.bind(this)} />
      );
    }

    let renderFooter;
    const activeCount = todos.length - completedCount;

    if (todos.length) {
      renderFooter = (
        <Footer completedCount={completedCount}
                activeCount={activeCount}
                filter={filter}
                onClearCompleted={this.handleClearCompleted.bind(this)}
                onShow={(fil) => this.handleShow.bind(this, fil)} />
      );
    }

    return(
      <section className="main">
        {renderToggleAll}
        <ul className="todo-list">
          {filteredTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...this.props} />
          )}
        </ul>
        {renderFooter}
      </section>
    );
  }
}

export default MainSection;
