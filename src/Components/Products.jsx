import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { addToCart } from "./Carrito";

export default function Productos({ productos = [] }) {
  return (
    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 container-card">
      {productos.map((item, index) => (
        <Card className="card-component pb-0 py-4" shadow="md" key={index}>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start gap-2">
            <p className="text-[17px] uppercase font-bold" id="product-title">
              {item.title}
            </p>
            <p className="text-default-500 text-md" id="product-price">
              {item.price}
            </p>
            <p className="font-bold text-md" id="product-category">
              {item.category}
            </p>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <center>
              <Button
                radius="none"
                className="boton-compra my-[5%] bg-black text-white hover:bg-[#3f8a77] transition-all duration-500"
                variant="shadow"
                onClick={() => addToCart(item)}
              >
                Add to cart
              </Button>
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={item.image}
                width={190}
                id="product-img"
              />
            </center>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};