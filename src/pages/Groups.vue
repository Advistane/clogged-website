<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
</script>

<template>
    <div class="container mx-auto py-6">
        <Card class="bg-rs-brown-dark border-[var(--rs-border-width)] border-rs-brown-light text-rs-text-wheat shadow-lg h-fit font-mono">
            <CardHeader>
                <CardTitle>Groups</CardTitle>
            </CardHeader>

            <CardContent>
                <div class="text-center py-12">
                    <div class="mb-6">
                        <h2 class="text-3xl font-bold text-rs-text-wheat mb-4">Coming Soon</h2>
                        <p class="text-lg text-rs-text-wheat/80 mb-6">
                            We're working hard to bring you an amazing groups feature.
                        </p>
                        <div class="w-24 h-24 mx-auto mb-6 border-4 border-rs-brown-light border-t-rs-text-wheat rounded-full animate-spin"></div>
                        <p class="text-sm text-rs-text-orange">
                            Stay tuned for updates!
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
</template>
