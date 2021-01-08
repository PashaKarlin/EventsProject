import queryString from 'query-string';

const apiUrl = 'http://192.168.26.1:5000/v1/api/';

export default class ApiClient {
    constructor() {
        this.token  = '';
    }

    async get(url, params) {
        return this.request({
            url,
            params,
            method : 'GET'
        });
    }

    async post(url, payload = {}) {
        return this.request({
            url,
            method : 'POST',
            body   : payload
        });
    }

    async put(url, payload = {}) {
        return this.request({
            url,
            method : 'PUT',
            body   : payload
        });
    }

    async patch(url, payload = {}) {
        return this.request({
            url,
            method : 'PATCH',
            body   : payload
        });
    }

    async delete(url, payload = {}) {
        return this.request({
            url,
            method : 'DELETE',
            body   : payload
        });
    }

    async request({ url, method, params = {}, body }) {
        if (this.token) {
            params.token = this.token;         //eslint-disable-line
        }

        const query = Object.keys(params).length ? `?${queryString.stringify(params)}` : '';

        const response = await fetch(
            `${apiUrl}${url}${query}`,
            {
                method,
                headers : {
                    'Content-Type'  : 'application/json'
                },
                crossDomain     : true,
                body            : method !== 'GET' ? JSON.stringify({ data: body }) : undefined
            }
        );
       
        const json = await response.json();
        
        if (json.status === 0) throw json.error;

        return json;
    }

    setToken(token) {
        this.token = token;
    }
}
