import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/logo.svg';
import profile from '/profile.svg';
import styles from './Header.module.css';
import PostModal from '../PostModal/PostModal';

export default function Header({ onAddPost }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to="/">
                    <img src={logo} alt={'logo'} />
                </Link>
            </div>

            <div className={styles.headerButtons}>
                <button
                    onClick={handleClick}
                    style={{
                        border: '1.85px solid black',
                        marginRight: '2.7rem',
                        padding: '0.8rem 0.8rem',
                        borderRadius: '50px',
                    }}
                >
                    Добавить Пост
                </button>
                <Link to="/profile">
                    <button className={styles.button}>
                        <img src={profile} alt="Профиль" />
                    </button>
                </Link>
            </div>
            {isModalOpen && <PostModal onClose={handleClose} onAddPost={onAddPost} />}
        </header>
    );
}