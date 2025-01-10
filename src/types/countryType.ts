export type CountryType = {
    name: {
        common: string;
        official: string;
    }
    flags: {
        png: string;
        svg: string;
    }
    region: string;
    population: number;
}