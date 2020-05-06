import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class DemoblazeHomePage {
    static btnCelulares = Target.the('Boton celulares del menu categorias').located(by.cssContainingText('#itemc', 'Phones'));
    static tajetasCelulares = Target.all('Lista de productos').located(by.css('.card-block'));
    static btnAnadirCarrito = Target.the('Boton añadir al carrito el producto seleccionado').located(by.cssContainingText('.btn-success', 'Add to cart'));
    static cntProductos = Target.the('Contenedor de la informacion de los productos').located(by.className('card-block'));
}
