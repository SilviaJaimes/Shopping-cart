import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Carrito from './Carrito';
import { finalizarCompra } from './Carrito';

export default function Menu({ titulo1, href1, subtitulo1 }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Navbar className="navbar bg-black" id="navbar">
      <NavbarBrand>
        <p className="titulo font-bold text-white text-[30px]">{titulo1}</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-20" justify="end">
        <NavbarItem className="navbarItem group">
          <Link className="link text-white text-[22px] hover:text-zinc-300" href={href1}>
            {subtitulo1}
          </Link>
          <div className="w-full scale-0 h-[1px] bg-zinc-300 group-hover:scale-100 transition-all duration-500"></div>
        </NavbarItem>
        <NavbarItem>
          <Button onPress={onOpen} className="bg-transparent text-white hover:text-zinc-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </Button>
          <Modal
            backdrop="opaque"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            className={{
              backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
            }}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    ORDER
                    <p id="cantProducts"></p>
                  </ModalHeader>
                  <ModalBody id="container-cart">
                    <Carrito />
                  </ModalBody>
                  <ModalFooter>
                    <Button variant="shadow" className="boton-cerrar bg-black text-white hover:bg-zinc-500" onPress={onClose}>
                      Close
                    </Button>
                    <Button className="boton-comprar bg-[#3f8a77] text-white" id="boton-confirmar" onClick={finalizarCompra}>
                      PROCEED TO CHECKOUT
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};