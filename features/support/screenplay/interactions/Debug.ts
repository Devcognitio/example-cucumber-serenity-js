import {Interaction} from '@serenity-js/core';

export const Debug = () =>
    Interaction.where(`#actor pauses to debug`, () => {
        // tslint:disable-next-line:no-debugger
        debugger;
    });
