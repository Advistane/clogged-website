<template>
    <SidebarProvider>
        <AppSidebar />
        <main class="w-full px-4 md:pt-4 pt-14">
            <!-- Mobile sidebar trigger -->
            <div class="md:hidden fixed top-3 left-3 z-10">
                <SidebarTrigger
                  class="h-8 w-8 rounded-md shadow-md text-rs-brown-darker bg-rs-text-orange hover:bg-rs-text-orange/90 active:bg-rs-text-orange/80 ring-1 ring-white/60 dark:ring-black/40 border-0"
                />
            </div>
            <div class="video-background">
                <video autoplay muted loop playsinline>
                    <source src="/bg.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div class="video-overlay"></div>
            </div>
            <RouterView />
            <MobileSidebarAutoClose />
        </main>
    </SidebarProvider>
</template>

<script setup lang="ts">
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar.vue";
import MobileSidebarAutoClose from '@/components/MobileSidebarAutoClose.vue';
</script>

<style scoped>
.video-background {
  position: fixed; /* Keep video fixed in the viewport */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1; /* Place video behind content */
}

.video-background video {
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center the video */
  object-fit: cover; /* Ensure it covers the container while maintaining aspect ratio */

  /* Apply Filters Here! */
  filter: blur(4px) grayscale(70%) brightness(70%); /* Example filters */
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Dark overlay */
  z-index: 0; /* Between video (-1) and content (1) */
}</style>
