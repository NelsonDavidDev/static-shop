// eslint-disable-next-line react/prop-types
function BuyNow({ setBuyNowModal, mensaje, total }) {
  return (
    <div
      className="fixed h-full inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center "
      onClick={() => setBuyNowModal(false)}
    >
      <div className="flex justify-center flex-col items-center bg-white rounded-lg m-auto"
      onClick={(e) => {
        e.stopPropagation();
      }}>
        <div className="font-bold text-xl text-center m-5">
          Copia los detalles de tu pedido y envianoslo por&nbsp;
          <a className="text-green-600" href={`https://wa.me/573245708607`}
          target="_blank">
            WhatsApp&nbsp;
          </a>
          junto a tu dirección. <br /> Te responderemos con la cotización del
          domicilio.
        </div>
        <div className="mb-10" style={{ whiteSpace: "pre-line" }}>
          {mensaje} Total: {total.toLocaleString("es-CO")}
        </div>
      </div>
    </div>
  );
}

export default BuyNow;
