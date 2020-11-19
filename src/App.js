import React, { Component } from 'react'
import SearchBar from './SearchBar.js'
import Portfolio from './Portfolio.js'
import config from './config'
import './index.css';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            githubname: false,
            repositories: false,
            user: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        const data = new FormData(e.target)
        const githubname = data.get('githubname')
        const onlyOwned = data.get('ownedRepo')

        this.fetchAllData(githubname, onlyOwned)
    }

    async fetchAllData(githubname, onlyOwned) {
        this.setState({
            isLoading: true,
        })
        const repositories = await this.fetchRepositories(githubname, onlyOwned)
        const user = await this.fetchUser(githubname)
        this.setState({
            isLoading: false,
            githubname: githubname,
            repositories: repositories,
            user: user
        })
    }

    async fetchRepositories(githubname, onlyOwned) {
        let req = null;
        if (onlyOwned === true) {
            req = await fetch(`${config.apiUrl.base}${config.apiUrl.users}${githubname}/${config.apiUrl.repositories}${config.apiUrl.owner}`)
        } else {
            req = await fetch(`${config.apiUrl.base}${config.apiUrl.users}${githubname}/${config.apiUrl.repositories}`)
        }
        const repositories = await req.json()
        
        return repositories
    }

    async fetchUser(githubname, onlyOwned) {
        const req = await fetch(`${config.apiUrl.base}${config.apiUrl.users}${githubname}`);
        const user = await req.json()
        
        return user
    }

    render() {
        const { isLoading, githubname, repositories, user } = this.state
        return (
            <Container fluid>               
                <SearchBar
                    handleSubmit={this.handleSubmit}
                />
                { isLoading && <p>Fetching Github info ...</p> }                    
                { !isLoading && repositories && 
                    <Portfolio
                        githubname = { githubname }
                        repositories = { repositories }
                        user = { user }
                    />
                } 
            </Container>
        )
    }
}

export default App