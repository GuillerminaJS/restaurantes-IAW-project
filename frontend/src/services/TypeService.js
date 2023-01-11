import { URL_API_TYPES, HEADERS } from '../constants/app_constants.js';
export default class TypeService {

    static getType() {
        return fetch(URL_API_TYPES)
            .then(res => res.json())
            .catch(error => error);
    }

    static getTypeById(id) {
        return fetch(`${URL_API_TYPES}/${id}`)
            .then(res => res.json())
            .catch(error => error);
    }

    static new(params) {
        const options = {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(URL_API_TYPES, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static update(params) {
        const options = {
            method: 'PUT',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(URL_API_TYPES, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static delete(id) {
        const options = { method: 'DELETE' };
        return fetch(`${URL_API_TYPES}/${id}`, options)
            .then(response => response.json())
            .catch(error => error);
    }
}