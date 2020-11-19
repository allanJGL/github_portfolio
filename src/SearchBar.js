import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

const SearchBar = ({handleSubmit}) => (
    <Row className="justify-content-md-center">  
        <Col xs={4}>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="search">
                    <Form.Label>Github Username</Form.Label>
                    <Form.Control type="text" name="githubname" placeholder="Enter Github Username" />
                </Form.Group>
                <Form.Group controlId="ownedRepo">
                    <Form.Check type="checkbox" name="ownedRepo" label="Show only owned repositories" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    OK
                </Button>
            </Form>
        </Col>
    </Row>
)

export default SearchBar