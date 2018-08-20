import fetch from 'isomorphic-fetch'

function _ajax(options) {
    return fetch(options.url, {
        method: options.type,
        headers: Object.assign({}, options.headers || {}, {
            'Content-Type': 'application/json; charset=utf-8'
        }),
        body: JSON.stringify(options.data)
    })
}

const postData = (options) => {
    return _ajax({
        type: 'POST',
        url: options.url,
        data: options.data,
        dataType: 'json',
        headers: options.headers || {}
    })
}

const patchData = (options) => {
    return _ajax({
        type: 'PATCH',
        url: options.url,
        data: options.data,
        dataType: 'json',
        headers: options.headers || {}
    })
}

const deleteData = (options) => {
    return _ajax({
        type: 'DELETE',
        url: options.url,
        dataType: 'json',
        headers: options.headers || {}
    })
}

const getData = (options) => { // eslint-disable-line no-multi-assign
    return _ajax({
        type: 'GET',
        url: options.url,
        headers: options.headers || {}
    })
}

const getBaseDomain = () => {
    return process.env.NODE_ENV === 'production' ? 'https://api.doomtroopergame.com' : 'http://localhost:1337'
}

export {
    postData,
    getData,
    deleteData,
    patchData,
    getBaseDomain
}
