import { Given, TableDefinition, Then, When} from 'cucumber';
import { actorCalled, actorInTheSpotlight } from '@serenity-js/core';
import { Ensure, equals } from '@serenity-js/assertions';
import { MensajeCompra, Seleccionar, Comprar } from '../support/screenplay/';

Given(/que (.*) añade al carrito el celular mas (.*)/, (nombreActor: string, rangoPrecio: string) =>
    actorCalled(nombreActor).attemptsTo(
        Seleccionar.elProducto(rangoPrecio))
);

When(/el ingresa sus datos personales para realizar la compra/, (datosPersonales: TableDefinition) =>
    actorInTheSpotlight().attemptsTo(
        Comprar.producto(datosPersonales.hashes()))
);

Then(/el observa un modal con el mensaje: (.*)/, (mensaje: string) =>
    actorInTheSpotlight().attemptsTo(
        Ensure.that(MensajeCompra(), equals(mensaje))
    )
);
