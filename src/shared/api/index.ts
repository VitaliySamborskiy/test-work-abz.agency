import axios, { AxiosError } from "axios";
import type { ApiRequestParams } from "../types/api-type.ts";
import { Notify } from "notiflix";

const api = axios.create({
	baseURL: "https://frontend-test-assignment-api.abz.agency/api/v1",
	headers: {
		"Content-Type": "application/json",
	},
});

async function apiRequest<T>({
	endpoint,
	params,
	method = "GET",
	data,
	headers,
}: ApiRequestParams): Promise<T> {
	try {
		const response = await api.request({
			method,
			url: endpoint,
			data,
			params,
			headers,
		});
		return response.data;
	} catch (err) {
		const error = err as AxiosError<{ message?: string }>;
		Notify.failure(error.message);
		throw error;
	}
}

export { apiRequest };
