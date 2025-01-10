export type DetailsType = {
    name: {
        common: string;
        nativeName:{
            official: string;
            common: string;
        }
        official: string;
    }
    flags: {
        alt: string;
        png: string;
        svg: string;
    }
    region: string;
    population: string;
    capital: string[];
    currencies: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
    languages: {
        [key: string]: string;
    };
    borders: string[];
    timezones: string[];
    idd: {
        root: string;
        suffixes: string[];
    }
}