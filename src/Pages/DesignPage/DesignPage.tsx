import React from "react";
import Table from "../../Components/Table/Table";

type Props = {};

const DesignPage = (props: Props) => {
	return (
		<>
			<h1>StockShark Design Page</h1>
			<h2>
				This is StockShark's design page. This is where we will house various
				design aspects of the app.
			</h2>
			<Table />
		</>
	);
};

export default DesignPage;
