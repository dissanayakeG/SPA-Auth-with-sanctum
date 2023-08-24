<template>
    <span>
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">{{ label }}</label>
        <select
            :value="value"
            @change="$emit('update:value', $event.target.value)"
            class="block appearance-none w-full bg-white border border-gray-200 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500">
            <option v-for="option in options" :value="option.value" :key="option.value">
                {{ option.label }}
            </option>
        </select>
    </span>
</template>

<script setup>
    const props = defineProps({
        value: String,
        options: Array,
        label: {
            type: String,
            default: "Label",
        },
    });
</script>

<!-- <template>
    <span>
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">{{ label }}</label>
        <select
            :value="value"
            v-model="formData.selectValue"
            class="block appearance-none w-full bg-white border border-gray-200 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500">
            <option v-for="option in selectOptions" :value="option.value" :key="option.value">
                {{ option.label }}
            </option>
        </select>
    </span>
</template>

<script setup>
    import { inject } from "vue";

    const props = defineProps({
        value: String,
        options: Array,
        label: {
            type: String,
            default: "Label",
        },
    });

    const formData = inject("formData");
    const selectOptions = inject("selectOptions");
</script> -->
