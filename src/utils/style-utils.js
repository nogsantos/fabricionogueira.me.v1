/**
 * Make this div truncate the text with an ellipsis
 *
 * Ex.:
 * import {truncate} from '../../utils/style-utils';
 * const Box = styled.div`
 *     ${ truncate('90%') }
 *     background: papayawhip;
 * `;
 *
 * @export
 * @param {any} width
 * @returns
 */
export function truncate(width) {
    return `
      width: ${width};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `;
}
