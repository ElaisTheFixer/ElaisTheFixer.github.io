<script setup>
    import { TransitionRoot} from '@headlessui/vue'
    import Pangolin from '../components/icons/token/Pangolin.vue'
    import UniswapV2 from '../components/icons/token/UniswapV2.vue'
    import IconCalender from './icons/IconCalender.vue'
 
    const props = defineProps({
      show: Boolean
    })

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
                <h2 class="font-syne font-bold text-center text-2xl md:text-4xl text-white mb-6 md:mb-10">Lock Liquidity</h2>
                <div class="w-full max-w-3xl md:px-8">
                  <div class="bg-white/5 border border-white/10 rounded-3xl md:rounded-[32px] pt-5 md:pt-9 pb-8 md:pb-14 px-5 md:px-20 flex flex-col">
                     <div class="flex flex-col">
                        <div class="flex justify-center items-center gap-x-2.5 font-medium text-sm md:text-base mb-8 md:mb-12">
                          <Pangolin class="w-7 md:w-8 h-7 md:h-8" />
                          <span id="lpName">WETH / NODIP</span>
                          <UniswapV2 class="w-7 md:w-8 h-7 md:h-8" />
                        </div>
                        <div class="flex flex-col mb-5 md:mb-6">
                          <div class="flex items-center justify-between mb-2">
                            <label class="text-sm">How many LP token you want to lock?</label>
                            <div class="hidden md:inline-block text-xs text-white/70">Balance: <span class="text-white">4320</span></div>
                          </div>
                          <div class="relative">
                            <input class="w-full px-5 bg-black/30 rounded-xl md:rounded-2xl text-sm md:text-base py-3.5 focus:outline-none border border-transparent focus:border-white/10 transition-colors duration-200 " type="text" value="150"/>
                            <div class="flex items-center gap-x-2 md:gap-x-3.5 text-sm font-medium absolute right-5 top-4">
                              <button type="button" class="text-white">UNIV 2</button>
                              <button type="button" class="text-primary-800" id="lockMaxButton">MAX</button>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-col mb-5 md:mb-6">
                          <label class="text-sm mb-2">Unlock Date?</label>
                          <div class="relative z-0">
                            <input class="w-full px-5 bg-black/30 rounded-xl md:rounded-2xl text-sm md:text-base py-3.5 focus:outline-none border border-transparent focus:border-white/10 transition-colors duration-200" type="date" value="09/11/2020"/>
                            <div class="flex absolute right-5 top-3.5 -z-10">
                              <IconCalender />
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-col mb-7">
                          <label class="text-sm mb-4">Who can withdraw the tokens?</label>
                           <div class="flex items-center gap-x-6">
                            <div class="flex items-center relative">
                              <input checked id="withdrawMe" class="appearance-none w-6 h-6 border border-primary-800 rounded-full bg-primary-200 mr-2 peer cursor-pointer" type="radio" name="withdraw"/>
                                <span class="absolute left-1.5 w-3 h-3 rounded-full bg-primary-800 duration-200 opacity-0 peer-checked:opacity-100 scale-75 peer-checked:scale-100"></span>
                                <label class="text-sm md:text-base cursor-pointer" for="withdrawMe">Me</label>
                              </div>
                              <div class="flex items-center relative">
                                <input id="withdrawSomeone" class="appearance-none w-6 h-6 border border-primary-800 rounded-full bg-primary-200 mr-2 peer cursor-pointer" type="radio" name="withdraw"/>
                                <span class="absolute left-1.5 w-3 h-3 rounded-full bg-primary-800 duration-200 opacity-0 peer-checked:opacity-100 scale-75 peer-checked:scale-100"></span>
                                <label class="text-sm md:text-base cursor-pointer" for="withdrawSomeone">Other wallet</label>
                              </div>
                           </div>
                        </div>
                        <!-- <div class="flex flex-col mb-8 md:mb-11">
                          <label class="text-sm mb-4">Do you have valid referral address?</label>
                           <div class="flex items-center gap-x-6">
                            <div class="flex items-center relative">
                              <input checked id="referralNo" class="appearance-none w-6 h-6 border border-primary-800 rounded-full bg-primary-200 mr-2 peer cursor-pointer" type="radio" name="referral"/>
                                <span class="absolute left-1.5 w-3 h-3 rounded-full bg-primary-800 duration-200 opacity-0 peer-checked:opacity-100 scale-75 peer-checked:scale-100"></span>
                                <label class="text-sm md:text-base cursor-pointer" for="referralNo">No</label>
                              </div>
                              <div class="flex items-center relative">
                                <input id="referralYes" class="appearance-none w-6 h-6 border border-primary-800 rounded-full bg-primary-200 mr-2 peer cursor-pointer" type="radio" name="referral"/>
                                <span class="absolute left-1.5 w-3 h-3 rounded-full bg-primary-800 duration-200 opacity-0 peer-checked:opacity-100 scale-75 peer-checked:scale-100"></span>
                                <label class="text-sm md:text-base cursor-pointer" for="referralYes">Yes</label>
                              </div>
                           </div>
                        </div> -->
                        <p class="text-sm md:text-base mb-6 md:mb-8">Once tokens are locked they cannot be withdrawn under any circumstances until lock expiration. Please ensure all details are correct, as they are final.</p>
                        <div class="flex items-center gap-x-3 md:gap-x-4">
                          <RouterLink to="/withdraw-liquidity" class="rounded-2xl text-center border border-primary-800 w-full bg-primary-800 px-6 py-3 font-syne text-sm md:text-base font-bold text-white transition-colors duration-300 hover:bg-primary-800/90 hover:border-primary-800/90 active:scale-95">Continue</RouterLink>
                          <button type="button" class="rounded-2xl border border-primary-800 w-full bg-tranparent px-6 py-3 font-syne text-sm md:text-base font-bold text-primary-800 transition-colors duration-300 hover:bg-primary-800/5 active:scale-95" id="approveTokensForLock">Approve</button>
                        </div>
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