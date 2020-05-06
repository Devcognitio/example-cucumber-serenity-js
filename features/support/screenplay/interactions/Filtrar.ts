import {AnswersQuestions, Interaction, UsesAbilities} from '@serenity-js/core';
import { TargetElements } from '@serenity-js/protractor/lib/screenplay/questions/targets';

let valorMayor = -10000;
let valorMenor = 10000;
let valorProducto;

export const Filtrar = {

    elProducto: (target: TargetElements, rangoPrecios: string) =>
        Interaction.where(`#actor busca el producto mas ${rangoPrecios}`, (actor: UsesAbilities & AnswersQuestions) => {
            return target.answeredBy(actor).filter(function (element) {
                obtenerValor(actor, target, rangoPrecios);
                return element.$('h5').getText().then(text => {
                    valorProducto = Number(text.replace('$', ''));
                    if (rangoPrecios === 'economico') {
                        return valorMenor === valorProducto;
                    } else {
                        return valorMayor === valorProducto;
                    }
                });
            }).first().$('.card-title').click();
        })
};

const obtenerValor = (actor: UsesAbilities & AnswersQuestions, target: TargetElements, rangoPrecios: string) => {
    target.answeredBy(actor).each(function (element) {
        element.$('h5').getText().then(text => {
            valorProducto = Number(text.replace('$', ''));
            switch (rangoPrecios) {
                case 'economico': {
                    if (valorProducto < valorMenor) {
                        valorMenor = valorProducto;
                    }
                    break;
                }
                case 'costoso': {
                    if (valorProducto < valorMenor) {
                        valorMayor = valorProducto;
                    }
                    break;
                }
                default: {
                    throw new Error('Valor enviado no es el correcto, por favor valide que sea economico o costoso');
                }
            }
        });
    });
};
