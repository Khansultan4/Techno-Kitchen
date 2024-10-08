const jwtConfig = require('./jwtConfig');

module.exports = {
  access: {
    maxAge: jwtConfig.access.expiresIn,
    httpOnly: true,
    secure: true,
    sameSite: 'None',
    // domain: 'http://tk.ru/',
  },
  refresh: {
    maxAge: jwtConfig.refresh.expiresIn,
    httpOnly: true,
    secure: true,
    sameSite: 'None',
    // domain: 'http://tk.ru/',
  },
};