import React, { Component } from 'react';
import classnames from 'classnames';
const SHOW_ALL = 'show_all';
const SHOW_COMPLETED = 'show_completed';
const SHOW_ACTIVE = 'show_active';

const FILTER_TITLES = {
  [SHOW_ALL]: 'ALL',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

class Footer extends Component {
  renderFilterLink(filter){
    const title = FILTER_TITLES[filter];
    const { filter: selectedFilter } = this.props;

    return(
      <li key={filter}>
        <a href="/#" className={classnames({ selected: filter === selectedFilter })}
                style={{ cursor: 'pointer'}}
                onClick={this.props.onShow(filter)}>
          {title}
        </a>
      </li>
    );
  }
  
  render(){
    const { activeCount, completedCount, onClearCompleted } = this.props;
    const itemWord = activeCount === 1 ? 'item' : 'items';

    let renderTodoCount;
    renderTodoCount = (
      <span className="todo-count">
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
    );

    let renderClearButton;
    if (completedCount > 0) {
      renderClearButton = (
        <button className="clear-completed" onClick={onClearCompleted} >
          Clear completed
        </button>
      );
    }

    return(
      <footer className="footer">
        {renderTodoCount}
        <ul className="filters">
          {[ SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED ].map(this.renderFilterLink.bind(this))}
        </ul>
        {renderClearButton}
      </footer>
    );
  }
}

export default Footer;
