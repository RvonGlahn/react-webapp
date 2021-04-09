import { submitGetRequest, submitPostRequest } from "../network";

export const loadPlayer = (req_data) => {
    const header = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req_data),
    };

    return submitPostRequest(`http://localhost:9000/fifa`, header);
};

export async function loadSuggest(namePart) {
    const header = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    };
    const url = `http://localhost:9000/fifa?part=${encodeURIComponent(
        namePart
    )}`;

    return submitGetRequest(url, header);
}

export async function loadLists() {
    const header = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    };

    return submitGetRequest(`http://localhost:9000/fifa`, header);
}
