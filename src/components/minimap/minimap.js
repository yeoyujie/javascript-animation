import React from 'react';

function MiniMap({ videoCurrentTime, srcMap }) {
    // Calculate the position of the circle based on the current time of the video
    //   const circlePosition = calculateCirclePosition(videoCurrentTime);

    return (
        <div className="mini-map">
            {/* Render the map image */}
            <img src={srcMap} alt="Map" />
            {/* Render the circle indicating your location */}
            <div
                className="circle"
                // style={{ left: circlePosition.x, top: circlePosition.y }}
            />
        </div>
    );
}

export default MiniMap;