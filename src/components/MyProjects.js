import React from 'react'
import { motion } from 'framer-motion'

// import global styles
import {
    PaddingContainer,
    Heading,
    BlueText
} from '../styles/Global.styled'

import { projectDetails } from '../utils/Data' 
import Project from './layouts/Project'

import { fadeInTopVariant } from '../utils/Variants'

const MyProjects = () => {
    return (
        <PaddingContainer
            id="Projects"
            top="5%"
            bottom="5%"
            responsiveTop="20%"
            responsiveLeft="1rem"
            responsiveRight="1rem"
        >
            <Heading 
            as={motion.h4 }
            variants={fadeInTopVariant}
            initial="hidden"
            whileInView="visible"
            size="h4">
                MY PROJECTS
            </Heading>

            <Heading 
            as={motion.h4 }
            variants={fadeInTopVariant}
            initial="hidden"
            whileInView="visible" 
            size="h4"
            top="0.5rem">
                What <BlueText> I have Build</BlueText>

            </Heading>

            {projectDetails.map((project)=>(
               <PaddingContainer key={project.id} top="3rem" bottom="5rem">
               <Project data={project}/>
                </PaddingContainer>
            ))}
        </PaddingContainer>
    )
}

export default MyProjects