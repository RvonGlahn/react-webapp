import { submitGetRequest, submitPostRequest } from '../network';

export const loadPlayer = (req_data) => {
    const header = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req_data),
    };

    return submitPostRequest(new URL('api/search', 'http://192.168.178.20:5000'), header);
};

export async function loadSuggest(namePart) {
    const header = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    const urlEnd = `api/suggest?part=${encodeURIComponent(namePart)}`;
    const url = new URL(urlEnd, 'http://192.168.178.20:5000');

    return submitGetRequest(url, header);
}

export async function loadLists() {
    const header = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    const url = new URL('api/attributes', 'http://192.168.178.20:5000');

    return submitGetRequest(url, header);
}
