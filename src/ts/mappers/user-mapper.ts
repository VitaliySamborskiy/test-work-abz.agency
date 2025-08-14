import type { ResponseUsersType } from "../types/response-users-type.ts";
import type { UserCardsType } from "../types/user-cards.ts";

const userMapper = (data: ResponseUsersType): UserCardsType => {
	return {
		next_url: data.links.next_url,
		users: data.users,
		page: data.page,
	};
};

export { userMapper };
