import axios from "axios";
import type {SearchUsernameResponse} from "@/models/response/SearchUsernameResponse.ts";

const API_URL = import.meta.env.VITE_API_BASE_URL;
export async function lookupUsername(username: string): Promise<SearchUsernameResponse> {
	try {
		const response = await axios.get(`${API_URL}/users/${username}`, {
			params: { username },
		});
		return response.data;
	} catch (error) {
		throw error;
	}
}