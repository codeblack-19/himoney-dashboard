import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoopStore = defineStore("loopStore", () => {
    const dataSummary = ref({
        revenue: 612831,
        customer: 513456,
        transaction: 637902,
        product: 256600
    })

    const countries = ref([
        { name: "United States", percentage: "38", flag: 'https://flagsapi.com/US/flat/64.png' },
        { name: "United Kingdom", percentage: "27", flag: 'https://flagsapi.com/GB/flat/64.png'  },
        { name: "France", percentage: "20", flag: 'https://flagsapi.com/FR/flat/64.png'},
        { name: "Argentina", percentage: "16", flag: 'https://flagsapi.com/AR/flat/64.png'}
    ])

    return { dataSummary, countries }
})