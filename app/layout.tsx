import {cookies} from 'next/headers'
import {fetchBoards} from '../src/utils/fetch/boards'
import React from 'react'
import {Authentication} from '../src/Authentication/Authentication'
import LoadMiro from './LoadMiro'
import { TimeDifference } from './TimeDifference'

type RootLayoutProps = {
	children: React.ReactNode
}
export default async function RootLayout({
	 children
 }: RootLayoutProps) {
	const nextCookies = cookies()

	let destination = ''
	try {
		await fetchBoards(nextCookies)
	} catch (e: any) {
		if (e.cause) {
			destination = e.cause.redirect.destination
		}
	}

	return (
		<html>
		<head>
		</head>
		<body>
		<div style={{maxWidth: '500px', margin: 'var(--space-large) auto', display: 'block'}}>
			<h1>Miro board info viewer</h1>
			<Authentication destination={destination}/>
			<LoadMiro></LoadMiro>
			<TimeDifference since={+new Date()} />
			<hr/>
			{children}
		</div>
		</body>
		</html>
	)
}
