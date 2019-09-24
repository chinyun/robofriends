import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

// dispatch the DOM changes to call an action. mapDispatchToProps returns a function 
// that returns an object then uses connect to change the data form reducers.
const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: ( ) => dispatch(requestRobots())
	}
}

// because uses Redux to manage states there is no need to use this.state and this.setState
class App extends Component {
	// constructor() {
	// 	super()
	// 	this.state = {
	// 		robots: [],
			// searchfield: ''
	// 	}
	// }

	componentDidMount() {
		this.props.onRequestRobots();
		// fetch('https://jsonplaceholder.typicode.com/users')
		// 	.then(response => response.json())
		// 	.then(users => this.setState({ robots: users }));
	}

	// onSearchChange = ( event ) => {
	// 	this.setState({ searchfield: event.target.value })
	// }

	render() {
		// const { robots } = this.state;
		const { searchField, onSearchChange, robots, isPending } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={ onSearchChange }/>
				<Scroll>
				{ isPending ? <h1> Loading </h1> :
					<ErrorBoundary>
						<CardList robots={ filteredRobots }/>
					</ErrorBoundary>
				}	
				</Scroll>
			</div>
		);
	}
}

// connect() is a higher order function, action done from mapDispatchToProps will 
// change state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App);
