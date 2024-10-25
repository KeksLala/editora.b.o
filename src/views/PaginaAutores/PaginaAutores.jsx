import React from 'react';
import Styles from './PaginaAutores.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Col, Divider, Row } from 'antd';

export default function PaginaAutores() {
    const router = useRouter();
  const autores = [
    {
      nome: "Suianne Souza",
      imagem: "/images/autor1.jpg", // Substitua pela imagem correta
    },
    {
      nome: "Anna Franco",
      imagem: "/images/autor3.jpg", // Substitua pela imagem correta
    },
    {
      nome: "Lucas Reis",
      imagem: "/images/autor2.jpg", // Substitua pela imagem correta
    }
  ];

  return (
    <>
      <div className={Styles.paginaAutores}>
        <Divider />
        <Row gutter={[16, 16]} justify="center">
          {autores.map((autor, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6} className={Styles.autorCard}>
              <div className={Styles.card}>
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
      </div>
    </>
  );
}
