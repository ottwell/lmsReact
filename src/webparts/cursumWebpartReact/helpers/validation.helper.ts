import * as strings from 'CursumWebpartReactWebPartStrings';

export namespace ValidationHelper {
    const patterns = [
        /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
        /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
    ];

    export function validateWRegExp(value: string): string {
        if (value === null ||
            value.trim().length === 0) {
            return strings.SystemMessages.invalidParam;
        }
        let res = strings.SystemMessages.invalidParam;
        patterns.forEach(pattern => {
            if(pattern.test(value)){
                res = '';
            }
        });
        return res;
    }

    export function validateNumberRange(value: string): string {
        if (value === null ||
            value.trim().length === 0) {
            return strings.SystemMessages.invalidParam;
        }
        if(!parseInt(value)) {
            return strings.SystemMessages.invalidParam;
        }
        if(parseInt(value) < 0) {
            return strings.SystemMessages.invalidParam;
        }
        return '';
    }
}