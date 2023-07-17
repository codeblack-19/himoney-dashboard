<template>
    <div class="d-flex justify-space-between align-center">
        <p class="font-weight-medium">Cards</p>
        <v-btn variant="outlined" color="grey-lighten-1" size="small" rounded="pill">
            Add Card
        </v-btn>
    </div>

    <!-- Card slider -->
    <div class="mt-3">
        <swiper :modules="[Scrollbar]" slides-per-view="auto" :space-between="20">
            <swiper-slide class="cc-slide">
                <v-card variant="flat" color="grey" class="py-7 px-8 mr-2" rounded="xl">
                    <div class="d-flex justify-space-between">
                        <p class="text-h5 font-weight-medium">Visa</p>
                        <v-icon icon="mdi-dots-vertical" />
                    </div>
                    <div class="d-flex justify-space-between align-center mt-16">
                        <p class="text-h5 font-weight-bold">$11,234.00</p>
                        <div class="text-right text-subtitle-2">
                            <p>*****4394</p>
                            <p>05/24</p>
                        </div>
                    </div>
                </v-card>
            </swiper-slide>
            <swiper-slide class="cc-slide">
                <v-card variant="flat" color="amber-darken-2" class="py-7 px-8 mr-2" rounded="xl">
                    <div class="d-flex justify-space-between">
                        <p class="text-h5 font-weight-medium">Master</p>
                        <v-icon icon="mdi-dots-vertical" />
                    </div>
                    <div class="d-flex justify-space-between align-center mt-16">
                        <p class="text-h5 font-weight-bold">$11,234.00</p>
                        <div class="text-right text-subtitle-2">
                            <p>*****4394</p>
                            <p>05/24</p>
                        </div>
                    </div>
                </v-card>
            </swiper-slide>
            <swiper-slide class="cc-slide">
                <v-card variant="flat" color="blue-darken-2" class="py-7 px-8 mr-2" rounded="xl">
                    <div class="d-flex justify-space-between">
                        <p class="text-h5 font-weight-medium">Paypal</p>
                        <v-icon icon="mdi-dots-vertical" />
                    </div>
                    <div class="d-flex justify-space-between align-center mt-16">
                        <p class="text-h5 font-weight-bold">$11,234.00</p>
                        <div class="text-right text-subtitle-2">
                            <p>*****4394</p>
                            <p>05/24</p>
                        </div>
                    </div>
                </v-card>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup lang="ts">
import { Scrollbar } from 'swiper/modules'
import { SwiperSlide, Swiper } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/scrollbar';
</script>
<style scoped>
.cc-slide{
    width: 355px !important;
}
</style>
