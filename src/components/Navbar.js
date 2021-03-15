import React, {useState} from "react";
import {Center, Box, Flex, Text, HStack} from "@chakra-ui/react";
import styled from "styled-components";



const NavButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;

`

const Navbar = ({size}) => {

    const navTo = (loc) => {
        window.location.replace(loc)
    }

    const buttons = ( size.width >= 500 ?
        <Flex justify={["space-between"]}>
            <Box w="0px"></Box>
            <HStack spacing={["15px", "15px", "30px", "30px"]} color="#fff" w="100%">
                <NavButton onClick={() => navTo("/about-me/#home")}>
                    <Text fontSize="20px" fontWeight={500}> Home </Text>
                </NavButton>
                <NavButton onClick={() => navTo("/about-me/#work")}>
                    <Text fontSize="20px" fontWeight={500}> Work </Text>
                </NavButton>
                <NavButton onClick={() => navTo("/about-me/#about")}>
                    <Text fontSize="20px" fontWeight={500}> About </Text>
                </NavButton>
                <NavButton onClick={() => navTo("/about-me/#contact")}>
                    <Text fontSize="20px" fontWeight={500}> Contact </Text>
                </NavButton>
            </HStack>
        </Flex> :
        <Center>
            <HStack spacing={["15px", "15px", "30px", "30px"]} color="#fff" w="100%">
                <NavButton onClick={() => navTo("/about-me/#home")}>
                    <Text fontSize="20px" fontWeight={500}> Home </Text>
                </NavButton>
                <NavButton onClick={() => navTo("/about-me/#work")}>
                    <Text fontSize="20px" fontWeight={500}> Work </Text>
                </NavButton>
                <NavButton onClick={() => navTo("/about-me/#about")}>
                    <Text fontSize="20px" fontWeight={500}> About </Text>
                </NavButton>
                <NavButton onClick={() => navTo("/about-me/#contact")}>
                    <Text fontSize="20px" fontWeight={500}> Contact </Text>
                </NavButton>
            </HStack>
        </Center>
    )

    return (
        <Flex background="nav.background" py={2} w="100%" px={[12, 20]} boxShadow="3px 3px 3px #ababab" position="fixed">
            {buttons}
        </Flex>
    )
}

export default Navbar;