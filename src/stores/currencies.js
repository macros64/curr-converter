import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCurrenciesStore = defineStore('currencies', () => {

    const currenciesMap = ref(undefined);
    const currenciesList = computed(() => currenciesMap.value ? Array.from(currenciesMap.value.values()).sort((a, b) => a.CharCode.localeCompare(b.CharCode)) : []);

    function refreshCurrencies() {
        fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then((res) => res.json())
            .then((json) => {
                if(json) {
                    currenciesMap.value = new Map(Object.entries(json?.Valute));
                }
            })
            .catch((err) => (currenciesMap.value = undefined));
    }

    return { currenciesMap, currenciesList, refreshCurrencies }
})