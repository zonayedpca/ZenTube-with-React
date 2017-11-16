import React, { Component } from 'react';
import { render } from 'react-dom';
import YTSearch from 'youtube-api-search';
import { debounce } from 'lodash';

import SearchBar from './Components/search_bar';
import VideoList from './Components/video-list';
import VideoDetail from './Components/video-details';
import registerServiceWorker from './Components/registerServiceWorker';

//YouTube Search API
const API_KEY = 'AIzaSyAvgQgTvIWa4hgCjM2Q5FwkxF1AkMgJ9Ko';

class App extends Component {
	constructor(props) {
		super(props);

		//Setting state for the data
		this.state = {
			videos: [],
			selectecVideo: null
		}
		this.videoSearch('Linkin Park');
	}

	videoSearch(term) {
		//fetching data from YouTube
		YTSearch({key: API_KEY, term: term}, (videos)=> {
			this.setState({videos: videos, selectecVideo: videos[0]});
		});
	}

	render() {
		const onSearch = debounce(term=>this.videoSearch(term), 300);
		return (
			<div>
				<SearchBar onSearchTermChange={onSearch} />
				<VideoDetail video={this.state.selectecVideo}/>
				<VideoList onSelectVideo={selectecVideo=>this.setState({selectecVideo})} videos={this.state.videos} />
			</div>	
		)
	}
}

render(<App />, document.querySelector('.container'));
registerServiceWorker();
