<script setup>
    import {
      TransitionRoot,
      TransitionChild,
      Dialog,
      DialogPanel,
      DialogTitle,
    } from '@headlessui/vue'  
 
    import IconClose from '../components/icons/IconClose.vue'
    
    const emit = defineEmits(['close'])

    const props = defineProps({
      show: Boolean,
      data: Array
    })

    const selected = (id) => {
      emit('selected', id);
    }

</script>
<template>

  <TransitionRoot appear :show="show" as="template">
        <Dialog as="div" @click="$emit('close')" class="relative z-50">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-black bg-opacity-75" />
          </TransitionChild>

          <div class="fixed inset-0 overflow-y-auto">
            <div
              class="flex min-h-full items-center justify-center p-4 text-center"
            >
              <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
              >
                <DialogPanel
                  class="w-full max-w-2xl transform overflow-hidden px-5 md:px-20 pt-7 pb-5 md:py-14 rounded-3xl md:rounded-[32px] bg-white/5 backdrop-blur-3xl p-6 text-left align-middle shadow-xl transition-all relative"
                >
                  <DialogTitle
                    as="h3"
                    class="font-syne font-bold text-white text-center text-xl md:text-4xl mb-6 md:mb-11"
                  >
                  Select an exchange
                  </DialogTitle>
                  <button type="button" @click="$emit('close')" class="text-white/90 absolute right-4 md:right-8 top-4 md:top-8 transition hover:text-white active:scale-90 focus:outline-none">
                    <IconClose />
                  </button>
                  <ul class="divide-y divide-white/10 bg-white/5 border-white/10 py-2 rounded-2xl overflow-hidden">
                    <li @click="selected(item.id)" v-for="item in data" :key="item.id" class="flex items-center justify-between px-4 md:px-5 py-2 md:py-2.5 transition hover:bg-white/5 cursor-pointer">
                      <div class="flex items-center gap-x-2.5 md:gap-x-3 text-sm md:text-base">
                        <component class="w-6 md:w-7 h-6 md:h-7" :is="item.icon" /> {{ item.name }}
                      </div>
                      <div class="flex items-center gap-x-2 md:gap-x-2.5 text-xs md:text-sm">
                        {{ item.blockchain }} <component class="w-5 md:w-6 h-5 md:h-6" :is="item.blockChainIcon" />
                      </div>
                    </li>
                  </ul>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
</template>