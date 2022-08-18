import React, { useEffect } from 'react'
import { Container, Row, Col, Card, Button, Breadcrumb } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';

import Headers from '../Components/Headers'
import { getPostByUserId } from '../Redux/Actions/Posts';

const PostList = () => {

	const dispatch = useDispatch()
	const location = useLocation()
	const navigate = useNavigate()

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

	return (
		<div>
			<Headers/>
			<Container fluid>
				<Breadcrumb>
					<Breadcrumb.Item href="/">Dashboard</Breadcrumb.Item>
					<Breadcrumb.Item active>Posting List</Breadcrumb.Item>
				</Breadcrumb>
				<h5>Posting List</h5>
				<Row>
				{data?.length !== 0 ? data?.map((val, index) => {
					return (
						<Col key={index} className='my-3'>
							<Card style={{ width: '18rem' }}>
								<Card.Body>
									<Card.Title>{val.title}</Card.Title>
									<Card.Text>
										{val.body}
									</Card.Text>
									<Button variant="primary" onClick={() => navigate(`/${getId()}/posts/${val.id}`)}>Lihat Detail</Button>
								</Card.Body>
							</Card>
						</Col>
					)
				}) : <p className='text-center'>Loading...</p>}
				</Row>
			</Container>
		</div>
	)
}

export default PostList