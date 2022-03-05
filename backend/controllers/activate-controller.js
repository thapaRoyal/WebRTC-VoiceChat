const Jimp = require('jimp');
const path = require('path');

class ActivateController {
  async activate(req, res) {
    // Activate logic
    const { name, avatar } = req.body;
    if (!name || !avatar) {
      res.status(400).json({ message: 'All fields are required' });
    }

    // Image Base64
    const buffer = Buffer.from(
      avatar.replace(/^data:image\/\w+;base64,/, ''),
      'base64'
    );

    try {
      const jimpResp = await Jimp.read(buffer);
      jimpResp
        .resize(150, Jimp.AUTO)
        .write(path.resolve(__dirname, `../storage/${imagePath}`));
    } catch (err) {
      res.status(500).json({ message: 'Could not process image ' });
    }
    res.json({ message: 'OK!' });
  }
}

module.exports = new ActivateController();
