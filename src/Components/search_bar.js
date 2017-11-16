import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: 'Linkin Park'
		}
	}

	onSearchChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

	render() {
		return (
			<div className="headbar">
				<div className="col-md-2">
					<div className="brand">Zeu<strong>Tube</strong></div>
				</div>
				<div className="col-md-6">
					<div className="input-group">
						<input type="text" className="form-control" placeholder="Search for..." aria-label="Search for..." value={this.state.term} onChange={event => this.onSearchChange(event.target.value)} />
						<span className="input-group-btn">
							<button className="btn btn-secondary" type="button">Search!</button>
						</span>
					</div>	
				</div>
			</div>
		)
	}
}

export default SearchBar; 