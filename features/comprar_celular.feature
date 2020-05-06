#language: es

Característica: Comprar celular en demoblaze

  Para aprender a usar Serenity/JS con Cucumber y Protractor
  Como desarrollador curioso
  Me gustaria ver un ejemplo

  Esquema del escenario: Observar mensaje de compra, al comprar un celular
    Dado que Camilo añade al carrito el celular mas <Rango de precio>
    Cuando el ingresa sus datos personales para realizar la compra
      | Nombre                   | Pais     | Ciudad   | Tarjeta de credito | Mes  | Ano  |
      | Juan Camilo Murcia Ramos | Colombia | Medellin | 1234098734568976   | Mayo | 2020 |
    Entonces el observa un modal con el mensaje: Thank you for your purchase!

    Ejemplos:
      | Rango de precio |
      | costoso         |
      | economico       |
