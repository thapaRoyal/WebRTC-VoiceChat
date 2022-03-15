import React from 'react';
import AddRoomModel from '../../components/AddRoomModel/AddRoomModel';
import RoomCard from '../../components/RoomCard/RoomCard';
import styles from './Rooms.module.css';

const rooms = [
  {
    id: 1,
    topic: 'Which framework is best for Frontend?',
    speakers: [
      {
        id: 1,
        name: 'John Doe',
        avatar: '/images/monkey-avatar.png',
      },
      {
        id: 2,
        name: 'Jane Doe',
        avatar: '/images/monkey-avatar.png',
      },
    ],
    totalPeople: 40,
  },
  {
    id: 2,
    topic: 'Which framework is best for Backend?',
    speakers: [
      {
        id: 1,
        name: 'John Doe 1',
        avatar: '/images/monkey-avatar.png',
      },
      {
        id: 2,
        name: 'Jane Doe 1',
        avatar: '/images/monkey-avatar.png',
      },
    ],
    totalPeople: 48,
  },
  {
    id: 3,
    topic: 'Learning React?',
    speakers: [
      {
        id: 1,
        name: 'John Doe 2',
        avatar: '/images/monkey-avatar.png',
      },
      {
        id: 2,
        name: 'Jane Doe 2',
        avatar: '/images/monkey-avatar.png',
      },
    ],
    totalPeople: 44,
  },
  {
    id: 4,
    topic: 'Learning React?',
    speakers: [
      {
        id: 1,
        name: 'John Doe 2',
        avatar: '/images/monkey-avatar.png',
      },
      {
        id: 2,
        name: 'Jane Doe 2',
        avatar: '/images/monkey-avatar.png',
      },
    ],
    totalPeople: 44,
  },
];

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
        <div className={styles.roomList}>
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
      <AddRoomModel />
    </>
  );
};

export default Rooms;
