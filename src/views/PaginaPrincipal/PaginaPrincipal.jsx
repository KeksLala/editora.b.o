import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import Image from 'next/image'; 
import Styles from './PaginaPrincipal.module.scss';
import { useRouter } from 'next/router'; 

export default function PaginaPrincipal() {
  const router = useRouter(); 
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLogoVisible, setIsLogoVisible] = useState(false); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const validEmail = 'editoraBo@gmail.com';
  const validPassword = 'CasoIrmaosNaves';

  const handleLogin = (event) => {
    event.preventDefault();
    if (email === validEmail && password === validPassword) {
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/land-page'); 
    } else {
      setLoginError('Email ou senha incorretos');
    }
  };

  // Função chamada quando a animação do livro termina
  const handleAnimationComplete = () => {
    setIsLogoVisible(true); // Mostra a logo após a animação
    setTimeout(() => {
      setIsLogoVisible(false); // Esconde a logo após 3 segundos
      setTimeout(() => {
        setIsModalVisible(true); // Mostra o modal depois de mais 1 segundo
      }, 0); // Tempo para o fade-out da logo
    }, 2000); // Tempo que a logo fica visível (3 segundos)
  };

  return (
    <div className={Styles.background}>
    <div className={Styles.book}>
      <Player
        autoplay
        loop={false}
        src="/animations/book-animation.json"
        style={{ height: '400px', width: '400px' }}
        onEvent={(event) => {
          if (event === 'complete') {
            handleAnimationComplete();
          }
        }}
      />
    </div>

    {isLogoVisible && (
      <div className={Styles.logo}>
        <Image src="/images/logo.png" alt="Logo do Projeto" width={600} height={400} />
      </div>
    )}

    {isModalVisible && (
      <div className={Styles.modalOverlay}>
        <div className={Styles.modal}>
          <div className={Styles.modalHeader}>
            <h2>Login</h2>
            <button className={Styles.closeButton} onClick={() => setIsModalVisible(false)}>
              &times;
            </button>
          </div>
          <div className={Styles.modalBody}>
            <form onSubmit={handleLogin}>
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
              </label>
              <label htmlFor="password">
                Senha
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Senha"
                  required
                />
              </label>
              {loginError && <p className={Styles.errorMessage}>{loginError}</p>}
              <button type="submit" className={Styles.submitButton}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    )}
  </div>
);
}