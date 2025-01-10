import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useCardButton } from "./useCardButton";
import { CountryType } from "../types/countryType";

export const useDetails = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const country: CountryType = state.country;

    const { fetchDetails, details } = useCardButton(country);

    useEffect(() => {
        fetchDetails();
    }, [fetchDetails]);

    const handleBackClick = () => {
        navigate("/");
    };

    return { details, handleBackClick }
}