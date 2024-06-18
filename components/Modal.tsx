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
        } bg-[#18181b]/50 backdrop-blur-[1px] w-full fixed top-0 left-0 h-full flex min-h-screen justify-center items-center z-[9999999999]`}
      >
        {/* modal */}
        <div className="bg-[#1D1C20] rounded-[0.625rem] p-6 xl:p-8 pt-10 w-[90%] md:w-full h-fit max-h-[90vh] overflow-y-auto max-w-[45rem]">
          <div className="flex justify-between text-white">
            <h1 className="tracking-[-0.015rem] text-xl md:text-2xl">
              {modalHeader}
            </h1>
            <i
              onClick={() => {
                toggleModal?.();
                document.body.style.overflow = "unset";
              }}
              className="ri-close-line text-white mr-[2.13rem] cursor-pointer text-2xl md:text-3xl font-medium"
            ></i>
          </div>
  
          {children}
        </div>
      </main>
    );
  }