import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, ResumeLink, /*NavBtnLink*/ } from './NavbarElements'
import { BsThreeDotsVertical } from 'react-icons/bs';

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
                            <ResumeLink><a class="resumeNavLink" href="https://drive.google.com/file/d/11px12mfy_C_3rzhhjqT4UpfvUgCnaum9/view?usp=sharing">my resume_</a></ResumeLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar