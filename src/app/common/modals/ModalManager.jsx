import React from "react";
import { useSelector } from "react-redux";
import TestModal from "../../../fetures/sandox/TestModal";

export default function ModalManager() {
  const modalLookup = { TestModal };
  const currentModal = useSelector((state) => state.modals);
  console.log("currentModal", currentModal);
  let renderedModal;
  if (currentModal) {
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderedModal = <ModalComponent {...modalProps} />;
  }
  return <span>{renderedModal}</span>;
}
