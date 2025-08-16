<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
	<div class="container mx-auto py-6">
		<Card class="bg-[#3a2c1a] border-[3px] border-[#7a5d3b] text-[#f5deb3] shadow-lg h-fit font-mono">
			<CardHeader>
				<CardTitle>Groups</CardTitle>
			</CardHeader>

			<CardContent>
				<div class="text-center py-12">
					<div class="mb-6">
						<h2 class="text-3xl font-bold text-[#f5deb3] mb-4">Coming Soon</h2>
						<p class="text-lg text-[#d4af7a] mb-6">
							We're working hard to bring you an amazing groups feature.
						</p>
						<div class="w-24 h-24 mx-auto mb-6 border-4 border-[#7a5d3b] border-t-[#f5deb3] rounded-full animate-spin"></div>
						<p class="text-sm text-[#b8860b]">
							Stay tuned for updates!
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	</div>
</template>