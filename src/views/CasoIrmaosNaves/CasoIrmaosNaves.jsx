import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { LeftOutlined, RightOutlined} from '@ant-design/icons';
import Styles from './CasoIrmaosNaves.module.scss';
import { FaBars, FaTimes, FaUser, FaSignOutAlt } from 'react-icons/fa'; 
import { useRouter } from 'next/router';
import { FaBookBookmark } from "react-icons/fa6";
import { PiMagnifyingGlassFill } from "react-icons/pi";

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

  const navigateToPage = (path) => {
    router.push(path);
  };


  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: '/images/casoIrmaos/Capa.png',
      alt: 'Capa do livro',
    },
    {
      title: 'Ficha Catalográfica',
      content: `O caso dos irmãos Naves\n\n
        Editora B.O., 2024\nTexto de acordo com a nova ortografia.\nTítulo Original: O caso dos irmãos Naves, Anna Franco, Lucas Reis e Suianne Souza.\n\n
        Este piloto do livro foi produzido como exigência parcial para a aprovação na disciplina de Projeto Experimental em Comunicação II no sétimo período do curso de Jornalismo da Universidade Federal de Uberlândia. Com a orientação da Profa. Dra. Nicoli Tassis e coorientação da Prof. Dra. Christiane Pitanga.\n
        Primeira edição, outubro de 2024.\nUberlândia, Minas Gerais.\n\nRevisão: Profa. Dra. Nicoli Tassis\nCapa: Yasmin Jaber\nIlustrações: Yasmin Jaber\nProgramação: Kessen Lara Gonçalves de Souza\n\nFranco, Anna, 2003-2024\nReis, Lucas, 2003-2024\nSouza, Suianne, 2003-2024\n\nO caso dos irmãos Naves. Uberlândia: Editora B.O., 2024.\nISBN 000-00-00000-00-0\nTítulo Original: O caso dos irmãos Naves\nCDD: 000.0`,
    },
    {
      title: 'Sumário',
      content: <div>
      1. Prefácio: Entenda o Caso<br />
      2. O mistério do desaparecimento<br />
      &emsp;a. Benedito Pereira<br />
      &emsp;b. Joaquim Naves<br />
      &emsp;c. A cidade<br />
      3. O início das sombras<br />
      &emsp;a. Delegado Ismael<br />
      &emsp;b. Sebastião Naves<br />
      &emsp;c. Tenente Francisco Vieira<br />
      4. A chegada do sopro traiçoeiro<br />
      &emsp;a. Dona Ana Naves<br />
      &emsp;b. Zé Prontidão<br />
      &emsp;c. Tenente Francisco Vieira<br />
      5. Círculo de suspeitas<br />
      &emsp;a. Sebastião Naves<br />
      &emsp;b. Zé Prontidão<br />
      &emsp;c. Dona Ana Naves<br />
      &emsp;d. Tenente Francisco Vieira<br />
      6. Tortura silenciosa<br />
      &emsp;a. Sebastião Naves<br />
      &emsp;b. Joaquim Naves<br />
      &emsp;c. Zé Prontidão<br />
      &emsp;d. Dona Ana Naves<br />
      &emsp;e. Tenente Francisco Vieira<br />
      7. Verdades forçadas<br />
      &emsp;a. Dona Ana Naves<br />
      &emsp;b. Advogado Dr. Alamy<br />
      8. Um sopro de esperança<br />
      &emsp;a. Advogado Dr. Alamy<br />
      &emsp;b. Tenente Francisco Vieira<br />
      9. <span onClick={() => navigateToPage('/capitulo-dez')} style={{ cursor: 'pointer', color: '#fad2af', textDecoration: 'underline' }}>
            A traição que veio de perto
      </span><br/>
      &emsp;a. Guilherme de Malta Sobrinho<br />
      &emsp;b. Tenente Francisco Vieira<br />
      10. O rio da agonia<br />
      &emsp;a. Joaquim Naves<br />
      &emsp;b. Sebastião Naves<br />
      &emsp;c. Tenente Francisco Vieira<br />
    </div>,
    },
    {
      title: 'Sumário ',
      content: `
O peso da rendição
Joaquim Naves
Tenente Francisco Vieira
Farsa encarnada
Joaquim Naves
Tenente Francisco Vieira
Testemunha
Liberdade com correntes invisíveis
Advogado Dr. Alamy
Tenente Francisco Vieira
O golpe final: a denúncia
Advogado Dr. Alamy
Tenente Francisco Vieira
O renascimento do pesadelo
Salvina Naves
Antônia Naves
Tenente Francisco Vieira
O silêncio de Sebastião Naves
Sebastião Naves
Tenente Francisco Vieira
O tribunal das injustiças
Joaquim Naves
Sebastião Naves
Tenente Francisco Vieira
Advogado Dr. Alamy
O labirinto de contradições
Juiz Dr. Arnaldo Moura
Tenente Francisco Vieira
Nova chance no abismo
Advogado Dr. Alamy
Tenente Francisco Vieira
O luto que não cala
Salvina Naves
Jornal Habor
O veredito da injustiça
Advogado Dr. Alamy
Acusação
Tenente Francisco Vieira Francisco Vieira
As batalhas jurídicas
Advogado Dr. Alamy
Acusação
Tenente Francisco Vieira Francisco Vieira
O peso do martelo
Advogado Dr. Alamy
Acusação
Tenente Francisco Vieira Francisco Vieira
A segunda luta pela verdade
Advogado Dr. Alamy
Acusação
Supremo Tribunal Federal
Condenados pelo silêncio
Sebastião Naves
Agente Penitenciário
Liberdade amarga
Joaquim Naves
Sebastião Naves
A vida que não vive
Sebastião Naves
Benedito Pereira
Polícia
Finalmente, a verdade
Advogado Dr. Alamy
Acusação
O resgate do legado
Imprensa
Dona Ana Naves`,
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
          <div className={Styles.menuItemPerfil} onClick={() => router.push('/perfil')}>
            <FaUser style={{ marginRight: '8px' }} />
            Visualizar Perfil
          </div>
          <div className={Styles.menuItemSobreNos} onClick={()=> router.push('/sobre-nos')}>
            <PiMagnifyingGlassFill style={{ marginRight: '8px' }} />
            Sobre nós
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
            width= {400}
            height= {520}
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
