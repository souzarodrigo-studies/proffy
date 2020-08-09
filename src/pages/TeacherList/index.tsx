import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponiveis.">
                <form id="search-teachers">
                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Quimica', label: 'Quimica' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Fisica', label: 'Fisica' },
                            { value: 'Matematica', label: 'Matematica' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Historia', label: 'Historia' },
                            { value: 'Portugues', label: 'Portugues' },
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sabado' },
                        ]}
                    />
                    <Input type="time" name="time" label="Horario" />
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
