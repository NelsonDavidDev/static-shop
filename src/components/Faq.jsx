function Faq() {
  return (
<div className="pb-10 flex flex-col items-center">
  <h2 className="text-xl font-semibold mb-5">Preguntas Frecuentes</h2>
  <div className="flex flex-col w-full max-w-xl">
  <details className="mb-4">
      <summary className="cursor-pointer">¿Cómo puedo realizar un pedido en su tienda en línea?</summary>
      <p className="ml-4 mt-2">Agrega tus productos al carrito, da clic en comprar, se mostrará un recuadro con los detalles de tu pedido, envíanos los detalles de tu pedido junto a tu dirección por WhatsApp y te responderemos con la cotización del domicilio y la fecha de entrega.<br/>
        También puedes recoger tu pedido en nuestras bodegas, si escoges esta opción, se acordará una cita para recojas tu pedido.</p>
    </details>
    <details className="mb-4">
      <summary className="cursor-pointer">¿Cuál es el horario de atención?</summary>
      <p className="ml-4 mt-2">Nuestro horario de atención es de lunes a viernes de 9:00 am a 5:00 pm.</p>
    </details>

    <details className="mb-4">
      <summary className="cursor-pointer">¿Cómo puedo contactarlos?</summary>
      <p className="ml-4 mt-2">Puedes contactarnos a través de nuestro correo electrónico LaUnica.Aseo@gmail.com o en nuestro WhatSapp +57 324 570 86 07.</p>
    </details>

    <details className="mb-4">
      <summary className="cursor-pointer">¿Cuáles son las opciones de envío?</summary>
      <p className="ml-4 mt-2">Hacemos envíos a todo Medellín, envíanos los detalles de tu pedido junto a tu dirección por WhatsApp y te responderemos con la cotización del domicilio y la fecha de entrega. <br/>
        También puedes recoger tu pedido en nuestras bodegas, si escoges esta opción, se acordará una cita para recojas tu pedido.</p>
    </details>

    <details className="mb-4">
      <summary className="cursor-pointer">¿Cuáles son los métodos de pago aceptados?</summary>
      <p className="ml-4 mt-2">Una vez acordado el pedido y el metodo de entrega, se te enviará un link de pago por PSE.</p>
    </details>

    <details className="mb-4">
      <summary className="cursor-pointer">¿Ofrecen envío gratuito?</summary>
      <p className="ml-4 mt-2">Si compras 40 docenas o más de cualquier producto, el envío será gratuito (Solo Medellín).</p>
    </details>

    <details className="mb-4">
      <summary className="cursor-pointer">¿Cuánto tiempo tarda en llegar mi pedido?</summary>
      <p className="ml-4 mt-2">El tiempo de entrega depende de la cantidad de productos comprados, recuerda que somos frabricantes y debes darnos tiempo para elaborar tus productos.<br/>
        Te diremos la fecha de entrega cuando nos envies los detalles del pedido. (Antes de que realices el pago)</p>
    </details>

    <details className="mb-4">
      <summary className="cursor-pointer">¿Tienen una tienda física donde puedo ver los productos personalmente?</summary>
      <p className="ml-4 mt-2">No tenemos tienda física, pero podemos llevar muestras de los productos a tu negocio o casa, puedes agendar una cita via WhatsApp</p>
    </details>

  </div>
</div>
  );
}

export default Faq;
