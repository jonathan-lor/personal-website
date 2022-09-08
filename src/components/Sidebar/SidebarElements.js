import styled from 'styled-components';
import { CgClose } from 'react-icons/cg';
import { Link as LinkR } from 'react-router-dom';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(CgClose)`
    color: #BBBBBB;
    &:hover {
      color: #A91079;
      transition: 0.3s ease-in-out;
    }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
  `

export const SidebarMenu = styled.ul`
  
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  
  /*
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  */

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
  `

export const SidebarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: purple;
    transition: 0.3s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`

export const SidebarRoute = styled(LinkR)`
  color: #BBBBBB;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  border-radius: 50px;
  //background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.3s ease-in-out;
    color: #A91079;
  }
`

export const SidebarRouteResume = styled.div`
  color: #BBBBBB;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  border-radius: 50px;
  //background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.3s ease-in-out;
    color: #A91079;
  }
`

export const SidebarSocials = styled.div`
  display: flex;
  justify-content: space-between;
  color: #BBBBBB;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  border-radius: 50px;
  white-space: nowrap;
  padding: 16px 64px;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.3s ease-in-out;
    color: #A91079;
  }
`
