import type { ErrorResponse } from "./response-error.ts";

type SuccessResponse = {
	success: true;
	user_id: number;
	message: string;
};

type ValidateResponse = {
	success: boolean;
	message: string;
	fails: {
		[field: string]: string[];
	};
};

type UserErrorResponseType = ErrorResponse | ValidateResponse;

export type { UserErrorResponseType, SuccessResponse };
