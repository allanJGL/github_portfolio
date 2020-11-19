import React from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import 'bootstrap/dist/css/bootstrap.min.css'

const Repositories = ({ repositories }) => (
    <CardColumns>
        {repositories.map(renderRepoCard)}
    </CardColumns>
)

const renderRepoCard = (repository, index) => (
	<Card className="bg-dark text-white">
	  <Card.Body>
	    <Card.Title><a href={repository.html_url}>{repository.name}</a></Card.Title>
	    <Card.Text>
	    	{repository.description}	    	
	    </Card.Text>
	  </Card.Body>
	  <Card.Footer className="text-muted">{repository.language}</Card.Footer>
	</Card>
)

export default Repositories