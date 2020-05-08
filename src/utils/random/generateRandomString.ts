/* eslint-disable import/prefer-default-export */
export function GenerateUID():string {
    return (new Date()).getTime().toString();
}
