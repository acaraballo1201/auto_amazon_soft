# language: es

Característica: Compra en Amazon
  Como usuario de la aplicacion web de amazon 
  Quiero realizar añadir productos al carrito de compras
  Para validar el funcionamiento de sus componentes.

  @con_login
  Esquema del escenario: Añadir producto exitosamente Con login
    Dado que el actor se autentica en Amazon con usuario "<usuario>" y clave "<clave>"
    Cuando el realiza la seleccion de los productos "<producto>"
    Entonces el podra verlos en el carrito de compra

    Ejemplos:
      | usuario                            | clave       | producto       |
      |andres.caraballo@softesting.com     |Prueba123##  | logitech mouse |

  @sin_login
  Esquema del escenario: Añadir producto exitosamente sin login
    Dado que el actor abre la la aplicacion web de Amazon
    Cuando el realiza la seleccion de los productos "<producto>"
    Entonces el podra verlos en el carrito de compra

    Ejemplos:
      | producto       |
      | logitech mouse |

