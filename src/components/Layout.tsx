import { Box, SimpleGrid } from "@chakra-ui/react";
import Header from "./Header";

export const Layout = () => {
    return (
        <>
            <Header />
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} px={20} gap={10}>
                {/* box di esempio */}
                <Box w="50px" h="50px" bgColor="blue"></Box>
                <Box w="50px" h="50px" bgColor="blue"></Box>
                <Box w="50px" h="50px" bgColor="blue"></Box>
                <Box w="50px" h="50px" bgColor="blue"></Box>
            </SimpleGrid>
        </>
    );
}

export default Layout;