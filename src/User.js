import React from 'react'
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css'

const User = ({ user }) => (
	<div>
		<Image src={user.avatar_url} rounded fluid />
		<p>{user.login}</p>
		<p>{user.bio}</p>
		<p>{user.name}</p>
		<p>{user.compagny}</p>
		<p>{user.blog}</p>
		<p>{user.location}</p>
	</div>
)

export default User