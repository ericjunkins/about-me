import React, {useState, useEffect} from "react";
import {Center, Box, Flex, Text, Divider} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Introduction from "../components/Introduction";
import SkillsChart from "../components/SkillsChart";
import Work from "./../components/Work";
import About from "../components/About";
import Contact from "./../components/Contact";

const Home = (props) => {

    const size = useWindowSize();

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
          width: undefined,
          height: undefined
        });
    
        useEffect(()=>{
          function handleResize() {
            setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight
            })
          }
          window.addEventListener("resize", handleResize);

          handleResize();
    
          return () => window.removeEventListener("resize", handleResize);
        }, []);
        return windowSize
    }
    
    return (
        <Center w="100vw" bg="site.background" fontFamily={`"Roboto", "Avenir", "Segoe UI", sans-serif;`} id="home">
            <Box w="100%" bg="site.background">
                <Navbar size={size}/>
                <Introduction size={size}/>
                <SkillsChart size={size}/>
                <Work size={size}/>
                <About size={size}/>
                <Center w="100%">
                    <Box borderBottom="1px solid #000" w="80%" maxW="1500px"></Box>
                </Center>
                <Contact />
            </Box>
        </Center>
    )
}

export default Home;