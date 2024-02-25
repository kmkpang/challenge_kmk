import React, { useState } from "react";
import Modal from "./Modal";

import close from'../../assets/image/close.svg';
import check from'../../assets/image/check-circle.svg';

type Props = {
  openModalSuscess: boolean,
  onCloseModalSuscess: () => void,
}

const ModalVerifySuccess = ({openModalSuscess,  onCloseModalSuscess}: Props) => {

  return (
    <Modal open={openModalSuscess}>
    <div className="bg-white px-12 py-12">
      <div className="absolute top-5 right-5 mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center sm:mx-0 sm:h-10 sm:w-10 cursor-pointer">
        <img src={close} alt="close" onClick={onCloseModalSuscess} />
      </div>
      <div className="sm:flex sm:items-start px-2 py-2">
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <div className="w-20 h-20 bg-[#F1F8E9] flex items-center justify-center rounded-full">
            <img src={check} alt="check" />
          </div>
          <div className="text-[32px] text-[#212121] font-bold mt-4" id="modal-title">Verification success</div>
          <div className="mt-1">
            <p className="text-md text-gray-500">Let’s explore to the Platform, and thank you for your verification</p>
          </div>
          <div className="mt-6 flex items-center gap-x-6">
              <button
                onClick={onCloseModalSuscess}
                type="submit"
                className="w-full h-12 rounded-full bg-[#A67E59] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#a19386]"
              >
                <span className="text-[#FFFCFA] text-base">Continue to Prop</span>
              </button>
            </div>
        </div>
      </div>
    </div>
  </Modal>
  );
};

export default ModalVerifySuccess;