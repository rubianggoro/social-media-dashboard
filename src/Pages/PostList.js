import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';

import Headers from '../Components/Headers'
import { getPostByUserId } from '../Redux/Actions/Posts';

const PostList = () => {

	const dispatch = useDispatch()
	const location = useLocation()

	// get userId
	const getId = () => {
		const url = location.pathname.split('/')
		const result = url[url.length - 2]
		return result;
	}

	// get post by userId
	useEffect(() => {
		dispatch(getPostByUserId(getId()))
	}, [dispatch])

	const { data } = useSelector((state) => state.getPosts)

	console.log("data =>", data)

	return (
		<div>
			<Headers/>
			<Container>
				<h1>Post List</h1>
			</Container>
		</div>
	)
}

export default PostList