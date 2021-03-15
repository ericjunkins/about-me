import React, {useState} from "react";
import {Center, Box, Flex, Text, HStack} from "@chakra-ui/react";
import styled from "styled-components";



const NavButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;

`

const Navbar = (props) => {

    const navTo = (loc) => {
        window.location.replace(loc)
    }

    return (
        <Flex justify="space-between" background="nav.background" py={2} w="100%" px={20} boxShadow="3px 3px 3px #ababab" position="fixed">
            <Box></Box>
            <HStack spacing="30px" color="#fff">
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
                {/* <NavButton onClick={() => navTo("/#home")}>
                    <Text fontSize="20px" fontWeight={500}> Resume </Text>
                </NavButton> */}
            </HStack>
        </Flex>
    )
}

export default Navbar;