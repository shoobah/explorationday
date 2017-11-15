import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NameList from './components/NameList';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    componentDidMount() {
        console.log('componentDidMount');
        this.loading = true;
        axios.get('http://localhost:3000/getall').then(response => {
            this.loading = false;
            const step = 10;
            for (let i = 0; i <= response.data.length - step; i += step) {
                this.setState({
                    list: response.data.slice(i, i + step)
                });
                console.log(this.state.list);
            }
        });
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <NameList items={this.state.list} />
            </div>
        );
    }
}

export default App;
