import {v4 as uuidv4, validate as Validate} from 'uuid';


export function generateUUID() {
    return uuidv4();
}

export function validateUUID(value) {
    return uuidv4.validate(value);
}