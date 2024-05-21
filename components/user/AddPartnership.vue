<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const emit = defineEmits(['partnershipAdded']);

const submitForm = () => {

    emit('partnershipAdded');
    isOpen.value = false;
};
</script>

<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white rounded-lg p-8 shadow-md">
            <h2 class="text-2xl font-semibold mb-4">Add New Partnership</h2>
            <form @submit.prevent="submitForm">
                <div class="flex space-x-2 mb-4">
                    <select
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ">
                        <option value="">

                        </option>
                        <option value="">
                            Quezon City
                        </option>
                    </select>
                    <input type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                        placeholder="Name of Partner" required />
                    <input type="date"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                        placeholder="Date Signed" required />
                    <input type="date"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                        placeholder="Date of Expiry" required />
                </div>

                <p class="text-md mb-2">Partner Company Details</p>

                <hr>

                <div class="flex space-x-2 mb-4 mt-2">
                    <input type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                        placeholder="Head of Company" required />
                    <input type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                        placeholder="Office Address" required />
                    <input type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                        placeholder="Contact Person" required />
                    <input type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                        placeholder="Contact Number" required />
                    <input type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                        placeholder="Email Address" required />
                </div>
                <div class="flex space-x-2 mb-4 mt-2">
                    <input type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                        placeholder="Website" required />
                    <select
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ">
                        <option value="">

                        </option>
                        <option value="Private">
                            Private
                        </option>
                        <option value="Public">
                            Public
                        </option>
                    </select>
                    <select
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ">
                        <option value="">

                        </option>
                        <option value="Private">
                            1-9 Employees
                        </option>
                        <option value="Public">
                            10-99 Employees
                        </option>
                    </select>
                    <select
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ">
                        <option value="">

                        </option>
                        <option value="Private">
                            Academe (Private)
                        </option>
                        <option value="Public">
                            Academe (Public)
                        </option>
                    </select>
                </div>

                <p class="text-md mb-2">Partnership Details</p>

                <hr>

            </form>
            <div class="flex justify-end mt-6">
                <button @click="$emit('close-modal')"
                    class="px-4 py-2 rounded-md border-2 border-red-500 hover:bg-red-300 mr-2">
                    Cancel
                </button>
                <button type="submit" class="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-500">
                    Add Partnership
                </button>
            </div>
        </div>
    </div>
</template>