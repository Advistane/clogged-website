<template>
    <Tabs v-if="category" v-model="activeSubcategory" default-value="Abyssal Sire" class="w-full" orientation="vertical">
        <div class="lg:hidden mb-4 bg-rs-brown-dark border-[var(--rs-border-width)] rounded-md">
            <DropdownMenu>
                <DropdownMenuTrigger
                    class="w-full text-rs-text-wheat hover:bg-rs-brown-light/30 hover:text-white transition-colors border-rs-brown-light">
                    <div class="flex items-center justify-center">
                        {{ activeSubcategory }}
                        <ChevronDown class="w-4 h-4 ml-2" />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuRadioGroup v-model="activeSubcategory">
                        <DropdownMenuRadioItem v-for="subcategory in category.subcategories" :key="subcategory.name"
                            :value="subcategory.name">
                            {{ subcategory.name }} ({{ getObtained(subcategory.items) }} / {{ subcategory.items.length
                            }})
                        </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

        <div class="grid lg:grid-cols-[auto_1fr] gap-4">
            <div class="hidden lg:block">
                <ScrollArea class="h-[450px] rounded-md border-[var(--rs-border-width)]">
                    <TabsList class="flex-col h-fit bg-transparent">
                        <TabsTrigger
                          v-for="subcategory in category.subcategories"
                          :value="subcategory.name"
                          class="w-[95%] text-rs-text-wheat hover:bg-rs-brown-light/30 hover:text-white transition-colors data-[state=active]:bg-rs-brown-light data-[state=active]:text-white data-[state=active]:font-bold data-[state=active]:border-2 data-[state=active]:border-rs-text-orange data-[state=active]:rounded-md data-[state=active]:ring-2 data-[state=active]:ring-rs-text-orange/40"
                        >
                            {{ subcategory.name }} ({{ getObtained(subcategory.items) }} / {{
                            subcategory.items.length}})
                        </TabsTrigger>
                    </TabsList>
                </ScrollArea>
            </div>

            <div>
                <TabsContent v-for="subcategory in category.subcategories" :value="subcategory.name" class="w-full">
                    <CollectionLogCard :subcategory="subcategory" />
                </TabsContent>
            </div>
        </div>
    </Tabs>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import CollectionLogCard from "@/components/CollectionLogCard.vue";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import type { Category, PlayerItem } from "@/models/response/SearchUsernameResponse.ts";
import { ChevronDown } from "lucide-vue-next";

const props = defineProps<{
    name: string;
    defaultSubcategory: string;
    category: Category;
}>();

const activeSubcategory = ref(props.defaultSubcategory);

function getObtained(items: PlayerItem[]) {
	return items.filter(item => item.quantity > 0).length;
}

</script>
