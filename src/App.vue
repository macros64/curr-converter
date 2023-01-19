<template>
  <div>
    <tabs>
      <tab title="Список валют">
        <currencies-list />
      </tab>
      <tab title="Конвертер валют">
        <currency-converter />
      </tab>
    </tabs>
  </div>
</template>

<script setup>
import Tabs from "./components/Tabs.vue";
import Tab from "./components/Tab.vue";
import currenciesList from "./components/currenciesList.vue";
import currencyConverter from "./components/currencyConverter.vue";

</script>
