import React, { useEffect, useState, Fragment } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUser
} from '@fortawesome/free-regular-svg-icons'
import {
    faBars, faAngleDown
} from '@fortawesome/free-solid-svg-icons'

import NodeFlair_Logo from '../../assets/nodeflair_logo.svg'


const DesktopContainer = styled.div`
width: 100%;
position: fixed;
top: 0px;
z-index: 1;
background-color: white;
box-shadow: 0px 1px 3px 0px #cccccc;
`

const DesktopNavigationBar = styled.div`
width: 100%;
max-width: 1100px;
margin: auto;
display: flex;
flex-direction: row;
justify-content: space-between;
height: 105px;
align-items: center;
font-size: 0.85rem;
`

const DesktopLinks = styled.div`
display: flex;
flex-direction: row;
width: 40%;
justify-content: space-between;
margin-right: 10%;
`

const DesktopOptionsSelector = styled.div`
display: flex;
width: 25%;
justify-content: space-between;
`

const DesktopLogo = styled.a`
width: 180px;
padding: 10px 16px;
`

const MobileNavigationBar = styled.div`
width: 100%;
position: fixed;
z-index: 1;
background-color: white;
box-shadow: 0px 1px 3px 0px #cccccc;
margin: auto;
display: flex;
flex-direction: row;
justify-content: space-between;
height: 105px;
align-items: center;
font-size: 0.85rem;
`

const MobileLogo = styled.a`
width: 150px;
padding: 10px 16px;
`

const MobileLocationMenu = styled.div`
display: flex;
flex-direction: row;
width: 120px;
justify-content: space-between;
font-size: 17px;
color: black;
padding: 20px 16px;
`

const MobileLocation = styled.span`
font-size: 14px;
color: #1fc76a;
font-weight: 700;
`

const DesktopStyle = {
    links: {
        textDecoration: 'none',
        color: 'black',
        fontWeight: 'bold',
        display: 'flex',
        textAlign: 'center'
    }
}


const Navbar = () => {

    const [state, setState] = useState({
        mobileView: false,
    });

    const { mobileView } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 1025
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
            <DesktopContainer>
                <DesktopNavigationBar>
                    <DesktopLogo href="#"><img src={NodeFlair_Logo} alt="NodeFlair Logo" style={{verticalAlign: 'middle', width: '85%'}}/></DesktopLogo>

                    {/* Links (Center portion of navbar) */}
                    <DesktopLinks>
                        <a href="#" style={DesktopStyle.links}>Companies</a>
                        <a href="#" style={DesktopStyle.links}>Jobs</a>
                        <a href="#" style={DesktopStyle.links}>Salaries</a>
                        <a href="#" style={DesktopStyle.links}>Reviews</a>
                        <a href="#" style={DesktopStyle.links}>Blog</a>
                    </DesktopLinks>

                    {/* Right side of navbar */}
                    <DesktopOptionsSelector>
                        <span>Singapore</span>
                        <span>+ Contribute</span>
                        <a href="#" style={DesktopStyle.links}><FontAwesomeIcon icon={faUser} size={2} style={{ marginRight: '6px' }} />Sign in</a>
                    </DesktopOptionsSelector>
                </DesktopNavigationBar>
            </DesktopContainer>
        )
    }

    const displayMobile = () => {
        return (
            <MobileNavigationBar>
                <MobileLogo href="#"><img src={NodeFlair_Logo} alt="NodeFlair Logo" style={{verticalAlign: 'middle', width: '100%;'}}/></MobileLogo>

                {/* Location and Hamburger Menu */}
                <MobileLocationMenu>
                    <MobileLocation>Singapore <FontAwesomeIcon icon={faAngleDown} style={{color: 'black', marginLeft: '3px'}} /></MobileLocation>
                    <FontAwesomeIcon icon={faBars}/>
                </MobileLocationMenu>
            </MobileNavigationBar>
        )
    }

    return (
        <Fragment>
            {mobileView ? displayMobile() : displayDesktop()}
        </Fragment>
    )
}

export default Navbar