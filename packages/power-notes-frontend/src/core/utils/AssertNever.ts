export function assertNever(value: never): never {
    throw new Error("Unexpected object: " + value);
}
