<script setup lang="ts">
import { store } from '~/components/nav/sidebar-state';
</script>
<template>
    <nav :class="[
        'fixed top-0 left-0 h-full w-64 p-4 pt-10 border-r border-neutral-300 text-white',
        store.sidebarIsOpen ? 'block' : 'hidden'
    ]">
        <button @click="store.sidebarIsOpen = !store.sidebarIsOpen"
            class="absolute top-4 left-4 p-2 text-xl border rounded m-4 hover:bg-neutral-600">
            ☰
        </button>
        <br />
        <br />
        <br />
        <ul class="space-y-2">
            <li>
                <NavLink path="/" title="Home" />
            </li>
            <li>
                <h1 class="text-lg pl-3 font-bold ">Generators</h1>
            </li>
            <li>
                <NavLink path="/generators/system" title="Star System" />
            </li>
            <li>
                <NavLink path="/generators/asteroid" title="Asteroids" />
            </li>
            <li>
                <NavLink path="/generators/misc" title="Other" />
            </li>
        </ul>
    </nav>
</template>
