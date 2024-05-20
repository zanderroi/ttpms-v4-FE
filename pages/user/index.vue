<template>
    <div class="p-4 ml-8 mt-10">
        <h2 class="text-2xl font-bold text-gray-700">Welcome, User!</h2>

        <div class="flex mt-8 space-x-6">
            <div class="card w-64 h-36 bg-gray-200 rounded-md shadow-sm p-4">
                <span class="font-bold text-5xl text-blue-700 ml-4">2,400</span>
            </div>
            <div class="card w-64 h-36 bg-gray-200 rounded-md shadow-sm p-4">
                <span class="font-bold text-5xl text-blue-700 ml-4">987</span>
            </div>
            <div class="card w-64 h-36 bg-gray-200 rounded-md shadow-sm p-4">
                <span class="font-bold text-5xl text-blue-700 ml-4">567</span>
            </div>
            <div class="card w-64 h-36 bg-gray-200 rounded-md shadow-sm p-4">
                <span class="font-bold text-5xl text-blue-700 ml-4">900</span>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'user'
    })

</script>

<style scoped>

</style>