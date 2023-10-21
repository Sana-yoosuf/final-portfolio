import React,{useState,useEffect} from 'react'
import {motion, AnimatePresence } from 'framer-motion';
// import global styles
import {
    Container,
    FlexContainer,
    PaddingContainer,
    BlueText
} from '../styles/Global.styled'
// import Navbar Styles

import { Logo,MenuIcon,NavbarContainer } from '../styles/navbar.styled';

import { GiHamburgerMenu } from 'react-icons/gi';
import { theme } from '../utils/Theme'
import NavMenu from './layouts/NavMenu';


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [sticky,setSticky]=useState(false)


    useEffect(()=>{
        // onScroll function
        const onScroll=()=>{
           window.pageYOffset > 50 ? setSticky(true):setSticky(false)
        }
        window.addEventListener('scroll',onScroll);
        // cleanup
        return ()=>window.removeEventListener('scroll',onScroll)
    },[])
    
    return (
        <NavbarContainer 
        bgColor={sticky? theme.colors.primary: "transparent"}
        >
            <PaddingContainer
                top="1.2rem"
                bottom="0.5rem"
                responsiveLeft="1rem"
                responsiveRight="1rem"
            >
                <Container>
                    <FlexContainer 
                    justify="space-between"
                    responsiveFlex >
                        {/* --left logo-- */}
                        <Logo>
                            <BlueText>Port</BlueText>folio
                        </Logo>

                        {/* --right -menu-- */}
                        <MenuIcon 
                        as={motion.a}
                        whileHover={{scale:1.2}}
                        onClick={()=>{setOpenMenu(true)}}
                        >
                            <GiHamburgerMenu/>
                        </MenuIcon>


                    </FlexContainer>
                </Container>

                <AnimatePresence>
                {openMenu && <NavMenu setOpenMenu={setOpenMenu}/>}
                </AnimatePresence>
                

            </PaddingContainer>

        </NavbarContainer>
    )
}

export default Navbar