const songsService = require('../services/songs.service')

async function allSongs(req,res){
    const data = await songsService.getAllSongs()
    // const _data = JSON.parse(data)
    console.log("Esta es la respuesta",data)
    res.json(data)
}

// const allSongs = (req,res)=> {
//     console.log("Este es el dato",allSongs)
//     res.send(allSongs)
// };

const getSongId = (res,req) => {
    const idSong = songsService.getSongId()
    res.send(idSong);
}

module.exports = {
    allSongs,
    getSongId,
};