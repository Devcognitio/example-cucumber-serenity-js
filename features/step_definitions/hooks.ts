import {Before, setDefaultTimeout} from 'cucumber';
import {engage} from '@serenity-js/core';
import {Actors} from '../support/screenplay';
import {browser} from 'protractor';

Before(() => {
    engage(new Actors());
    setDefaultTimeout(60 * 1000);
    browser.get(browser.baseUrl);
});
