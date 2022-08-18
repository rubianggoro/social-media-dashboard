import React, { useEffect } from 'react'
import { Container, Row, Col, Card, Button, Breadcrumb } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';
import Headers from '../Components/Headers'

import { getAlbumByUserId } from '../Redux/Actions/Albums';

const AlbumList = () => {

	const dispatch = useDispatch()
	const location = useLocation()
	const navigate = useNavigate()

	// get userId
	const getId = () => {
		const url = location.pathname.split('/')
		const result = url[url.length - 2]
		return result;
	}

	// get albums by userId
	useEffect(() => {
		dispatch(getAlbumByUserId(getId()))
	}, [dispatch])

	const { data } = useSelector((state) => state.getAlbums)

	return (
		<div>
			<Headers/>
			<Container fluid>
				<Breadcrumb>
					<Breadcrumb.Item href="/">Dashboard</Breadcrumb.Item>
					<Breadcrumb.Item active>Album List</Breadcrumb.Item>
				</Breadcrumb>
				<h5>Album List</h5>
				<Row>
				{data.map((val, index) => {
					return (
						<Col key={index} className='my-3'>
							<Card style={{ width: '18rem' }}>
								<Card.Body>
									<Card.Title>{val.title}</Card.Title>
									<Button variant="primary" onClick={() => navigate(`/${getId()}/albums/${val.id}`)}>Lihat Detail</Button>
								</Card.Body>
							</Card>
						</Col>
					)
				})}
				</Row>
			</Container>
		</div>
	)
}

export default AlbumList