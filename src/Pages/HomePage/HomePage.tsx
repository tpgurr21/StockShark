import React, {useEffect, useState} from "react";
import Hero from "../../Components/Hero/Hero";
import {houseBuilt} from "../../api";

interface Props {}

const HomePage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  console.log('test');
	useEffect(() => {
		console.log('test2')
    const buildHouse = async () => {
			const result = await houseBuilt();
      console.log(result)
      // return result;
		};

		buildHouse()
   
	},[])
	return (
		<div>
			<Hero />
		</div>
	);
};

export default HomePage;
