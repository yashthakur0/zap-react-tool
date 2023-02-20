import React from 'react';
import './VideoPlayer.css';


function VideoLayer() {
  return (
    <div className="VideoLayer">
       <video width="640" height="360" controls>
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video>
    </div>
  );
}

export default VideoLayer;
