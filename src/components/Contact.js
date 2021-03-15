import React from "react";
import {Center, Flex, Box, Text, Icon, HStack, Link} from "@chakra-ui/react";


import {FaLinkedin, FaFacebookSquare} from "react-icons/fa";

const Contact = (props) => {

    return (
        <Center w="100%" py={10} id="contact"> 
            <Box w="80%" maxW="1500px" textAlign="start" px={5} textAlign="center">
                <Text fontSize="34px" fontWeight={500} color="nav.button"> Find Me </Text>
                <Center py={10}>
                    <HStack spacing="10px">
                        <Link href="https://www.linkedin.com/in/eric-junkins-3b9745209" target="_blank">
                            <Icon boxSize="60px" as={FaLinkedin} color="nav.button" />
                        </Link>
                        <Link href="https://www.facebook.com/eric.junkins/" target="_blank" >
                            <Icon boxSize="60px" as={FaFacebookSquare} color="nav.button"  />
                        </Link>
                       
                    </HStack>
                </Center>
                <Text> <Link href="mailto:eric.junkins@colorado.edu" target="_blank" fontSize={"24px"} color="nav.button" fontWeight={500}> eric.junkins@colorado.edu </Link></Text>
            </Box>
        </Center>

    )
}

export default Contact;