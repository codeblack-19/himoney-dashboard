<template>
    <div>
        <v-container>
            <v-date-picker v-model="dateValue"></v-date-picker>
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