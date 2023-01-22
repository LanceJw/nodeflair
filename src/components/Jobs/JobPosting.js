import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLocationDot,
    faStar
} from '@fortawesome/free-solid-svg-icons'
import './styles.css'


const DesktopStyle = {
    Logo: {
        width: '45px',
        borderRadius: '4px',
        marginRight: '10px'
    },
    platform: {
        backgroundColor: '#DDF7E9',
        color: '#1fc76a',
        height: 'auto',
        padding: '5px 8px',
        fontSize: '14px',
        borderRadius: '5px',
        fontWeight: '600',
        alignItems: 'flex-end',
        display: 'flex'
    }
}

const JobInfoContainer = styled.div`
display: flex;
flex-direction: column;
line-height: 1.5;
background-color: white;
padding: 5px;
border-radius: 8px;
`

const Platform = styled.div`
display: flex;
align-items: flex-end;
justify-content: flex-end;
white-space: nowrap;
flex: 1;
`

const LogoTitleRatingsPlatform = styled.div`
width: 100%;
display: flex;
align-items: flex-start;
`

const CoNameRatingsJobTitle = styled.div`
width: 60%;
`

const UploadedTimeLocationSalary = styled.div`
padding-left: 55px;
`

const JobTitle = styled.span`
font-size: 16px;
font-weight: bolder;
`

const SkillSet = styled.div`
width: 90%;
display: inline-block;
padding: 5px 15px 5px;
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
`

const Skill = styled.span`
font-size: 14px;
padding: 5px 8px;
color: #838383;
background-color: #f1f1f1;
border-radius: 5px;
font-weight: bold;
margin-right: 4px;
`

const Salary = styled.div`
padding-top: 5px;
`


const JobPosting = (props) => {

    return (
        <JobInfoContainer className={props.className} id="JobInfo" onClick={props.onClick} >
            <div id="border" style={{padding: '15px'}}>
                {/* Contains Company Logo, Company Title, Company Ratings and the Platform required */}
                <LogoTitleRatingsPlatform>
                    <span><img src={props.JobsData.companyLogo} alt="TikTok Logo" style={DesktopStyle.Logo}/></span>



                    <CoNameRatingsJobTitle>

                        {/* Company Name and Ratings */}
                        <div>
                            <span>{props.JobsData.company}</span>
                            <span style={{whiteSpace: 'pre-wrap'}}>    {props.JobsData.ratings}<FontAwesomeIcon icon={faStar} style={{fontSize: '8px', paddingLeft: '0.3rem'}}/></span>
                        </div>

                        {/* Job TItle */}
                        <JobTitle>{props.JobsData.title}</JobTitle>
                    </CoNameRatingsJobTitle>



                    {/* Platform Required */}
                    <Platform>
                        <span style={DesktopStyle.platform}>{props.JobsData.platform}</span>
                    </Platform>


                </LogoTitleRatingsPlatform>


                {/* Post uploaded timing, Location and Salary */}
                <UploadedTimeLocationSalary>
                    {/* Uploaded Time and Location */}
                    <div>
                        <span style={{whiteSpace: 'pre-wrap', color: '#1fc76a', fontWeight: 'bold'}}>{props.JobsData.uploaded_time}  </span>
                        <span style={{whiteSpace: 'pre-wrap'}}><FontAwesomeIcon icon={faLocationDot} style={{fontSize: '14px', color: 'grey'}}/> {props.JobsData.location}</span>
                    </div>

                    {/* Salary */}
                    <Salary>{props.JobsData.salary}</Salary>

                </UploadedTimeLocationSalary>
            </div>

            {/* Skills Required */}

            <SkillSet id="SkillSet">
                {props.JobsData.skill_set.map((data) => {
                    return (
                        <Skill>{data.skill}</Skill>
                    )
                })}
            </SkillSet>
           
        </JobInfoContainer>
    )
}

export default JobPosting

