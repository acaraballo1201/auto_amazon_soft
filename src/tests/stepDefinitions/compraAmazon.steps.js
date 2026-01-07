const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

const { LoginAmazon } = require('../../main/tasks/LoginAmazon');
const { OpenUrl } = require('../../main/tasks/OpenUrl');
const { Urls } = require('../../main/utils/enums/Urls');
const { SeleccionarProducto } = require('../../main/tasks/SeleccionarProducto');
const { ProductosEnCarrito } = require('../../main/questions/ProductosEnCarrito');

Given(
  'que el actor se autentica en Amazon con usuario {string} y clave {string}',
  async function (usuario, clave) {
    await this.actor.attemptsTo(
      LoginAmazon.withCredentials(usuario, clave)
    );
  }
);

Given(
  'que el actor abre la la aplicacion web de Amazon',
  async function () {
    await this.actor.attemptsTo(
      OpenUrl.at(Urls.AMAZON_BASE)
    );
  }
);

When(
  'el realiza la seleccion de los productos {string}',
  async function (producto) {
    await this.actor.attemptsTo(
      SeleccionarProducto.conNombre(producto)
    );
  }
);

Then('el podra verlos en el carrito de compra', async function () {
  const checkoutDisponible = await this.actor.answers(
    ProductosEnCarrito.checkoutDisponible()
  );

  assert.ok(
    checkoutDisponible,
    'El botón de checkout no está disponible en el carrito'
  );
});