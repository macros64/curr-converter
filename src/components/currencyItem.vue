<template>
    <div class="item">
        <span>{{ props.item.CharCode }}</span>
        <span>{{ props.item.Name }}</span>
        <span :class="deltaPositive ? 'profit' : 'loss'">{{ props.item.Value.toFixed(2) }}</span>
        <span :class="deltaPositive ? 'profit' : 'loss'">
            <img :src="'triangle-small-' + (deltaPositive ? 'up.png' : 'down.png')" />
            {{ delta?.toFixed(3) }}
        </span>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps(['item']);

const delta = computed(() => (props.item?.Value - props.item?.Previous));
const deltaPositive = computed(() => delta.value > 0);
</script>

<style scoped>
.item {
    display: grid;
    grid-template-columns: 10% 60% 10% 20%;
    align-items: center;
}

.item span {
    padding: 0.25rem;
    display: flex;
    align-items: center;
}

.item .profit {
    color: green;
}

.item .loss {
    color: darkred;
}

</style>