<script setup>
import { ref } from 'vue'
import AddPartnershipModal from '~/components/user/AddPartnership.vue';
import { usePartnershipStore } from '~/stores/partnership';

const isOpen = ref(false)
const partnershipStore = usePartnershipStore();
const partnerships = computed(() => partnershipStore.partnerships);

const handlePartnershipAdded = () => {
    // 
    isOpen.value = false;
};
// onMounted(() => {
//     partnershipStore.fetchPartnerships();
// });
definePageMeta({
    layout: 'user'
})

</script>

<template>
    <div class="px-8 py-4 mt-10">
        <h2 class="text-2xl font-bold text-gray-700">Partnerships <span> - NCR </span> </h2>


    </div>

    <div class="px-8 mt-4 flex justify-between">
        <div class="space-x-2 ">
            <input class="px-4 py-1 rounded-md shadow-sm" type="text" placeholder="Search">
            <select class="px-4 py-1 rounded-md shadow-sm">
                <option value="">All Provinces</option>
                <option value="">Quezon City</option>
                <option value="">CAMANAVA</option>
            </select>
            <select class="px-4 py-1 rounded-md shadow-sm">
                <option value="">All Operating Units</option>
                <option value="">District Office</option>
                <option value="">Training Center</option>
            </select>
            <input class="px-4 py-1 rounded-md shadow-sm" type="date">
            <input class="px-4 py-1 rounded-md shadow-sm" type="date">
            <button
                class="px-4 py-1 rounded-md shadow-sm border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white">
                <Icon name="mdi:download" class="mr-2" />Download
            </button>
        </div>

        <button @click="isOpen = true" class="px-4 py-1 rounded-md bg-blue-700 text-white hover:bg-blue-500">
            <Icon name="mdi:plus" class="mr-2" />Add
        </button>

    </div>

    <AddPartnershipModal v-if="isOpen" @partnershipAdded="handlePartnershipAdded" @close-modal="isOpen = false" />


    <div class="relative overflow-x-auto  sm:rounded-lg px-8 mt-8">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Province
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Operating Unit
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Name of Partner
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Partner Details
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Partnership Details
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Legal Document
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Date Signed
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Date of Expiry
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Status
                    </th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="partnership in partnerships" :key="partnership.id"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td class="px-6 py-4">{{ partnership.province }}</td>
                    <td class="px-6 py-4">{{ partnership.operatingUnit }}</td>
                    <td class="px-6 py-4">{{ partnership.nameOfPartner }}</td>
                    <td class="px-6 py-4 text-blue-700 font-bold">
                        View
                    </td>
                    <td class="px-6 py-4 text-blue-700 font-bold">
                        View
                    </td>
                    <td class="px-6 py-4 text-blue-700 font-bold">
                        View
                    </td>
                    <td class="px-6 py-4">{{ partnership.dateSigned }}</td>
                    <td class="px-6 py-4">{{ partnership.dateOfExpiry }}</td>
                    <td class="px-6 py-4">
                        <div class="border-2 border-green-600 text-green-600 px-4 py-1 rounded-full text-center">{{
                            partnership.status }}</div>
                    </td>
                </tr>

            </tbody>
        </table>

    </div>



</template>

<style scoped></style>