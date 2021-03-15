import React, {useState, useEffect} from "react";
import {Center, Flex, Box} from "@chakra-ui/react";

const D3Container = ({title, generate, data, color, margin, size}) => {
    useEffect(() => {
        let ele = document.getElementById('d3-' + title)
        generate({
            id: 'd3-' + title,
            width: ele.offsetWidth, 
            height: ele.offsetHeight,
            data: data,
            color: color,
            margin: margin,
            size: size
        });
    }, [])



    return (
        <Box id={'d3-' + title} h="100%" w="100%">
            
        </Box>
    )
}

export default D3Container;