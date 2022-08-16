import React, { useEffect } from 'react'
import { Container, Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Headers from '../Components/Headers';
import { getUsers } from '../Redux/Actions/Users';

const Dashboard = () => {

	const dispatch = useDispatch()
	const navigate = useNavigate()

	// Get Users
	useEffect(() => {
		dispatch(getUsers())
	}, [dispatch])

	const { data } = useSelector((state) => state.getUsers)

	const onClickPosts = (id) => {
		navigate(`/${id}/posts`)
	}

	const onClickAlbums = (id) => {
		navigate(`/${id}/albums`)
	}

  return (
    <div>
			<Headers/>
			<Container className='mt-4' fluid>
				<h5>Users List</h5>
				<Table striped bordered hover size="sm">
					<thead>
						<tr>
							<th>ID</th>
							<th>Username</th>
							<th>Nama</th>
							<th>Email</th>
							<th>No Handphone</th>
							<th>Website</th>
							<th>Perusahaan</th>
							<th>Alamat</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
					{data.map((val, index) => {
						return (
								<tr key={index}>
									<td>{val.id}</td>
									<td>{val.username}</td>
									<td>{val.name}</td>
									<td>{val.email}</td>
									<td>{val.phone}</td>
									<td><a href="/">{val.website}</a></td>
									<td>{val.company?.name}</td>
									<td>{`${val.address?.street} ${val.address?.suite} ${val.address?.city}`}</td>
									<td><Button onClick={() => onClickPosts(val.id)}>Daftar Posting</Button> <Button onClick={() => onClickAlbums(val.id)}>Daftar Album</Button></td>
								</tr>
							)
						}
					)}
					</tbody>
				</Table>
			</Container>
		</div>
  )
}

export default Dashboard