import React from 'react';

import { TeacherItemModel } from '../../model/TeacherItemModel';
import whatsapp from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

const TeacherItem: React.FC<TeacherItemModel> = ({ teacher }) => {
    function createNewConnection() {
        api.post('connections', { user_id: teacher.id });
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={`${teacher.avatar}`} alt={teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>{teacher.bio}</p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ {teacher.cost}</strong>
                </p>
                <a
                    onClick={createNewConnection}
                    href={`https://wa.me/${teacher.whatsapp}`}
                >
                    <img src={whatsapp} alt="Whatsapp" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
};

export default TeacherItem;
