import LocationMarker from './LocationMarker';

function MiniMap({ videoCurrentTime, srcMap }) {
    return (
        <div className="mini-map">
            {/* Render the map image */}
            <img src={srcMap} alt="Map" />
            {/* Render the location marker */}
            <LocationMarker videoCurrentTime={videoCurrentTime} />
        </div>
    );
}

export default MiniMap;
