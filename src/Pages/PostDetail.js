import React, { useEffect } from 'react'
import { Col, Container, Row, Card, Breadcrumb } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';

import Headers from '../Components/Headers';
import { getPostDetail, getComment } from '../Redux/Actions/Posts';

const PostDetail = () => {

	const dispatch = useDispatch()
	const location = useLocation()

	// get postId & userId
	const getId = () => {
		const url = location.pathname.split('/')
		const postId = url[url.length - 1]
		const userId = url[url.length - 3]
		return { postId, userId };
	}
	const { postId, userId } = getId()

	useEffect(() => {
		dispatch(getPostDetail(postId))
		dispatch(getComment(postId))
	}, [dispatch, postId])

	const { dataPostDetail, dataComments } = useSelector((state) => state.getPosts)

  return (
    <div>
			<Headers/>
			<Container fluid>
				<Row>
					<Col>
						<Breadcrumb>
							<Breadcrumb.Item href="/">Dashboard</Breadcrumb.Item>
							<Breadcrumb.Item href={`/${userId}/posts`}>Posting List</Breadcrumb.Item>
							<Breadcrumb.Item active>Post Detail</Breadcrumb.Item>
						</Breadcrumb>
						<h5 className='my-3'>Post Detail</h5>
						<Card>
							<Card.Title className='p-3'>{dataPostDetail?.title}</Card.Title>
							<Card.Body>{dataPostDetail?.body}</Card.Body>
							<hr/>
							<div className='px-3'>
								<h5 className='my-3'>Comments:</h5>

								{dataComments.length !== 0 && dataComments.map((val, index) => {
									return (
										<div key={index}>
											<h6 className='mb-0'><strong>{val?.name}</strong></h6>
											<small className='text-muted'>{val?.email}</small>
											<p>{val?.body}</p>
											<hr/>
										</div>
									)
								})}
							</div>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
  )
}

export default PostDetail