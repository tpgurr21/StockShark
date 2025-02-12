import axios from "axios"

interface SearchResponse {
    data: CompanySearch[];
}
export const searchCompanies = async(query: string) => {
    try {
        const data = await axios.get<SearchResponse>(`https://financialmodelingprep.com/api/v3/search?${query}=AA`)
    }
}