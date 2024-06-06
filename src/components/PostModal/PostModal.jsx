import { useState } from 'react';
import styles from './PostModal.module.css';

function PostModal({ onClose, onAddPost }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [name, setName] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [contentError, setContentError] = useState(false);
    const [nameError, setNameError] = useState(false);

    const handleAddPost = () => {
        if (!title.trim()) {
            setTitleError(true);
            return;
        }
        if (!content.trim()) {
            setContentError(true);
            return;
        }
        if (!name.trim()) {
            setNameError(true);
            return;
        }

        onAddPost({ title, content, name});
        onClose();
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        setTitleError(false);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
        setContentError(false);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
        setNameError(false);
    };

    return (
        <div className={styles.modalBackdrop}>
            <div className={styles.modalContent}>
                <h2>Добавить Пост</h2>
                <input
                    type="text"
                    placeholder="Заголовок"
                    value={title}
                    onChange={handleTitleChange}
                    style={{border: titleError ? '2px solid red' : null}}
                />
                <textarea
                    placeholder="Текст поста"
                    value={content}
                    onChange={handleContentChange}
                    style={{border: contentError ? '2px solid red' : null}}
                />
                <input
                    type="text"
                    placeholder="Имя"
                    value={name}
                    onChange={handleNameChange}
                    style={{border: nameError ? '2px solid red' : null}}
                />
                <button onClick={handleAddPost}>Добавить</button>
                <button onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
}

export default PostModal;
