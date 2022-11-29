import { ThumbsUp, Trash } from "phosphor-react";
import Modal from "react-modal";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { DeleteCommentModal } from "./DeleteCommentModal";

interface commentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

Modal.setAppElement("#root");

export function Comment({ content, onDeleteComment }: commentProps) {
  const [likeCount, setLikeCount] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeCount() {
    setLikeCount(likeCount + 1);
  }
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/GuiOrlandin.png"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme Orlandin</strong>
              <time
                title="19 de novembro de 2022 às 04:44:10"
                dateTime="2022-11-19 04:44:10"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <div>
              <button onClick={handleOpenModal} title="Deletar comentário">
                <Trash size={20} />
              </button>
              {modalIsOpen && (
                <DeleteCommentModal
                  cancel={handleCloseModal}
                  confirm={handleDeleteComment}
                  modalIsOpen={modalIsOpen}
                />
              )}
            </div>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp size={24} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
