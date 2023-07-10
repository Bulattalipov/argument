import { Modal } from "./Modal";

export default () => {
  const modal = new Modal({
    isOpen: (modal) => {
    },
    isClose: (modal) => {
    },
  });

  window.argument__API.modal = modal;
  // window.argument__API.modal.onOpen("success-modal");
  // window.argument__API.modal.close("success-modal");
};
