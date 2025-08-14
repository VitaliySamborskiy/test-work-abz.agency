import * as React from "react";
import { useState, useEffect } from "react";

import { BaseButton, Card } from "../components.tsx";

import type { ResponseUsersType } from "../../ts/types/response-users-type.ts";
import type { User } from "../../ts/types/user-type.ts";

import { apiRequest } from "../../ts/api";
import { userMapper } from "../../ts/mappers/user-mapper.ts";

import style from "./staffProfiles.module.scss";

const StaffProfiles: React.FC = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [page, setPage] = useState<number>(0);
	const [nextPage, setNextPage] = useState<string | null>("");

	const handleApiResponse = (response: ResponseUsersType): User[] => {
		const result = userMapper(response);
		setNextPage(result.next_url);
		setPage(result.page);
		return result.users;
	};

	useEffect(() => {
		apiRequest<ResponseUsersType>({ endpoint: "/users", params: { count: 6 } }).then(
			(response): void => {
				setUsers(handleApiResponse(response));
			}
		);
	}, []);

	const handleLoadPage = () => {
		apiRequest<ResponseUsersType>({
			endpoint: "/users",
			params: { count: 6, page: page + 1 },
		}).then((response): void => {
			setUsers(prev => [...prev, ...handleApiResponse(response)]);
		});
	};

	return (
		<section>
			<h2>Working with GET request</h2>
			<div className={style.bodyCards}>
				{users?.map(item => (
					<Card
						key={item.id}
						user={item}
					/>
				))}
			</div>
			<BaseButton
				text={"Show more"}
				type={"submit"}
				onClick={handleLoadPage}
				classSupport={nextPage ? "" : "hide"}
			/>
		</section>
	);
};

export { StaffProfiles };
