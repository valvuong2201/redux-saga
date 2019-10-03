import React, { Component } from 'react';
import { connect } from 'react-redux';

import MainSection from './MainSection';
import Header from './Header';


class Home extends Component{
	render(){
		return(
			<div>
				<Header {...this.props} />
				<MainSection {...this.props} />
			</div>
		);
	}
}


function mapStateToProps(state){
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(Home);