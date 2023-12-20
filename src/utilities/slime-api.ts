import sendRequest from "./send-request"
import * as Types from "../../types/types"

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
export function createSlime(NewSlimeData: any): Promise<any> {
    return sendRequest(`${BASE_URL}/`, "POST", NewSlimeData);
}

// Update slime
export function update(formData: { _id: string }): Promise<any> {
    return sendRequest(`${BASE_URL}/${formData._id}`, "PUT", formData);
}

// Delete slime
export function deleteSlime(slime: { _id?: string }): Promise<any> {
    return sendRequest(`${BASE_URL}/${slime?._id}`, "DELETE");
}
