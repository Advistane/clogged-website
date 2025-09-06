<template>
	<HoverCard>
		<HoverCardTrigger as-child>
            <div
            class="relative bg-rs-brown-darker border border-rs-brown-light flex items-center justify-center p-2 w-16"
            >
				<!-- Quantity Box -->
				<div class="absolute top-0 left-0 text-rs-text-wheat dark:text-white text-xs font-bold px-1 rounded-bl">
					{{ item.quantity }}x
				</div>
				<img :src="getImageUrl()" :alt="item.item_name" class="w-8 h-8" :class="!obtained ? 'opacity-25' : null" loading="lazy"/>
			</div>
		</HoverCardTrigger>

        <HoverCardContent class="bg-rs-brown-darker border border-rs-brown-light p-2 rounded-md w-fit">
            <div class="flex flex-col items-center">
                <img :src="getImageUrl()" alt="Item Image" class="w-8 h-8 mb-2" loading="lazy"/>
                <p class="text-sm text-rs-text-wheat/80">{{ item.quantity }}x {{ item.item_name }}</p>
            </div>
        </HoverCardContent>
	</HoverCard>
</template>

<script setup lang="ts">
import type {PlayerItem,} from "@/models/response/SearchUsernameResponse.ts";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import {computed} from "vue";

const props = defineProps<{
	item: PlayerItem;
}>();

const obtained = computed(() => {
	return props.item.quantity > 0;
});

function getImageUrl() {
  // note that this does not include files in subdirectories
  return props.item.image_url;
}
</script>

<style scoped>
img {
  filter: drop-shadow(0 0 5px rgba(203, 191, 163, 0.3));
}
</style>
