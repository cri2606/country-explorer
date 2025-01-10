import { Heading, SimpleGrid } from "@chakra-ui/react";
import { useCountry } from "../hooks/useCountry";
import { CountryCard } from "./CountryCard";

export const CountryList = () => {
    const { country } = useCountry();
    return (
        <>
            <Heading px={20} pt={5}>Country List</Heading>
            <SimpleGrid mt={5} marginBottom={10} columns={{ sm: 1, md: 2, lg: 3 }} px={20} gap={10}>
                {country.map(item => <CountryCard country={item} />)}
            </SimpleGrid>
        </>
    );
}

export default CountryList;