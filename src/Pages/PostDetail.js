import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Card, Breadcrumb, Form, Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';

import Headers from '../Components/Headers';
import { getPostDetail, getComment, addComment, updateComment, deleteComment } from '../Redux/Actions/Posts';

const PostDetail = () => {
	const [show, setShow] = useState(false);
	const [commentDetail, setCommentDetail] = useState({})
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [body, setBody] = useState("")

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

	// get Post detail & Comments
	useEffect(() => {
		dispatch(getPostDetail(postId))
		dispatch(getComment(postId))
	}, [dispatch, postId])

	const { dataPostDetail, dataComments } = useSelector((state) => state.getPosts)

	// Submit Add Comment
	const onAddComment = (e) => {
		e.preventDefault();
		const payload = {
			postId: postId,
			id: dataComments[dataComments.length -1].id + 1,
			name,
			email,
			body
		}
		dispatch(addComment(payload))
		e.target.reset();
	}

	const handleClose = () => setShow(false);

	const handleModalUpdate = (val) => {
		setCommentDetail(val)
		setShow(true)
	}

	// submit Update Comment
	const onUpdateComment = (e) => {
		e.preventDefault();
		dispatch(updateComment(commentDetail))
		setShow(false)
	}

	// handle delete comment
	const onDelete = (index) => {
		dispatch(deleteComment(index))
	}

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
						<Card className='pb-3 mb-5'>
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
											<div className='d-flex'>
												<p className='text-primary me-1' style={{cursor: 'pointer'}} onClick={() => handleModalUpdate(val)}><u>Update</u></p>
												<p className='text-danger' style={{cursor: 'pointer'}} onClick={() => onDelete(index)}><u>Delete</u></p>
											</div>
											<hr/>
										</div>
									)
								})}
								<h5>Add Comment:</h5>
								<div>
									<Form onSubmit={onAddComment}>
										<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
											<Form.Label>Name</Form.Label>
											<Form.Control type="text" placeholder="Masukkan nama" onChange={(event) => setName(event.target.value)} required/>
										</Form.Group>
										<Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
											<Form.Label>Email</Form.Label>
											<Form.Control type="email" placeholder="Masukkan email" onChange={(event) => setEmail(event.target.value)} required/>
										</Form.Group>
										<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
											<Form.Label>Body</Form.Label>
											<Form.Control as="textarea" rows={3} placeholder="Masukkan body" onChange={(event) => setBody(event.target.value)} required/>
										</Form.Group>
										<Button variant="primary" type='submit'>
											Add Comment
										</Button>
									</Form>
								</div>
							</div>
						</Card>
					</Col>
				</Row>
			</Container>

			{/* Modal Update */}
			<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
					<Form onSubmit={onUpdateComment}>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
							<Form.Label>Title</Form.Label>
							<Form.Control type="text" placeholder="Masukkan title" onChange={(event) => setCommentDetail({ ...commentDetail, name: event.target.value })} value={commentDetail?.name} required/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
							<Form.Label>Title</Form.Label>
							<Form.Control type="text" placeholder="Masukkan title" onChange={(event) => setCommentDetail({ ...commentDetail, email: event.target.value })} value={commentDetail?.email} required/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea5">
							<Form.Label>Body</Form.Label>
							<Form.Control as="textarea" rows={3} placeholder="Masukkan body" onChange={(event) => setCommentDetail({ ...commentDetail, body: event.target.value })} value={commentDetail?.body} required/>
						</Form.Group>
						<Button variant="secondary" onClick={handleClose} className="me-2">
							Close
						</Button>
						<Button variant="primary" type='submit'>
							Save 
						</Button>
					</Form>
				</Modal.Body>
      </Modal>
		</div>
  )
}

export default PostDetail