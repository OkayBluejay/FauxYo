module.exports = function(app){

  app.get('/api/:type/:request', (req, res) => {
    const dataType = req.params.type;
    const request = req.params.request;
    res.send('ok');
  });

} 