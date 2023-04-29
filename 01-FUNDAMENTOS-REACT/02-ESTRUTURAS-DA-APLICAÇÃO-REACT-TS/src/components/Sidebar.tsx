import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"/>

      <div className={styles.profile}>
        <Avatar src="https://scontent.fcgh65-1.fna.fbcdn.net/v/t1.6435-9/97372700_2691515441093526_2391617607808581632_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=CPrAptjFcoMAX9-26OB&_nc_ht=scontent.fcgh65-1.fna&oh=00_AfD8Jcovbei6DgfDVavXFvH3NjO1qCpR04n0vPR-iyMA4A&oe=646908C5" />
        <strong>Maurício Dimeni</strong>
        <span>Founder & CEO</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}