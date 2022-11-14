<script setup>
    import { ref } from 'vue'
    import { TabGroup, TabList, Tab, TabPanels, TabPanel , TransitionRoot} from '@headlessui/vue'
    import { ethers } from 'ethers';
  
    import ExchangeModal from '../components/ExchangeModal.vue'

    import CoinGecko from '../components/icons/token/Coingecko.vue'
    import Curve from '../components/icons/token/Curve.vue'
    import Harmony from '../components/icons/token/Harmony.vue'
    import Optimism from '../components/icons/token/Optimism.vue'
    import Pangolin from '../components/icons/token/Pangolin.vue'
    import QuickSwap from '../components/icons/token/QuickSwap.vue'
    import SushiSwap from '../components/icons/token/SushiSwap.vue'
    import UniswapV2 from '../components/icons/token/UniswapV2.vue'
    import UniswapV3 from '../components/icons/token/UniswapV3.vue'
    import WETH from '../components/icons/token/WETH.vue'
    import BSC from '../components/icons/token/Bsc.vue'
    import ETH from '../components/icons/token/Ethereum.vue'
    import Ethereum from '../components/icons/token/Ethereum.vue'

    const exchangeModal = ref(false)
    const pairAddress = ref(false)
    const isToggle  = ref(true)
    const activeTab = ref('NewLock')

    const props = defineProps({
      show: Boolean
    })
    
    const emit = defineEmits(['continue'])

    const exchange = [
      { id: 1, icon: CoinGecko, name: 'CoinGecko', blockchain: 'ETH', blockChainIcon: ETH },
      { id: 2, icon: Curve, name: 'Curve', blockchain: 'BSC' , blockChainIcon: BSC},
      { id: 3, icon: Harmony, name: 'Harmony', blockchain: 'BSC' , blockChainIcon: BSC},
      { id: 4, icon: Optimism, name: 'Optimism', blockchain: 'ETH' , blockChainIcon: ETH},
      { id: 5, icon: Pangolin, name: 'Pangolin', blockchain: 'BSC' , blockChainIcon: BSC},
      { id: 6, icon: QuickSwap, name: 'QuickSwap', blockchain: 'ETH', blockChainIcon: ETH},
      { id: 7, icon: SushiSwap, name: 'SushiSwap', blockchain: 'BSC', blockChainIcon: BSC},
      { id: 8, icon: UniswapV2, name: 'UniswapV2', blockchain: 'BSC', blockChainIcon: BSC},
      { id: 9, icon: UniswapV3, name: 'UniswapV3', blockchain: 'BSC', blockChainIcon: BSC},
      { id: 10, icon: WETH, name: 'WETH', blockchain: 'ETH', blockChainIcon: ETH},
    ]

    const selectedExchange = ref(exchange[6])
</script>

<template>
    <TransitionRoot 
      as="div" 
      :show="show"
      enter="ease-out duration-200"
      enter-from="opacity-0 translate-x-4"
      enter-to="opacity-100 translate-x-0">
      <ExchangeModal :data="exchange" :show="exchangeModal" @close="exchangeModal = false" @selected="selectedExchange = exchange[$event - 1]; exchangeModal = false" />
      <section class="relative pt-12 pb-20 md:pt-20 md:pb-28">
          <div class="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
              <div class="flex flex-col items-center">
                <h2 class="font-syne font-bold text-center text-2xl md:text-4xl text-white mb-6 md:mb-10">Lock Liquidity</h2>
                <div class="w-full max-w-3xl md:px-8">
                  <div class="bg-white/5 border border-white/10 rounded-3xl md:rounded-[32px] pt-5 md:pt-9 pb-8 md:pb-14 px-5 md:px-20 flex flex-col">
                    <TabGroup>
                      <div class="flex justify-center mb-5 md:mb-6">
                        <button @click="exchangeModal = true" type="button" class="border border-white/10 bg-white/5 flex items-center px-2 py-1.5 rounded-full text-sm md:text-base font-medium">
                          <component class="w-6 md:w-7 h-6 md:h-7 mr-2" :is="selectedExchange.icon" /> {{ selectedExchange.name }} <img class="ml-2 mr-1" src="@/assets/images/dropdown.svg" alt="icon"/>
                        </button>
                      </div>
                      <TabList class="border border-white/10 bg-white/10 rounded-2xl p-1.5 mb-7 md:mb-9 flex items-center">
                        <Tab v-slot="{ selected }" class="font-syne text-sm text-center w-1/2 font-bold h-10 rounded-xl overflow-hidden focus:outline-none">
                          <div :class="{'bg-primary-800 text-white' : selected}" class="w-full h-full flex items-center justify-center duration-200">Tokens</div> 
                        </Tab>
                        <Tab v-slot="{ selected }" class="font-syne text-sm text-center w-1/2 font-bold h-10 rounded-xl overflow-hidden focus:outline-none">
                          <div :class="{'bg-primary-800 text-white' : selected}" class="w-full h-full flex items-center justify-center duration-200">Lock Liquidity</div> 
                        </Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel>
                          <div class="flex items-center border-b border-white/5 text-sm md:text-base gap-x-7 mb-7 md:mb-9">
                            <button @click="activeTab = 'NewLock'" type="button" :class="{ '!border-primary-800 !text-primary-800': activeTab === 'NewLock' }" class="pb-4 border-b-2 border-transparent text-white duration-150">New Lock</button>
                            <button @click="activeTab = 'WithDraw'" type="button" :class="{ '!border-primary-800 !text-primary-800': activeTab === 'WithDraw' }" class="pb-4 border-b-2 border-transparent text-white duration-150">Edit/WithDraw</button>
                          </div>
                          <div v-if="activeTab === 'NewLock'" class="flex flex-col">
                            <div class="flex items-center gap-x-3 md:gap-x-4 text-base md:text-lg font-medium mb-4 md:mb-5">
                              <component class="w-10 md:w-12 h-10 md:h-12" :is="selectedExchange.icon" /> {{ selectedExchange.name }}  Locker
                            </div>
                            <p class="text-sm md:text-base mb-3">Use the locker to prove to investors you have locked liquidity. We provide an added layer of security to investors by allowing user governance options for LP locks. </p>
                            <p class="text-sm md:text-base mb-3">Our lockers offer</p>
                            <ul class="text-sm md:text-base list-disc pl-5">
                              <li>Community LP management</li>
                              <li>Relocking</li>
                              <li>Lock ownership transfer</li>
                            </ul>
                            <div v-if="pairAddress" class="mt-6 md:mt-8">
                              <input class="w-full px-5 bg-black/30 rounded-xl md:rounded-2xl text-sm md:text-base py-3.5 focus:outline-none border border-transparent focus:border-white/10 transition-colors duration-200 mb-6 md:mb-8" type="text" placeholder="Enter the pair address for lock liquidity">
                              <div class="bg-white/5 border border-white/10 p-3 rounded-xl md:rounded-2xl flex flex-col mb-4 md:mb-5">
                                <h6 class="text-xs md:text-sm mb-2 font-medium" id="checkForPair">Pair Found</h6>
                                <div class="flex justify-between items-center">
                                  <div class="flex items-center gap-x-2">
                                    <div class="flex items-center">
                                      <Ethereum class="w-7 md:w-8 h-7 md:h-8 border-2 border-black relative z-10 rounded-full" />
                                      <UniswapV2 class="w-7 md:w-8 h-7 md:h-8 border-2 border-black relative z-0 rounded-full -ml-2" />
                                    </div>
                                    <div class="text-sm md:text-base uppercase font-medium text-white">ETH / UNIV2</div>
                                  </div>
                                  <h5 class="text-xs md:text-sm">0</h5>
                                </div>
                                <div class="flex justify-center mt-4 md:mt-5">
                                  <button @click="$emit('continue')" type="button" class="rounded-2xl border border-primary-800 w-full bg-primary-800 px-6 py-3 font-syne text-sm md:text-base font-bold text-white transition-colors duration-300 hover:bg-primary-800/90 hover:border-primary-800/90 active:scale-95">Continue</button>
                                </div>
                              </div>
                              
                              <div class="bg-white/5 border border-white/10 py-2 px-3 rounded-xl md:rounded-2xl flex justify-between items-center">
                                <div class="flex items-center gap-x-2">
                                  <div class="flex items-center">
                                    <Pangolin class="w-7 md:w-8 h-7 md:h-8 border-2 border-black relative z-10 rounded-full" />
                                    <UniswapV2 class="w-7 md:w-8 h-7 md:h-8 border-2 border-black relative z-0 rounded-full -ml-2" />
                                  </div>
                                  <div class="text-sm md:text-base uppercase font-medium text-white">PNG / UNIV2</div>
                                </div>
                                <div class="flex items-center gap-x-2 md:gap-x-3">
                                  <h5 class="text-xs md:text-sm hidden  md:inline-block">0x4872....3380</h5>
                                  <button @click="isToggle = !isToggle" type="button" 
                                    :class="{'!bg-primary-800': isToggle }" 
                                    class="flex duration-150 items-center w-10 h-5 rounded-full px-0.5 bg-white/20 cursor-pointer">
                                    <div 
                                      :class="{'translate-x-5': isToggle }" 
                                      class="w-4 h-4 duration-150 bg-white rounded-full">
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div v-else class="flex justify-center mt-8 md:mt-10">
                              <button @click="pairAddress = true;" type="button" class="rounded-2xl border border-primary-800 w-full md:w-auto bg-primary-800 px-6 py-3 font-syne text-sm md:text-base font-bold text-white transition-colors duration-300 hover:bg-primary-800/90 hover:border-primary-800/90 active:scale-95">Connect Wallet</button>
                            </div>
                          </div>
                          <div v-if="activeTab === 'WithDraw'" class="flex flex-col">
                            <ul class="flex flex-col gap-4 md:gap-5">
                          <li>
                            <div class="flex flex-col bg-white/5 border border-white/10 p-4 md:p-5 rounded-2xl w-full text-left relative">
                              <div class="text-base md:text-lg font-semibold mb-2">10.8% Locked</div>
                              <div class="text-sm mb-5 md:mb-6">2,866.32 UNI - V2</div>
                              <div class="flex items-center justify-between">
                                <div class="text-sm md:text-base">Fri 4 Nov 2022 12:00</div>
                                <div class="text-xs md:text-sm">In 2 days - #1</div>
                              </div>
                              <button class="absolute right-4 md:right-5 top-4 md:top-5">
                                <img src="@/assets/images/settings.svg" alt="settings"/>
                              </button>
                            </div>
                          </li>
                          <li>
                            <div class="flex flex-col bg-white/5 border border-white/10 p-4 md:p-5 rounded-2xl w-full text-left relative">
                              <div class="text-base md:text-lg font-semibold mb-2">10.8% Locked</div>
                              <div class="text-sm mb-5 md:mb-6">2,866.32 UNI - V2</div>
                              <div class="flex items-center justify-between">
                                <div class="text-sm md:text-base">Fri 4 Nov 2022 12:00</div>
                                <div class="text-xs md:text-sm">In 2 days - #1</div>
                              </div>
                              <button class="absolute right-4 md:right-5 top-4 md:top-5">
                                <img src="@/assets/images/settings.svg" alt="settings"/>
                              </button>
                            </div>
                          </li>
                        </ul>
                          </div>
                        </TabPanel>
                        <TabPanel>
                          Lock Liquidity
                        </TabPanel>
                      </TabPanels>
                    </TabGroup>
                  </div>
                </div>
              </div>
          </div>
          <div
              class="absolute blur-item top-10 md:top-40 scale-50 md:scale-100 w-[958px] h-[908px] left-1/2 -ml-[190px] md:-ml-[720px] -translate-x-1/2 bg-primary-800/10 rounded-full -z-10 blur-[800px]"></div>
          <div
              class="absolute blur-item -top-48 w-[723px] h-[685px] scale-50 md:scale-100 right-1/2 -mr-[130px] md:-mr-[720px] translate-x-1/2 bg-primary-800/10 rounded-full -z-10 blur-[800px]"></div>
      </section>
    </TransitionRoot>
    
</template>