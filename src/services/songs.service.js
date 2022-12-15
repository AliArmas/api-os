const { response } = require('express');
const fetch = require('node-fetch');

async function getAllSongs() {
    try {
        const response =  await fetch('https://api.spotify.com/v1/albums/3j4gjHEmUophokNu8BFSGf/tracks?market=es&limit=50&offset=5', {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer BQAzYamN6uLyk6bs4gtmeIeuyTlUxXWQIBCOiZIyy1rWaH7QyafDct-uHgM2MBJad_6tQuo_64Vc9fXMl3qhRReUmUCIbPcBEndSSL9XXgeBtGDWUAElAZ4LixkO-yzC6jgWz8kYSYnbP_GjMfk_K2vPR_EdoYiJsY0dXlfHBS8teEA_imI49_z72jZixfI0B91ZQDHq74CTm_qQ4U0'
            }
        })
        .then(res => res.json())
        .then(response => {
            return response.json()
            console.log('estoy en el servicio')
        })
        .catch((error) => {
            console.error('Error:', error)
        })
    } catch (err) {
        console.log(err);
    }
    console.log('voy a retornar ')
    return response

}


module.exports = {
    getAllSongs
};