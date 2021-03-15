import React from "react";
import {Center, Flex, Box, Text, SimpleGrid} from "@chakra-ui/react";

const About = (props) => {

    return (
        <Center w="100%" py={10} id="about"> 
            <Box w="100%" maxW="1500px" textAlign="start" px={[2,5]}>
                <Text fontWeight={400} fontSize={"26px"} color="nav.button"> A Little bit about me </Text>
                {/* <Text px={10} pt={4} fontSize={"24px"}>
                    Work/Academic Related
                </Text> */}
                
                <Text px ={[2,5]} py={2} fontSize={["14px", "14px", "20px", "20px"]}> 
                    In college I studied Physics, but afterwards I realized what I really wanted to do was build and design things. After graduating
                    I've held positions as an Instrumentation Design Engineer, Integration/Test Engineer, and Robotics Engineer. Through these I've gained
                    a diverse skillset, getting to work on all sorts of things from Rockets, Flight hardware, to designing mechanisms and robotic prototypes 
                    that for future exploration on other planets.
                </Text>
                <Text px ={[2,5]} py={2} fontSize={["14px", "14px", "20px", "20px"]}> 
                    I'm fairly self-taught in my aspects of my day-to-day job, I think that one of my greatest skills is the ability to teach myself to do anything, from embedded development,
                    mechanical design, to data visualization and web development. I enjoy the opportunity to experience engineering projects/challenges from all fields, and believe it has made me a better engineer in all aspects from it.
                </Text>
                
 
                {/* <Text px ={10} py={4} fontSize={"24px"}>
                    Personal life 
                </Text> */}
                <Text px ={[2,5]} py={0} fontSize={["14px", "14px", "20px", "20px"]}> 
                    For my free time I'm obsessed with rock climbing and playing sand volleyball, most days I can be found doing one of those two activities. I enjoy
                    building and creating things, whether it's 3D printing, tinkering with electronics, in a machine shop, or in the kitchen. I've lived in Colorado most of my life,
                    with a few years in Los Angeles as well. 
                </Text>
            </Box>
        </Center>

    )
}

export default About;