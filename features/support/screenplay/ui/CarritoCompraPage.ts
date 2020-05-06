import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class CarritoCompraPage {
    static btnCarritoCompras = Target.the('Boton carrito compras').located(by.cssContainingText('.nav-link', 'Cart'));
    static btnRealizarPedido = Target.the('Boton realizar el pedido').located(by.cssContainingText('.btn-success', 'Place Order'));
    static txtNombre = Target.the('Input ingresar el nombre').located(by.id('name'));
    static txtPais = Target.the('Input ingresar el pais').located(by.id('country'));
    static txtCiudad = Target.the('Input ingresar la ciudad').located(by.id('city'));
    static txtTarjetaCredito = Target.the('Input ingresar el numero de trajeta de credito').located(by.id('card'));
    static txtMes = Target.the('Input ingresar el mes de la tarjeta de credito').located(by.id('month'));
    static txtAno = Target.the('Input ingresar el año de la tarjeta de credito').located(by.id('year'));
    static btnComprar = Target.the('Boton terminar el proceso de compra').located(by.cssContainingText('.btn-primary', 'Purchase'));
    static lblMensajeCompraRealizada = Target.the('Mensaje del modal').located(by.xpath('//div[contains(@class,"sweet-alert")]/h2'));
    static cntProductoCarrito = Target.the('Contenedor de los productos en el carrito').located(by.css('.success'));
    static modalPlaceOrder = Target.the('Modal informacion del pedido').located(by.xpath('//div[@id="orderModal"]//div[@class="modal-header"]'));
}
