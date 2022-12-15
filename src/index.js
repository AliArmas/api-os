const express = require('express');

const app = express();
// const PORT = process.env.PORT || 3000;
const songsRouter = require('./v1/routes/song.routes')
app.set('port',process.env.PORT || 4000);

app.set('url', '/api/v1/')

app.use(`${app.get('url')}songs`,songsRouter);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})
