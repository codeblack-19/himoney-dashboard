<template>
    <div>
        <v-sheet rounded="lg" class="pa-4">
            <div class="d-flex">
                <div class="flex-md-1-0">
                    <p class="d-flex mb-n1">
                        <span style="font-size: 20px" class="font-weight-medium mr-2">Revenue Growth</span>
                        <span class="text-subtitle-1">(USD)</span>
                    </p>
                    <p class="text-grey text-body-2">
                        of the week on websites and compared e-commerce
                    </p>
                </div>
                <v-btn color="primary" size="small" variant="text">view detail</v-btn>
            </div>
            <div id="revenueChartBox" style="widows: 100%; height: 350px"></div>
        </v-sheet>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { use, init } from 'echarts/core';
import { EChartsOption } from 'echarts'
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    GridComponent,
    ToolboxComponent
} from "echarts/components";

use([
    BarChart,
    CanvasRenderer,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    GridComponent,
    ToolboxComponent
]);

const revenueChartBox = ref<HTMLElement | null>(null)
const chartOptions = ref<EChartsOption>({
    legend: {
        data: ["Website", "E-commerce"],
        bottom: 0,
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(6,34,86,255)',
        borderWidth: 0,
        textStyle: {
            color: 'white',
        },
        valueFormatter: (value) => '$' + (value as number).toFixed(2)
    },
    toolbox: {
        show: true,
        feature: {
            dataView: { show: true, readOnly: true },
            restore: { show: true },
            saveAsImage: { show: true , title: 'Save as Image', name: 'Revenue_Growth'}
        }
    },
    calculable: true,
    textStyle: {
        fontFamily: 'Raleway'
    },
    yAxis: {
        type: 'value'
    },
    xAxis: {
        type: 'category',
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    series: [
        {
            name: 'Website',
            type: 'bar',
            barMaxWidth: 9,
            color: 'rgba(14,98,254,255)',
            barGap: .08,
            data: [
                { name: 'Sun', value: 450 },
                { name: 'Mon', value: 640 },
                { name: 'Tue', value: 828 },
                { name: 'Wed', value: 610 },
                { name: 'Thu', value: 650 },
                { name: 'Fri', value: 980 },
                { name: 'Sat', value: 940 },
            ]
        }, {
            name: 'E-commerce',
            type: 'bar',
            barMaxWidth: 9,
            color: 'rgba(100,185,239,255)',
            barGap: .08,
            data: [
                { name: 'Sun', value: 400 },
                { name: 'Mon', value: 780 },
                { name: 'Tue', value: 800 },
                { name: 'Wed', value: 640 },
                { name: 'Thu', value: 510 },
                { name: 'Fri', value: 770 },
                { name: 'Sat', value: 890 },
            ]
        }
    ],
})

onMounted(() => {
    revenueChartBox.value = document.getElementById('revenueChartBox')
    let revenueChart = init(revenueChartBox.value!)
    revenueChart.setOption(chartOptions.value)
    new ResizeObserver(() => revenueChart.resize()).observe(revenueChartBox.value as Element)
})
</script>