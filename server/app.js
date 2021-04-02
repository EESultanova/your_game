const express = require('express')
// const { v4: uuidv4 } = require('uuid')
const cors = require('cors')

const app = express()
const PORT = 3000

let DB = [
	{
		questions: [
			{
				id: 11,
				text: 'Под каким деревом сидит заяц, когда идет дождь?',
				answ: 'Под мокрым',
				points: 200,
				status: ''
			},
			{
				id: 12,
				text: 'На какой вопрос нельзя дать положительный ответ?',
				answ: 'Ты спишь?',
				points: 400,
				status: ''
			},
			{
				id: 13,
				text: 'Что бросают тогда, когда это необходимо, и поднимают тогда, когда это уже не нужно?',
				answ: 'Якорь',
				points: 600,
				status: ''
			},
			{
				id: 14,
				text: 'Когда беззубый чувствует боль от зубов?',
				answ: 'Когда его укусила собака',
				points: 800,
				status: ''
			},
			{
				id: 15,
				text: 'Что может путешествовать по миру, оставаясь в одном и том же углу??',
				answ: 'катерок',
				points: 1000,
				status: ''
			}
		],
		title: 'щуточные',
		id: 1,
	},
	{
		questions: [
			{
				id: 21,
				text: 'Какой герой стал мужем принцессы Фионы?',
				answ: 'Шрек',
				points: 200,
				status: ''
			},
			{
				id: 22,
				text: 'Этой мультипликационный герой родился на Луне, а потом очутился на Земле. Назовите его',
				answ: 'Лунтик',
				points: 400,
				status: ''
			},
			{
				id: 23,
				text: 'Какой мультфильм считается первым полнометражным компьютерным мультфильмом?',
				answ: 'история игрушек',
				points: 600,
				status: ''
			},
			{
				id: 24,
				text: 'Назовите полное имя почтальона из мультфильма «Трое из Простаквашино»',
				answ: 'Игорь Иванович Печкин',
				points: 800,
				status: ''
			},
			{
				id: 25,
				text: 'В каком мультфильме исполняется песня «Чунга-Чанга»?',
				answ: 'катерок',
				points: 1000,
				status: ''
			}
		],
		title: 'мультики',
		id: 2,
	},
	{
		questions: [
			{
				id: 31,
				text: 'Самый легкий спортивный мяч',
				answ: 'теннисный',
				points: 200,
				status: ''
			},
			{
				id: 32,
				text: 'Средство передвижения от самолета к земле',
				answ: 'Парашют',
				points: 400,
				status: ''
			},
			{
				id: 33,
				text: 'Первый российский император.',
				answ: 'Петр I',
				points: 600,
				status: ''
			},
			{
				id: 34,
				text: 'Река, пересекающая восемь европейских стран.',
				answ: 'Дунай',
				points: 800,
				status: ''
			},
			{
				id: 35,
				text: 'Человек, коллекционирующий марки.',
				answ: 'Филателист',
				points: 1000,
				status: ''
			}
		],
		title: 'разное',
		id: 3,
	}
]
  


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/api/v1/game', (req, res) => {
  return res.json(DB)
})

//validate <3


app.listen(PORT, () => {
  console.log('Server has been started on port ', PORT)
})
