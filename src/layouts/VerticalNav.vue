<template>
    <v-layout>
        <v-navigation-drawer permanent>
            <template v-slot:prepend>
                <v-list-item class="pl-10 text-body-1 font-weight-bold" lines="two">
                    <p>Himoney.</p>
                </v-list-item>
            </template>

            <v-list class="pl-4">
                <v-list-item prepend-icon="mdi-home-outline" title="Overview"></v-list-item>
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
            <v-toolbar color="transparent" class="pt-1 px-5">
                <template v-slot:prepend>
                    <v-btn prepend-icon="mdi-magnify" variant="plain" rounded="pill" color="grey">
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
                        class="username-chip text-body-2 font-weight-medium ml-7"
                        color="grey-darken-4"
                        prepend-avatar="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" 
                        variant="outlined">
                        George Smith
                    </v-chip>
                </template>
            </v-toolbar>
            <slot></slot>
        </v-main>
    </v-layout>
</template>

<script lang="ts" setup>

</script>

<style>
.username-chip.v-chip--variant-outlined{
    border: 1px solid rgb(220, 220, 220) !important;
}
</style>