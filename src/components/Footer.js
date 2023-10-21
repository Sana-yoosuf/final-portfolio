import React, { useRef } from 'react'
import { motion } from 'framer-motion'

// import global styles
import {
    BlueText,
    Button,
    FlexContainer,
    Heading,
    PaddingContainer
} from '../styles/Global.styled'

// import footer styles
import {
    ContactForm,
    FormLabel,
    FormInput
} from '../styles/Footer.styled'

import { fadeInBottomVariant } from '../utils/Variants'
import emailjs from '@emailjs/browser';



const Footer = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lz9piz2', 'template_ourwolj', form.current, '9jSxAmBb5DHYx272i')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Send')
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <PaddingContainer
            id="Contact"
            top="5%"
            bottom="10%"
        >
            <Heading
                as={motion.h4}
                variants={fadeInBottomVariant}
                initial="hidden"
                whileInView="visible"
                size="h4"
                align="center"
            >
                MY CONTACT
            </Heading>

            <Heading
                as={motion.h2}
                variants={fadeInBottomVariant}
                initial="hidden"
                whileInView="visible"
                size="h2"
                align="center"
                top="0.5rem">
                Contact <BlueText>Me Here</BlueText>
            </Heading>

            <PaddingContainer top="3rem">
                <FlexContainer justify="center">

                    <ContactForm
                        ref={form}
                        onSubmit={sendEmail}
                        as={motion.form}
                        variants={fadeInBottomVariant}
                        initial="hidden"
                        whileInView="visible"
                    >

                        <PaddingContainer bottom="2rem">
                            <FormLabel>Name:</FormLabel>
                            <FormInput
                                type="text"
                                placeholder="Enter your name"
                                name='from_name'
                            />
                        </PaddingContainer>


                        <PaddingContainer bottom="2rem">
                            <FormLabel>Email:</FormLabel>
                            <FormInput
                                type="email"
                                placeholder="Enter your email"
                                name='from_email'
                            />
                        </PaddingContainer>


                        <PaddingContainer bottom="2rem">
                            <FormLabel>Message:</FormLabel>
                            <FormInput
                                as="textarea"
                                placeholder="Enter your message"
                                name='message'
                            />
                        </PaddingContainer>

                        <FlexContainer justify="center" responsiveFlex>

                        <Button type="submit" value="Send" >Send Message</Button> 

                            {/* <Button type="submit" value="Send">Send Message</Button> */}
                        </FlexContainer>

                    </ContactForm>
                </FlexContainer>
            </PaddingContainer>

        </PaddingContainer>
    )
}
export default Footer

























// return (
//         <PaddingContainer
//             id="Contact"
//             top="5%"
//             bottom="10%"
//         >
//             <Heading
//                 as={motion.h4}
//                 variants={fadeInBottomVariant}
//                 initial="hidden"
//                 whileInView="visible"
//                 size="h4"
//                 align="center"
//             >
//                 MY CONTACT
//             </Heading>

//             <Heading
//                 as={motion.h2}
//                 variants={fadeInBottomVariant}
//                 initial="hidden"
//                 whileInView="visible"
//                 size="h2"
//                 align="center"
//                 top="0.5rem">
//                 Contact <BlueText>Me Here</BlueText>
//             </Heading>

//             <PaddingContainer top="3rem">
//                 <FlexContainer justify="center">
//                     <ContactForm
//                     as={motion.form}
//                     variants={fadeInBottomVariant}
//                     initial="hidden"
//                     whileInView="visible"
//                     >

//                         <PaddingContainer bottom="2rem">
//                             <FormLabel>Name:</FormLabel>
//                             <FormInput
//                                 type="text"
//                                 placeholder="Enter your name"
//                             />
//                         </PaddingContainer>


//                         <PaddingContainer bottom="2rem">
//                             <FormLabel>Email:</FormLabel>
//                             <FormInput
//                                 type="email"
//                                 placeholder="Enter your email"
//                             />
//                         </PaddingContainer>


//                         <PaddingContainer bottom="2rem">
//                             <FormLabel>Message:</FormLabel>
//                             <FormInput
//                                 as="textarea"
//                                 placeholder="Enter your message"
//                             />
//                         </PaddingContainer>

//                         <FlexContainer justify="center" responsiveFlex>
//                             <Button>Send Message</Button>
//                         </FlexContainer>

//                     </ContactForm>
//                 </FlexContainer>
//             </PaddingContainer>

//         </PaddingContainer>
//     )
