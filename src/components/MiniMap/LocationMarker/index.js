function LocationMarker({ videoCurrentTime }) {

    function calculateCirclePosition(videoCurrentTime) {
        let x = 0;
        let y = 0;

        if (videoCurrentTime >= 1 && videoCurrentTime <= 2) {
            // Move the circle from right to left between 1 and 2 seconds
            x = 100 - (videoCurrentTime - 1) * 100;
        } else if (videoCurrentTime >= 3 && videoCurrentTime <= 4) {
            // Move the circle up between 3 and 4 seconds
            y = (videoCurrentTime - 3) * 100;
        }

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
