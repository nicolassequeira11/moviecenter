import React from "react";
import { Play } from "./icons/Play";
import {Modal, ModalContent, ModalBody, Button, useDisclosure} from "@nextui-org/react";

export const ModalTrailer = ({children}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="rounded-full focus:outline-none">
        <Play className="h-20 w-20 text-white text-opacity-80 hover:text-opacity-100 p-3" />
      </Button>
      <Modal 
        size="4xl" 
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        classNames={{
          backdrop: "bg-gradient-to-t from-pink-700 to-zinc-900/10 backdrop-opacity-20"
        }}
      >
        <ModalContent className="m-auto max-md:mt-20 text-transparent">
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
