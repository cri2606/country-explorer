import { Card, Text } from "@chakra-ui/react"
import { CountryType } from "../types/countryType";
import { CardButton } from "./CardButton";
import { Avatar } from "./ui/avatar";

type CountryCardProps = {
    country: CountryType;
}

export const CountryCard = ({ country }: CountryCardProps) => {
    return (
        <Card.Root>
            <Card.Body gap="2">
                <Avatar src={country.flags.svg} size="xl" shape="rounded" />
                <Card.Title fontWeight="semibold">{country.name.common}</Card.Title>
                <Text><b>Region:</b> {country.region}</Text>
                <Text><b>Population:</b> {country.population}</Text>
            </Card.Body>
            <Card.Footer>
                <CardButton country={country} />
            </Card.Footer>
        </Card.Root>
    )
}