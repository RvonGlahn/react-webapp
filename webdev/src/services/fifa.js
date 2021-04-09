export async function loadPlayer(req_data) {
    console.log("req_data");
    console.log(req_data);

    const response = await fetch(`http://localhost:9000/fifa`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req_data),
    });
    return await response.json();
}

export async function loadSuggest(namePart) {
    const response = await fetch(
        `http://localhost:9000/fifa?part=${encodeURIComponent(namePart)}`,
        {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        }
    );
    return await response.text();
}

export async function loadLists() {
    const response = await fetch(`http://localhost:9000/fifa`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    return await response.text();
}
