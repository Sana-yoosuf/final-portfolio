import React from 'react'
// import global styles

import {
    FlexContainer,
    Heading,
    IconContainer,
    PaddingContainer,
    ParaText,
    ButtonLink
} from '../../styles/Global.styled'
import { FaGithub } from 'react-icons/fa'


// import project styles
import {
    ProjectImage,
    ProjectImageContainer,
    TechStackCard
}
    from '../../styles/MyProject.styled'
import { motion } from 'framer-motion'

import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variants'


const Project = ({ data }) => {
    return (
        <FlexContainer
            direction={data.reverse ? 'row-reverse' : false}
            fullWidthChild>
            {/* left-section-project-content */}
            <motion.div
                variants={data.reverse ? fadeInLeftVariant :
                    fadeInRightVariant}
                initial="hidden"
                whileInView="visible"
            >
                <FlexContainer align="center" gap="1rem">
                    <Heading as="h3" size="h3" bottom="1rem">
                        {data.project_name}
                    </Heading>

                    <IconContainer color="blue" size="2rem">
                        <FaGithub />
                    </IconContainer>

                </FlexContainer>
                <PaddingContainer top="1rem">
                    <FlexContainer gap="1.5rem">

                        {data.tech_stack.map((stack) => (
                            <TechStackCard>{stack}</TechStackCard>
                        ))}
                    </FlexContainer>
                </PaddingContainer>

                <ParaText top="1.5rem" bottom="2rem">
                    {data.project_desc}
                </ParaText>

                <ButtonLink href={data.project_url}>Visit Website</ButtonLink>
               
            </motion.div>

            {/* right section */}

            <ProjectImageContainer
                as={motion.div}
                variants={data.reverse ? fadeInLeftVariant : fadeInRightVariant}
                initial="hidden"
                whileInView="visible"
                justify={data.reverse ? "flex-start" : "flex-end"}>
                <ProjectImage 
                    src={data.project_img}
                    alt={data.project_name}
                />

            </ProjectImageContainer>
        </FlexContainer>
    )
}

export default Project