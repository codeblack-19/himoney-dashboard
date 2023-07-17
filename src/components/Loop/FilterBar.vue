<template>
    <div class="d-flex">
        <v-btn-toggle v-model="lastFilter" rounded="0" group color="primary" density="compact" selected-class="lf-active"
            variant="plain">
            <v-btn v-for="(item, index) in filterBtnTexts" :key="index" size="small" class="mr-2 text-capitalize"
                :value="item.value">
                {{ item.text }}
            </v-btn>
        </v-btn-toggle>
        <v-spacer></v-spacer>
        <v-menu v-model="filterMenu" :close-on-content-click="false" location="bottom">
            <template v-slot:activator="{ props }">
                <v-btn color="White" variant="flat" class="text-capitalize"
                    :append-icon="!filterMenu ? 'mdi-chevron-down' : 'mdi-chevron-up'" v-bind="props"> Filter by Date
                </v-btn>
            </template>
            <v-card min-width="250">
                <v-card-actions>
                    <v-btn class="ml-auto" variant="text" @click="filterMenu = false">
                        Cancel
                    </v-btn>
                    <v-btn class="mr-auto" color="primary" variant="text" @click="filterMenu = false">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-menu>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const filterBtnTexts = ref([
    {
        text: "Last 24 hours",
        value: "24hrs",
    },
    {
        text: "Last week",
        value: "week",
    },
    {
        text: "Last month",
        value: "month",
    },
    {
        text: "Last year",
        value: "year",
    }
])
const lastFilter = ref<string | null>("24hrs");
const filterMenu = ref<boolean>(false);

</script>

<style scoped>
.lf-active {
    border-bottom: 2px solid !important;
}
</style>