import {Question} from '@serenity-js/core';
import {browser} from 'protractor';

export const TextoAlerta = {
    esVisible: () =>
        Question.about(`Texto de la alerta del navegador`,  async () => {
            return browser.switchTo().alert().getText();
        })
};