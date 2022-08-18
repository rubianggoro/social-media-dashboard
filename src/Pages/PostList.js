import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Button, Breadcrumb, Modal, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';

import Headers from '../Components/Headers'
import { getPostByUserId, addPost, updatePost, deletePost } from '../Redux/Actions/Posts';

const PostList = () => {
	const [show, setShow] = useState(false);
	const [showUpdate, setShowUpdate] = useState(false);
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [postDetail, setPostDetail] = useState({})

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

	const handleClose = () => {
		setShow(false);
		setShowUpdate(false)
	}

	// submit add post
	const onAddPost = (e) => {
		e.preventDefault();
		
		const payload =  {
			userId: getId(),
			id: data[data.length -1].id + 1,
			title,
			body
		}
		 dispatch(addPost(payload))
		 setShow(false)
	}

	const handleModalUpdate = (val) => {
		setPostDetail(val)
		setShowUpdate(true)
	}

	// submit update post
	const onUpdatePost = (e) => {
		e.preventDefault();
		dispatch(updatePost(postDetail))
		setShowUpdate(false)
	}

	// handle delete post
	const onDelete = (index) => {
		dispatch(deletePost(index))
	}

	return (
		<div>
			<Headers/>
			<Container fluid>
				<Breadcrumb>
					<Breadcrumb.Item href="/">Dashboard</Breadcrumb.Item>
					<Breadcrumb.Item active>Posting List</Breadcrumb.Item>
				</Breadcrumb>
				<div className='d-flex justify-content-between me-4'>
					<h5>Posting List</h5>
					<Button onClick={() => setShow(true)}>Add Post</Button>
				</div>
				
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
									<div className='d-flex align-items-center'>
										<Button variant="primary" onClick={() => navigate(`/${getId()}/posts/${val.id}`)} className="me-1">Lihat Detail</Button>
										<p className='text-primary me-1' style={{cursor: 'pointer'}} onClick={() => handleModalUpdate(val)}><u>Update</u></p>
										<p className='text-danger' style={{cursor: 'pointer'}} onClick={() => onDelete(index)}><u>Delete</u></p>
									</div>
								</Card.Body>
							</Card>
						</Col>
					)
				}) : <p className='text-center'>Loading...</p>}
				</Row>
			</Container>

			{/* Modal Add Post */}
			<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
					<Form onSubmit={onAddPost}>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Title</Form.Label>
							<Form.Control type="text" placeholder="Masukkan title" onChange={(event) => setTitle(event.target.value)} required/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
							<Form.Label>Body</Form.Label>
							<Form.Control as="textarea" rows={3} placeholder="Masukkan body" onChange={(event) => setBody(event.target.value)} required/>
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

			{/* Modal Update */}
			<Modal show={showUpdate} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
					<Form onSubmit={onUpdatePost}>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
							<Form.Label>Title</Form.Label>
							<Form.Control type="text" placeholder="Masukkan title" onChange={(event) => setPostDetail({ ...postDetail, title: event.target.value })} value={postDetail?.title} required/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea4">
							<Form.Label>Body</Form.Label>
							<Form.Control as="textarea" rows={3} placeholder="Masukkan body" onChange={(event) => setPostDetail({ ...postDetail, body: event.target.value })} value={postDetail?.body} required/>
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

export default PostList