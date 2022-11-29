import Modal from "react-modal";
import styles from "./DeleteCommentModal.module.css";

interface DeleteCommentProps {
  cancel: () => void;
  confirm: () => void;
  modalIsOpen: boolean;
}

export function DeleteCommentModal({
  cancel,
  confirm,
  modalIsOpen,
}: DeleteCommentProps) {
  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      isOpen={modalIsOpen}
      contentLabel="Example Modal"
    >
      <div className={styles.deleteComment}>
        <h1>Excluir comentário</h1>
        <p>Você tem certeza que gostaria de excluir este comentário?</p>
        <div className={styles.deleteActionsButton}>
          <button onClick={cancel}>Cancelar</button>
          <button onClick={confirm}>Sim, excluir</button>
        </div>
      </div>
    </Modal>
  );
}
