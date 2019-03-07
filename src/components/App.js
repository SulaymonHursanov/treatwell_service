import React, { Component } from 'react';
import './App.css';
import Services from "./Services/Services";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Category from "./Category/Category";
import {BrowserRouter} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Navbar />
                    <Services serviceData={this.props.state.serviceData} />
                    <Category title={'Hollywood waxing in the UK'} count={2210}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
