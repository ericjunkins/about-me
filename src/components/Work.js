import React, {useState} from "react";
import {Center, Flex, Box, Text, Grid, GridItem, Image, Link, Tag, Tooltip, SimpleGrid} from "@chakra-ui/react";

import ProjectCard from "./ProjectCard";
import {FaCubes, FaRobot, FaPlug, FaCode, FaChartLine} from "react-icons/fa";

import link from "./../assets/link_rotate.jpg";
import iot from "./../assets/iot.jpg";
import print_1 from "./../assets/3d_print_1.jpg"
import print_2 from "./../assets/3d_print_2.jpg"
import rpi from "./../assets/rpi_logo.png";
import arduino from "./../assets/ArduinoCommunityLogo.png"


import puffer_back from "./../assets/puffer_back.jpg";
import puffer_front from "./../assets/puffer_front.jpg";

import heart_design from "./../assets/heart_pcb.png";
import hearts from "./../assets/hearts.jpg"
import puffer_top from "./../assets/puffer_top.jpg"

import viz_dark from "./../assets/viz_dark.png";
import viz_light from "./../assets/viz_light.png";

import osr from "./../assets/rover-silver.png"

const Prototyping = (props) => {
    return (
        <Box mt={5} p={5} border="2px solid #3c97b0" borderRadius="5px" w="80%" maxW="1500px" boxShadow="4px 4px 4px #ababab">
            <SimpleGrid columns={4} spacing="20px" py={5}>
                <Tooltip label="Link artwork I made using a laser cutter and MDF" placement="bottom" hasArrow className="tooltips" py={5} px={5}>
                    <Tag bg="none">
                        <Image src={link} alt="Laser Cut link"/>
                    </Tag>
                </Tooltip>
                <Tooltip label="Prototype development for IoT sensor packages for monitoring inside cleanrooms at JPL" placement="bottom" hasArrow className="tooltips" py={5} px={5}>
                    <Tag bg="none">
                        <Image src={iot} alt="IoT Device development" />
                    </Tag>
                </Tooltip>
                <Tooltip label="3D printing pieces for robot swarm for JPL PUFFER project" placement="bottom" hasArrow className="tooltips" py={5} px={5}>
                    <Tag bg="none">
                        <Image src={print_1} alt="print_1" />
                    </Tag>
                </Tooltip>
                <Tooltip label="3D printing pieces for robot swarm for JPL PUFFER project" placement="bottom" hasArrow className="tooltips" py={5} px={5}>
                    <Tag bg="none">
                        <Image src={print_2} alt="print_2" />
                    </Tag>
                </Tooltip>
            </SimpleGrid>
            <Text py={5} fontSize={"20px"} px={5}>
                I've been using rapid prototype principles in my engineering design flow for a few years while working at JPL in an R&D robotics lab. This includes
                using items like 3D printers (FDM, SLS, SLA, metallic), laser cutter, vacuum form, and casting to create designs that are easily and quickly testable and iterable. I've been
                using these skills both towards robotic applications, as well as IoT sensor development platforms.
            </Text>
            <SimpleGrid columns={2} spacing="20px" py={5} >
                <Center>
                    <Image src={rpi} alt="Raspberry Pi" h="120px"/>
                </Center>
                <Image src={arduino} alt="Arduino" h="120px"/>
            </SimpleGrid>
            <Text py={5} fontSize={"20px"} px={5}>
                In development of rapid prototype robotic systems I leveraged devices such as Raspberry Pi, Arduino, BeagleBone, and other linux-based and micro-controller systems.
            </Text>


        </Box>
    )
}

const Robotics = (props) => {
    return (
        <Box mt={5} p={5} border="2px solid #3c97b0" borderRadius="5px" w="80%" maxW="1500px" boxShadow="4px 4px 4px #ababab">
            <SimpleGrid columns={2} spacing="20px" py={5}>
                <Tooltip label="A few of the PUFFER robots" placement="bottom" hasArrow className="tooltips" py={5} px={5}>
                    <Tag bg="none">
                        <Image src={puffer_back} alt="back"/>
                    </Tag>
                </Tooltip>
                <Tooltip label="A few of the PUFFER robots" placement="bottom" hasArrow className="tooltips" py={5} px={5}>
                    <Tag bg="none">
                        <Image src={puffer_front} alt="puffer_front" />
                    </Tag>
                </Tooltip>
                
            </SimpleGrid>
            <Text py={5} fontSize={"20px"} px={5}>
                My work in robotics has been spread between working as an Electrical Engineer, Software Developer, and to a smaller extent, Mechanical/Mechanism design. 
                I focused a lot on making custom PCBs and electronics systems, and writing embedded code to run on micro controllers, and writing ROS code to do motor control/communication to micro controllers.
                One major project I worked on, the Pop-Up Flat Folding Explorer Robot (PUFFER) can be seen more in depth on the 
                <Link color="nav.button" fontWeight={500} href="https://www.nasa.gov/directorates/spacetech/game_changing_development/projects/A-PUFFER"> NASA PUFFER article </Link>
            </Text>
        </Box>
    )
}

const Electronics = (props) => {
    return (
        <Box mt={5} p={5} border="2px solid #3c97b0" borderRadius="5px" w="80%" maxW="1500px" boxShadow="4px 4px 4px #ababab">
            <SimpleGrid columns={3} spacing="20px" py={5}>
                <Tooltip label="PCB Layout for hear PCB project for a valentines day project" placement="bottom" hasArrow className="tooltips" py={5} px={5}>
                    <Tag bg="none">
                        <Image src={heart_design} alt="heart_pcb"/>
                    </Tag>
                </Tooltip>
                <Tooltip label="Heart PCBs manufactured" placement="bottom" hasArrow className="tooltips" py={5} px={5}>
                    <Tag bg="none">
                        <Image src={hearts} alt="hearts" />
                    </Tag>
                </Tooltip>
                <Tooltip label="Top-view of Electronics for PUFFER. A combination of COTS pieces and custom electroncis/PCBs" placement="bottom" hasArrow className="tooltips" py={5} px={5}>
                    <Tag bg="none">
                        <Image src={puffer_top} alt="puffer_top" />
                    </Tag>
                </Tooltip>
            </SimpleGrid>
            <Text py={5} fontSize={"20px"} px={5}>
                My experience in electronics is geared mostly towards development of custom PCBs and electronics for small-scale robotic systems. This usually also involved
                integrating in with existing COTS parts, such as motor controllers, micro controllerss, solar charers, and batteries. An open-source PCB design I made
                can be found here: <Link color="nav.button" fontWeight={500} href="https://github.com/ericjunkins/heart-pcb">Heart PCB Project </Link>
                
            </Text>
        </Box>
    )
}

const Visualization = (props) => {
    return (
        <Box mt={5} p={5} border="2px solid #3c97b0" borderRadius="5px" w="80%" maxW="1500px" boxShadow="4px 4px 4px #ababab">
            <SimpleGrid columns={2} spacing="20px" py={5}>
                <Tooltip label="COVID-19 Data visualization dashboard" placement="bottom" hasArrow className="tooltips" py={5} px={5}>
                    <Tag bg="none">
                        <Image src={viz_dark} alt="viz_dark"/>
                    </Tag>
                </Tooltip>
                <Tooltip label="Light-theme of COVID-19 Viz" placement="bottom" hasArrow className="tooltips" py={5} px={5}>
                    <Tag bg="none">
                        <Image src={viz_light} alt="viz_light" />
                    </Tag>
                </Tooltip>
            </SimpleGrid>
            <Text py={5} fontSize={"20px"} px={5}>
                At the beginning of the COVID-19 Pandemic I was no longer able to work from the lab anymore, so started doing work with data visualization,
                one major task was to build visualization of COVID-19. This work was all done using 
                <Link color="nav.button" fontWeight={500} href="https://d3js.org/"> D3 </Link> and <Link fontWeight={500} color="nav.button" href="https://reactjs.org/"> React </Link> to build the frontend UI.
            </Text>
        </Box>
    )
}

const Development = (props) => {
    return (
        <Box mt={5} p={5} border="2px solid #3c97b0" borderRadius="5px" w="80%" maxW="1500px" boxShadow="4px 4px 4px #ababab">
            <SimpleGrid columns={5} spacing="20px" py={5}>
                <Image></Image>
                <Image></Image>
                <Tooltip label="JPL Open Source Rover Educational Robot" placement="bottom" hasArrow className="tooltips" py={5} px={5}>
                    <Tag bg="none">
                        <Image src={osr} alt="viz_dark"/>
                    </Tag>
                </Tooltip>
                
            </SimpleGrid>
            <Text py={5} fontSize={"20px"} px={5}>
                While starting at JPL I designed an<Link color="nav.button" fontWeight={500} href="https://github.com/nasa-jpl/open-source-rover"> Open-Source Robotics project </Link>, a DIY version of the 6-wheel mars rover designs, out of completely off-the-shelf parts. This project was aimed at high school
                robotic clubs as a teaching platform of mant different aspects of robotics. I am still one of the core maintainers of this project. 
                
            </Text>
        </Box>
    )
}




const Work = (props) => {
    const [displaySection, setDisplaySection] = useState(undefined)

    let accordian
    if (displaySection === "3D Printing & Rapid Prototype"){
        accordian = <Prototyping />
    } else if (displaySection === 'Robotics'){
        accordian = <Robotics />
    } else if (displaySection === "Electronics"){
        accordian = <Electronics />
    } else if (displaySection === "Data Visualization"){
        accordian = <Visualization />
    } else if (displaySection === "Open Source Development"){
        accordian = <Development />
    } else if (displaySection === undefined){
        accordian = null
    }


    const toggleSection = (sel) => {
        setDisplaySection(sel === displaySection ? undefined : sel)
    }

    return (
        <Box>
            <Center w="100%">
                <Box w="100%" maxW="1500px" id="work" px={2, 5}>
                    <Box textAlign="start" px={[2, 5]} py={5}> 
                    <Text fontWeight={400} fontSize={"26px"} color="nav.button"> A Little bit about my work </Text>
                        <Text px={[2, 5]} fontSize={["16px", "16px", "20px", "20px"]}>
                            Click on a card to see some examples of my work in each section.
                        </Text>
                    </Box>
                    <Grid 
                        templateColumns={["repeat(4, 1fr)", "repeat(4, 1fr)", "repeat(6, 1fr)", "repeat(5, 1fr)"]} 
                        templateRows={["repeat(3, 1fr)","repeat(3, 1fr)","repeat(2, 1fr)","repeat(1, 1fr)"]}
                        h={["550px", "500px", "400px", "200px" ]}
                        columnGap={5}
                        rowGap={5}
                    >   
                        <GridItem colSpan={[2,2,2,1]} rowSpan={1}>
                            <ProjectCard 
                                icon={FaCubes}
                                title={"3D Printing & Rapid Prototype"}
                                toggle={toggleSection}
                            />
                        </GridItem>
                        <GridItem colSpan={[2,2,2,1]} rowSpan={1}>
                            <ProjectCard 
                                icon={FaRobot}
                                title={"Robotics"}
                                toggle={toggleSection}
                            />
                        </GridItem>
                        <GridItem colSpan={[2,2,2,1]} rowSpan={1}>
                            <ProjectCard 
                                icon={FaPlug}
                                title={"Electronics"}
                                toggle={toggleSection}
                            />
                        </GridItem>
                        <GridItem colSpan={[2,2,2,1]} rowSpan={1} colStart={[3, 3 , 2, 4]}>
                            <ProjectCard 
                                icon={FaChartLine}
                                title={"Data Visualization"}
                                toggle={toggleSection}
                            />
                        </GridItem>
                        <GridItem colSpan={[2,2,2,1]} rowSpan={1} colStart={[2,'none', 4, 5]}>
                            <ProjectCard 
                                icon={FaCode}
                                title={"Open Source Development"}
                                toggle={toggleSection}
                            />
                        </GridItem>
                    </Grid>
                </Box>
            </Center>
            <Center w="100%">
                {accordian}
            </Center>
        </Box>
    )
}

export default Work;