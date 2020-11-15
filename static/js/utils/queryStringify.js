export default function queryStringify(data) {
    if (typeof data !== 'object') {
        throw new Error('input must be an object');
    }
    const keys = Object.keys(data);
    return keys.reduce((acc, key, index, list) => {
        const value = data[key];
        let string;
        const delinator = index < list.length - 1 ? '&' : '';
        if (typeof value === 'object') {
            string = getObjectQuery(value, key);
        }
        else {
            string = `${key}=${value}`;
        }
        return `${acc}${string}${delinator}`;
    }, '');
}
function getObjectQuery(obj, parent_key) {
    const keys = Object.keys(obj);
    return keys.reduce((acc, key, index) => {
        const value = obj[key];
        let string = `${parent_key}[${key}]=${value}`;
        const delinator = index < keys.length - 1 ? '&' : '';
        if (typeof value === 'object') {
            string = getObjectQuery(value, `${parent_key}[${key}]`);
        }
        return `${acc}${string}${delinator}`;
    }, '');
}
