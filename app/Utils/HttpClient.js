import  Helpers from '@Utils/Helpers';

 const BASE_URL = 'https://letgooffers.com/admin/app_api/';
//  const BASE_URL = 'http://web.easytodb.com/shop/app_api/';

function get(endpoint, params) {
    return request(endpoint, params);    
}

function post(endpoint, params) {
    return request(endpoint, params, "POST");
}

function put(endpoint, params) {
    return request(endpoint, params, "PUT");
}

function deletee(endpoint, params) {
    return request(endpoint, params, "DELETE");
}

async function request(endpoint, params = null, method = 'GET') {
    // let token = "647ac4ed7e82829132705af7ff02a8e1";  Helpers.getApiToken();
    let url = BASE_URL + endpoint;
    const config = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            // 'Authorization': 'Bearer ' + token,
        }
    };
    if(method != 'GET') {
        config['body'] = JSON.stringify(params);
        console.log('send data', config);
    }

    console.log('url', url);
  
    return fetch(url, config ).then((response) => response.json());
}

async function upload(endpoint, params, method = 'POST') {
    try {
        let token = "647ac4ed7e82829132705af7ff02a8e1";
        let url = BASE_URL + endpoint;
        const config = {
            method: method, //'POST',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'multipart/form-data',
                // 'Authorization': 'Bearer ' + token,
            },
            body: params,
        };
        console.log('url', url);
        console.log('params', params);
        return fetch(url, config ).then((response) => response.json());   
    } catch (error) {
        console.log('error', error);
    }
}


async function upload2(endpoint, params, method = 'POST') {
    try {
        // let token = "647ac4ed7e82829132705af7ff02a8e1";
        let url = "https://securegw-stage.paytm.in/order/";
        const config = {
            method: method, //'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                // 'Authorization': 'Bearer ' + token,
            },
            body: params,
        };

        if(method != 'GET') {
            config['body'] = JSON.stringify(params);
            console.log('send data', config);
        }
    
        console.log('url', url);
        console.log('url', params);
        return fetch(url, config ).then((response) => response.json());

        
         
    } catch (error) {
        console.log('error', error);
    }
}




export default {
    get,
    post,
    put,
    deletee,
    upload,    
    upload2
}