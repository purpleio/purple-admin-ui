import { Modal, ModalProps } from "antd";
import { X } from "lucide-react";
import React, { PropsWithChildren } from "react";
import style from "./default-modal.module.css";

interface IDefaultModalProps extends ModalProps {
  handleHide: () => void;
}

const DefaultModal = ({ children, handleHide, title, ...modalProps }: PropsWithChildren<IDefaultModalProps>) => {
  return (
    <Modal footer={null} closable={false} className={style["default-popup"]} {...modalProps} onCancel={handleHide}>
      <button className={style["default-popup-close-btn"]} onClick={handleHide}>
        <X className="w-7 h-7" />
      </button>
      <h3 className={style["default-popup-title"]}>{title}</h3>
      <div className={style["default-popup-content"]}>{children}</div>
    </Modal>
  );
};

export default React.memo(DefaultModal);
