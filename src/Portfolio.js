import React from 'react'
import User from './User'
import Repositories from './Repositories'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import 'bootstrap/dist/css/bootstrap.min.css'

const Portfolio = ({ repositories, githubname, user }) => (
    <Row> 
        <Col md={3}>
            <h2>Profil</h2>
            <User user={ user }/>  
        </Col>
        <Col>
            <h2>Repos</h2>
            {repositories.length ?
                <>
            		<Repositories repositories={repositories}/>  
                </> :
                <p>no repo</p>
            }   
        </Col>
    </Row>
)

export default Portfolio