import React from "react";
import { Play } from "./icons/Play";
import Logo from "/logo-movie.png";
import {Modal, ModalContent, ModalBody, useDisclosure, Input, Link} from "@nextui-org/react";

export const ModalTrailer = ({children}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <button onClick={onOpen} className="rounded-full block h-fit w-fit focus:outline-none">
        <Play className="h-20 w-20 text-white text-opacity-80 hover:text-opacity-100 p-3" />
      </button>
      <Modal 
        size="4xl" 
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        classNames={{
          backdrop: "bg-gradient-to-t from-pink-700 to-zinc-900/10 backdrop-opacity-20"
        }}
      >
        <ModalContent className="m-auto max-md:mt-20 text-transparent bg-transparent shadow-none">
          {(onClose) => (
            <>
              <ModalBody>
                {children}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export const ModalLogin = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <button onClick={onOpen}>Iniciar sesión</button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent className="bg-gray2 shadow-lg">
          {(onClose) => (
            <>
              <ModalBody className="py-8">
                <div className="mx-auto mb-3">
                  <img src={Logo} />
                </div>
                <Input
                  autoFocus
                  placeholder="Correo electrónico"
                  variant="bordered"
                  size="sm"
                  className="bg-white text-white my-1 rounded-xl"
                />
                <Input
                  placeholder="Contraseña"
                  type="password"
                  variant="bordered"
                  size="sm"
                  className="bg-white text-white my-1 rounded-xl"
                />
                <div className="flex py-2 px-1 mx-auto justify-between">
                  <Link href="#" size="sm" className="text-gray-200">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
                <button onPress={onClose} className="bg-darkpink w-fit px-20 py-2 rounded-full text-white mx-auto">
                  INGRESAR
                </button>
                <button variant="flat" onPress={onClose} className="text-gray-200">
                  ¿Aún no tienes cuenta? Registrate
                </button>

              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}