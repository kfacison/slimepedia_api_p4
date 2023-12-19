import sendRequest from "./send-request"

const BASE_URL = "/api/foods";
//method get by defualt

// Get all foods
export function getAll(): Promise<any> {
    return sendRequest(BASE_URL);
}

// Retrieve food
export function getFood(food: { _id?: string }): Promise<any> {
    return sendRequest(`${BASE_URL}/${food?._id}`);
}

// Create a food
export function createFood(food: { _id?: string }): Promise<any> {
    return sendRequest(`${BASE_URL}`, "POST");
}

// Update food
export function update(formData: { _id: string }): Promise<any> {
    return sendRequest(`${BASE_URL}/${formData._id}`, "PUT", formData);
}

// Delete food
export function deleteFood(food: { _id?: string }): Promise<any> {
    return sendRequest(`${BASE_URL}/${food?._id}`, "DELETE");
}
