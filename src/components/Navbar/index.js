import React from 'react'
import { /*NavWrap,*/ Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavLinkOutside, /*NavBtnLink*/ } from './NavbarElements'
import { BsThreeDotsVertical } from 'react-icons/bs';
//import { FaInstagram, FaGithub, FaLinkedinIn, FaSpotify } from 'react-icons/fa'

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        jlor.io_
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <BsThreeDotsVertical />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/">home_</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/Projects">my projects_</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/BlogHome">my blog_</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinkOutside><a class="navLinkOutside" href="https://drive.google.com/file/d/1gwtkiMBLWuuGG_5-odMfVXrGJXrC6g6X/view?usp=sharing">my resume_</a></NavLinkOutside>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar