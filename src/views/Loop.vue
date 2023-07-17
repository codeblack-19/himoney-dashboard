<template>
    <LoopLayout>
        <!-- filter bar -->
        <FilterBar />

        <!-- total cards -->
        <SummaryCards />

        <!-- charts -->
        <v-row class="mt-2">
            <v-col cols="12" md="6">
                <RevenueChart />
            </v-col>
            <v-col cols="12" md="6">
                <CustomerChart />
            </v-col>
        </v-row>

        <!-- see more -->
        <v-row>
            <v-col cols="12" md="5">
                <TopTransaction />
            </v-col>
            <v-col cols="12" md="4">
                <TopProduct />
            </v-col>
            <v-col cols="12" md="3">
                <v-sheet rounded="lg" class="pa-2">

                </v-sheet>
            </v-col>
        </v-row>

    </LoopLayout>
</template>

<script setup lang="ts">
import LoopLayout from "@/layouts/LoopLayout.vue";
import FilterBar from "@/components/Loop/FilterBar.vue";
import SummaryCards from "@/components/Loop/SummaryCards.vue";
import RevenueChart from "@/components/Loop/Charts/RevenueChart.vue";
import CustomerChart from "@/components/Loop/Charts/CustomerChart.vue";
import TopTransaction from "@/components/Loop/TopTransaction.vue";
import TopProduct from "@/components/Loop/TopProduct.vue";
</script>
