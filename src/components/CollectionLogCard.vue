<template>
	<Card class="bg-[#3a2c1a] border-[3px] border-[#7a5d3b] text-[#f5deb3] shadow-lg h-fit font-mono">
		<CardHeader class="flex items-center justify-between px-4 py-2 bg-[#2a1e13] border-b border-[#7a5d3b]">
			<h2 class="text-lg text-[#ff981f] font-bold">
				{{ subcategory.name }}
			</h2>

			<div class="bg-[var(--rs-brown-light)]/50 px-2 py-1 text-xs rounded text-white">
				<p v-if="subcategory.kc > 0">
					KC:
					<span :class="kcTextColor">
						{{ subcategory.kc }} </span>
				</p>
				<p>
					Obtained:
					<span :class="ownedItemsCountTextColor">
						{{ subcategory.owned_items_count }}/{{ subcategory.items.length }}
					</span>
				</p>

			</div>
		</CardHeader>

		<CardContent class="p-4 space-y-2">
			<div class="flex flex-wrap gap-1 overflow-y-scroll ">
				<CollectionLogItem v-for="item in subcategory.items" :key="item.item_id" :item="item" />
			</div>
		</CardContent>
	</Card>
</template>

<script setup lang="ts">
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Subcategory } from "@/models/response/SearchUsernameResponse.ts";
import CollectionLogItem from "@/components/CollectionLogItem.vue";
import { computed } from "vue";


const props = defineProps<{
	subcategory: Subcategory;
}>();

const ownedItemsCountTextColor = computed(() => {
	if (props.subcategory.owned_items_count === props.subcategory.items.length) {
		return "text-green-500";
	} else if (props.subcategory.owned_items_count > 0) {
		return "text-yellow-500";
	} else {
		return "text-red-500";
	}
});

const kcTextColor = computed(() => {
	if (props.subcategory.kc > 0) {
		return "text-green-500";
	} else {
		return "text-red-500";
	}
});
</script>

<style scoped></style>