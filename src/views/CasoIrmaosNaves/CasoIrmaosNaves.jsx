import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { LeftOutlined, RightOutlined} from '@ant-design/icons';
import Styles from './CasoIrmaosNaves.module.scss';
import { FaBars, FaTimes, FaUser, FaSignOutAlt } from 'react-icons/fa'; 
import { useRouter } from 'next/router';
import { FaBookBookmark } from "react-icons/fa6";

export default function CasoIrmaosNaves() {
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

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: '/images/casoIrmaos/Capa.svg',
      alt: 'Capa do livro',
    },
    {
      image: '/images/casoIrmaos/ContraCapa.svg',
      alt: 'Sobrecapa do livro',
    },
    {
      title: 'Informações',
      content: 'Detalhes sobre o caso dos irmãos Naves.',
    },
    {
      title: 'Sumário',
      content: 'Capítulo 1, Capítulo 2, Capítulo 3, etc.',
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className={Styles.container}>

        <div className={Styles.menuToggle} onClick={toggleMenu}>
          {isMenuVisible ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <div className={`${Styles.menu} ${isMenuVisible ? Styles.show : ''}`}>
          <div className={Styles.menuItemPerfil} onClick={() => router.push('/autores')}>
            <FaUser style={{ marginRight: '8px' }} />
            Visualizar Perfil
          </div>
          <div className={Styles.menuItemBiblioteca} onClick={() => router.push('/land-page')}>
            <FaBookBookmark style={{ marginRight: '8px' }} />
            Biblioteca
          </div>
          <div className={Styles.menuItemSair} onClick={handleLogout}>
            <FaSignOutAlt style={{ marginRight: '8px' }} />
            Sair
          </div>
        </div>



      <div className={`${Styles['navigation-icon']} ${Styles.left}`} onClick={prevSlide}>
        <LeftOutlined />
      </div>

      <div className={Styles['slide-content']}>
        <h3>{slides[currentSlide].title}</h3>

        {slides[currentSlide].image ? (
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].alt}
            width={300}
            height={400}
            className={Styles['image-slide']}
          />
        ) : (
          <p>{slides[currentSlide].content}</p>
        )}
      </div>

      <div className={`${Styles['navigation-icon']} ${Styles.right}`} onClick={nextSlide}>
        <RightOutlined />
      </div>
    </div>
  );
}
