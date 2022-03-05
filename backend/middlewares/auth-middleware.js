module.exports = async function (req, res, next) {
  try {
    const { accessToken } = req.cookies;
  } catch (err) {
    console.log(err);
    s;
  }

  next();
};
