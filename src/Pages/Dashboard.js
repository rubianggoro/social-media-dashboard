import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from '../Redux/Actions/Action';

const Dashboard = () => {

	const dispatch = useDispatch()

	// Get Users
	useEffect(() => {
		dispatch(getUsers())
	}, [dispatch])

	const { data } = useSelector((state) => state.getUsers)

	console.log("Data Users => ", data )

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard