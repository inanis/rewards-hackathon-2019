const url = 'https://my-json-server.typicode.com/inanis/demo/db';

export function getData() {
    return fetch(url)
        .then(response => {
            return response.json();
        });
}