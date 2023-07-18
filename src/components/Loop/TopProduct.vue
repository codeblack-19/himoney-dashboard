<template>
    <v-sheet rounded="lg" class="pa-4" height="100%">
        <div class="d-flex">
            <div class="flex-1-0">
                <p class="d-flex mb-n1">
                    <span style="font-size: 20px" class="font-weight-medium mr-2">Top Product</span>
                </p>
                <p class="text-grey text-body-2">
                    of the week based on total purchase
                </p>
            </div>
            <v-btn color="primary" size="small" variant="text">view more</v-btn>
        </div>
        <v-row no-gutters class="mt-4">
            <v-col class="pr-2">
                <v-img height="220px" cover class="rounded-lg" src="../../assets/loop/prod1.webp" />
            </v-col>
            <v-col class="pr-2">
                <v-img height="220px" cover class="rounded-lg" src="../../assets/loop/prod2.webp" />
            </v-col>
            <v-col>
                <v-img height="220px" cover class="rounded-lg" src="../../assets/loop/prod3.webp" />
            </v-col>
        </v-row>
    </v-sheet>
</template>

<script setup lang="ts">

</script>