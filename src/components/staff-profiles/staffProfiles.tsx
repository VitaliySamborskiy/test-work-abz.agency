import * as React from "react";
// import { useState } from "react";
import { BaseButton } from "../components.tsx";

// import { ResponseUsersType } from "../../ts/types/response-users-type.ts";

import style from "./staffProfiles.module.scss";

const StaffProfiles: React.FC = () => {
	// const [data, setData] = useState<ResponseUsersType>();

	// useEffect(() => {}, [data]);

	// const handleLoadPage = () => {};

	return (
		<section>
			<h2>Working with GET request</h2>
			<div className={style.bodyCards}></div>
			<BaseButton
				text={"Show more"}
				type={"submit"}
			/>
		</section>
	);
};

export { StaffProfiles };
