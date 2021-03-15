import {extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        nav: {
            background: "#42aac7",
            button: "#3994ad",
            boxShadow: "10px 5px 5px red"
        },
        site: {
            background: "#e9eef0"
        }
    }
})

export default theme;