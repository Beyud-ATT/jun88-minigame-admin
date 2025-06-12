import { Modal } from "antd";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  forwardRef,
  useImperativeHandle,
  cloneElement,
  isValidElement,
} from "react";
import { MdClose } from "react-icons/md";

const ModalContext = createContext();

const CompoundModal = forwardRef(
  ({ children, defaultOpen = false, onOpenChange }, ref) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const openModal = useCallback(() => {
      setIsOpen(true);
      onOpenChange?.(true);
    }, [onOpenChange]);

    const closeModal = useCallback(() => {
      setIsOpen(false);
      onOpenChange?.(false);
    }, [onOpenChange]);

    const toggleModal = useCallback(() => {
      const newState = !isOpen;
      setIsOpen(newState);
      onOpenChange?.(newState);
    }, [isOpen, onOpenChange]);

    useImperativeHandle(
      ref,
      () => ({
        open: openModal,
        close: closeModal,
        toggle: toggleModal,
        isOpen,
      }),
      [openModal, closeModal, toggleModal, isOpen],
    );

    const contextValue = useMemo(
      () => ({
        isOpen,
        openModal,
        closeModal,
        toggleModal,
      }),
      [isOpen, openModal, closeModal, toggleModal],
    );

    return (
      <ModalContext.Provider value={contextValue}>
        {children}
      </ModalContext.Provider>
    );
  },
);

const ModalTrigger = forwardRef(
  ({ children, render, asChild = false, ...props }, ref) => {
    const { openModal } = useModal();

    if (render) {
      return render(openModal);
    }
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        ...props,
        ref,
        onClick: (e) => {
          children.props.onClick?.(e);
          openModal();
        },
      });
    }

    return (
      <button ref={ref} onClick={openModal} {...props}>
        {children}
      </button>
    );
  },
);

const ModalContent = forwardRef(
  ({ children, onClose, showCloseIcon = true, closeIcon, ...rest }, ref) => {
    const { isOpen, closeModal } = useModal();

    const handleClose = useCallback(() => {
      onClose?.();
      closeModal();
    }, [onClose, closeModal]);

    return (
      <Modal
        ref={ref}
        destroyOnClose
        open={isOpen}
        onCancel={handleClose}
        footer={null}
        closeIcon={
          showCloseIcon
            ? closeIcon || <MdClose className="text-2xl !text-gray-700" />
            : null
        }
        classNames={{ content: "!bg-[var(--background-color)]" }}
        {...rest}
      >
        {children}
      </Modal>
    );
  },
);

function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a CompoundModal");
  }
  return context;
}

CompoundModal.Trigger = ModalTrigger;
CompoundModal.Content = ModalContent;

export { CompoundModal, useModal };
