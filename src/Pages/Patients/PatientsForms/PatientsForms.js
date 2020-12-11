import React, { Component } from 'react';
import classes from './PatientsForms.module.css';
import Scrollbar from '../../../UI/Scrollbar/Scrollbar';
import close from '../../../assets/images/close.png';
import axios from '../../../axios';

class patientsforms extends Component {
    state = {
        firstName: '',
        gender: '',
        email: '',
        phoneNumber: '',
        submitted: false
    }

    componentDidMount () {
        // if auth== false this.props.history.replace('/posts');
        // console.log(this.props);
    }

    postDataHandler = () => {
        const data = {
            firstName: this.state.firstName,
            lastName: "Afoenyi",
            jobDescription: "FSE",
            email: this.state.email,
            phoneNumber: "09062072225",
            gender: this.state.gender
        };
        axios.post('/AddUser', data)
            .then(response => {
                console.log(response);
                // console.log(response.data);
                // this.props.history.push('/Posts');
                // this.props.history.replace('/Posts');
            })
            .then(() => {
                // this.setState({submitted: true});
            })
            .catch(error => {
                // console.log(error);
            });
    }

    render () {
        // if (this.state.submitted) {
        //     return this.props.show = false;
        // }
        return (
    this.props.show ? 
    (<div className={classes.PatientsForms}>
        <h1>Add Patient <img src={close} onClick={this.props.clicked} alt='' /></h1>
        <Scrollbar>
        <form>

            <div className={classes.picture}>
            <label>Profile Picture</label>
            <img src={process.env.PUBLIC_URL + "/assets/img/patient.png"} width='200' alt='' />
            <button type='submit'>Select Image</button>
            </div>

            <label>Name</label>
            <input type='text' name='name' value={this.state.firstName} onChange={(event) => this.setState({firstName: event.target.value})}/>

            <label>Email Address</label>
            <input type='text' name='email' value={this.state.email} onChange={(event) => this.setState({email: event.target.value})} />

            <label>Gender</label>
            <select name='gender' value={this.state.gender} onChange={(event) => this.setState({gender: event.target.value})}>
                <option disabled='disabled'>--Choose Option</option>
                <option>Male</option>
                <option>Female</option>
            </select>

            <label>Birth Date</label>
            <input type='text' name='date_of_birth'></input>

            <label>Address</label>
            <input style={{width: '100%'}} type='text' name='address'></input>

            <div style={{display: 'inline-block', width: '45%'}}>
            <label>Telephone</label>
            <input style={{width: '100%'}} type='text' name='phone'></input>
            </div>

            <div style={{display: 'inline-block', width: '45%', marginLeft: '10%'}}>
            <label>Blood Group</label>
            <select name='blood_group' style={{width: '100%'}}>
                <option disabled='disabled'>--Choose Option</option>
                <option>A</option>
                <option>B</option>
                <option>AB</option>
                <option>O</option>
            </select>
            </div>

        </form>
        <button onClick={this.postDataHandler} style={{marginLeft: '62px'}}>Create Profile</button>
        </Scrollbar>
    </div>) : null
    );
    }
}

export default patientsforms;