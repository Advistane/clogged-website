import {defineStore} from "pinia";
import {ref} from "vue";
import {lookupUsername} from "@/services/ApiService.ts";
import type {SearchUsernameResponse} from "@/models/response/SearchUsernameResponse.ts";

export const useClogStore = defineStore('clog', () => {
	const username = ref('');
	const searchResults = ref({} as SearchUsernameResponse);
	const dataLoaded = ref(false);

	function setUsername(newUsername: string) {
		username.value = newUsername
	}

	async function searchUsername() {
		try {
			searchResults.value = await lookupUsername(username.value);
			dataLoaded.value = true;
			return true;
		} catch (error) {
			searchResults.value = {} as SearchUsernameResponse;
			dataLoaded.value = false;
			console.error(error);
			return false;
		}
	}

	return { setUsername, username, searchUsername, searchResults, dataLoaded }
})