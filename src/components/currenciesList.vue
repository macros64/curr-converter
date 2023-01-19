<template>
    <input type="text" class="search" placeholder="фильтр списка" v-model="filter" />
    <currency-item v-for="curr in currencies" :item="curr" />
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import currencyItem from '@/components/currencyItem.vue'
import { useCurrenciesStore } from '@/stores/currencies'

const store = useCurrenciesStore();
const filter = ref('');
store.refreshCurrencies();

const storeCurrencies = computed(() => store.currenciesList);

const currencies = computed(() => storeCurrencies.value?.filter(item => {
    return item.CharCode.indexOf(filter.value) >= 0 || item.Name.indexOf(filter.value) >= 0;
}));

watch(storeCurrencies, () => console.log(storeCurrencies));

</script>

<style scoped>
.search {
    width: 100%;
    margin-bottom: 0.25rem;
    padding: 0.5rem;
    font-size: medium;
}
</style>