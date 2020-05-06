import {Question} from '@serenity-js/core';
import {Text} from '@serenity-js/protractor';
import {CarritoCompraPage} from '../ui/CarritoCompraPage';

export const MensajeCompra = () =>
    Question.about(`recibe el mensaje de compra satisfactoria`, actor => {
            return Text.of(CarritoCompraPage.lblMensajeCompraRealizada).answeredBy(actor);
        }
    );
