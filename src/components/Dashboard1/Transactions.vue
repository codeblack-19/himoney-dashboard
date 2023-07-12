<template>
    <div class="mt-4">
        <p class="text-subtitle-1 font-weight-medium">Transactions</p>

        <v-tabs v-model="tab" color="grey-darken-4" align-tabs="start" density="compact"
            style="border-bottom: 1px solid gainsboro;">
            <v-tab :value="1" class="text-grey-darken-1 text-capitalize">History</v-tab>
            <v-tab :value="2" class="text-grey-darken-1 text-capitalize">Upcoming</v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item :value="1">
                <v-table density="compact">
                    <thead>
                        <tr class="">
                            <th scope="col" class="text-left text-subtitle-2 text-grey-darken-1">
                                Name of transaction
                            </th>
                            <th scope="col" class="text-left text-left text-subtitle-2 text-grey-darken-1">
                                Category
                            </th>
                            <th scope="col" class="text-left text-left text-subtitle-2 text-grey-darken-1">
                                Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-3">
                                <div class="d-flex">
                                    <v-avatar color="grey-lighten-4" size="50">
                                        <v-icon icon="mdi-currency-usd" color="grey-darken-2"></v-icon>
                                    </v-avatar>

                                    <div class="ml-7 ml-md-15  d-flex flex-column">
                                        <p class="text-body-1 font-weight-medium">Paypal</p>
                                        <p class="text-caption text-grey font-weight-medium"> {{ new Date().toLocaleString()
                                        }}</p>
                                    </div>
                                </div>
                            </td>
                            <td class="text-body-2 text-grey-lighten-1 font-weight-medium">
                                Income
                            </td>
                            <td class="text-body-1 font-weight-medium text-success">
                                $15,239.00
                            </td>
                        </tr>
                        <tr>
                            <td class="py-3">
                                <div class="d-flex">
                                    <v-avatar color="grey-lighten-4" size="50">
                                        <v-icon icon="mdi-currency-usd" color="grey-darken-2"></v-icon>
                                    </v-avatar>

                                    <div class="ml-7 ml-md-15 d-flex flex-column">
                                        <p class="text-body-1 font-weight-medium">Paypal</p>
                                        <p class="text-caption text-grey font-weight-medium"> {{ new Date().toLocaleString()
                                        }}</p>
                                    </div>
                                </div>
                            </td>
                            <td class="text-body-2 text-grey-lighten-1 font-weight-medium">
                                Income
                            </td>
                            <td class="text-body-1 font-weight-medium text-success">
                                $15,239.00
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-window-item>
            <v-window-item :value="2">
                <v-container fluid>
                    two
                </v-container>
            </v-window-item>
        </v-window>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const tab = ref<number>(1)
</script>