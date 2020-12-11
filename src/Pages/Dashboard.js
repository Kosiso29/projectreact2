import React from 'react';
import ReactCalendar from '../Components/Calender/Calender';

function Dashboard() {
    return(
        <>
            <div>
                <div className='dashboard'>
                    <div className='cardCalender'>
                        <ReactCalendar />
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
                    <div className='cardStat'>
                        <img src={process.env.PUBLIC_URL + "/assets/img/visits.png"} alt='' />
                        <h4>17</h4><p>Average Visits</p>
                    </div>
                    <div className='cardBottom'>
                        <h4>Appointments</h4><p></p>
                    </div>
                    <div className='cardBottomRight'>
                        <h4>Recent Visits</h4><p></p>
                        {/* <ReactCalendar /> */}
                    </div>
                    {/* <div className='cardStat'>
                        Calender
                    </div> */}
                    {/* <h1>Dashboard</h1> */}
                </div>
            </div>
        </>
    );
}

export default Dashboard;