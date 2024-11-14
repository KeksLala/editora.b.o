import React, { useState, useEffect } from 'react';
import Styles from './PaginaSecundaria.module.scss';
import { FaBars, FaTimes, FaUser, FaSignOutAlt } from 'react-icons/fa'; 
import Image from 'next/image'; 
import { useRouter } from 'next/router';  
import { PiMagnifyingGlassFill } from "react-icons/pi";

export default function PaginaSecundaria() {
  const router = useRouter();  

  useEffect(() => {
    // Verifica se o usuário está autenticado ao tentar acessar a página
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      router.push('/'); 
    }
  }, [router]);  

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); 
    router.push('/'); 
  };

  const books = [
    '/images/casoIrmaos/capa.svg', '/images/livro1.png', '/images/livro2.png', '/images/livro3.png', '/images/livro4.png',
    '/images/livro5.png', '/images/livro6.png', '/images/livro7.png', '/images/livro8.png', '/images/livro9.jpg',
    '/images/livro10.jpg', '/images/livro11.jpg', '/images/livro12.jpg', '/images/livro13.jpg', '/images/livro14.jpg',
    '/images/livro15.jpg', '/images/livro16.jpg', '/images/livro17.jpg', '/images/livro18.jpg', '/images/livro19.jpg',
    '/images/livro20.jpg', '/images/livro21.jpg', '/images/livro22.jpg', '/images/livro23.jpg', '/images/livro24.jpg',
  ];

  return (
    <>
      <div className={Styles.paginaSecundaria}>
        <div className={Styles.menuToggle} onClick={toggleMenu}>
          {isMenuVisible ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <div className={`${Styles.menu} ${isMenuVisible ? Styles.show : ''}`}>
          <div className={Styles.menuItemPerfil} onClick={() => router.push('/perfil')}>
            <FaUser style={{ marginRight: '8px' }} />
            Visualizar Perfil
          </div>
          <div className={Styles.menuItemSobreNos} onClick={()=> router.push('/sobre-nos')}>
            <PiMagnifyingGlassFill style={{ marginRight: '8px' }} />
            Sobre nós
          </div>
          <div className={Styles.menuItemSair} onClick={handleLogout}>
            <FaSignOutAlt style={{ marginRight: '8px' }} />
            Sair
          </div>
        </div>
      </div>
      <div className={Styles.booksSection}>
        {books.slice(0, 25).map((book, index) => (
          <div className={Styles.bookImage} key={index}
          onClick={() => {
            if (index === 0) { // Se for o primeiro livro
              router.push('/caso-irmaos-naves');
            }
          }}>
            
            <Image 
              src={book} 
              alt={`Livro ${index + 1}`}
              width={100} 
              height={150}
              layout="responsive"
            />
          </div>
        ))}
      </div>
    </>
  );
}
