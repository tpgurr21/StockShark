import axios from "axios";
import {CompanyProfile, CompanySearch} from "./company";

interface SearchResponse {
	data: CompanySearch[];
}
export const searchCompanies = async (query: string) => {
	try {
		const data = await axios.get<SearchResponse>(
			`https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
		);
		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.log("error message: ", error.message);
			return error.message;
		} else {
			console.log("unexpected error: ", error);
			return "An unexpected error has occurred.";
		}
	}
};

export const getCompanyProfile = async (query: string) => {
	try {
		const data = await axios.get<CompanyProfile[]>(
			`https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.REACT_APP_API_KEY}`
		);
		return data;
	} catch (error: any) {
		console.log("error message from API: ", error.message);
	}
};

export const houseBuilt = async () => {
	try {
		const data = await axios.get<string>(
			`https://localhost:7152/Program`
			// `https://localhost:7152/`
		);
		return data;
	} catch (error: any) {
		console.log("error message from API: ", error.message);
	}
};
