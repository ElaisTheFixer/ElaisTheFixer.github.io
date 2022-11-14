<script setup>
    import CoinGecko from './icons/token/Coingecko.vue'
    import Curve from './icons/token/Curve.vue'
    import Harmony from './icons/token/Harmony.vue'
    import Optimism from './icons/token/Optimism.vue'
    import Pangolin from './icons/token/Pangolin.vue'
    import QuickSwap from './icons/token/QuickSwap.vue'
    import SushiSwap from './icons/token/SushiSwap.vue'
    import UniswapV2 from './icons/token/UniswapV2.vue'
    import UniswapV3 from './icons/token/UniswapV3.vue'
    import WETH from './icons/token/WETH.vue'


    const recentLocks = [
      { id: 1, icon: CoinGecko, name: 'BLN', blockchain: 'BSC', liquidityLocked: '1.000%', ranking: '1489', tokenLocked: '190,000,000.00 (95%)', valueLocked: '$ 9,148,562.70', nextUnlock: '3 Years' },
      { id: 2, icon: Curve, name: 'CRV', blockchain: 'BSC', liquidityLocked: '0%', ranking: '519', tokenLocked: '1,900,000,051.00 (19%)', valueLocked: '$ 8,454,715.22	', nextUnlock: '3 Years' },
      { id: 3, icon: Harmony, name: 'HRM', blockchain: 'BSC', liquidityLocked: '0%', ranking: '2474', tokenLocked: '467,000,000.00 (93%)', valueLocked: '$ 5,767,902.98	', nextUnlock: '3 Months' },
      { id: 4, icon: Optimism, name: 'OTM', blockchain: 'ETH', liquidityLocked: '0%', ranking: '1489', tokenLocked: '68,685,000.00 (68.%)', valueLocked: '$ 5,314,227.13	', nextUnlock: '7 Months' },
      { id: 5, icon: Pangolin, name: 'PNO', blockchain: 'BSC', liquidityLocked: '1.000%', ranking: '2474', tokenLocked: '190,000,000.00 (95%)', valueLocked: '$ 9,148,562.70	', nextUnlock: '3 Years' },
      { id: 6, icon: QuickSwap, name: 'QWP', blockchain: 'ETH', liquidityLocked: '1.000%', ranking: '519', tokenLocked: '467,000,000.00 (93%)', valueLocked: '$ 9,148,562.70	', nextUnlock: '7 Months' },
      { id: 7, icon: SushiSwap, name: 'SWP', blockchain: 'BSC', liquidityLocked: '1.000%', ranking: '1489', tokenLocked: '190,000,000.00 (95%)', valueLocked: '$ 9,148,562.70', nextUnlock: '3 Years' },
      { id: 8, icon: UniswapV2, name: 'UNI2', blockchain: 'BSC', liquidityLocked: '0%', ranking: '519', tokenLocked: '1,900,000,051.00 (19%)', valueLocked: '$ 8,454,715.22	', nextUnlock: '3 Years' },
      { id: 9, icon: UniswapV3, name: 'UNI3', blockchain: 'BSC', liquidityLocked: '0%', ranking: '2474', tokenLocked: '467,000,000.00 (93%)', valueLocked: '$ 5,767,902.98	', nextUnlock: '3 Months' },
      { id: 10, icon: WETH, name: 'WETH', blockchain: 'ETH', liquidityLocked: '0%', ranking: '1489', tokenLocked: '68,685,000.00 (68.%)', valueLocked: '$ 5,314,227.13	', nextUnlock: '7 Months' },
    ]
</script>

<template>
  <table class="text-center min-w-full border-separate border-spacing-0 whitespace-nowrap">
      <thead class="text-xs uppercase md:font-medium tracking-wide">
          <tr class="bg-white/5">
              <th class="text-left pl-4 md:pl-8 py-5 md:py-7 pr-2 md:pr-3">Name</th>
              <th class="py-5 md:py-7 px-2 md:px-3">Blockchain</th>
              <th class="py-5 md:py-7 px-2 md:px-3">Liquidity Locked</th>
              <th class="py-5 md:py-7 px-2 md:px-3">CoinGecko Ranking</th>
              <th class="py-5 md:py-7 px-2 md:px-3">Tokens Locked</th>
              <th class="py-5 md:py-7 px-2 md:px-3">Value Locked</th>
              <th class="py-5 md:py-7 px-2 md:px-3">Next Unlock</th>
              <th class="py-5 md:py-7 pr-4 md:pr-8 pl-2 md:pl-3">Action</th>
          </tr>
      </thead>
      <tbody class="text-xs md:text-sm">
      <tr v-for="lock in recentLocks" :key="lock.id" class="even:bg-white/5">
          <td class="pl-4 md:pl-8 py-3 md:py-4 pr-2 md:pr-3">
          <a href="javascript:;" class="flex items-center gap-x-1.5 md:gap-x-2.5">
              <component class="w-5 md:w-7 h-5 md:h-7" :is="lock.icon" /> {{ lock.name }} 
          </a>
          </td>
          <td class="py-3 md:py-4 px-2 md:px-3">{{ lock.blockchain }}</td>
          <td class="py-3 md:py-4 px-2 md:px-3">{{ lock.liquidityLocked }}</td>
          <td class="py-3 md:py-4 px-2 md:px-3">{{ lock.ranking }}</td>
          <td class="py-3 md:py-4 px-2 md:px-3">{{ lock.tokenLocked }}</td>
          <td class="py-3 md:py-4 px-2 md:px-3">{{ lock.valueLocked }}</td>
          <td class="py-3 md:py-4 px-2 md:px-3">{{ lock.nextUnlock }}</td>
          <td class="py-3 md:py-4 pr-4 md:pr-8 pl-2 md:pl-3">
          <a class="font-medium text-primary-800" href="javascript:;">View</a>
          </td>
      </tr>
      </tbody>
  </table>
</template>