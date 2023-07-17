<template>
    <v-layout>
        <v-navigation-drawer v-model="uiStore.drawer" width="250" :permanent="uiStore.permanentDrawer" :temporary="!uiStore.permanentDrawer">
            <template v-slot:prepend>
                <v-list-item v-if="!uiStore.showToggle" class="pl-8 pt-5" lines="two">
                    <p class="d-flex align-center">
                        <v-icon icon="mdi-all-inclusive" color="primary" class="mr-1 text-h4" />
                        <span class="text-uppercase text-h5 font-weight-medium">Loop</span>
                    </p>
                </v-list-item>
                <div v-else class="d-flex align-center justify-space-between pl-8 pr-3 py-3">
                    <p class="d-flex align-center">
                        <v-icon icon="mdi-all-inclusive" color="primary" class="mr-1 text-h4" />
                        <span class="text-uppercase text-h5 font-weight-medium">Loop</span>
                    </p>
                    <v-btn icon="mdi-close" elevation="0" rounded="lg" @click="uiStore.drawer = false"></v-btn>
                </div>
            </template>

            <!-- menu -->
            <v-list class="px-6" :lines="false" nav>
                <v-list-subheader class="text-subtitle-1 my-2 font-weight-medium text-grey">MENU</v-list-subheader>
                <v-list-item color="primary" active-class="nav-is-active"  v-for="(item, index) in navStore.loopNav.menu" :key="index" :value="item">
                    <template v-slot:prepend>
                        <v-icon size="small" :icon="item.icon"></v-icon>
                    </template>

                    <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item>
            </v-list>

            <!-- diviver -->
            <v-divider style="width: 80%;" class="mt-4 mx-auto" color="grey-darken-4" :thickness="2"></v-divider>

            <!-- support -->
            <v-list class="px-6" :lines="false" nav>
                <v-list-subheader class="text-body-1 pl-5 pt-5 pb-2 font-weight-medium text-grey">SUPPORT</v-list-subheader>
                <v-list-item v-for="(item, index) in navStore.loopNav.support" :key="index">
                    <template v-slot:prepend>
                        <v-icon size="small" :icon="item.icon"></v-icon>
                    </template>

                    <v-list-item-title v-text="item.title"></v-list-item-title>

                    <template v-if="item.title == 'Dark Mode'" v-slot:append>
                        <v-list-item-action>
                            <v-switch density="compact" hide-details></v-switch>
                        </v-list-item-action>
                    </template>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-main style="min-height: 100vh; background-color: #F5F5F5;">
            <v-app-bar color="grey-lighten-4" :elevation="1" class="px-0 px-md-5">
                <template v-slot:prepend>
                    <v-btn v-if="uiStore.showToggle" icon="mdi-menu" size="small" rounded="lg" @click="uiStore.drawer = true"></v-btn>
                    <p class="text-h5 ml-2 font-weight-medium">Dashboard</p>
                </template>
                <template v-slot:append>
                    
                    <v-text-field 
                        v-if="!uiStore.showToggle"
                        hide-details
                        variant="outlined"
                        density="compact" 
                        label="Search anything..." 
                        prepend-inner-icon="mdi-magnify" 
                        style="width: 210px;"
                        base-color="grey-darken-1"
                        color="grey-lighten-1"
                    >
                    </v-text-field>
                    
                    <v-badge content="4" color="error" class="mx-5" :offset-y="10" offset-x="4">
                        <v-btn variant="flat" icon="mdi-bell-outline"></v-btn>
                    </v-badge>
                    <v-avatar color="primary" image="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"></v-avatar>
                </template>
            </v-app-bar>
            <div class="mx-2 mx-md-10 my-5">
                <slot></slot>
            </div>
            <v-footer>
                <p class="mx-auto text-grey-darken-2">
                    <span>Loop</span> &copy; 2023
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
.nav-is-active{
    border-left: 3px solid;
}

</style>