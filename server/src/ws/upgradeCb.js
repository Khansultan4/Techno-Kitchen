const cookieParser = require('cookie-parser');
const { WebSocketServer } = require('ws');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const wss = new WebSocketServer({ clientTracking: false, noServer: true });

const upgradeCb = (request, socket, head) => {
  socket.on('error', (err) => console.log(err));

  cookieParser()(request, {}, () => {
    try {
      const token = request.cookies.refreshToken;

      const { user } = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);

      socket.removeListener('error', () => {});

      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request, user);
      });
    } catch (error) {
      console.log('ERRRR: ', error);
      socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
      socket.destroy();
    }
  });
};

module.exports = { upgradeCb, wss };
