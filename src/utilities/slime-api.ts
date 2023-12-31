import sendRequest from "./send-request"
import * as Types from "../../types/types"

const BASE_URL = "/api/slimes";
//method get by defualt

// Get all slimes
export function getAllSlime(): Promise<any> {
    return sendRequest(BASE_URL);
}

// Retrieve slime
export function getSlime(id?: string ): Promise<any> {
    return sendRequest(`${BASE_URL}/${id}`);
}

// Create a slime
export function createSlime(NewSlimeData: any): Promise<any> {
    return sendRequest(`${BASE_URL}/`, "POST", NewSlimeData);
}

// Update slime
export function updateSlime(EditSlimeData: any): Promise<any> {
    return sendRequest(`${BASE_URL}/${EditSlimeData._id}`, "PUT", EditSlimeData);
}

// Delete slime
export function deleteSlime(id?: string ): Promise<any> {
    return sendRequest(`${BASE_URL}/${id}`, "DELETE");
}
