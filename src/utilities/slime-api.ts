import sendRequest from "./send-request"

const BASE_URL = "/api/slimes";
//method get by defualt

// Get all slimes
export function getAll(): Promise<any> {
    return sendRequest(BASE_URL);
}

// Retrieve slime
export function getSlime(slime: { _id?: string }): Promise<any> {
    return sendRequest(`${BASE_URL}/${slime?._id}`);
}

// Create a slime
export function createSlime(slime: { _id?: string }): Promise<any> {
    return sendRequest(`${BASE_URL}`, "POST");
}

// Update slime
export function update(formData: { _id: string }): Promise<any> {
    return sendRequest(`${BASE_URL}/${formData._id}`, "PUT", formData);
}

// Delete slime
export function deleteSlime(slime: { _id?: string }): Promise<any> {
    return sendRequest(`${BASE_URL}/${slime?._id}`, "DELETE");
}
