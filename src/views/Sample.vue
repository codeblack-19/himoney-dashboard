<template>
    <div>
        <v-container>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-text-field v-bind="props" v-model="dateValue" label="Label" variant="outlined"></v-text-field>
                </template>

                <v-date-picker v-model="dateValue"></v-date-picker>
            </v-menu>
            
        </v-container>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VDatePicker } from 'vuetify/labs/VDatePicker'

let day = new Date()
day.setDate(day.getDate() + 2)

const dateValue = ref<any[]>([day])
</script>