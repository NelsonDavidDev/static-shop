function Faq() {
  return (
    <div className="pb-10 flex flex-col items-center ">
        <h2 className="text-xl font-semibold mb-5">Preguntas Frecuentes</h2>
        <div className="flex flex-col">
      <details>
        <summary>¿Cuál es el horario de atención?</summary>
        <p>
          Nuestro horario de atención es de lunes a viernes de 9:00 am a 5:00
          pm.
        </p>
      </details>

      <details>
        <summary>¿Cómo puedo contactarlos?</summary>
        <p>
          Puedes contactarnos a través de nuestro correo electrónico
          LaUnica.Aseo@gmail.com o en nuestro WhatSapp +57 324 570 86 07 .
        </p>
      </details>

      <details>
        <summary>¿Cuáles son las opciones de envio?</summary>
        <p>
          Hacemos envios a todo medellín, envianos los detalles de tu pedido junto a tu dirección por WhatsApp y te responderemos con la cotización del domicilio y la fecha de entrega. <br/>
          También puedes recoger tu pedido en nuestras bodegas, si escoges esta opción, se te agendará una cita para recoger tu pedido.
        </p>
      </details>
      </div>
    </div>
  );
}

export default Faq;
