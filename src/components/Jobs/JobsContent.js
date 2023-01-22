import React, { useState, useEffect, Fragment } from 'react'
import styled from 'styled-components'

import { JobsData } from './JobsData'

import JobPosting from './JobPosting'

import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faShareNodes
} from '@fortawesome/free-solid-svg-icons'

import {
    faLocationDot
} from '@fortawesome/free-solid-svg-icons'

const DesktopContainer = styled.div`
width: 97%;
max-width: 1100px;
margin: auto;
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 10px;
`

const DesktopJobsOverview = styled.div`
width: 40%;
display: flex;
flex-direction: column;
border-radius: 8px;
gap: 10px;
`

const DesktopAvailableJobs = styled.div`
width: 97%;
margin: 0rem auto 0.4rem;
max-width: 1100px;
text-align: left;
font-size: 1.2rem;
font-weight: bold;
padding: 20px 5px;
`

const DesktopJobDescription = styled.div`
width: 60%;
background-color: white;
border-radius: 8px;
padding: 29px 20px;
overscroll-behavior: auto;
`


const DesktopCompanyInfo = styled.div`
width: 100%;
margin: auto;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

const DesktopCompanyLogo = styled.img`
width: 65px;
margin-right: 20px;
`

const DesktopCompanyNameTitle = styled.div`
display: flex;
flex-direction: column;
flex: 1;
`

const DesktopCompanyName = styled.div`
display: flex;
flex-direction: row;
gap: 12px;
margin-bottom: 5px;
`

const DesktopUploadedTimeLocation = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 5px;
gap: 20px;
color: #838383;
`


const DesktopApplyShareBtn = styled.div`
display: flex;
flex-direction: column;
justify-self: right;
gap: 5px;

`

const DesktopButton = styled.a`
width: 108px;
text-align center;
border-radius: 5px;
font-weight: bold;
text-decoration: none;
color: white;
background-color: #1fc76a;
padding: 10px 0px;
`



const MobileContainer = styled.div`
width: 97%;
margin: auto;
display: flex;
flex-direction: column;
gap: 10px;
`

const MobileAvailablejobs = styled.div`
width: 97%;
margin: 0rem auto 0.6rem;
text-align: left;
font-size: 1.2rem;
font-weight: bold;
padding: 20px 5px;
`

const JobsContent = () => {
    const [currentData, setCurrentData] = useState(JobsData[0])

    const [appState, setAppState] = useState({
        activeObject: JobsData[0],
        objects: JobsData
    })

    console.log(JobsData.length)

    const toggleActive = (index) => {
        setCurrentData(appState.objects[index])
        setAppState({ ...appState, activeObject: appState.objects[index] })
    }

    const toggleActiveStyle = (index) => {
        if (appState.objects[index] === appState.activeObject) {
            return " active";
        } else {
            return " inactive";
        }
    }

    const [state, setState] = useState({
        mobileView: false,
    });

    const { mobileView } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 1010
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);


    const displayDesktop = () => {
        return (
            <Fragment>
                {/* Number of jobs available */}
                <DesktopAvailableJobs><span>{JobsData.length} jobs</span></DesktopAvailableJobs>
                <DesktopContainer>
                    {/* Jobs Overview */}
                    <DesktopJobsOverview>
                        {JobsData.map((data, index) => {
                            return (
                                <JobPosting
                                    className={toggleActiveStyle(index)}
                                    onClick={() => {
                                        toggleActive(index)
                                    }}
                                    JobsData={data}
                                />
                            )
                        })}
                    </DesktopJobsOverview>

                    {/* Job Description */}
                    <DesktopJobDescription>
                            {/* Company Info */}
                            <DesktopCompanyInfo id="DesktopCompanyInfo">
                                <DesktopCompanyLogo src={currentData.companyLogo} />

                                {/* Company Name, Job Title, Uploaded Time and Location */}
                                <DesktopCompanyNameTitle>

                                    {/* Company Name Div */}
                                    <DesktopCompanyName>
                                        <span>{currentData.company} </span>
                                        <a href="#" style={{color: '#62ad84', fontSize: '14px', fontWeight: '400'}}>Go to Company Page</a>
                                    </DesktopCompanyName>
                                    <span style={{fontWeight: 'bold', marginBottom: '5px', fontSize: '16px'}}>{currentData.title}</span>
                                    <DesktopUploadedTimeLocation>
                                        <span>{currentData.uploaded_time}</span>
                                        <span><FontAwesomeIcon icon={faLocationDot} style={{fontSize: '15px', marginRight: '3px'}}/>{currentData.location}</span>
                                    </DesktopUploadedTimeLocation>
                                </DesktopCompanyNameTitle>


                                {/* Apply and Share Button */}
                                <DesktopApplyShareBtn>
                                    {/* Apply Button */}
                                    <DesktopButton href="#">Apply</DesktopButton>

                                    {/* Share button */}
                                    <DesktopButton style={{backgroundColor: 'white', color: '#1fc76a', border: '1px solid #1fc76a'}} href="#">Share<FontAwesomeIcon icon={faShareNodes} style={{marginLeft: '4px'}}/></DesktopButton>
                                </DesktopApplyShareBtn>

                            </DesktopCompanyInfo>
                    </DesktopJobDescription>
                </DesktopContainer>
            </Fragment>
        )
    }

    const displayMobile = () => {
        return (
            <div style={{ height: '100vh', backgroundColor: '#f2f2f2' }}>
                <MobileAvailablejobs>
                    <span>{JobsData.length} jobs</span>
                </MobileAvailablejobs>
                <MobileContainer>

                    {/* Jobs Overview */}
                    {JobsData.map((data) => {
                        return (
                            <JobPosting
                                JobsData={data}
                            />
                        )
                    })}
                </MobileContainer>
            </div>
        )
    }


    return (
        <Fragment>
            {mobileView ? displayMobile() : displayDesktop()}
        </Fragment>
    )
}

export default JobsContent