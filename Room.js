rooms = []
const assignRoom = () => {
    if (rooms.length===0 || rooms[rooms.length-1]===4) {
        console.log('assigning');
        rooms.push(1);
        return rooms.length;
    }
    rooms[rooms.length-1]++;
    return rooms;
}
module.exports = assignRoom;