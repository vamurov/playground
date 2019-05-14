const strCache = new Set<string>();

export const uniqueString = (key: string) => {
    if (strCache.has(key)) {
        throw Error(`Duplicate key ${key}`);
    }

    strCache.add(key)
    return key;
};