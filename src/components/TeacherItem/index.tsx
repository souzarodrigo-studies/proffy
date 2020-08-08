import React from 'react';

import { TeacherItemModel } from '../../model/TeacherItemModel';
import whatsapp from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC<TeacherItemModel> = ({
    NomeProffy,
    ImagemProffy,
    DescricaoProffy,
    MateriaProffy,
    PrecoProffy,
}) => {
    return (
        <article className="teacher-item">
            <header>
                <img src={`${ImagemProffy}`} alt="Imagem do proffy" />
                <div>
                    <strong>{NomeProffy}</strong>
                    <span>{MateriaProffy}</span>
                </div>
            </header>

            <p>{DescricaoProffy}</p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>{PrecoProffy}</strong>
                </p>
                <button type="button">
                    <img src={whatsapp} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
};

export default TeacherItem;
