const
    {ConsoleReporter} = require('@serenity-js/console-reporter'),
    {ArtifactArchiver} = require('@serenity-js/core'),
    {Photographer, TakePhotosOfInteractions} = require('@serenity-js/protractor'),
    {SerenityBDDReporter} = require('@serenity-js/serenity-bdd');

exports.config = {
    baseUrl: 'https://www.demoblaze.com/',

    chromeDriver: require(`chromedriver/lib/chromedriver`).path,

    directConnect: true,

    allScriptsTimeout: 110000,

    framework: 'custom',
    frameworkPath: require.resolve('@serenity-js/protractor/adapter'),

    specs: ['features/**/*.feature'],

    serenity: {
        runner: 'cucumber',
        crew: [
            ArtifactArchiver.storingArtifactsAt('./target/site/serenity'),
            ConsoleReporter.forDarkTerminals(),
            Photographer.whoWill(TakePhotosOfInteractions),
            new SerenityBDDReporter,
        ]
    },

    onPrepare: function () {
        browser.waitForAngularEnabled(false);
    },

    cucumberOpts: {
        require: ['features/**/*.ts'],
        'require-module': ['ts-node/register'],
    },

    capabilities: {
        browserName: 'chrome',

        loggingPrefs: {
            driver: 'WARNING',
            server: 'WARNING',
            browser: 'INFO'
        },

        chromeOptions: {
            args: [
                '-lang=es',
                '--disable-popup-blocking',
                '--disable-download-notification',
                '--start-maximized',
                '--ignore-certificate-errors',
                '--allow-running-insecure-content',
                '--disable-translate',
                '--always-authorize-plugins',
                '--disable-extensions'
            ]
        }
    }
}   
