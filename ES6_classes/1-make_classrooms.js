import ClassRoom from './0-classroom.js';

/**
 * @returns {Array}
 */
export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}