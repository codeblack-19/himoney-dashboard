<template>
    <LoopLayout>
        <!-- filter bar -->
        <FilterBar />

        <!-- total cards -->
        <SummaryCards />

        <!-- charts -->
        <v-row class="mt-1 mt-md-2">
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
            <v-col cols="12" md="4" align-self="stretch">
                <TopProduct />
            </v-col>
            <v-col cols="12" md="3">
                <v-sheet rounded="lg" height="100%" class="addBox py-6 px-6 d-flex flex-column">
                    <p class="text-white text-h5">
                        See more detail statistic to analyze your decision.
                    </p>
                    <v-spacer></v-spacer>
                    <p>
                        <v-btn rounded="lg" class="text-primary font-weight-medium">See More</v-btn>
                    </p>
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

<style>
.addBox{
    background: linear-gradient(rgba(0,0,0,0.400), rgba(0, 0, 0, 0.755)), url(../assets/loop/bgImage.webp);
    background-size: cover;
}
</style>
