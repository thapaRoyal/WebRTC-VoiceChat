const RoomDto = require('../dtos/room-dto');
const roomService = require('../services/room-service');

class RoomsControlller {
  async create(req, res) {
    // room
    const { topic, roomType } = req.body;

    if (!topic || !roomType) {
      return res.status(400).json({
        message: 'All fields are required!',
      });
    }
    const room = await roomService.create({
      topic,
      roomType,
      ownerId: req.user._id,
    });

    return res.json(new RoomDto(room));
  }
}

module.exports = new RoomsControlller();
