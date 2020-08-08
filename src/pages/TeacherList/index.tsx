import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';
import TeacherItem from '../../components/TeacherItem';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponiveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Materia</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Horario</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>

            <main>
                <TeacherItem
                    NomeProffy="Rodrigo Santos"
                    ImagemProffy="https://avatars3.githubusercontent.com/u/31740435?s=460&u=04dc45253af26ee97beee719d09d6032b1b37fb4&v=4"
                    MateriaProffy="Fisica"
                    PrecoProffy="R$100,00"
                    DescricaoProffy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius arcu mi, ac pulvinar diam consequat vitae. Nulla varius, leo et feugiat ornare, purus metus sodales enim, sed accumsan neque odio vel nisl. Vestibulum elementum odio vitae nulla aliquam egestas. Mauris in commodo sapien, at vehicula ligula. Vivamus porttitor nisi eu purus rutrum, et pellentesque neque suscipit. Aliquam mattis varius tortor id varius. Vivamus id dolor fringilla, vehicula metus non, blandit nibh. Cras rhoncus augue vel lectus vehicula egestas. Vivamus vestibulum nec eros vitae accumsan."
                />
            </main>
        </div>
    );
}

export default TeacherList;
