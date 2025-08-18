import * as React from "react";
import { useState, useEffect } from "react";
import { Notify } from "notiflix";

import { BaseButton, Card } from "../../components.tsx";

import type { ResponseUsersType } from "../../../shared/types/response-users-type.ts";
import type { User } from "../../../shared/types/user-type.ts";
import type { StaffProfilesProps } from "./types/type.ts";
import type { ErrorResponse } from "../../../shared/types/response-error.ts";

import { apiRequest } from "../../../shared/api";
import { userMapper } from "../../../shared/mappers/user-mapper.ts";

import style from "./staffProfiles.module.scss";
import type { AxiosError } from "axios";
import { EndPointEnum } from "../../../shared/enum/end-point-enum.ts";

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

	const handleLoadPage = async () => {
		try {
			const response = await apiRequest<ResponseUsersType>({
				endpoint: EndPointEnum.USERS,
				params: { count: 6, page: page + 1 },
			});

			setUsers(prev => [...prev, ...handleApiResponse(response)]);
		} catch (error) {
			const err = error as AxiosError<ErrorResponse>;
			if (err.response) {
				Notify.failure(err.response.data.message);
			} else {
				Notify.failure(err.message);
			}
		}
	};

	const loadUsers = async () => {
		try {
			const response = await apiRequest<ResponseUsersType>({
				endpoint: EndPointEnum.USERS,
				params: { count: 6 },
			});

			setUsers(handleApiResponse(response));
		} catch (error) {
			const err = error as AxiosError<ErrorResponse>;
			if (err.response) {
				Notify.failure(err.response.data.message);
			} else {
				Notify.failure(err.message);
			}
		}
	};

	useEffect(() => {
		void loadUsers();
	}, [reloadTrigger]);

	return (
		<section
			className={`${style.staffSection} container`}
			id="users">
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
				type={"button"}
				onClick={handleLoadPage}
				classSupport={nextPage ? "" : "hide"}
				size={"large"}
			/>
		</section>
	);
};

export { StaffProfiles };
