<template>
    <v-card variant="flat" class="py-4 px-5 mt-4" rounded="xl" color="grey-lighten-4">
        <v-row justify="space-between" align-content="center">
            <v-col cols="8">
                <p class="text-subtitle-1 font-weight-medium mb-3">My savings</p>
            </v-col>
            <v-col cols="4">
                <v-sheet color="white" rounded="lg" class="d-flex justify-space-between pa-1">
                    <select v-model="progressValue">
                        <option value="40">Weekly</option>
                        <option value="30">Today</option>
                        <option value="90">Monthly</option>
                        <option value="77">Yearly</option>
                    </select>
                    <v-icon icon="mdi-menu-down" />
                </v-sheet>
            </v-col>
        </v-row>

        <v-sheet color="white" class="py-4 px-6 mb-5 mt-2" rounded="xl">
            <div class="d-flex">
                <v-avatar variant="outlined" color="grey-lighten-2" size="50">
                    <v-icon icon="mdi-chart-line" color="grey-darken-4"></v-icon>
                </v-avatar>

                <div class="ml-5 d-flex flex-column">
                    <p class="text-body-1 font-weight-medium">Investment</p>
                    <p class="text-caption text-grey font-weight-medium">
                        1 Months income {{progressValue}}%
                    </p>
                </div>
            </div>

            <v-progress-linear class="my-4" :model-value="progressValue" color="blue-darken-2" rounded></v-progress-linear>

            <p class="text-body-1 font-weight-bold">
                ${{ salaryValue }}
            </p>

        </v-sheet>
    </v-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
const progressValue = ref<number>(40)

const salaryValue = computed(() => {
    return ((progressValue.value/100) * 1523900).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
})
</script>