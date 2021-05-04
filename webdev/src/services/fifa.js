import { submitGetRequest, submitPostRequest } from '../network';

export const loadPlayer = (req_data) => {
    const header = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req_data),
    };

    return submitPostRequest(new URL('fifa21', process.env.REACT_APP_SERVER_URL), header);
};

export async function loadSuggest(namePart) {
    const header = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    const urlEnd = `fifa21?part=${encodeURIComponent(namePart)}`;
    const url = new URL(urlEnd, process.env.REACT_APP_SERVER_URL);

    return submitGetRequest(url, header);
}

export async function loadLists() {
    const header = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

    return submitGetRequest(new URL('fifa21/list', process.env.REACT_APP_SERVER_URL), header);
}
