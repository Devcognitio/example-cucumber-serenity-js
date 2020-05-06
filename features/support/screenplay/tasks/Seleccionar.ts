import {Duration, Task} from '@serenity-js/core';
import {Click, isClickable, isVisible, Wait} from '@serenity-js/protractor';
import {DemoblazeHomePage} from '../ui';
import {Filtrar} from '../interactions';
import {Check} from '@serenity-js/assertions';

export const Seleccionar = {
    elProducto: (rangoPrecio: string) =>
        Task.where(`#actor escoge el producto mas economico`,
            Click.on(DemoblazeHomePage.btnCelulares),
            Wait.for(Duration.ofMilliseconds(3000)),
            Wait.until(DemoblazeHomePage.cntProductos, isVisible()),
            Filtrar.elProducto(DemoblazeHomePage.tajetasCelulares, rangoPrecio),
            Check.whether(DemoblazeHomePage.btnAnadirCarrito, isClickable())
                .andIfSo(Click.on(DemoblazeHomePage.btnAnadirCarrito))
        )
};
