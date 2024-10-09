const jwtConfig = require('./jwtConfig');

module.exports = {
  access: {
    maxAge: jwtConfig.access.expiresIn,
    httpOnly: true,
    secure: false,
    // sameSite: 'None',
    // domain: '.tk.ru',
    // domain: '26.179.213.238',
    // domain: 'http://tk.ru/',
    // domain: 'http://tk.ru/',
  },
  refresh: {
    maxAge: jwtConfig.refresh.expiresIn,
    httpOnly: true,
    // sameSite: 'None',
    // domain: 'http://tk.ru/',
    // domain: '.tk.ru',
    // sameSite: 'lax'
  },
};