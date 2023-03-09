import { Config } from '../types/types'
import { schedule, scheduleOnce } from '../modules/schedule'

import categoryIds from './youtube-categories'
import { getBase64ThumbnailLogo } from './utils'

export const start = () => {
	const config: Config = {
		scheduleRepeats: 'all',
		cron: '0 */24 * * *',
		channelName: 'funnyApricot',
		//Type of content
		contentType: 'tiktok',
		//Youtube configs
		youtubeLoginToken: JSON.parse(process.env.YOUTUBE_LOGIN_TOKEN),
		youtubeSecret: JSON.parse(process.env.YOUTUBE_SECRET),
		youtubeVideoTitle: 'Animal videos that I liked from TikTok #shorts',
		youtubeVideoDescription:
			'Subscribe and watch the newest shorts founded by the Funny Apricot',
		youtubeVideoTags: [
			'funny pets',
			'cute moments',
			'pet bloopers',
			'pet pranks',
			'adorable shenanigans',
			'pet memes',
			'silly faces',
			'pet challenges',
			'pet adventures',
			'food reactions',
			'funny cat moments',
			'funny dog fails',
			'cute puppy videos',
			'cute kitten videos',
			'funny pet reactions',
			'pet tricks and skills',
			'hilarious animal clips',
			'pet vlogs',
			'crazy pet behavior',
			'funny animal memes',
			'silly pet costumes',
			'pet photobombs',
			'pet playtime',
			'pet birthday parties',
			'pet grooming mishaps',
		],
		categoryId: categoryIds.PetsAnimals,
		// youtubeClientSecret: '../raccoon-youtube-secret.json',
		videoOnly: true,

		//TikTok configs
		tiktokMocked: process.env.TIKTOK_MOCKED && !!+process.env.TIKTOK_MOCKED,
		tiktok_key: process.env.TIKTOK_KEY,
		tiktok_keyword: 'pets',
		uploadCount: 2,

		isAdult: false,
		// thumbnailLogo: getBase64ThumbnailLogo(),
	}

	process.env.SCHEDULE === 'true' ? schedule(config) : scheduleOnce(config)
}
