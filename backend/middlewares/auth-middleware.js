module.exports = async function (req, res, next) {
  try {
    const { accessToken } = req.cookies;
    console.log(accessToken);
  } catch (err) {
    console.log(err);
    s;
  }

  next();
};
