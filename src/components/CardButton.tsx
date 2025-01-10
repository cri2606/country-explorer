import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { CountryType } from "../types/countryType";

type CardButtonProps = {
  country: CountryType;
};
export const CardButton = ({ country }: CardButtonProps) => {
  const navigate = useNavigate();
  const handleClick = async () => {
    navigate(`/country/${country.name.common}`, { state: { country } });
  };
  return (
    <Button color="white" bgColor="green" onClick={handleClick}>Show Details</Button>
  );
};