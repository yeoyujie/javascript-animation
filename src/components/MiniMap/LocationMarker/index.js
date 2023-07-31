import seedrandom from 'seedrandom'


// WIP. Currently the marker just turns round and round.
function LocationMarker({ videoCurrentTime }) {

    function calculateCirclePosition(videoCurrentTime) {
        // Define the radius of the circle's movement
        const radius = 50;
    
        // Define the duration of one complete revolution in seconds
        const revolutionDuration = 10;
    
        // Calculate the current angle based on the current time of the video
        // Add an offset of Math.PI / 2 to start from the rightmost point of the circle
        const angle = (2 * Math.PI * videoCurrentTime) / revolutionDuration + Math.PI / 2;
    
        // Calculate the x and y coordinates based on the current angle
        const x = radius * Math.cos(angle) + radius + 80;
        const y = radius * Math.sin(angle) + radius + 50;
     
        return { x, y };
    }

    // Calculate the position of the circle based on the current time of the video
    const circlePosition = calculateCirclePosition(videoCurrentTime);

    return (
        <div
            className="location-marker"
            style={{ left: circlePosition.x, top: circlePosition.y }}
        />
    );
}

export default LocationMarker;
