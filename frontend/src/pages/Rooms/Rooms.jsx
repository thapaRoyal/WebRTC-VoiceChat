import React from 'react';
import styles from './Rooms.module.css';

const Rooms = () => {
  return (
    <>
      <div className="container">
        <div className={styles.roomsHeader}>
          <div className={styles.left}>
            <span className={styles.heading}>All voice rooms</span>
            <div className={styles.searchBox}>
              <img src="/images/search-icon.png" alt="Search" />
              <input type="text" className={styles.searchInput} />
            </div>
          </div>
          <div className={styles.right}>
            <button className={styles.startRoomButton}>
              <img src="/images/add-room-icon.png" alt="Add room" />
              <span>Start a room</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
