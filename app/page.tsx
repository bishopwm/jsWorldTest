import {cookies} from 'next/headers'
import Image from 'next/image'
import congratulations from '../public/congratulations.png'
import {fetchBoards} from 'src/utils/fetch/boards'
import {Board} from '@mirohq/miro-api'
import Link from 'next/link'

export default async function HomePage() {
	const nextCookies = cookies()

	let boards: Board[] = []
	try {
		boards = await fetchBoards(nextCookies)
	} catch (e) {
	}

	return (
		<div className="grid wrapper">
			<div className="cs1 ce12">
				<Image src={congratulations} alt="Congratulations" style={{width: '100%', height: 'auto'}}/>
			</div>
			<div className="cs1 ce12">
				<h1>Congratulations!</h1>
				<p>You've just created your first Nextjs 13 appDir app, and connected it to Miro!</p>
			</div>
			<div className="cs1 ce12">
				<h2>List all your {boards.length} board(s) here:</h2>
				<ul>
					<li></li>
				</ul>
			</div>
			<div className="cs1 ce12">
				<p>
					To explore more and build your own app, see the Miro Developer
					Platform documentation.
				</p>
			</div>
			<div className="cs1 ce12">
				<h3>Resources</h3>
				<ul>
					<li><Link target="_blank" href="https://beta.nextjs.org/docs">NextJS 13 appDir docs</Link></li>
					<li><Link target="_blank" href="https://developers.miro.com">Miro API docs</Link></li>
				</ul>
			</div>
		</div>
	)
}