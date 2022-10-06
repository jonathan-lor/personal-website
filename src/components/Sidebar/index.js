import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SideBtnWrap, SidebarRoute, SidebarRouteResume, SidebarSocials } from './SidebarElements';
import { FaInstagram, FaGithub, FaLinkedinIn, FaSpotify } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SideBtnWrap>
                    <SidebarRoute to="/">home_</SidebarRoute>
                    <SidebarRoute to="/Projects">my projects_</SidebarRoute>
                    <SidebarRoute to="/BlogHome">my blog_</SidebarRoute>
                    <SidebarRouteResume ><a class="resumeNavLink" href="https://drive.google.com/file/d/1FmfYeqNHcn4DKgwycxojzOvZaIX0lEtb/view?usp=sharing">my resume_</a></SidebarRouteResume>
                    <SidebarSocials>
                        <a href="https://www.linkedin.com/in/jonathanlor/">
                            <FaLinkedinIn class="socialLinks1" size={24} />
                        </a>
                        <a href="https://github.com/jonathan-lor">
                            <FaGithub class="socialLinks1" size={24} />
                        </a>
                        <a href="https://www.instagram.com/j.onathan.lor/">
                            <FaInstagram class="socialLinks1" size={24} />
                        </a>
                        <a href="https://open.spotify.com/user/22vzwr75qkpkqw547rn6at6ya?si=4683c775a597405f">
                            <FaSpotify class="socialLinks1" size={24} />
                        </a>
                    </SidebarSocials>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar