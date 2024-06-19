import { useGlobalProvider } from '@/context/GlobalProvider';
import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode;
  };

  export default function Modal({ children, modalHeader }: ModalProps) {
    const { showModal, toggleModal } = useGlobalProvider();
  
    return (
      <main
        id="modal"
        className={`${
          showModal ? "block" : "hidden"
        } bg-[#eeee]/50 backdrop-blur-[1px] w-full fixed top-0 left-0 h-full flex min-h-screen justify-center items-center z-[9999999999]`}
      >
        {/* modal */}
        <div className="bg-white rounded-[0.625rem] p-6 xl:p-8 pt-10 w-[90%] md:w-full h-fit max-h-[90vh] overflow-y-auto max-w-[40rem]">
          <div className="flex justify-between">
            <h1 className="tracking-[-0.015rem] font-medium text-xl md:text-2xl">
              {modalHeader}
            </h1>
            <i
              onClick={() => {
                toggleModal?.();
                document.body.style.overflow = "unset";
              }}
              className="ri-close-line text-black cursor-pointer text-2xl md:text-3xl font-medium"
            ></i>
          </div>
  
          {children}
        </div>
      </main>
    );
  }