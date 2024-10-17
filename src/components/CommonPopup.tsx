import React, { useRef, Fragment } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { FaXmark } from "react-icons/fa6";

const CommonPopup = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  disableCloseIcon,
  heightwidth,
}: any) => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  const cancelButtonRef = useRef(null);
  return (
    <>
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={onClose}
        >
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </TransitionChild>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <DialogPanel
                  className={classNames(
                    heightwidth ? heightwidth : "",
                    "relative transform  rounded-lg bg-white  text-left shadow-xl transition-all p-6 "
                  )}
                >
                  <div className="sm:flex sm:items-start w-full">
                    <div className="text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                      <DialogTitle className="text-lg font-semibold leading-6 text-gray-900 mb-6">
                        <div className="flex justify-between">
                          <span className="text-[color:var(--gray-900,#101828)] text-xl not-italic font-semibold leading-[30px]">
                            {title}
                          </span>
                          <div className=" ">
                            {!disableCloseIcon && (
                              <FaXmark
                                className="h-6 w-6 border-none rounded-md cursor-pointer"
                                aria-hidden="true"
                                onClick={onClose}
                              />
                            )}
                          </div>
                        </div>
                        <div className="text-sm">{subtitle}</div>
                      </DialogTitle>
                      <div className="mr-5">{children}</div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CommonPopup;
