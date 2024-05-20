import { useState } from "react";
import { createPortal } from "react-dom";
import { FauvoritesModal } from "src/components/FauvoritesModal";

export function useFavouritesModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const Modal = () => {
    return isModalOpen
      ? createPortal(
          <FauvoritesModal closeModal={closeModal} />,
          document.getElementById("overlay")
        )
      : null;
  };

  return {
    showModal,
    Modal,
  };
}
