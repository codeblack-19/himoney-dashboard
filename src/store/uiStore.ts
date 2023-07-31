import { defineStore } from "pinia";
import { useWindowSize, useWindowScroll } from '@vueuse/core';
import { ref, computed, watch, onMounted } from "vue";

export const useUiStore = defineStore("uiStore", () => {
    const { width: winWidth, height: winHeight  } = useWindowSize();
    const { y: yScrollWidth } = useWindowScroll();
    const drawer = ref<boolean>(true);
    const permanentDrawer = ref<boolean>(true);
    const winResizeWidth = ref<number>(1280);
    const showToggle = computed(() => {
        return winWidth.value < winResizeWidth.value
    })

    watch(winWidth, (newWidth) => {
        if (newWidth) {
            permanentDrawer.value = !showToggle.value
            if (showToggle.value) {
                drawer.value = false
            }
        }
    })

    onMounted(() => {
        permanentDrawer.value = !showToggle.value
        if (showToggle.value) {
            drawer.value = false
        }
    })

    return {
        winHeight,
        winWidth,
        drawer,
        permanentDrawer,
        yScrollWidth,
        showToggle,
        winResizeWidth
    }
})