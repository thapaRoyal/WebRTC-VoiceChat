class ActivateController {
  async activate(req, res) {
    // Activate logic
    res.json({ message: 'OK!' });
  }
}

module.exports = new ActivateController();
