import { Box, Card, Button, Text } from "@chakra-ui/react";
import { useDetails } from "../hooks/useDetails";
import Header from "./Header";
import { Avatar } from "./ui/avatar";

export const CountryDetails = () => {
    const { details, handleBackClick } = useDetails();

    if (!details) return <p>Loading...</p>;

    return (
        <>
            <Header />
            <Box display="flex" alignItems="center" justifyContent="center" pt={10}>
                <Card.Root>
                    <Card.Body gap="2">
                        <Avatar src={details.flags.svg} size="xl" shape="rounded" />
                        <Text>{details.name.common}</Text>
                        <Text><b>Region:</b> {details.region}</Text>
                        <Text><b>Population:</b> {details.population}</Text>
                        <Text><b>Capital:</b> {details.capital?.[0]}</Text>
                        <Text><b>Currencies: </b>{Object.keys(details.currencies).join(", ")}</Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={handleBackClick}>Back to home</Button>
                    </Card.Footer>
                </Card.Root>
            </Box>
        </>
    );
};

