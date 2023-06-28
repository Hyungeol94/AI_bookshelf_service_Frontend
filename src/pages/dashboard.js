import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Link } from "react-router-dom";
import {Button} from "reactstrap";

//sample
import user_info from "../assets/sample_user.json"
import { Padding } from '@mui/icons-material';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function Dash() {
  return (
    <>
      <div className="wrapper">
        <div className="main">
          <div className="section">

            <div
              style={{
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                flexDirection: 'column',
                width: "100%",
                height: "150vh",
                font: "white",
              }}>

              <div style={{ marginTop: '10px' }}>
                <h1 className="title">{user_info.profile.user_nickname}님의 독서폴리오</h1>
              </div>

              <div
                style={{
                  display: 'flex',
                  marginTop: '20px',
                  paddingLeft: '10vw',
                  paddingRight: '10vw',
                  borderRadius: '30px 30px 30px 30px',
                }}
              >
              
              <div className='block_section1&2'
                style={{
                  display: 'block',
                  paddingRight: '5vw'
                }}>
                <div className='section1'>
                  <div style={{ paddingLeft: '30px', paddingTop: '25px', paddingBottom: '5px' }}>
                    <div>
                      <h3 style={{ color: '#000000' }}>{user_info.profile.user_nickname}님의 독서 취향</h3>
                    </div>
                    <div>
                      <h4 style={{ color: '#000000' }}>나의 독서 유형: 미래의 코난</h4>
                      <h4 style={{ color: '#000000' }}>내가 좋아하는 장르: 탐정 소설</h4>
                      <h4 style={{ color: '#000000' }}>내가 좋아하는 작가: 히가시노 게이고</h4>
                    </div>
                  </div>
                </div>

                <div className='section2_calc'>
                  <div style={{ paddingLeft: '30px', paddingTop: '25px', paddingBottom: '5px' }}>
                    <div>
                      <h3 style={{ color: '#000000' }}>{user_info.profile.user_nickname}님의 독서 취향</h3>
                    </div>
                    <div>
                      <h4 style={{ color: '#000000' }}>나의 독서 유형: 미래의 코난</h4>
                      <h4 style={{ color: '#000000' }}>내가 좋아하는 장르: 탐정 소설</h4>
                      <h4 style={{ color: '#000000' }}>내가 좋아하는 작가: 히가시노 게이고</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className='section3_chart'
                style={{
                  display: 'flex',
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                <Pie data={data} />
              </div>

              </div>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
