
export function arrayToDictionary<T, K extends keyof T>(array: T[], key: K): Record<string, T> {
    return array.reduce<Record<string, T>>((obj, item) => {
        // console.log(obj)
        const objKey = item[key] as string
        obj[objKey.replace(" ", "_").toLowerCase()] = item;
        return obj;
    }, {});
}