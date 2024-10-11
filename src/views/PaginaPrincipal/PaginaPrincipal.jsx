import react from 'react';
import {Row, Col, Modal} from 'antd';
import Image from 'next/image';
import Styles from './PaginaPrincipal.scss'

export default function PaginaPrincipal() {
    return (
        <div class={Styles.background}>
        <p>TESTE DE RENDERIZAÇÃO</p>
        </div>
    );
}
