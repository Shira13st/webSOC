import styles from './Post.module.css';

export default function Post({ title, content, name }) {
    return (
        <div className={styles.post}>
            <h3 className={styles.postTitle}>{title}</h3>
            <p className={styles.postContent}>{content}</p>
            <h4 className={styles.postName}>{name}</h4>
        </div>
    );
}