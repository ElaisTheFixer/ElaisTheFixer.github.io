<script setup>
    import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
    import { Popover, PopoverButton, PopoverPanel, PopoverOverlay } from '@headlessui/vue'
    import { ethers } from 'ethers';
    import IconLogo from "./icons/IconLogo.vue"    

    function truncate(text, startChars, endChars, maxLength) {
        if (text.length > maxLength) {
            var start = text.substring(0, startChars);
            var end = text.substring(text.length - endChars, text.length);
            while ((start.length + end.length) < maxLength) {
                start = start + '.';
            }
            return start + end;
        }
        return text;
    }

    function parseBigNumberToFloat(num) {
        const pb = ethers.utils.formatEther(num);
        const pf = parseFloat(pb);
        return pf.toFixed(2);
    }

    async function getAddress() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const addr = await signer.getAddress();
        const ethButton = document.getElementById("connect-wallet");
        ethButton.textContent = truncate(addr, 6, 6, 15);
    }
    
</script>

<template>
    <header>
        <div class="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
            <nav class="relative z-50 flex justify-between border-b-2 border-white/5 py-4 md:py-7">
                <RouterLink class="flex items-center" to="/">
                    <IconLogo class="w-40 md:w-auto"/>
                </RouterLink>
                <ul class="font-base items-center gap-x-7 xl:gap-x-10 hidden lg:flex">
                    <li>
                        <a class="duration-200 hover:text-primary-800" href="javascript:;"><span :class="{'text-primary-800' : isActive}">About us</span></a >
                    </li>
                    <li>
                        <a class="duration-200 hover:text-primary-800" href="javascript:;"><span :class="{'text-primary-800' : isActive}">How to start</span></a >
                    </li>
                    <li>
                        <RouterLink v-slot="{ isActive }"  class="duration-200 hover:text-primary-800" to="/lock-liquidity"><span :class="{'text-primary-800' : isActive}"> Lock Liquidity</span></RouterLink>
                    </li>
                    <li>
                        <a class="duration-200 hover:text-primary-800" href="javascript:;"><span :class="{'text-primary-800' : isActive}">Recent locks</span></a >
                    </li>
                </ul>
                <div class="flex items-center gap-x-5">
                    <Menu as="div" class="md:relative">
                        <MenuButton
                            @click="showDropdown = !showDropdown"
                            type="button"
                            class="rounded-2xl md:bg-white/5 px-0 md:px-6 py-3 font-syne text-sm md:text-base font-bold text-primary-800 transition-colors duration-300 md:hover:bg-primary-800 md:hover:text-white active:scale-95">
                            Connect Wallet
                        </MenuButton>
                        <transition
                        enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0"
                        enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-in"
                        leave-from-class="transform scale-100 opacity-100"
                        leave-to-class="transform scale-95 opacity-0"
                        >
                            <MenuItems class="bg-white/5 w-full md:w-60 absolute right-0 top-full md:top-14 pt-6 pb-4 backdrop-blur-3xl rounded-3xl">
                                <h4 class="font-bold font-syne px-6 mb-3">Select a Wallet</h4>
                                <ul class="flex flex-col">
                                    <li>
                                        <a class="flex items-center gap-x-3 px-6 py-2.5 duration-200 hover:bg-white/5" href="javascript:;">
                                            <img src="@/assets/images/metamask.svg" alt="icon"/> Metamask
                                        </a>
                                    </li>
                                    <!-- <li>
                                        <a class="flex items-center gap-x-3 px-6 py-2.5 duration-200 hover:bg-white/5" href="javascript:;">
                                            <img src="@/assets/images/coinbase.png"  width="26" alt="icon"/> Coinbase Wallet
                                        </a>
                                    </li>
                                    <li>
                                        <a class="flex items-center gap-x-3 px-6 py-2.5 duration-200 hover:bg-white/5" href="javascript:;">
                                            <img src="@/assets/images/wallet.svg" alt="icon"/> Wallet
                                        </a>
                                    </li>
                                    <li>
                                        <a class="flex items-center gap-x-3 px-6 py-2.5 duration-200 hover:bg-white/5" href="javascript:;">
                                            <img src="@/assets/images/fortmatic.png" width="24" alt="icon"/> Fortmatic
                                        </a>
                                    </li>
                                    <li>
                                        <a class="flex items-center gap-x-3 px-6 py-2.5 duration-200 hover:bg-white/5" href="javascript:;">
                                            <img src="@/assets/images/portic.png" width="26" alt="icon"/> Portic
                                        </a>
                                    </li> -->
                                </ul>
                            </MenuItems>
                        </transition>
                    </Menu>
                    <Popover as="div" v-slot="{ open }" class="block lg:hidden">
                        <PopoverButton class="relative z-50 focus:outline-none">
                            <svg aria-hidden="true" class="h-3.5 w-4 stroke-white" fill="none" stroke-width="1.5" stroke-linecap="round">
                                <path :class="{'scale-90 opacity-0' : open}" d="M0 1H14M0 7H14M0 13H14" class="origin-center transition"></path>
                                <path :class="{'scale-90 opacity-0' : !open}" d="M2 2L12 12M12 2L2 12" class="origin-center transition "></path>
                            </svg>
                        </PopoverButton>
                        <PopoverOverlay class="fixed inset-0 bg-black opacity-30" />
                        <transition
                            enter-active-class="transition duration-200 ease-out"
                            enter-from-class="translate-y-1 opacity-0"
                            enter-to-class="translate-y-0 opacity-100"
                            leave-active-class="transition duration-150 ease-in"
                            leave-from-class="translate-y-0 opacity-100"
                            leave-to-class="translate-y-1 opacity-0"
                        >
                        <PopoverPanel class="absolute inset-x-0 top-full bg-white/5 py-6 backdrop-blur-3xl rounded-3xl">
                            <ul class="font-base flex flex-col items-center gap-y-5">
                                <li>
                                    <a class="duration-200 hover:text-primary-800" href="javascript:;">About us</a >
                                </li>
                                <li>
                                    <a class="duration-200 hover:text-primary-800" href="javascript:;">How to start</a >
                                </li>
                                <li>
                                    <RouterLink class="duration-200 hover:text-primary-800" to="/lock-liquidity">Lock Liquidity</RouterLink>
                                </li>
                                <li>
                                    <a class="duration-200 hover:text-primary-800" href="javascript:;">Recent locks</a >
                                </li>
                            </ul>
                        </PopoverPanel>
                        </transition>
                    </Popover>
                    
                </div>
            </nav>
        </div>
    </header>
</template>