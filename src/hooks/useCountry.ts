import { useEffect, useState } from "react";
import { getCountry } from "../services/api/api";
import { CountryType } from "../types/countryType";

export const useCountry = () => {
    const [country, setCountry] = useState<CountryType[]>([]);

    useEffect(() => {
        const fetchCountry = async () => setCountry(await getCountry());
        fetchCountry();
    }, []);

    return {country};
}