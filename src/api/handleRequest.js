const key = 'eCahHWlyNG0rOGbTSDjy_rG0tV1_2MQ7'
const url = 'https://api.polygon.io'

// https://api.polygon.io/v1/open-close/AAPL/2020-10-14?apiKey=VvY5VBdSwesmpbxpx4hCEzxBl3bkGpXh

export function requestHandler(uri) {
    // Default options are marked with *
    return fetch(
        url+uri+'apiKey='+key,
        {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => data)
        .catch(error => {
            console.error('Fetch Error', error)
        });
}