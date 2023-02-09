import React from "react";
import MyModal from "./ShowModal";
import { useState,useEffect } from "react";
import { IoMail } from "react-icons/io5";
import "./modal.css"

const Modal = ({onToggle}) => {
  const [modal, setModal] = useState(false);
  const closeModal = () => setModal(false);
  useEffect(() => {
    onToggle(modal);
  },[modal]);
  
  return (
    <>
      <button className="btn" onClick={() => setModal(true)} >
        < IoMail />
      </button>

      {modal && <MyModal closeModal={closeModal} />}
    </>
  );
};

export default Modal;
