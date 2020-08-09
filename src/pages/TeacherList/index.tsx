import React, { useState, FormEvent } from 'react';

import { TeacherModel } from '../../model/TeacherItemModel';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';

function TeacherList() {
    const [teachers, setTeachers] = useState([]);
    const [subject, setSubject] = useState('');
    const [weekDay, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeacher(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day: Number(weekDay),
                time,
            },
        });

        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponiveis.">
                <form id="search-teachers" onSubmit={searchTeacher}>
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={(e) => {
                            setSubject(e.target.value);
                        }}
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
                        value={weekDay}
                        onChange={(e) => {
                            setWeekDay(e.target.value);
                        }}
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
                    <Input
                        type="time"
                        name="time"
                        label="Horario"
                        value={time}
                        onChange={(e) => {
                            setTime(e.target.value);
                        }}
                    />

                    <button type="submit">buscar</button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: TeacherModel) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />;
                })}
            </main>
        </div>
    );
}

export default TeacherList;
