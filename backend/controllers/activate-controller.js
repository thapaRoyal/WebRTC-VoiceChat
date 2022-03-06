const Jimp = require('jimp');
const path = require('path');
const UserDto = require('../dtos/user-dto');
const userService = require('../services/user-service');

class ActivateController {
  async activate(req, res) {
    // Activate logic
    const { name, avatar } = req.body;
    if (!name || !avatar) {
      res.status(400).json({ message: 'All fields are required' });
    }

    // Image Base64
    const buffer = Buffer.from(
      avatar.replace(/^data:image\/(png|jpg|jpeg);base64,/, ''),
      'base64'
    );

    const imagePath = `${Date.now()}-${Math.round(Math.random() * 1e9)}.png`;

    try {
      const jimpResp = await Jimp.read(buffer);
      jimpResp
        .resize(150, Jimp.AUTO)
        .write(path.resolve(__dirname, `../storage/${imagePath}`));
    } catch (err) {
      res.status(500).json({ message: 'Could not process image ' });
    }
    const userId = req.user._id;
    // update users
    try {
      const user = await userService.findUser({ _id: userId });
      if (!user) {
        res.status(404).json({ message: 'User not found' });
      }
      user.activated = true;
      user.name = name;
      user.avatar = `/storage/${imagePath}`;
      user.save();
      res.json({ user: new UserDto(user), auth: true });
    } catch (err) {
      res.status(500).json({ message: 'Something went wrong ' });
    }
  }
}

module.exports = new ActivateController();
