import React, { useState } from 'react';
import Styles from './SobreNos.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Col, Divider, Row } from 'antd'; // Você pode remover o import do Ant Design se não for usar

export default function SobreNos() {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const autores = [
    {
      nome: "Suianne Souza",
      imagem: "/images/autor1.jpg",
      descricao: "Suianne Souza é uma artista e escritora com paixão por histórias de ficção e poesia.",
    },
    {
      nome: "Anna Franco",
      imagem: "/images/autor3.jpg",
      descricao: "Anna Franco é estudante de jornalismo da Universidade Federal de Uberlândia, curiosa por casos criminais e apaixonada pela escrita. Natural da cidade de Uberaba, Anna teve seu primeiro contato com pesquisas sobre histórias de crimes aos 15 anos durante um curso de oratória.",
    },
    {
      nome: "Lucas Reis",
      imagem: "/images/autor2.jpg",
      descricao: "Lucas Samuel é estudante de Jornalismo na Universidade Federal de Uberlândia. Apaixonado pelo audiovisual, ele já estagiou em emissoras de rádio e televisão. Na área da escrita, Lucas possui experiência na produção de matérias sobre economia. No projeto da Editora B.O., atuou como redator.",
    }
  ];

  const showModal = (autor) => {
    setSelectedAuthor(autor);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedAuthor(null);
  };

  return (
    <>
      <div className={Styles.paginaAutores}>
        <Divider />
        <Row gutter={[16, 16]} justify="center">
          {autores.map((autor, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6} className={Styles.autorCard}>
              <div className={Styles.card} onClick={() => showModal(autor)}>
                <p className={Styles.wanted}>WANTED</p>
                <Image 
                  src={autor.imagem} 
                  alt={`Foto de ${autor.nome}`} 
                  width={200} 
                  height={200} 
                  className={Styles.autorImagem}
                />
                <p className={Styles.nome}>{autor.nome}</p>
              </div>
            </Col>
          ))}
        </Row>
        <button className={Styles.voltarBotao} onClick={() => router.back()}>Voltar</button>

        {/* Modal Personalizado */}
        {isModalVisible && (
          <div className={Styles.modalOverlay}>
            <div className={Styles.modal}>
              <div className={Styles.modalHeader}>
                <h2>{selectedAuthor?.nome}</h2>
                <button className={Styles.closeButton} onClick={handleCancel}>
                  &times;
                </button>
              </div>
              <div className={Styles.modalContent}>
                <p>{selectedAuthor?.descricao}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
