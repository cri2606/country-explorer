import { DetailsType } from "../../types/detailsType";

export const getDetails = async (name: string): Promise<DetailsType> => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    if (!response.ok) throw new Error("Errore nella richiesta all'API");
    const data = await response.json();
    return data[0];
}