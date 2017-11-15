import React from 'react';

const SearchBar = () => {
	return (
		<div className="col-md-8">
			<div className="input-group">
				<input type="text" className="form-control" placeholder="Search for..." />
				<span className="input-group-btn">
					<button className="btn btn-default" type="button">Search</button>
				</span>
			</div>
		</div>
	)
}

export default SearchBar;