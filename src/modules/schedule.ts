import * as cron from 'node-schedule'
import { Config } from '../types/types'
import axios from 'axios'

export const schedule = (config: Config) => {
	console.log('schedule has been started')
	cron.scheduleJob(config.cron, () => {
		axios
			.post(`${process.env.SHORTS_SERVER}/youtube-shorts`, config)
			.then((res) => {
				console.log('post request has been sended')
			})
			.catch((err) => console.log(err))
	})
}

//Instant post with no schedule

export const scheduleOnce = (config: Config) => {
	console.log('schedule runs only once and immediately')
	axios
		.post(`${process.env.SHORTS_SERVER}/youtube-shorts`, config)
		.then((res) => {
			console.log('post request has been sended')
		})
		.catch((err) => console.log(err))
}
