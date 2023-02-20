import React from 'react';
import CanvasLayer from '../canvas/CanvasLayer';
import VideoLayer from '../videoPlayer/VideoLayer';
import './VideoContainer.css';

function VideoContainerComponent() {
  return (
    <div className="Videocontainer">
        <VideoLayer/>
        <CanvasLayer />
    </div>
  );
}

export default VideoContainerComponent;
