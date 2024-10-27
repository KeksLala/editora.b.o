import React from 'react';
import Styles from './PaginaPerfil.module.scss';
import Image from 'next/image';
import { Divider } from 'antd';
import { useRouter } from 'next/router';

export default function PaginaPerfil() {
    const router = useRouter();

    // Dados mockados do perfil da Editora B.O
    const perfilEditora = {
        nome: "Editora B.O",
        pronome: "(Ela/Dela)",
        logo: "/images/logo.svg", // Substitua pelo caminho correto da logo
        descricao: "Editora independente focada em histórias e casos marcantes no Brasil, abordando temas de justiça, cultura e história.",
    };

    return (
        <div className={Styles.paginaPerfil}>
            <div className={Styles.perfilContainer}>
                <div className={Styles.perfilHeader}>
                    <Image 
                        src={perfilEditora.logo} 
                        alt={`Logo de ${perfilEditora.nome}`} 
                        width={200} 
                        height={200} 
                        className={Styles.logoEditora}
                    />
                    <div className={Styles.infoContainer}>
                        <h1 className={Styles.nome}>{perfilEditora.nome}</h1>
                        <p className={Styles.pronome}>{perfilEditora.pronome}</p>
                        <p className={Styles.descricao}>{perfilEditora.descricao}</p>
                    </div>
                </div>
                <Divider />
                <div className={Styles.bioSection}>
                    <h2 className={Styles.bioTitulo}>Bio</h2>
                    <p className={Styles.bioTexto}>
                        A Editora B.O é comprometida em trazer temas sociais, históricos e culturais que marcam a realidade brasileira. Com uma linha editorial que valoriza a justiça e a informação, busca impactar o leitor com conteúdos profundos e relevantes.
                    </p>
                </div>
                <button className={Styles.voltarBotao} onClick={() => router.back()}>Voltar</button>
            </div>
        </div>
    );
}
