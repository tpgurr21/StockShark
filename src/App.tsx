import {ChangeEvent, SyntheticEvent, useState} from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import CardList from "./Components/CardList/CardList";
import Search from "./Components/Search/Search";
import {CompanySearch} from "./company";
import {searchCompanies} from "./api";
import ListPortfolio from "./Components/Portfolio/ListPortfolio/ListPortfolio";

function App() {
	const [search, setSearch] = useState<string>("");
	const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
	const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
	const [serverError, setServerError] = useState<string>("");

	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
		console.log(e);
	};

	const onPortfolioCreate = (e: any) => {
		e.preventDefault();
		const exists = portfolioValues.find((value) => value === e.target[0].value);
		if (exists) return;
		const updatedPortfolio = [...portfolioValues, e.target[0].value];
		setPortfolioValues(updatedPortfolio);
	};

	const onPortfolioDelete = (e: any) => {
		e.preventDefault();
		const removed = portfolioValues.filter((value) => {
			return value !== e.target[0].value;
		});
		setPortfolioValues(removed);
	};

	const onSearchSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();
		const result = await searchCompanies(search);
		// setSearchResult(result.data); THIS WON'T WORK
		if (typeof result === "string") {
			setServerError(result);
		} else if (Array.isArray(result.data)) {
			setSearchResult(result.data);
		}
		console.log(searchResult);
	};
	return (
		<div className="App">
			<Search
				onSearchSubmit={onSearchSubmit}
				search={search}
				handleSearchChange={handleSearchChange}
			/>
			{serverError && <h1>{serverError}</h1>}
			<ListPortfolio
				portfolioValues={portfolioValues}
				onPortfolioDelete={onPortfolioDelete}
			/>
			<CardList
				searchResults={searchResult}
				onPortfolioCreate={onPortfolioCreate}
			/>
		</div>
	);
}

export default App;
