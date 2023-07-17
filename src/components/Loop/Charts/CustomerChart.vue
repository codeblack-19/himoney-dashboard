<template>
    <div>
        <v-sheet rounded="lg" class="pa-4">
            <div class="d-flex">
                <div class="flex-1-0">
                    <p class="d-flex mb-n1">
                        <span style="font-size: 20px;" class="font-weight-medium mr-2">Customer Growth</span>
                    </p>
                    <p class="text-grey text-body-2">of the week based on country</p>
                </div>
                <v-menu transition="slide-x-transition">
                    <template v-slot:activator="{ props }">
                        <v-btn color="primary" v-bind="props" size="small" variant="text" append-icon="mdi-chevron-down">
                            Country
                        </v-btn>
                    </template>

                    <v-list :width="200" :elevation="1">
                        <v-list-item v-for="(item, index) in loopStore.countries" >
                            <div class="d-flex align-center mb-1">
                                <v-avatar size="x-small" class="mr-3">
                                    <v-img :cover="true" :height="100" :width="100" aspect-ratio="1/1" :src="item.flag" alt="US"></v-img>
                                </v-avatar>
                                <p class="text-body-2 font-weight-medium text-grey-darken-2">{{ item.name }}</p>
                            </div>
                            <v-row no-gutters justify="space-between">
                                <v-col cols="9" align-self="center">
                                    <v-progress-linear class="" color="primary" rounded :model-value="item.percentage" :height="6"></v-progress-linear>
                                </v-col>
                                <v-col cols="3" align-self="center">
                                    <p class="text-caption text-center ml-1 text-grey-darken-2">{{ item.percentage }}%</p>
                                </v-col>
                            </v-row>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
            <div id="CustomerChartBox" style="height: 350px"></div>
        </v-sheet>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { use, init, registerMap } from 'echarts/core';
import { EChartsOption } from 'echarts'
import { CanvasRenderer } from "echarts/renderers";
import { MapChart } from "echarts/charts";
import {
    GeoComponent,
    TooltipComponent,
    LegendComponent,
    VisualMapComponent,
    ToolboxComponent
} from "echarts/components";
import WorldMapJson from './worldJson.json'
import { useLoopStore } from '@/store/loopStore';

use([
    MapChart,
    CanvasRenderer,
    GeoComponent,
    TooltipComponent,
    LegendComponent,
    VisualMapComponent,
    ToolboxComponent
]);

registerMap('World', (WorldMapJson) as any)

const loopStore = useLoopStore()
const CustomerChartBox = ref<HTMLElement | null>(null)
const chartOptions = ref<EChartsOption>({
    toolbox: {
        show: true,
        feature: {
            dataView: { show: true, readOnly: true },
            restore: { show: true },
            saveAsImage: { show: true, title: 'Save as Image', name: 'Revenue_Growth' }
        }
    },
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(6,34,86,255)',
        borderWidth: 0,
        textStyle: {
            color: 'white',
        },
    },
    textStyle: {
        fontFamily: 'Raleway'
    },
    series: [
        {
            name: 'Customer Growth',
            type: 'map',
            map: 'World',
            emphasis: {
                label: {
                    show: false
                },
                itemStyle: {
                    areaColor: 'rgba(14,98,254,255)',
                    color: 'rgba(14,98,254,255)'
                }
            },
            zoom: 1.3,
            select: {
                label: {
                    show: false
                },
                itemStyle: {
                    color: 'rgba(14,98,254,255)',
                    borderColor: 'rgba(14,98,254,255)'
                }
            },
            roam: true,
            data: [
                { name: 'United States', value: Math.round(loopStore.dataSummary.customer * 0.38) },
                { name: 'United Kingdom', value: Math.round(loopStore.dataSummary.customer * 0.27) },
                { name: 'France', value: Math.round(loopStore.dataSummary.customer * 0.20) },
                { name: 'Argentina', value: Math.round(loopStore.dataSummary.customer * 0.16) }
            ]
        }
    ]
})

onMounted(() => {
    CustomerChartBox.value = document.getElementById('CustomerChartBox')
    let CustomerChart = init(CustomerChartBox.value!)
    CustomerChart.setOption(chartOptions.value)
})
</script>