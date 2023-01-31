import {RequestCookies} from 'next/dist/server/web/spec-extension/cookies'
import {ReadonlyRequestCookies} from 'next/dist/server/app-render'
import {Board} from '@mirohq/miro-api'
import initMiro from '../../initMiro'

type GetDataInterface = (cookies: RequestCookies | ReadonlyRequestCookies) => Promise<Board[] | Error>

export const fetchBoards: GetDataInterface = async (cookies) => {
	const {miro} = initMiro(cookies)

	// redirect to auth url if user has not authorized the app
	if (!(await miro.isAuthorized(''))) {
		throw new Error('Authentication error', {
				cause: {
					redirect: {
						destination: miro.getAuthUrl()
					}
				}
			}
		)
	}
	const api = miro.as('')

	const boards: Board[] = []

	for await (const board of api.getAllBoards()) {
		boards.push(board)
	}

	return boards
}