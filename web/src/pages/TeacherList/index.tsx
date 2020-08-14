import React, { useState, FormEvent, useEffect } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import searchIcon from '../../assets/images/icons/search-white.svg'

import './styles.css';
import api from '../../services/api';

interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

function TeachersList() {
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    const [teachers, setTeachers] = useState([]);

    useEffect(() => { }, [])

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        const data = {
            subject,
            week_day,
            time
        }
        const response = await api.get('/classes', {
            params: data
        })

        setTeachers(response.data)
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis." >
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select
                        label="Matéria"
                        name="subject"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Química', label: 'Química' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Sociologia', label: 'Sociologia' },
                            { value: 'Educação física', label: 'Educação física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'História', label: 'História' },
                            { value: 'Português', label: 'Português' },
                        ]}
                    />
                    <Select
                        label="Dia da semana"
                        name="week_day"
                        value={week_day}
                        onChange={(e) => { setWeekDay(e.target.value) }}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-Feira' },
                            { value: '2', label: 'Terça-Feira' },
                            { value: '3', label: 'Quarta-Feira' },
                            { value: '4', label: 'Quinta-Feira' },
                            { value: '5', label: 'Sexta-Feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />
                    <Input
                        type="time"
                        name='time'
                        label='Hora'
                        value={time}
                        onChange={(e) => { setTime(e.target.value) }}
                    />
                    <button
                        type="button"
                        onClick={searchTeachers}
                    >
                        <img src={searchIcon} alt="search" />
                        Pesquisar
                    </button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })}
            </main >

        </div >
    )
}

export default TeachersList;