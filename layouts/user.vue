<template>
    <div class="">
        <aside class="bg-white shadow-md h-full fixed top-0 left-0 w-64 z-10 p-4">
            <img src="/assets/img/TESDA-Logo.png" class="w-32 mx-auto">
            <div class="p-2">
                <p class="text-center">
                    <NuxtLink to="" class="font-bold text-blue-800 text-md">
                        TESDA TVET Monitoring System
                        <br>
                        Version 4
                    </NuxtLink>
                </p>
            </div>
            <hr>

            <div class="mt-8 p-2 space-y-2">
                <NuxtLink to="/user" class="flex items-center text-gray-700 text-md text-center py-2 px-2">
          <Icon name="mdi:view-dashboard" class="mr-2" /> Dashboard
        </NuxtLink>
        <NuxtLink to="/user/partnerships" class="flex items-center text-gray-700 text-md text-center py-2 px-2">
          <Icon name="mdi:handshake" class="mr-2" /> Partnerships
        </NuxtLink>
        <NuxtLink to="/user/gaa" class="flex items-center text-gray-700 text-md text-center py-2 px-2">
          <Icon name="mdi:chart-line" class="mr-2" /> GAA Monitoring
        </NuxtLink>
        <NuxtLink to="/user/tvet" class="flex items-center text-gray-700 text-md text-center py-2 px-2">
          <Icon name="mdi:company" class="mr-2" /> TVET Partnerships
        </NuxtLink>

            </div>
        </aside>

        <main class="flex-1 ml-64">
            <!-- <header class="shadow-sm bg-white p-4 z-20">
                <NuxtLink to="/user" class="font-bold text-blue-800 text-lg">TESDA TVET Monitoring System Version 4
                </NuxtLink>
            </header> -->

            <slot />
        </main>
    </div>
</template>


<script setup>

</script>

<style scoped>
    .router-link-exact-active {
        background-color: rgb(0, 131, 253);
        color: white;
        border-radius: 25px;
        
    }
</style>