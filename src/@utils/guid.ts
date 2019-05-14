import * as uuid from 'uuid';

export class Guid {
    static newGuid(): string {
        return uuid.v4();
    }
}