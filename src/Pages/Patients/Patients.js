import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../UI/Spinner/Spinner';
import axios from '../../axios';
import classes from './Patients.module.css';
import patientpic from '../../assets/images/patientpic.png';
import Scrollbar from '../../UI/Scrollbar/Scrollbar';
import TableButton from '../../UI/TableButton/TableButton';
import Backdrop from '../../UI/Backdrop/Backdrop';
import PatientsForms from './PatientsForms/PatientsForms';
// import Patient from './Patient/Patient';

class Patients extends Component {
    state = {
        items: [],
        isLoaded: false,
        openForms: false
    }
    
    closeFormHandler = () => {
        this.setState({openForms: false});
    }

    openFormHandler = () => {
        this.setState({openForms: true});
        console.log(window.location.pathname);
    }

    componentDidMount () {
        axios.get('/GetAllUser')
            .then(response => {
                this.setState({
                    isLoaded: true,
                    items: response.data
                });
            });
    };

    render () {
    return(
        <div>
                <Backdrop show={this.state.openForms} clicked={this.closeFormHandler} />
                <PatientsForms show={this.state.openForms} clicked={this.closeFormHandler} post={this.postDataHandler} />
                <div className='search-box'>
                    <input className='search-txt' type='text' placeholder="Search patient's name, ID" />
                    <Link className='search-btn' to='#'></Link>
                </div>
                <div className='buttonPatients'>
                    <button onClick={this.openFormHandler} >Add Patient</button>
                </div>
                
                <div className='patients'>
                    <div className='cardStat'>
                        <img src={process.env.PUBLIC_URL + "/assets/img/visits.png"} alt='' />
                        <h4>17</h4><p>Average Visits</p>
                    </div>
                    <div className='cardStat'>
                        <img src={process.env.PUBLIC_URL + "/assets/img/patient.png"} alt='' />
                        <h4>45</h4><p>Patients</p>
                    </div>
                    <div className='cardStat'>
                        <img src={process.env.PUBLIC_URL + "/assets/img/doctor.png"} alt='' />
                        <h4>15</h4><p>Nurses</p>
                    </div>
                    <div className='cardStat'>
                        <img src={process.env.PUBLIC_URL + "/assets/img/doctor.png"} alt='' />
                        <h4>15</h4><p>Doctors</p>
                    </div>
                    <div className={classes.PatientsTable + ' cardBottomPatients'}>
                        <h4>Patient list</h4><br></br>
                        
                        <Scrollbar>
                            <div style={{maxHeight: '400px'}}>
                            <table>
                                <tr>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Email</th>
                                    {/* <th>Job Description</th> */}
                                    {/* <th>Phone Number</th> */}
                                    <th>Options</th>
                                </tr>
                                {this.state.isLoaded ? 
                                this.state.items.map(item => (
                                    <tr key={item.userId}>
                                        <td style={{display: 'table-cell'}}><img src={patientpic}  width='25' alt=''/>  <p style={{display: 'inline-block', verticalAlign: 'top'}}>   {item.firstName + ' ' + item.lastName}</p></td>
                                        <td>{item.gender}</td>
                                        <td>{item.email}</td>
                                        {/* <td>{item.jobDescription}</td> */}
                                        {/* <td>{item.phoneNumber}</td> */}
                                        <td><TableButton /></td>
                                    </tr>
                                )) : <Spinner />}
                            </table>
                            </div>
                        </Scrollbar>
                        
                    </div>
                </div>
        </div>
    );
}
}

export default Patients;