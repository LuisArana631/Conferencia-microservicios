const fetchManage = ( endpoint, body, method = 'GET' ) => {
    const url = 'http://35.192.122.50' + endpoint;

    if ( method === 'GET' ) {
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( body )
        });
    }
        

}

export {
    fetchManage
}