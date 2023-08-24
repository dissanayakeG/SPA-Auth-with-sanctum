<template>
    <div class="flex items-center mb-4">
        <input
            id="default-checkbox"
            type="checkbox"
            value=""
            :checked="value"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            @change="$emit('update:value', $event.target.checked)" />

        <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ label }}</label>
    </div>
</template>

<script setup>
    const props = defineProps({
        value: Boolean,
        label: {
            type: String,
            default: "Label",
        },
    });
</script>

<!-- <template>
    <div class="flex items-center mb-4">
        <input
            id="default-checkbox"
            type="checkbox"
            value=""
            :checked="value"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            v-model="formData.checkboxValue" />

        <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ label }}</label>
    </div>
</template>

<script setup>
    import { inject } from "vue";

     const props = defineProps({
        value: Boolean,
         label: {
            type: String,
            default: "Label",
        },
    });

    const formData = inject("formData");
</script> -->
