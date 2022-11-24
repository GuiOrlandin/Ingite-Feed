import { ThumbsDown, ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface commentProps {
  content: string,
  onDeleteComment: ((comment: string) => void)
}


export function Comment({ content, onDeleteComment }:commentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeCount (){
    setLikeCount(likeCount + 1)
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/GuiOrlandin.png" alt=""/>

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

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={20} />
            </button>
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
