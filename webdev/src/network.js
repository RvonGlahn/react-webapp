export const submitGetRequest = (url, headers) => {
	if (!url) {
		throw new Error("Cannot submit GET request. URL is null or undefined.");
	}
	const myHeaders = headers ? new Headers(headers) : {};

	return new Promise((resolve, reject) => {
		fetch(url, {
			method: "GET",
			headers: myHeaders,
		})
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

export const submitPostRequest = (url, headers, data, jsonStringify = true) => {
	if (!url) {
		throw new Error(
			"Cannot submit POST request. URL is null or undefined."
		);
	}

	const myHeaders = new Headers(headers);

	if (jsonStringify) {
		data = JSON.stringify(data);
	}

	return new Promise((resolve, reject) => {
		fetch(url, { method: "POST", headers: myHeaders, body: data })
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
