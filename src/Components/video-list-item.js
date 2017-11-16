import React from 'react';

const VideoListItem = ({ video, onSelectVideo })=> {
	const title = video.snippet.title;
	const thumbnail = video.snippet.thumbnails.default.url;

	return (
		<li onClick={()=>onSelectVideo(video)} className = "list-group-item">
			<div className="video-list-media">
				<div className="media-left">
					<img src={thumbnail} alt="" className="media-object"/>
				</div>
				<div className="media-body">
					<div className="media-heading">
						{title}
					</div>
				</div>
			</div>
		</li>
	)
}

export default VideoListItem;