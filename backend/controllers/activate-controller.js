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
    res.json({ message: 'OK!' });
  }
}

module.exports = new ActivateController();
