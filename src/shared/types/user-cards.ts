import type { User } from "./user-type.ts";

type UserCardsType = {
	next_url: string | null;
	users: User[];
	page: number;
};

export type { UserCardsType };
