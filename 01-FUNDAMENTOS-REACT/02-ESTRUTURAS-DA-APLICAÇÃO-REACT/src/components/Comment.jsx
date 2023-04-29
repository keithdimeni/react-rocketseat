import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"
import { useState } from "react"

export function Comment({content, onDeleteComment}) {

  const [likeComment, setLikeComment] = useState(0)
  
  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeComment((state) => {
      return state + 1
    })
  }



  return (
    <div className={styles.comment}>
      <Avatar 
        hasBorder={false} 
        src="https://scontent.fcgh65-1.fna.fbcdn.net/v/t1.6435-9/97372700_2691515441093526_2391617607808581632_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=CPrAptjFcoMAX9-26OB&_nc_ht=scontent.fcgh65-1.fna&oh=00_AfD8Jcovbei6DgfDVavXFvH3NjO1qCpR04n0vPR-iyMA4A&oe=646908C5" 
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorInfoAndTime}>
              <strong>Keith Dimeni</strong><br />
              <time title="11 de Maio às 08:13h" dateTime="2023-05-11 08:13:38">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeComment}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}