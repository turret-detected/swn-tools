<script setup lang="ts">
import SiteHeader from '~/components/CSiteHeader.vue';
import CSidebar from '~/components/CSidebar.vue';
import CSidebarButton from '~/components/CSidebarButton.vue';
</script>

<template>
    <div>
        <CSidebarButton class="m-4" />
        <CSidebar />
        <main>
            <div class="container mx-auto flex flex-col items-center mt-8">
                <SiteHeader />
                <p class="">Toggle the sidebar on the left to see available tools!</p>
            </div>
        </main>
    </div>
</template>
