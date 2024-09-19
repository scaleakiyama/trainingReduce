const countries = [
	{
		country: 'Гана',
		weather: 19,
		warm: true,
		cities: ['Аккра', 'Тамале', 'Кумаси'],
	},
	{
		country: 'Гренландия',
		weather: 20,
		warm: false,
		cities: ['Нуук', 'Какорток'],
	},
	{
		country: 'Мали',
		weather: 25,
		warm: true,
		cities: ['Мопти', 'Бамако', 'Джене'],
	},
	{
		country: 'Дания',
		weather: 5,
		warm: false,
		cities: ['Копенгаген'],
	},
]

let infoCountries = []

// Реализовано с помощью forEach()
countries.forEach(elem => {
	const temperatureLogic = `${elem.warm ? '+' : '-'}${elem.weather} градусов`
	infoCountries.push(
		`В стране ${elem.country} ${temperatureLogic}. В составе такие города: ${elem.cities}`
	)
})

console.log(infoCountries[2])

// Реализовано с помощью reduce()
const info1 = countries.reduce((acc, elem) => {
	const temperatureLogic = `${elem.warm ? '+' : '-'}${elem.weather} градусов`
	acc.push(
		`В стране ${elem.country} ${temperatureLogic}. В составе такие города: ${elem.cities}`
	)
	return acc
}, [])

// [
//     "В стране Гана +19 градусов. В составе такие города: Аккра, Тамале,Кумаси",
//     "В стране Гренландия -20 градусов. В составе такие города: Нуук, Какорток",
//     "В стране Мали +25 градусов. В составе такие города: Мопти, Бамако, Джене",
//     "В стране Дания -5 градусов. В составе такие города: Копенгаген",
// ]
