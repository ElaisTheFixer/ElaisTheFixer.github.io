<script setup>
    import Pangolin from '../components/icons/token/Pangolin.vue'
    import UniswapV2 from '../components/icons/token/UniswapV2.vue'
    import IconCalender from '../components/icons/IconCalender.vue'
 

</script>

<template>
    <TransitionRoot 
      as="div" 
      :show="show"
      enter="ease-out duration-200"
      enter-from="opacity-0 translate-x-4"
      enter-to="opacity-100 translate-x-0">
       <section class="relative pt-12 pb-20 md:pt-20 md:pb-28">
          <div class="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
              <div class="flex flex-col items-center">
                <h2 class="font-syne font-bold text-center text-2xl md:text-4xl text-white mb-6 md:mb-10">Withdraw Liquidity</h2>
                <div class="w-full max-w-3xl md:px-8">
                  <div class="bg-white/5 border border-white/10 rounded-3xl md:rounded-[32px] pt-5 md:pt-9 pb-8 md:pb-14 px-5 md:px-20 flex flex-col">
                     <div class="flex flex-col">
                        <div class="flex justify-center items-center gap-x-2.5 font-medium text-sm md:text-base mb-3">
                          <Pangolin class="w-7 md:w-8 h-7 md:h-8" />
                          <span>WETH / NODIP</span>
                          <UniswapV2 class="w-7 md:w-8 h-7 md:h-8" />
                        </div>
                        <div class="flex justify-center items-center gap-x-1.5 font-medium text-sm opacity-70 mb-8 md:mb-11">
                          0x4B7...380 
                          <button type="button">
                            <img src="@/assets/images/copy.svg" alt="copy"/>
                          </button>
                        </div>
                        <ul class="flex flex-col gap-4 md:gap-5">
                          <li>
                            <div class="flex flex-col bg-white/5 border border-white/10 p-4 md:p-5 rounded-2xl w-full text-left relative">
                              <div class="text-base md:text-lg font-semibold mb-2" id="userlock-lockAmount">10.8% Locked</div>
                              <div class="text-sm mb-5 md:mb-6">2,866.32 UNI - V2</div>
                              <div class="flex items-center justify-between">
                                <div class="text-sm md:text-base" id="unlockDate">Fri 4 Nov 2022 12:00</div>
                                <div class="text-xs md:text-sm" id="unlockIn">In 2 days - #1</div>
                              </div>
                              <button class="absolute right-4 md:right-5 top-4 md:top-5">
                                <img src="@/assets/images/settings.svg" alt="settings"/>
                              </button>
                            </div>
                          </li>
                          <li>
                            <div class="flex flex-col bg-white/5 border border-white/10 p-4 md:p-5 rounded-2xl w-full text-left relative">
                              <div class="text-base md:text-lg font-semibold mb-2" id="userlock-lockAmount">10.8% Locked</div>
                              <div class="text-sm mb-5 md:mb-6">2,866.32 UNI - V2</div>
                              <div class="flex items-center justify-between">
                                <div class="text-sm md:text-base" id="unlockDate">Fri 4 Nov 2022 12:00</div>
                                <div class="text-xs md:text-sm" id="unlockIn">In 2 days - #1</div>
                              </div>
                              <button class="absolute right-4 md:right-5 top-4 md:top-5">
                                <img src="@/assets/images/settings.svg" alt="settings"/>
                              </button>
                            </div>
                          </li>
                        </ul>
                     </div>
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