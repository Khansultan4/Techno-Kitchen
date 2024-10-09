const jwt = require('jsonwebtoken');

//? from user
// const verifyRefreshToken = (req, res, next) => {
//   try {
//     const { refreshToken } = req.cookies
//     const { user } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
//     res.locals.user = user

//     next()
//   } catch (error) {
//     console.log("Invalid refresh", error)
//     res.status(200).json({ message: "Invalid refresh" })
//   }
// }

const verifyRefreshToken = (req, res, next) => {
  try {
    console.log('tokentokentokentokentokentoken')
    console.log(req.cookies.refreshToken)
    console.log('tokentokentokentokentokentoken')
    const { refreshToken } = req.cookies;
    if(refreshToken) {

      const { user } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
      res.locals.user = user;
      next();
    } else {
      console.log(' (?) refreshToken not provided')
    }

  } catch (error) {
    console.log('Invalid refresh', error);
    res.status(200).json({ message: 'Invalid refresh' });
  }
};
// old
// const verifyRefreshToken = (req, res, next) => {
//   try {
//     const { refreshToken = '' } = req.cookies

//     console.log(refreshToken)
//     // const { user } = jwt.verify('', '')
//     const { user } = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)
//     res.locals.user = user

//     next()
//   } catch (error) {
//     console.log("Invalid refresh", error)
//     res.status(200).json({ message: "Invalid refresh" })
//   }
// }

const verifyAccessToken = (req, res, next) => {
  try {
    const accessToken = req.headers.authorization;
    const { user } = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    res.locals.user = user;

    next();
  } catch (error) {
    console.log('Invalid access', error);
    res.status(400).json({ message: 'Invalid access' });
  }
};

module.exports = { verifyRefreshToken, verifyAccessToken };
