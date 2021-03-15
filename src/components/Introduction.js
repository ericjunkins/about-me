import React from "react";
import {Center, Flex, Box, Text, SimpleGrid, Image, HStack, VStack} from "@chakra-ui/react";

import Myself from "./../assets/avatar.svg";

const Introduction = ({size}) => {
    // let config = {fontSize: "20px"};
    // if (size.width <= 500){
    //     config
    // }
    return (
        <Center textAlign="start" w="100%" pt={[0, 15]} mt={"80px"}>
            <Flex justify="space-between" w={["100%"]} maxW="1500px" px={[0, 4]}>

                
                <Center h="200px">
                <VStack textAlign="start" px={5}>
                    <Text fontSize={["32px","48px"]} w="100%" fontWeight={500} color="nav.button" px={10}> Hi I'm Eric </Text>
                    <Text fontSize={["12px","12px","16px","22px"]} px={0}> I like to design and build robots, mechanisms, electronics, and generally tinker with things. I employ rapid prototyping principles to my designs for quick and inexpensive iteration. I also dabble with data visualization, front end development, and UI design</Text>
                </VStack>

                <Image src={Myself} alt="Robot" boxSize={["100px","180px"]}/>
                </Center>
            </Flex>
        </Center>
    )
}

export default Introduction;