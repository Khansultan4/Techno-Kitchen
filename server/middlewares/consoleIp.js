const ipConsole = (req, res, next) => {
    console.log(req.ip)
    next()
  }
  
  module.exports = ipConsole
  