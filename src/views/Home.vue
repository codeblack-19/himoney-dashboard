<template>
  <VerticalNav>
    <v-container>

      <!-- balance component -->
      <v-row>
        <v-col cols="12" md="4">
          <v-sheet color="white">
            <p class="text-subtitle-1 font-weight-medium">Total Balance</p>
            <p>
              <span class="text-h5 font-weight-bold mr-1">
                $12,432.<span class="text-grey text-h6">00</span>
              </span>
              <v-chip size="x-small" color="success">+ 32%</v-chip>
            </p>
          </v-sheet>
        </v-col>
        <v-col cols="12" md="4">
          <v-sheet color="white">
            <p class="text-subtitle-1 font-weight-medium">Credit Limit</p>
            <p class="mt-1">
              <span class="text-subtitle-2 font-weight-bold mr-1">
                $12,432.<span class="text-grey font-weight-bold text-caption">00</span>
              </span>
            </p>
          </v-sheet>
        </v-col>
      </v-row>

      <v-divider class="my-6"></v-divider>

      <v-row>
        <!-- right panel -->
        <v-col cols="12" md="8">
          <!-- Credit cards -->
          <div>
            <div class="d-flex justify-space-between align-center">
              <p class="font-weight-medium">Cards</p>
              <v-btn variant="outlined" color="grey-lighten-1" size="small" rounded="pill">
                Add Card
              </v-btn>
            </div>

            <!-- Card slider -->
            <div class="mt-3">
              <swiper :modules="[Scrollbar]" :slides-per-view="2" :space-between="20">
                <swiper-slide class="">
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
                <swiper-slide>
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
                <swiper-slide>
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

            <!-- transactions -->
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

                            <div class="ml-15 d-flex flex-column">
                              <p class="text-body-1 font-weight-medium">Paypal</p>
                              <p class="text-caption text-grey font-weight-medium"> {{ new Date().toLocaleString() }}</p>
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

                            <div class="ml-15 d-flex flex-column">
                              <p class="text-body-1 font-weight-medium">Paypal</p>
                              <p class="text-caption text-grey font-weight-medium"> {{ new Date().toLocaleString() }}</p>
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

            <!-- <div>
              <pre ref="gptAns"
                id="gpt-ans"><span ref="caretBlock" class="caret-block" style="background-color: black;">&nbsp;</span></pre>
            </div> -->
          </div>
        </v-col>

        <!-- left panel -->
        <v-col cols="12" md="4">
          <v-card variant="flat" class="py-4 px-5" rounded="xl" color="grey-lighten-4">
            <p class="text-subtitle-1 font-weight-medium mb-3">Favorites</p>

            <v-sheet color="white" class="py-2 px-1 mb-5" rounded="xl">
              <v-row justify="space-evenly">
                <v-col v-for="i in 4" cols="3" class="text-center">
                  <v-avatar size="45">
                    <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
                  </v-avatar>
                  <p class="text-caption font-weight-medium pt-1">John</p>
                </v-col>
              </v-row>
            </v-sheet>

            <v-btn rounded="pill" class="my-2 py-5 text-capitalize" variant="flat" block>Request</v-btn>

            <v-btn rounded="pill" color="blue-darken-1" class="mt-4 py-5 text-capitalize" variant="flat" block>Send
              money</v-btn>
          </v-card>

          <v-card variant="flat" class="py-4 px-5 mt-4" rounded="xl" color="grey-lighten-4">
            <v-row justify="space-between" align-content="center">
              <v-col cols="8">
                <p class="text-subtitle-1 font-weight-medium mb-3">My savings</p>
              </v-col>
              <v-col cols="4">
                <v-sheet color="white" rounded="lg" class="d-flex justify-space-between pa-1">
                  <select>
                    <option>Weekly</option>
                    <option>Today</option>
                    <option>Monthly</option>
                    <option>Yearly</option>
                  </select>
                  <v-icon icon="mdi-menu-down" />
                </v-sheet>
              </v-col>
            </v-row>

            <v-sheet color="white" class="py-4 px-6 mb-5 mt-2" rounded="xl">
              <div class="d-flex">
                <v-avatar variant="outlined" color="grey-lighten-2" size="50">
                  <v-icon icon="mdi-chart-line" color="grey-darken-4"></v-icon>
                </v-avatar>

                <div class="ml-5 d-flex flex-column">
                  <p class="text-body-1 font-weight-medium">Investment</p>
                  <p class="text-caption text-grey font-weight-medium">
                    1 Months income 70%
                  </p>
                </div>
              </div>

              <v-progress-linear class="my-4" model-value="40" color="blue-darken-2" rounded></v-progress-linear>

              <p class="text-body-1 font-weight-bold">
                $15,239.00
              </p>

            </v-sheet>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </VerticalNav>
</template>

<script lang="ts" setup>
import VerticalNav from '@/layouts/VerticalNav.vue'
import { onMounted, ref } from 'vue';
import { Scrollbar } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/scrollbar';

const tab = ref<number>(1)
const savings = ref<string>('Weekly')
// const gptAns = ref<HTMLElement | null>(null)
// const caretBlock = ref<HTMLElement | null>(null)

// let txt = `Lorem ipsum dummy text blabla \nhello world.`;
// let i = 0

// function typeWriter() {
//   if (i < txt.length && gptAns.value && caretBlock.value) {
//     gptAns.value.removeChild(caretBlock.value)
//     gptAns.value.innerHTML += txt.charAt(i);
//     gptAns.value.appendChild(caretBlock.value)
//     i++;
//     setTimeout(typeWriter, 100);
//   }
// }

onMounted(() => {
  // typeWriter()
})
</script>