<template>
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
</template>

<script setup lang="ts">

</script>