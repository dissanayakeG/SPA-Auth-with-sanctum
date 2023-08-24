<template>
    <span>
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">{{ label }}</label>
        <input
            :value="value"
            @input="$emit('update:value', $event.target.value)"
            type="text"
            :placeholder="placeholder"
            class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name" />
    </span>
</template>

<script setup>
    const props = defineProps({
        value: String,
        placeholder: String,
        label: {
            type: String,
            default: "Label",
        },
    });
</script>

<!-- <template>
    <span>
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">{{ label }}</label>
        <input
            v-model="formData.textInputValue"
            type="text"
            :placeholder="placeholder"
            class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name" />
    </span>
</template>

<script setup>
    import { inject } from "vue";
    const props = defineProps({
        placeholder: String,
        label: {
            type: String,
            default: "Label",
        },
    });

    const formData = inject("formData");
</script> -->
