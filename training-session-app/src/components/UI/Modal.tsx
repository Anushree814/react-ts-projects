import {
  ComponentPropsWithoutRef,
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useRef,
} from "react";
import { createPortal } from "react-dom";

interface ModalProps extends ComponentPropsWithoutRef<"dialog"> {
  children: ReactNode;
  onClose: () => void;
}
export interface ModalHandle {
  open: () => void;
}

const Modal = forwardRef<ModalHandle, ModalProps>(function Modal(
  { children, onClose },
  ref
) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        if (dialogRef.current) {
          dialogRef.current.showModal();
        }
      },
    };
  });
  return createPortal(
    <dialog className="modal" ref={dialogRef} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal-root")!
  );
});
export default Modal