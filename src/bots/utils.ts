import fs from 'fs'
import path from 'path'

export const getBase64ThumbnailLogo = (): string => { 
	return fs.readFileSync(path.join(__dirname, './files/thumbnail-logo.png'), {encoding: 'base64'});
}