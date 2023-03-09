export interface Config {
	channelName: string
	contentType: string
	youtubeLoginToken: any
	youtubeVideoTitle: string
	youtubeVideoDescription: string
	youtubeVideoTags: string[]
	categoryId: number
	youtubeSecret: any

	tiktokMocked: boolean
	tiktok_key: string
	tiktok_keyword: string

	videoOnly: boolean
	isAdult: boolean

	scheduleRepeats: number | 'all'
	cron: string

	thumbnailLogo?: string
	uploadCount?: number
}
