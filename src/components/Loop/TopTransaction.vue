<template>
    <div>
        <v-sheet rounded="lg" class="pa-4">
            <div class="d-flex">
                <div class="flex-md-1-0">
                    <p class="d-flex mb-n1">
                        <span style="font-size: 20px" class="font-weight-medium mr-2">Top Transaction</span>
                    </p>
                    <p class="text-grey text-body-2">
                        of the week based on total purchase
                    </p>
                </div>
                <v-btn color="primary" size="small" variant="text">view detail</v-btn>
            </div>
            <v-sheet rounded="lg" class="mt-4">
                <v-table density="compact" class="bg-grey-lighten-4 text-caption">
                    <thead>
                        <tr>
                            <th scope="col" class="text-left">Customer ID</th>
                            <th scope="col" class="text-left">First Item</th>
                            <th scope="col" class="text-left">Date</th>
                            <th scope="col" class="text-left">Purchase</th>
                        </tr>
                    </thead>
                    <tbody class="text-grey-darken-1 font-weight-medium">
                        <tr v-for="(item, index) in transactions" :key="index">
                            <td class="text-decoration-underline">
                                <v-menu open-on-hover>
                                    <template v-slot:activator="{ props }">
                                        <span v-bind="props">
                                            #{{ item.customerId }}
                                        </span>
                                    </template>

                                    <v-card color="indigo-darken-4" class="py-2" min-width="190px">
                                        <p class="pr-2 text-body-2 font-weight-medium">
                                            <v-icon icon="mdi-circle-small" class="mr-n2" /> <span>Customer ID: #{{ item.customerId }}</span>
                                        </p>
                                        <v-row no-gutters class="mx-3 my-1" align-content="center">
                                            <v-col cols="3">
                                                <v-avatar size="large" color="primary" style="border: 2px solid rgba(100,185,239,255);"
                                                    image="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"></v-avatar>
                                            </v-col>
                                            <v-col cols="8" class="pl-3" align-self="center">
                                                <p class="text-body-2 font-weight-medium pl-1">{{ item.customerName }}</p>
                                                <p class="text-grey-lighten-2 text-caption mt-n1">
                                                    <v-icon size="small" icon="mdi-map-marker" /> <span>{{ item.country }}</span>
                                                </p>
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </v-menu>
                            </td>
                            <td>{{ item.product }}</td>
                            <td>{{ item.date }}</td>
                            <td>{{ Helper.formatCurrency(item.purchase) }}</td>
                        </tr>
                    </tbody>
                </v-table>
            </v-sheet>
        </v-sheet>
    </div>
</template>

<script setup lang="ts">
import Helper from "@/utils/helper";
import { ref } from "vue";

const transactions = ref([
    {
        customerId: '23442',
        customerName: 'Jenny Wilson',
        country: 'United States',
        product: 'Leather crop top & pant',
        date: '12 Jan',
        purchase: 2349
    },{
        customerId: '23742',
        customerName: 'Rolland Ohm',
        country: 'United Kingdom',
        product: 'Female Tole Bag',
        date: '3 Jan',
        purchase: 21234
    },{
        customerId: '48322',
        customerName: 'Franca Otis',
        country: 'France',
        product: 'Fan Choco',
        date: '4 Jan',
        purchase: 4349
    },{
        customerId: '23543',
        customerName: 'Victor James',
        country: 'United States',
        product: 'Leather crop top & pant',
        date: '10 Jan',
        purchase: 49302
    },{
        customerId: '39432',
        customerName: 'Diago Mani',
        country: 'Argentina',
        product: 'Gucci Shoes',
        date: '7 Feb',
        purchase: 32992
    }
])
</script>