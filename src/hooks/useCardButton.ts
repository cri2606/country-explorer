import { useCallback, useState } from "react";
import { getDetails } from "../services/api/details";
import { CountryType } from "../types/countryType";
import { DetailsType } from "../types/detailsType";

export const useCardButton = (country: CountryType) => {
    const [details, setDetails] = useState<DetailsType>();

    const fetchDetails = useCallback(async () => {
        const data = await getDetails(country.name.common);
        setDetails(data); // I dati sono già il primo elemento grazie a getDetails
    }, [country.name.common]);

    return { fetchDetails, details };
};
