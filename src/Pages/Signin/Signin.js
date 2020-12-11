//import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Signin.css';
// import Spinner from '../../UI/Spinner/Spinner';
import Login from '../../UI/Login/Login';
// import {PostData} from '../PostData'

class Signin extends Component {

    state = {
        loggedIn: false,
        submitted: false
      }
    
    loggedIn = () => {
    this.setState({loggedIn: true})
    }

    // splashScreenHandler = () => {
    // console.log('splashScreen');
    // // return <Spinner />
    // // setTimeout((props) => {
    // //     console.log('here');
    // //     return <Spinner />;
    // // }, 5000);
    // }
    

    render(){
        if (this.state.loggedIn) {
            setTimeout(() => {
                this.setState({loggedIn: false, submitted: true});
                // this.props.history.replace('/dashboard');
                // return <Redirect to='/dashboard' />;
            }, 1000);
        }
        return(
            <>
                {this.state.loggedIn ? <Login /> : null}
                {this.state.submitted ? <Redirect push to='/dashboard' /> : null}
                <div className='leftPanel'>
                    <img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} width='73' alt='' />
                    <img src={process.env.PUBLIC_URL + "/assets/img/auroraname.png"} width='180' alt='' />
                    <h1>Welcome Back!</h1>
                    <p>Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus</p>
                    {/* <img src={process.env.PUBLIC_URL + "/assets/img/signin.png"} /> */}
                    <div></div>
                </div>
                <div className='rightPanel'>
                    <div className='search-boxSignin'>
                        <input className='search-txtSignin' type='text' placeholder="Email" name="Email" onChange={this.onChange} />
                        {/* <Link className='search-btnSignin' to='#'></Link> */}
                    </div>
                    <div className='search-boxSignin'>
                        <input className='search-txtSignin' type='text' placeholder="Password" name="Password" onChange={this.onChange} />
                        {/* <Link className='search-btnSignin' to='#'></Link> */}
                    </div>
                    <div className='buttonSignin'>
                        <button type='submit' onClick={this.loggedIn} /*onClick={this.login}*/>Login</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Signin;