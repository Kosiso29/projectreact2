import React from 'react';
import { Link } from 'react-router-dom';

function Staff() {
    return(
        <>
            <div className='search-box'>
                    <input className='search-txt' type='text' placeholder="Search staff's name, ID" />
                    <Link className='search-btn' to='#'></Link>
                </div>
                <div className='buttonPatients'>
                    <button type='submit'>Add Staff</button>
                </div>
                
                <div className='patients'>
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
                    <div className='cardStat'>
                        <img src={process.env.PUBLIC_URL + "/assets/img/visits.png"} alt='' />
                        <h4>17</h4><p>Average Visits</p>
                    </div>
                    <div className='cardBottomPatients'>
                        <h4>Patient list</h4><p></p>
                    </div>
                    {/* <div className='cardStat'>
                        Calender
                    </div> */}
                    {/* <h1>Dashboard</h1> */}
                </div>
        </>
    );
}

export default Staff;