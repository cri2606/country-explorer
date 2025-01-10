import { CountryType } from "../../types/countryType";

export const getCountry = async (): Promise<CountryType[]> => {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    if (!response.ok) throw new Error("Errore nella richiesta all'API");
    const data = await response.json();
    return data;

}
