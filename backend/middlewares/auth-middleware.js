module.exports = async function (req, res, next) {
  try {
    //   get accessToken
    const { accessToken } = req.cookies;

    if (!accessToken) {
      throw new Error();
    }
    console.log(accessToken);
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: 'Unauthorized' });
  }
};
