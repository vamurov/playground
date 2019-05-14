import {Action} from 'redux';
import {Guid} from '@utils';

export interface ActionWithTypeBuilder<T> {
    (payload?: T, guid?: string): ActionWithGuid;

    type: string;
    getPayload: (action: Action) => T;
    getGuid: (action: Action) => string;
}

export interface ActionWithGuid extends Action {
    guid: string;
    payload?: {};
}

export function buildAction<T>(type: string): ActionWithTypeBuilder<T> {
    const builder = function (payload?: T, guid?: string): ActionWithGuid {
        const notNullGuid = guid || Guid.newGuid();
        return {type, payload, guid: notNullGuid};
    } as ActionWithTypeBuilder<T>;

    builder.type = type;
    builder.getPayload = action => (action as any).payload as T;
    builder.getGuid = action => (action as any).guid;

    return builder;
}