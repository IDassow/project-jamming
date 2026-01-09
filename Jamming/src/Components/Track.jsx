import styles from "./GeneralContainer.module.css";
function Track({ track, onAdd, onRemove, isRemoval, isAdded }) {
  const handleClick = () => {
    //if (isAdded) return;
    isRemoval ? onRemove(track) : onAdd(track);
  }

  return (
    <div className={styles.trackContent} >
      
      <h3>{track.name}</h3>
      <p>{track.artist} | {track.album}</p>
       {!isRemoval && (
        <button
          onClick={handleClick}
          disabled={isAdded}
          style={{
            opacity: isAdded ? 0.6 : 1,
            color: isAdded ? "greenyellow":"inherit",
          }}
        >
          {isAdded ? "✓" : "+"}
        </button>
      )}

      {isRemoval && (
        <button onClick={() => onRemove(track)}>-</button>
      )}
    </div>
  );
}

export default Track;