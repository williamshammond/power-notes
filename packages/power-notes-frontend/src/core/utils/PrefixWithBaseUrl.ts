const BASE_URL = "http://localhost:3000";

export function prefixWithBaseUrl(path: string) {
    return `${BASE_URL}/${path}`;
}
