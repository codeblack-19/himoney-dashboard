<template>
    <div class="mt-6">
        <swiper :slides-per-view="1" :space-between="25" :breakpoints="breakpoints" :modules="[Scrollbar]">
            <swiper-slide v-for="(item, index) in totalCards" :key="index">
                <v-sheet rounded="lg" class="pa-4">
                    <!-- header -->
                    <div class="d-flex align-center mb-1">
                        <v-avatar variant="outlined" :color="item.iconColor" size="x-small">
                            <v-icon :icon="item.icon" size="14"></v-icon>
                        </v-avatar>
                        <p class="text-capitalize ml-4 text-body-2 font-weight-medium">total {{ item.title }}</p>
                    </div>
                    <div class="d-flex align-center justify-space-between text-h4 font-weight-medium">
                        <p style="font-size: 30px;">{{ item.title == 'revenue' ? `${Helper.formatCurrency(item.value)}` :
                            Helper.formatNumber(item.value) }}</p>
                        <div class="text-center mr-3">
                            <p class="text-body-2 font-weight-bold mb-n1"
                                :class="item.increment ? 'text-success' : 'text-red-lighten-1'">
                                <v-icon size="small"
                                    :icon="item.increment ? 'mdi-trending-up' : 'mdi-trending-down'" />
                                <span class="ml-1">{{ item.percent }} %</span>
                            </p>
                            <p class="text-grey text-caption font-weight-medium">vs last 7 days</p>
                        </div>
                    </div>
                </v-sheet>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup lang="ts">
import Helper from '@/utils/helper'

import { Scrollbar } from 'swiper/modules'
import { SwiperSlide, Swiper } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/scrollbar'

import { ref } from "vue";
import { useLoopStore } from '@/store/loopStore'

const loopStore = useLoopStore()
const totalCards = ref([
    {
        title: 'revenue',
        value: loopStore.dataSummary.revenue,
        percent: 16,
        increment: true,
        icon: 'mdi-bank',
        iconColor: 'red-lighten-2'
    }, {
        title: 'customer',
        value: loopStore.dataSummary.customer,
        percent: 0.4,
        increment: false,
        icon: 'mdi-account-group',
        iconColor: 'warning'
    }, {
        title: 'transaction',
        value: loopStore.dataSummary.transaction,
        percent: 8,
        increment: true,
        icon: 'mdi-file-document',
        iconColor: 'success'
    }, {
        title: 'product',
        value: loopStore.dataSummary.product,
        percent: 2,
        increment: true,
        icon: 'mdi-shopping',
        iconColor: 'primary'
    }
])

const breakpoints = ref({
    '500': {
        slidesPerView: 2,
        spaceBetween: 10,
    },
    '768': {
        slidesPerView: 3,
        spaceBetween: 25
    },
    '1024': {
        slidesPerView: 4,
        spaceBetween: 25
    }
})
</script>