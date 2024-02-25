import React, { useState } from "react";
import Modal from "./Modal";

import close from'../../assets/image/close.svg';
import upload from'../../assets/image/upload.svg';

type Props = {
  open: boolean,
  fileInputError: boolean,
  idNumber: string,
  idNumberError: string,
  imageSrc: any,
  onCloseFormThaiIDCard: () => void,
  onChang: (e: any) => void,
  onSubmit: () => void,
  hendelUploadFile: (e: any) => void,
}

const ModalThaiIDCard = ({open, idNumber, idNumberError, fileInputError, imageSrc, onCloseFormThaiIDCard, onChang, hendelUploadFile, onSubmit}: Props) => {

  return (
    <Modal open={open}>
    <div className="bg-white px-12 py-12">
      <div className="absolute top-5 right-5 mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center sm:mx-0 sm:h-10 sm:w-10 cursor-pointer">
        <img src={close} alt="close" onClick={onCloseFormThaiIDCard} />
      </div>
      <div className="sm:flex sm:items-start px-2 py-2">
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <div className="text-[32px] text-[#212121] font-bold" id="modal-title">
            <p>Verify your Thai</p>
            <p>National ID</p>
          </div>
          <div className="mt-2">
            <p className="text-md text-gray-500">We’ll check your information and authenticate you within 5 -7 days.</p>
          </div>
          <div>
          <div id="form">
            <div className="space-y-12">
              <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
                <div className="sm:col-span-full">
                  <label htmlFor="idNumber" className="block text-sm font-medium text-[#212121]">
                    Thai National ID number <span className="text-[#B71C1C]">*</span>
                  </label>
                  <div className="mt-2">
                    <div className={`h-12 max-w-lg flex rounded-xl shadow-sm ring-1 ring-inset ring-gray-300`}>
                      <input 
                        onChange={(e) => onChang(e)}
                        value={idNumber}
                        type="text" id="idNumber" autoComplete="idNumber" 
                        placeholder="Fill your Thai National ID number" 
                        className={`${ idNumberError !== '' ? 'border border-red-700 text-red-700 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 ' : 'border border-[#E0E0E0] text-[#9E9E9E]'} text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`} required />
                    </div>
                    <span className="text-red-700 text-xs ml-1">
                      {idNumberError !== '' && idNumberError}
                    </span>
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="cover-photo" className="block text-sm font-medium text-[#212121]">
                  Thai National ID card Photo <span className="text-[#B71C1C]">*</span>
                  </label>
                  {imageSrc ? 
                    <div className="relative h-[200px] w-full rounded-lg cursor-pointer">
                      <img className='h-full w-full max-w-full rounded-lg object-cover' src={imageSrc} alt='imageURL' />
                      <label htmlFor="drop-file"  className="absolute right-4 bottom-4">
                        <img src={upload} alt='buttonPhoto' />
                        <input id="drop-file" type="file" className="hidden" onChange={(e) => hendelUploadFile(e)} />
                      </label>
                    </div>:
                    <>
                    <div className={`mt-2 h-[200px] flex justify-center items-center rounded-lg px-6 py-10 border border-dashed ${fileInputError ? 'border-red-700' : 'border-gray-900/25' }`}>
                      <div className="text-center">
                        <div className="mt-4 text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-lg bg-white font-semibold"
                          >
                            <div className="w-full h-9 rounded-full bg-[#A67E59] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#a19386] flex justify-center items-center">
                              <p>
                                <img src={upload} alt="" />
                              </p>
                              <p className="text-[#FFFCFA] text-base ml-2">
                                Upload
                              </p>
                            </div>
                            <input id="file-upload" type="file" className="hidden" onChange={(e) => hendelUploadFile(e)} />
                          </label>
                        </div>
                        <p className="text-base text-[#212121] mt-3">or Drag photo here</p>
                      </div>
                    </div>
                    <span className="text-red-700 text-xs ml-1">
                      {fileInputError && 'Please Thai National ID card Photo'}
                    </span>
                    </>
                  }
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-x-6">
              <button
                onClick={() => onSubmit()}
                type="submit"
                className="w-full h-12 rounded-full bg-[#A67E59] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#a19386]"
              >
                <span className="text-[#FFFCFA] text-base">Verify</span>
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </Modal>
  );
};

export default ModalThaiIDCard;