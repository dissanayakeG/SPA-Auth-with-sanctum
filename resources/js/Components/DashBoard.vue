<template>
    <div>
        <div class="content main">
            <form class="w-full max-w-sm flex flex-col" @submit.prevent="submitForm">
                <div class="inline-block relative mb-6">
                    <div class="mb-6">
                        <Text :value="textInputValue" @update:value="textInputValue = $event" placeholder="Enter text" />
                    </div>
                </div>
                <div class="inline-block relative mb-6">
                    <Checkbox :value="checkboxValue" :label="'check'" @update:value="checkboxValue = $event" />
                </div>

                <div class="inline-block relative mb-6">
                    <Select :value="selectValue" @update:value="selectValue = $event" :options="selectOptions" />
                </div>

                <div class="mb-6">
                    <Button :label="'Submit'" />
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import axios from "axios";
    import Text from "./Partials/Text.vue";
    import Checkbox from "./Partials/Checkbox.vue";
    import Select from "./Partials/Select.vue";
    import Button from "./Partials/Button.vue";

    const textInputValue = ref("");
    const checkboxValue = ref(false);
    const selectValue = ref("");
    const selectOptions = [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
    ];

    // const user = ref(this.$store.state.auth.user);

    const submitForm = async () => {
        const formData = {
            textInputValue: textInputValue.value,
            checkboxValue: checkboxValue.value,
            selectValue: selectValue.value,
        };

        console.log("formData", formData);

        try {
            await axios.post("/save-data", formData);
            console.log("Data saved successfully");
        } catch (error) {
            console.error("Error saving data:", error);
        }
    };
</script>

<style scoped></style>

<!-- <template>
    <form class="w-full max-w-sm" @submit.prevent="submitForm">
        <div class="inline-block relative  mb-6">
            <div class="mb-6">
                <Text :value="textInputValue" placeholder="Enter text" />
            </div>
        </div>
        <div class="inline-block relative mb-6">
            <Checkbox :value="checkboxValue" :label="'check'"/>
        </div>

        <div class="inline-block relative mb-6">
            <Select :value="selectValue" />
        </div>

        <div class="mb-6">
            <Button :label="'Submit'"/>
        </div>
    </form>
</template>

<script setup>
    import { ref, provide } from "vue";
    import axios from "axios";

    import Text from "./Partials/Text.vue";
    import Checkbox from "./Partials/Checkbox.vue";
    import Select from "./Partials/Select.vue";
    import Button from "./Partials/Button.vue";

    const formData = ref({
        textInputValue: "",
        checkboxValue: false,
        selectValue: "",
    });

    const selectOptions = [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
    ];

    const submitForm = async () => {
        console.log("formData", formData.value);
        try {
            await axios.post("/save-data", formData.value);
            console.log("Data saved successfully");
        } catch (error) {
            console.error("Error saving data:", error);
        }
    };

    // Provide the data to the child components
    provide("formData", formData);
    provide("selectOptions", selectOptions);
</script> -->
