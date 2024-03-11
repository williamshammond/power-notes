const BASE_API_PATH = "api/v1";

export function prefixWithBaseApiPath(path: string) {
    return `${BASE_API_PATH}/${path}`;
}
