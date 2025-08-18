import * as React from "react";
import { useState, useEffect } from "react";

import { BaseButton, Card } from "../components.tsx";

import type { ResponseUsersType } from "../../shared/types/response-users-type.ts";
import type { User } from "../../shared/types/user-type.ts";
import type { StaffProfilesProps } from "./types/type.ts";

import { apiRequest } from "../../shared/api";
import { userMapper } from "../../shared/mappers/user-mapper.ts";

import style from "./staffProfiles.module.scss";

const StaffProfiles: React.FC<StaffProfilesProps> = ({ reloadTrigger }) => {
	const [users, setUsers] = useState<User[]>([]);
	const [page, setPage] = useState<number>(0);
	const [nextPage, setNextPage] = useState<string | null>("");

	const handleApiResponse = (response: ResponseUsersType): User[] => {
		const result = userMapper(response);
		setNextPage(result.next_url);
		setPage(result.page);
		return result.users;
	};

	const handleLoadPage = () => {
		apiRequest<ResponseUsersType>({
			endpoint: "/users",
			params: { count: 6, page: page + 1 },
		}).then((response): void => {
			setUsers(prev => [...prev, ...handleApiResponse(response)]);
		});
	};

	useEffect(() => {
		apiRequest<ResponseUsersType>({ endpoint: "/users", params: { count: 6 } }).then(
			(response): void => {
				setUsers(handleApiResponse(response));
			}
		);
		console.log("Reload trigger:", reloadTrigger);
	}, [reloadTrigger]);

	return (
		<section className={`${style.staffSection} container`}>
			<h2 className={style.title}>Working with GET request</h2>
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
				size={"large"}
			/>
		</section>
	);
};

export { StaffProfiles };
