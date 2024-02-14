import { Divider } from '@nextui-org/react';

let carrito = [];

export function addToCart(productAdd) {
  for (let item = 0; item < carrito.length; item++) {
    if (carrito[item].title === productAdd.title) {
      let updatedPrice = parseInt(carrito[item].price) + parseInt(productAdd.price);
      carrito[item].price = updatedPrice;
      carrito[item].cantity++;
      return null;
    };
  };
  carrito.push(productAdd);
  return carrito;
};

export function finalizarCompra() {
    if(carrito.length === 0){
        return(
            alert('There are no products in the cart.')
        );
    }
    else{
        carrito = [];
        alert('Purchase completed.')
    };
};

export default function Carrito() {
  const total = () => {
    let totalPago = 0;
    carrito.forEach((item) => {
      const precio = Number(item.price);
      totalPago = totalPago + precio;
    });
    return totalPago;
  };

  return (
    <div className="max-w-md">
      <div className="space-y-1">
        {carrito.map((item, index) => (
          <div key={index} className="flex ">
            <img src={item.image} alt="" width={50} />
            <div className="flex justify-end">
              <h4 className="titulo-total text-small font-bold ml-[20px]">{item.title}</h4>
              <p className="precio-parrafo ml-[20px]">${item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <Divider className="my-4" />

      <div className="total1" id="total1">
        <div className="parrafo4 flex justify-between">
          <p className="parrafo4 font-bold">Total:</p>
          <span id="total" className="total justify-between">
            ${total()}
          </span>
        </div>
      </div>
    </div>
  );
};