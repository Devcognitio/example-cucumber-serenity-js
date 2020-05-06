import {Click, Enter, isVisible, Wait} from '@serenity-js/protractor';
import {CarritoCompraPage} from '../ui/CarritoCompraPage';
import {Task} from '@serenity-js/core';
import {CerrarAlerta} from '../interactions';

let datosPersonales: { [key: string]: string };

export const Comprar = {
    producto: (dataTableDatosPersonales: Array<{ [p: string]: string }>) => {
        dataTableDatosPersonales.forEach(value => {
            datosPersonales = value;
        });
        return Task.where(`#actor realiza la compra del producto`,
            CerrarAlerta.delNavegador('Product added'),
            Click.on(CarritoCompraPage.btnCarritoCompras),
            Wait.until(CarritoCompraPage.cntProductoCarrito, isVisible()),
            Click.on(CarritoCompraPage.btnRealizarPedido),
            Wait.until(CarritoCompraPage.modalPlaceOrder, isVisible()),
            Enter.theValue(datosPersonales['Nombre']).into(CarritoCompraPage.txtNombre),
            Enter.theValue(datosPersonales['Pais']).into(CarritoCompraPage.txtPais),
            Enter.theValue(datosPersonales['Ciudad']).into(CarritoCompraPage.txtCiudad),
            Enter.theValue(datosPersonales['Tarjeta de credito']).into(CarritoCompraPage.txtTarjetaCredito),
            Enter.theValue(datosPersonales['Mes']).into(CarritoCompraPage.txtMes),
            Enter.theValue(datosPersonales['Ano']).into(CarritoCompraPage.txtAno),
            Click.on(CarritoCompraPage.btnComprar)
        );
    }
};
