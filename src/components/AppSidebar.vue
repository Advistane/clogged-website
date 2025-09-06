<template>
	<Sidebar collapsible="offcanvas">
		<SidebarContent>
			<SidebarGroup>
				<SidebarGroupLabel>
					<div class="flex items-center justify-between w-full">
						Clogged.me
						<div class="flex items-center gap-1">
							<Sun class="w-4 h-4" />
							<Switch :model-value="mode === 'dark'" @update:model-value="toggleTheme" />
							<Moon class="w-4 h-4" />
						</div>
					</div>
				</SidebarGroupLabel>

				<Separator class="my-4" />

				<SidebarGroupContent>
					<SidebarMenu>
						<SidebarMenuItem>
							<div class="flex w-full max-w-sm items-center gap-1.5">
								<Input v-model="clogStore.username" type="text" placeholder="Username" @keyup.enter="searchUsername" />
								<Button @click="searchUsername">
									Search
								</Button>
							</div>
						</SidebarMenuItem>

						<SidebarMenuItem v-for="item in items" :key="item.title">
							<SidebarMenuButton asChild>
								<a v-if="item.newTab" :href="item.url" target="_blank">
									<component :is="item.icon" />
									<span>{{ item.title }}</span>
								</a>

								<RouterLink v-else :to="item.url" :target="item.newTab ? '_blank' : '_self'">
									<component :is="item.icon" />
									<span>{{ item.title }}</span>
								</RouterLink>
							</SidebarMenuButton>

							<Separator v-if="item.separator" class="my-4" />

						</SidebarMenuItem>

						<SidebarMenuItem>
							<SidebarMenuButton asChild>
								<a href="https://discord.com/invite/jVqBpUKBJb" target="_blank">
									<img src="@/assets/discord-white.svg" alt="Discord" class="w-4 h-4" />
									<span>Join the Discord</span>
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
		</SidebarContent>
		<SidebarRail class="bg-background/50 backdrop-blur-sm" />
	</Sidebar>
</template>

<script setup lang="ts">

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "@/components/ui/sidebar";
import { Switch } from '@/components/ui/switch'
import { Home, Moon, Sun, Group, Github, Plug } from "lucide-vue-next"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useColorMode } from "@vueuse/core";
import { useClogStore } from "@/stores/clogStore.ts";
import Separator from "./ui/separator/Separator.vue";
import router from "@/router";
import { useSidebar } from "@/components/ui/sidebar";

const mode = useColorMode();
const clogStore = useClogStore();
const { isMobile, setOpenMobile } = useSidebar();

const items = [
	{
		title: "Home",
		url: "/",
		icon: Home,
	},
	{
		title: "Groups",
		url: "/groups",
		icon: Group,
	},
	{
		title: "Runelite Plugin",
		url: "https://runelite.net/plugin-hub/show/clogged-me",
		icon: Plug,
		newTab: true,
		separator: true,
	},
	{
		title: "Plugin Source",
		url: "https://github.com/Advistane/clogged",
		icon: Github,
		newTab: true,
	},
	{
		title: "Server Source",
		url: "https://github.com/Advistane/clogged-server",
		icon: Github,
		newTab: true,
	},
	{
		title: "Website Source",
		url: "#",
		icon: Github,
		newTab: true,
		separator: true,
	}
];

async function searchUsername() {
    //await clogStore.searchUsername(search.value);
    router.push(`/clog/${clogStore.username}`);
    if (isMobile.value) setOpenMobile(false);
}

function toggleTheme() {
	if (mode.value === 'dark') {
		mode.value = 'light';
	} else {
		mode.value = 'dark';
	}
}
</script>

<style scoped></style>
