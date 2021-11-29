const { REACT_APP_BASE_API_URL : baseApiUrl = 'http://localhost:4000' } = process.env;

const client = (
    url,
    { method = 'GET', data, headers : customHeaders, ...customConfig }
) => {
    const endpoint = `${baseApiUrl}/${url}`;
    const config = {
        method,
        headers: {
            'Content-Type':  data ? 'application/json' : undefined,
            'Accept': 'application/json',
            ...customHeaders
        },
        ...customConfig
    };
    return fetch(endpoint,config)
        .then( res => res.json() )
}

export { client };