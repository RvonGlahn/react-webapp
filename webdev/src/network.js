export const submitGetRequest = (url, headers) => {
    if (!url) {
        throw new Error("Cannot submit GET request. URL is null or undefined.");
    }

    return new Promise((resolve, reject) => {
        fetch(url, headers)
            .then((response) => {
                if (!response.ok) {
                    reject({
                        error: new Error(
                            `Error response. (${response.status}) ${response.statusText}`
                        ),
                        statusCode: response.status,
                        statusText: response.statusText,
                    });
                } else {
                    const text = response.text();
                    if (text.then) {
                        text.then(resolve).catch(reject);
                    } else {
                        return resolve(text);
                    }
                }
            })
            .catch(reject);
    });
};

export const submitPostRequest = (url, headers) => {
    if (!url) {
        throw new Error(
            "Cannot submit POST request. URL is null or undefined."
        );
    }

    return new Promise((resolve, reject) => {
        fetch(url, headers)
            .then((response) => {
                if (!response.ok) {
                    const json = response.json();
                    if (json.then) {
                        json.then(reject);
                    } else {
                        reject(
                            new Error(
                                `Error response. (${response.status}) ${response.statusText}`
                            )
                        );
                    }
                } else {
                    const json = response.json();
                    if (json.then) {
                        json.then(resolve).catch(reject);
                    } else {
                        return resolve(json);
                    }
                }
            })
            .catch(reject);
    });
};
