import { defineStore } from "pinia";
import { ref } from "vue";

export const useNavStore = defineStore("navStore", () => {
    const loopNav = ref({
        menu: [
            {
                title: "Overview",
                icon: 'mdi-view-grid',
            },{
                title: "Products",
                icon: 'mdi-shopping',
            }, {
                title: "Customers",
                icon: 'mdi-account-group',
            }, {
                title: "Transactions",
                icon: 'mdi-file-document',
            }, {
                title: "Statistics",
                icon: 'mdi-chart-pie',
            }, {
                title: "Compain",
                icon: 'mdi-bullhorn',
            }, {
                title: "Log Activity",
                icon: 'mdi-clock-time-three',
            }
        ],
        support: [
            {
                title: "Settings",
                icon: 'mdi-cog',
            }, {
                title: "Help",
                icon: 'mdi-help-circle',
            }, {
                title: "Dark Mode",
                icon: 'mdi-weather-night',
            }
        ]
    })

    return { loopNav }
})