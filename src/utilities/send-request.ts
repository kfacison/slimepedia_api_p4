import { FormData } from '../../interface/types';

export default async function sendRequest(
    url: string,
    method: string = "GET",
    payload: FormData | object | null = null
    ): Promise<any> {
    const options: RequestInit = { method };

    if (payload) {
        if (!(payload instanceof FormData)) {
            options.headers = { "Content-Type": "application/json" };
            options.body = JSON.stringify(payload);
        } else {
            options.body = payload;
        }
    }
    const res = await fetch(url, options);

    if (res.ok) {
    return res.json();
    }

    throw new Error("Bad Request");
}