/**
 * Strip html tags from a string
 *
 * @export
 * @param {String} str
 * @returns
 */
export function strip_tags(str) {
    if ((str === null) || (str === '')) {
        return false;
    } else {
        str = str.toString();
    }
    return str.replace(/<[^>]*>/g, '');
}
