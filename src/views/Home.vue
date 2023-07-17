<template>
  <VerticalNav>
    <v-container>
      <!-- balance component -->
      <v-row>
        <v-col cols="6" md="4">
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
        <v-col cols="6" md="4">
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
          <div>
            <!-- Credit cards -->
            <CreditCards />

            <!-- transactions -->
            <Transactions />
          </div>
        </v-col>

        <!-- left panel -->
        <v-col cols="12" md="4">
          <!-- favourite beneficiary -->
          <FavBeneficiary />

          <!-- Saving Analysis -->
          <SavingAnalysis />
        </v-col>
      </v-row>
    </v-container>
  </VerticalNav>
</template>

<script lang="ts" setup>
import VerticalNav from '@/layouts/VerticalNav1.vue';
import CreditCards from '@/components/Dashboard1/CreditCards.vue';
import Transactions from '@/components/Dashboard1/Transactions.vue';
import FavBeneficiary from '@/components/Dashboard1/FavBeneficiary.vue';
import SavingAnalysis from '@/components/Dashboard1/SavingAnalysis.vue';
</script>