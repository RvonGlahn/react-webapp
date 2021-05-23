import { submitGetRequest, submitPostRequest } from '../network';
require('dotenv').config();

const apiURL = `http://${process.env.REACT_APP_FLASK_URL}`;

export const loadPlayer = (req_data) => {
    const header = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req_data),
    };

    return submitPostRequest(new URL('api/search', apiURL), header);
};

export async function loadSuggest(namePart) {
    const header = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    const urlEnd = `api/suggest?part=${encodeURIComponent(namePart)}`;
    const url = new URL(urlEnd, apiURL);

    return submitGetRequest(url, header);
}

export async function loadLists() {
    const header = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    const url = new URL('api/attributes', apiURL);

    return submitGetRequest(url, header);
}

export async function loadFIFAVersion(version) {
    const header = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    const urlEnd = `api/version?year=${encodeURIComponent(version)}`;
    const url = new URL(urlEnd, apiURL);

    return submitGetRequest(url, header);
}
