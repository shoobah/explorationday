import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NameList from './components/NameList';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            loading: true
        };
    }
    componentDidMount() {
        axios.get('http://localhost:3000/getall').then(response => {
            this.setState({
                loading: false,
                list: response.data
            });
        });
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Testing React</h1>
                </header>
                {this.state.loading ? <h2>Loading</h2> : ''}
                <NameList items={this.state.list} />
            </div>
        );
    }
}

export default App;

// console.log('componentDidMount');
// this.loading = true;
// axios.get('http://localhost:3000/getall').then(response => {
//     this.loading = false;
//     const step = 10;
//     for (let i = 0; i <= response.data.length - step; i += step) {
//         this.setState({
//             list: response.data.slice(i, i + step)
//         });
//         this.forceUpdate();
//         console.log(this.state.list);
//     }
// });
