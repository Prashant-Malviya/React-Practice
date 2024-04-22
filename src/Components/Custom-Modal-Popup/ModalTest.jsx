import React, { useState } from "react";
import Modal from "./Modal";

function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose(){
    setShowModalPopup(false);
  }

  return (
    <div className="my-5">
      <button onClick={handleToggleModalPopup} className="px-4 py-3 m-8 bg-blue-600 text-white font-bold text-3xl hover:scale-x-110 hover:bg-blue-900">Open Modal Popup</button>
      {showModalPopup && <Modal onClose={onClose}
      id={'custom-id'}
       body={<div>this is customised body </div>} 
        header={<h1>Customized h1</h1>}
        footer={<h1>Customized footer</h1>}
      />}
    </div>
  );
}

export default ModalTest;
