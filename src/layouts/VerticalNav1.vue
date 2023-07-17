<template>
    <v-layout>
        <v-navigation-drawer v-model="uiStore.drawer" :permanent="uiStore.permanentDrawer" :temporary="!uiStore.permanentDrawer">
            <template v-slot:prepend>
                <v-list-item v-if="!uiStore.showToggle" class="pl-10 text-body-1 font-weight-bold" lines="two">
                    <p>Himoney</p>
                </v-list-item>
                <div v-else class="d-flex align-center pl-10 pr-3 py-3">
                    <p class="text-body-1 font-weight-bold flex-1-0">Himoney</p>
                    <v-btn icon="mdi-close" elevation="0" rounded="lg" @click="uiStore.drawer=false"></v-btn>
                </div>
            </template>

            <v-list class="pl-4">
                <v-list-item prepend-icon="mdi-home-outline" title="Loop" to="/loop" ></v-list-item>
                <v-list-item prepend-icon="mdi-chart-donut" title="Payments"></v-list-item>
                <v-list-item prepend-icon="mdi-swap-horizontal" title="Exchanges"></v-list-item>
                <v-list-item prepend-icon="mdi-trophy-outline" title="Points"></v-list-item>
                <v-list-item prepend-icon="mdi-chart-box-outline" title="Statistics"></v-list-item>

                <v-divider style="width: 160px;" class="my-5 ml-4" :thickness="2" :opacity="70"></v-divider>

                <v-list-item prepend-icon="mdi-cog-outline" title="Settings"></v-list-item>
                <v-list-item prepend-icon="mdi-logout" title="Log out"></v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-main style="min-height: 90vh">
            <v-app-bar :color="uiStore.yScrollWidth < 50 ? 'transparent' : 'white'" :elevation="uiStore.yScrollWidth < 50 ? 0 : 1" class="pt-1 px-0 px-md-5">
                <template v-slot:prepend>
                    <v-btn v-if="uiStore.showToggle" icon="mdi-menu" size="small" rounded="lg" @click="uiStore.drawer=true"></v-btn>
                    <p v-if="uiStore.showToggle" class="mx-1">Himoney</p>
                    <v-btn v-else prepend-icon="mdi-magnify" variant="plain" rounded="pill" color="grey">
                        search
                    </v-btn>
                </template>
                <template v-slot:append>
                    <v-icon icon="mdi-forum-outline" color="grey" />
                    <v-badge color="error" dot class="mx-3">
                        <v-icon icon="mdi-bell-outline" color="grey-darken-2" />
                    </v-badge>
                    <v-chip 
                        size="large"
                        class="username-chip text-body-2 font-weight-medium ml-3"
                        color="grey-darken-4"
                        prepend-avatar="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" 
                        variant="outlined">
                        George Smith
                    </v-chip>
                </template>
            </v-app-bar>
            <slot></slot>
            <v-footer >
                <p class="mx-auto text-grey-darken-2">
                    <span>Himoney</span> &copy; 2023
                </p>
            </v-footer>
        </v-main>
    </v-layout>
</template>

<script setup lang="ts">
import { useNavStore } from "@/store/navStore"
import { useUiStore } from "@/store/uiStore"

const navStore = useNavStore()
const uiStore = useUiStore()
</script>

<style>
.username-chip.v-chip--variant-outlined{
    border: 1px solid rgb(220, 220, 220) !important;
}
</style>