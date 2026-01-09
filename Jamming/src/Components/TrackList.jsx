import Track from "./Track";

function Tracklist({ tracks, onAdd, onRemove, isRemoval, playlistTracks }) {
  return (
    <div>
      {tracks.map((track) => (
        <Track
          key={track.id}
          track={track}
          onAdd={onAdd}
          onRemove={onRemove}
          isRemoval={isRemoval}
          isAdded={playlistTracks?.some(t => t.id === track.id)}
        />
      ))}
    </div>
  );
}

export default Tracklist;
