import type { AxiosRequestConfig } from "axios";

type ApiRequestParams = {
	endpoint: string;
	params?: AxiosRequestConfig["params"];
	method?: "GET" | "POST";
	data?: AxiosRequestConfig["data"];
	headers?: AxiosRequestConfig["headers"];
};

export type { ApiRequestParams };
