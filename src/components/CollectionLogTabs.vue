<template>
    <Card class="bg-rs-brown-dark border-[var(--rs-border-width)] text-rs-text-wheat shadow-lg w-full font-mono">
	    <h1 v-if="clogStore.dataLoaded" class="text-3xl font-bold text-center text-rs-text-wheat mb-6">
		    {{ username }}
	    </h1>

	    <Tabs v-if="clogStore.dataLoaded" v-model="tab" class="flex w-full px-4">
            <TabsList class="w-full bg-rs-brown-darker">
                <TabsTrigger
                  v-for="category in categories"
                  :value="category.category_name"
                  class="hover:bg-rs-brown-dark text-rs-text-wheat/90 data-[state=active]:bg-rs-brown-light data-[state=active]:text-white data-[state=active]:font-bold data-[state=active]:border-2 data-[state=active]:border-rs-text-wheat data-[state=active]:rounded-md data-[state=active]:ring-2 data-[state=active]:ring-rs-text-orange/40"
                > 
                    {{ category.category_name }}
                </TabsTrigger>
            </TabsList>

			<TabsContent v-for="category in categories" :value="category.category_name">
				<CollectionLogTab :category="category" :defaultSubcategory="category.subcategories[0]?.name"
					:name="category.category_name" />
			</TabsContent>
		</Tabs>
        <div v-else>
            <div class="flex justify-center items-center h-full">
                <div class="text-center p-8">
                    <div class="text-6xl mb-4">🔍</div>
                    <h2 class="text-2xl font-bold mb-2">Player Not Found</h2>
                    <p class="text-rs-text-wheat/80">The player you're looking for doesn't exist or hasn't been tracked yet.</p>
                    <p class="text-rs-text-wheat/80">If this is your username, ensure "Make profile visible" is enabled in the plugin settings.</p>
                </div>
            </div>
        </div>
    </Card>
</template>

<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from "@/components/ui/card";
import { useClogStore } from '@/stores/clogStore';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import CollectionLogTab from '@/components/CollectionLogTab.vue';

const route = useRoute();
const clogStore = useClogStore();

const tab = ref('bosses');

function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

const username = computed(() => {
  const raw = route.params.username as string || '';
  return capitalizeWords(raw);
});

// Load data when component is mounted
onMounted(async () => {
	const username = route.params.username as string;
	if (username) {
		await searchUsername(username);
	}
});

watch(() => route.params.username, async username => {
	if (username) {
		await searchUsername(username as string);
	}
});

async function searchUsername(username: string) {
	clogStore.setUsername(username);
	const result = await clogStore.searchUsername();
	if (result) {
		tab.value = clogStore.searchResults.categories[0].category_name;
	}
}

const categories = computed(() => {
	if (!clogStore.searchResults.categories) return [];
	// Create a copy of the array to avoid mutating the store
	const sortedCategories = [...clogStore.searchResults.categories];

	// Define your desired order
	const order = ['Bosses', 'Raids', 'Clues', 'Minigames', 'Other']; // Add all your category names in desired order

	// Sort the categories based on the order array
	return sortedCategories.sort((a, b) => {
		const indexA = order.indexOf(a.category_name);
		const indexB = order.indexOf(b.category_name);
		return indexA - indexB;
	});
});
</script>

<style scoped></style>
