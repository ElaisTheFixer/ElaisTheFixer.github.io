<script setup>
    import RecentLocks from '../components/RecentLocks.vue';
    import IconNext from '../components/icons/IconNext.vue';
</script>

<template>
    <!-- Hero Section -->
    <section class="relative pt-16 pb-12 md:pt-32 md:pb-16">
        <div class="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col items-center text-center">
                <h1
                    class="font-syne font-bold text-4xl md:text-6xl tracking-tighter text-white max-w-5xl mb-5 md:mb-8">The worlds first user governed
                    <br class="hidden md:inline"/>
                    liquity locker.</h1>
                <p class="text-base md:text-xl max-w-3xl mb-8 md:mb-14">Velit, odio bibendum eu, viverra sit laoreet
                    posuere. Ut scelerisque posuere massa amet. Ornare lacinia vitae at vestibulum
                    morbi. Volutpat libero curabitur feugiat.</p>
                <RouterLink
                    to="/lock-liquidity"
                    class="bg-primary-800 text-base md:text-lg md:leading-8 rounded-2xl md:rounded-3xl px-12 py-3.5 md:py-4 text-white font-syne font-bold hover:bg-primary-800/90 duration-300 transition-colors active:scale-95 mb-16 md:mb-24">Get Started</RouterLink>
                <div class="flex flex-col md:flex-row items-center gap-y-5 gap-x-6 lg:gap-x-14">
                    <div
                        class="flex flex-col w-72 md:w-80 lg:w-96 items-center justify-center p-8 md:p-11 text-center rounded-3xl md:rounded-[36px] bg-gradient-to-bl from-primary-800/30 gap-y-3 md:gap-y-5">
                        <h3 class="font-syne font-bold text-base md:text-xl text-primary-800">Token Lock Value</h3>
                        <p class="font-bold text-2xl md:text-4xl whitespace-nowrap" id="totalLockedValue">$ 2,605,316.85</p>
                    </div>
                    <div
                        class="flex flex-col w-72 md:w-80 lg:w-96 items-center justify-center p-8 md:p-11 text-center rounded-3xl md:rounded-[36px] bg-gradient-to-bl from-primary-800/30 gap-y-3 md:gap-y-5">
                        <h3 class="font-syne font-bold text-base md:text-xl text-primary-800">Total Locks</h3>
                        <p class="font-bold text-2xl md:text-4xl whitespace-nowrap" id="numberOfLocks">15,670</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Floating Items -->
        <div class="absolute top-80 left-1/2 -translate-x-1/2 -ml-[600px]">
            <img src="@/assets/images/lock.png" width="366" alt="icon"/>
        </div>
        <div class="absolute top-20 right-1/2 translate-x-1/2 -mr-[600px]">
            <img src="@/assets/images/wallet.png" width="283" alt="icon"/>
        </div>
        <div
            class="absolute blur-item top-10 md:top-40 scale-50 md:scale-100 w-[958px] h-[908px] left-1/2 -ml-[190px] md:-ml-[720px] -translate-x-1/2 bg-primary-800/10 rounded-full -z-10 blur-[800px]"></div>
        <div
            class="absolute blur-item -top-48 w-[723px] h-[685px] scale-50 md:scale-100 right-1/2 -mr-[130px] md:-mr-[720px] translate-x-1/2 bg-primary-800/10 rounded-full -z-10 blur-[800px]"></div>
    </section>

    <!-- Partners Section -->
    <section class="h-32 md:h-44 lg:h-72 relative overflow-hidden">
        <img
            src="@/assets/images/partners.svg"
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 max-w-7xl lg:max-w-max"/>
    </section>

    <!-- Feature Section -->
    <section class="relative pt-12 md:pt-20 pb-6 md:pb-12">
        <div class="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col items-center text-center">
                <h2 class="text-white font-syne font-bold text-2xl md:text-5xl mb-3 md:mb-4">Secure and Automate Your Project</h2>
                <p class="text-center max-w-4xl mb-8 md:mb-14 text-sm md:text-base">Integrate once and never worry about
                    scaling again. We ensure composability between ecosystem projects by maintaining
                    a single global state as the network scales.</p>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-y-5 md:gap-y-7 gap-x-7 max-w-7xl lg:px-10 w-full">
                    <div
                        class="flex flex-col items-center rounded-3xl bg-white/5 border border-white/10 px-8 py-5 md:px-11 md:py-6">
                        <img class="mb-3 md:mb-4 w-16 md:w-24" src="@/assets/images/token.png" width="87" height="90" alt="token"/>
                        <h4 class="text-base md:text-xl font-bold font-syne mb-3 md:mb-4">Token Locks</h4>
                        <p class="text-sm md:text-base mb-3 md:mb-4">Cucoin is a decentralized blockchain built to enable
                            scalable, user-friendly apps for the world.</p>
                        <a
                            class="flex items-center font-bold text-base text-white duration-200 hover:text-primary-800"
                            href="javascript:;">Launch
                            <IconNext/></a>
                    </div>
                    <div
                    class="flex flex-col items-center rounded-3xl bg-white/5 border border-white/10 px-8 py-5 md:px-11 md:py-6">
                        <img class="mb-3 md:mb-4 w-16 md:w-24" src="@/assets/images/mint.png" width="100" height="98" alt="mint"/>
                        <h4 class="text-base md:text-xl font-bold font-syne mb-3 md:mb-4">Mint</h4>
                        <p class="text-sm md:text-base mb-3 md:mb-4">Our scalability ensures transactions remain less than
                            $0.01 for both developers and users.</p>
                        <a
                            class="flex items-center font-bold text-base text-white duration-200 hover:text-primary-800"
                            href="javascript:;">Launch
                            <IconNext/></a>
                    </div>
                    <div
                    class="flex flex-col items-center rounded-3xl bg-white/5 border border-white/10 px-8 py-5 md:px-11 md:py-6">
                        <img class="mb-3 md:mb-4 w-16 md:w-24" src="@/assets/images/vesting.png" width="93" height="99" alt="vesting"/>
                        <h4 class="text-base md:text-xl font-bold font-syne mb-3 md:mb-4">Vesting</h4>
                        <p class="text-sm md:text-base mb-3 md:mb-4">The network is spread over thousands of independent
                            nodes,so your transactions are always safe.</p>
                        <a
                            class="flex items-center font-bold text-base text-white duration-200 hover:text-primary-800"
                            href="javascript:;">Launch
                            <IconNext/></a>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="absolute scale-50 md:scale-100 blur-item -top-96 w-[1482px] h-[1582px] -rotate-45 right-1/2 -mr-[240px] md:-mr-[520px] translate-x-1/2 bg-primary-800/10 rounded-full -z-10 blur-[800px]"></div>
    </section>

    <!-- Recent Locks Section -->
    <section class="relative pt-12 md:pt-20 pb-4 md:pb-8">
        <div class="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col items-center text-center">
                <h2 class="text-white font-syne font-bold text-2xl md:text-5xl mb-3 md:mb-4">Recents Locks</h2>
                <p class="text-center max-w-4xl mb-8 md:mb-14 text-sm md:text-base">Integrate once and never worry about scaling again.
                </p>
                <div class="overflow-x-auto w-full mb-10 md:mb-14">
                    <div class="inline-block min-w-full align-middle p-0.5">
                        <div class="ring-1 ring-white/10 rounded-3xl overflow-hidden">
                            <RecentLocks />
                        </div>
                    </div>
                </div>
                <button
                    type="button"
                    class="rounded-xl md:rounded-2xl bg-white/5 px-6 py-3 font-syne text-sm md:text-base font-bold text-primary-800 transition-colors duration-300 hover:bg-primary-800 hover:text-white active:scale-95">
                    View All Tokens
                </button>
            </div>
        </div>
        <div
            class="absolute scale-50 md:scale-100 blur-item top-48 md:top-96 w-[1315px] h-[1288px] rotate-45 left-1/2 -ml-[120px] md:-ml-[520px] -translate-x-1/2 bg-primary-800/10 rounded-full -z-10 blur-[800px]"></div>
    </section>

    <!-- CTA Section -->
    <section class="pt-12 md:pt-20 pb-16 md:pb-28">
        <div class="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
            <div class="bg-primary-800 flex justify-between overflow-hidden rounded-3xl md:rounded-[60px]">
                <div class="flex flex-col flex-1 justify-center px-6 md:px-20 py-8 md:py-16 text-center xl:text-left items-center xl:items-start">
                    <h3 class="font-syne font-bold text-white text-2xl md:text-5xl mb-3 md:mb-5">Create a Custom Token Lockup Now</h3>
                    <p class="text-sm md:text-base mb-6 md:mb-9">Lock your liquidity tokens in a few simple steps with Liquid Lock. Our process is easy, fast and secure.</p>
                    <div class="flex flex-col md:flex-row items-center gap-y-3 md:gap-x-4  w-full md:w-auto">
                        <RouterLink
                            to="/lock-liquidity"
                            class="rounded-2xl border border-white w-10/12 md:w-auto bg-white px-6 py-3 font-syne text-sm md:text-base font-bold text-primary-800 transition-colors duration-300 hover:bg-white/90 hover:border-white/90 active:scale-95">
                            Create your lock
                        </RouterLink>
                        <button
                            type="button"
                            class="rounded-2xl border border-white w-10/12 md:w-auto bg-transparent px-6 py-3 font-syne text-sm md:text-base font-bold text-white transition-colors duration-300 hover:bg-white/10 active:scale-95">
                            Learn more
                        </button>
                    </div>
                </div>
                <div class="flex-shrink-0 hidden xl:block">
                    <img class="h-full object-cover" src="@/assets/images/tokens.svg" alt="tokens"/>
                </div>
            </div>
        </div>
    </section>
</template>