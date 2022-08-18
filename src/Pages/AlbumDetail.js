import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Card, Breadcrumb, Modal, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux";
import Headers from '../Components/Headers'
import { getAlbumDetail, getPhotos } from '../Redux/Actions/Albums';
import { useLocation } from 'react-router-dom';

const AlbumDetail = () => {
	const [show, setShow] = useState(false);
	const [viewImage, setViewImage] = useState("")

	const dispatch = useDispatch()
	const location = useLocation()

	// get albumId & userId
	const getId = () => {
		const url = location.pathname.split('/')
		const albumId = url[url.length - 1]
		const userId = url[url.length - 3]
		return { albumId, userId };
	}
	const { albumId, userId } = getId()

	useEffect(() => {
		dispatch(getAlbumDetail(albumId))
		dispatch(getPhotos(albumId))
	}, [dispatch])

	const { dataAlbumDetail, dataPhotos } = useSelector((state) => state.getAlbums)

	const handleClose = () => setShow(false);
  const handleShow = (url) => {
		setShow(true)
		setViewImage(url)
	};

  return (
    <div>
			<Headers/>
			<Container fluid>
				<Row>
					<Breadcrumb>
							<Breadcrumb.Item href="/">Dashboard</Breadcrumb.Item>
							<Breadcrumb.Item href={`/${userId}/albums`}>Album List</Breadcrumb.Item>
							<Breadcrumb.Item active>Album Detail</Breadcrumb.Item>
						</Breadcrumb>
					<h5>Album Detail</h5>
					<h5>Title Album: {dataAlbumDetail?.title}</h5>
					{dataPhotos.length !== 0 && dataPhotos.map((val, index) => {
						return (
							<Col className='m-2'>
								<Card style={{ width: '18rem', cursor: 'pointer' }} key={index} onClick={() => handleShow(val?.url)} >
									<Card.Img variant="top" src={val?.thumbnailUrl} />
									<Card.Body>
										<Card.Title>{val?.title}</Card.Title>
									</Card.Body>
								</Card>
							</Col>
						)
					})}
				</Row>
			</Container>

			{/* Modal View Image */}
			<Modal 
				show={show} 
				onHide={handleClose}
				animation
				centered>
        <Modal.Header closeButton>
					<img src={viewImage} alt='img' className='img-fluid'/>
        </Modal.Header>
      </Modal>
    </div>
  )
}

export default AlbumDetail