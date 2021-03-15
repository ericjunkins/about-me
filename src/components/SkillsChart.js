import React from "react";
import {Center, Flex, Text, Box, VStack} from "@chakra-ui/react";
import D3Container from "./D3Container";

import {GenerateChart} from "./d3/SpiderChart";
import {skills} from "../data/skillset";

const SkillsChart = ({size}) => {
    let margin;
    if (size.width < 500) {
        margin = { top: 20, bottom: 20, right: 20, left: 20}
    } else if (size.width < 900) {
        margin = { top: 20, bottom: 20, right: 40, left: 40}
    } else {
        margin = { top: 0, bottom: 0, right: 90, left: 90}
    }
    return (
        <Center pt={0} w="100%">
            <Box h={["500px", "500px", "500px", "700px"]} w={["100%"]} maxW={["768px"]}>
                <D3Container 
                    title="spider-chart"
                    generate={GenerateChart}
                    data={skills}
                    color="#49bede"
                    margin={margin}
                />
            </Box>
        </Center>
    )
}

export default SkillsChart;