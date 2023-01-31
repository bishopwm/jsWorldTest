'use client'

import {useEffect} from 'react'
import {tokensCookie} from '../initMiro'

export default function({token}: {token?: string}) {
	useEffect(() => {
		if (!token) return
		document.cookie = `${tokensCookie}=${token};path=/`;
	},[])

	return null
}