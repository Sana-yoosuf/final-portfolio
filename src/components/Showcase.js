import React from 'react'
import { motion } from 'framer-motion'
import { icons } from 'react-icons'

// import global styles
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
    ButtonLink
} from '../styles/Global.styled'

// import showcase styles
import {
    ShowcaseImageCard,
    ShowcaseParticleContainer,
    Particle
} from '../styles/Showcase.styled'

// importing react-icons
import {
    BsInstagram,
    BsLinkedin,
    BsTwitter,
    BsYoutube
} from "react-icons/bs"

// import assets

import ShowcaseImg from '../assets/portfolio.png'
import BackgroundImg from "../assets/particle.png";
import CV from '../assets/resume.pdf'


import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants'


const Showcase = () => {
    return (
        <PaddingContainer
            id="Home"
            left="3%"
            right="10%"
            top="18%"
            bottom="10%"
            responsiveLeft="1rem"
            responsiveRight="1rem"
            responsiveTop="8rem"
        >
            <FlexContainer fullWidthChild>
                {/* --left-content-- */}
                <motion.div
                    variants={fadeInLeftVariant}
                    initial="hidden"
                    whileInView="visible"
                >
                    <Heading as="h4" size="h4">Hello!</Heading>

                    <Heading
                        as="h2"
                        size="h2"
                        top="0.5rem"
                        bottom="1rem"
                    >
                        I'm <BlueText>Sana Yoosuf</BlueText> </Heading>

                    <Heading as="h3" size="h3">
                        I'm a <BlueText>Frontend Devoloper</BlueText>
                    </Heading>

                    <ParaText as="p" top="2rem" bottom="4rem">
                        Hello, my name is Sana Yoosuf and I,m a Frontend devoloper with
                        1 year experience in creating and designing user-friendly websites
                        and web applications. Reach out if you"d like to know more.
                    </ParaText>


                    <FlexContainer responsiveFlex  gap="10px">
                        <ButtonLink href={CV} >View CV</ButtonLink>
                        <ButtonLink  href='#Contact'>Contact Me</ButtonLink>
                    </FlexContainer>

                    


                    {/* social icons */}



                    {/* <FlexContainer gap="20px"
                        responsiveFlex
                    >
                        <IconContainer color="white" size="1.5rem">
                            <BsLinkedin />
                        </IconContainer>

                        <IconContainer color="white" size="1.5rem">
                            <BsTwitter />
                        </IconContainer>

                        <IconContainer color="white" size="1.5rem">
                            <BsYoutube />
                        </IconContainer>

                        <IconContainer color="white" size="1.5rem">
                            <BsInstagram />
                        </IconContainer>
                    </FlexContainer>  */}


                </motion.div>

                {/* right container */}

                <FlexContainer
                    as={motion.div}
                    variants={fadeInRightVariant}
                    initial="hidden"
                    whileInView="visible"
                    justify="flex-end">
                    <ShowcaseParticleContainer>
                        <ShowcaseImageCard>
                            <img src={ShowcaseImg} alt='showcase' />
                        </ShowcaseImageCard>

                        <Particle
                            as={motion.img}
                            animate={{
                                x: [0, 100, 0,],
                                rotate: 360,
                                scale: [1, 0.5, 1]
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                            }}
                            src={BackgroundImg}
                            alt='particle'
                            top="-80px"
                            left="20px"
                            rotate="60deg"

                        />


                        <Particle
                            as={motion.img}
                            animate={{
                                y: [0, 100, 0,],
                                rotate: 360,
                                scale: [1, 0.8, 1]
                            }}
                            transition={{
                                duration: 18,
                                repeat: Infinity,
                            }}
                            src={BackgroundImg}
                            alt='particle'
                            top="-50px"
                            right="-70px"
                            rotate="0deg"

                        />

                        <Particle
                            as={motion.img}
                            animate={{
                                y: [0, -100, 0,],
                                rotate: 360,
                                scale: [1, 0.9, 1]
                            }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                            }}
                            src={BackgroundImg}
                            alt='particle'
                            bottom="10px"
                            left="-70px"
                            rotate="50deg"

                        />
                    </ShowcaseParticleContainer>
                </FlexContainer>


            </FlexContainer>

        </PaddingContainer>
    )
}

export default Showcase