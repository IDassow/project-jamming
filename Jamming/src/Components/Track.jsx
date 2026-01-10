import styles from "./GeneralContainer.module.css";
function Track({ track, onAdd, onRemove, isRemoval, isAdded }) {
  const handleClick = () => {
    
    isRemoval ? onRemove(track) : onAdd(track);
  }

  const resultList = ( 
      <button
          onClick={handleClick}
          //disabled={isAdded}
          style={{
            opacity: isAdded ? 0.6 : 1,
            color: isAdded ? "greenyellow":"inherit",
          }}
        >
          {isAdded ? "✓" : "+"}
      </button>
  );
  const playList = (
    <button onClick={() => onRemove(track)}>-</button>
  );

  return (
    <div className={styles.trackContent} >
      <div style={{textAlign:"left",}}>
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      {!isRemoval ? resultList : playList}
    </div>
  );
}

export default Track;