import React from 'react';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';
import PageHeader from '../../components/PageHeader';

import warning from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo e preencher esse formulario de incrição"
            />

            <main>
                <fieldset>
                    <legend>Seus Dados</legend>

                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                    <Textarea name="bio" label="bio" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

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
                    <Input name="cost" label="Custo da sua hora por aula" />
                </fieldset>

                <fieldset>
                    <legend>
                        Horarios disponiveis
                        <button type="button">+ Novo horário</button>
                    </legend>

                    <div className="schedule-item">
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

                        <Input name="from" label="Das" type="time" />
                        <Input name="to" label="Ate" type="time" />
                    </div>
                </fieldset>

                <footer>
                    <p>
                        <img src={warning} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>

                    <button type="button">Salvar</button>
                </footer>
            </main>
        </div>
    );
}

export default TeacherForm;
