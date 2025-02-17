import React from "react";
import Table from "../../Components/Table/Table";
import RatioList from "../../Components/RatioList/RatioList";

type Props = {};

const DesignPage = (props: Props) => {
	return (
		<>
			<h1>StockShark Design Page</h1>
			<h2>
				This is StockShark's design page. This is where we will house various
				design aspects of the app.
			</h2>
			<RatioList />
			<Table />
			<h3>
				Table - Table takes in a configuration object and company data as
				params. Use the config to style your table.
			</h3>
		</>
	);
};

export default DesignPage;
