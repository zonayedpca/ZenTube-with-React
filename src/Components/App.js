import React, { Component } from 'react';
import '../Styles/App.css';

import SearchBar from './search-bar';
import VideoList from './video-list';
import VideoDetails from './video-details';

class App extends Component {
  render() {
    return (
		
		<div className="container">
			<div className="row">
				<SearchBar />
			</div>
			<div className="row">	
				<VideoDetails />
				<VideoList />
			</div>
		</div>
    );
  }
}

export default App;
