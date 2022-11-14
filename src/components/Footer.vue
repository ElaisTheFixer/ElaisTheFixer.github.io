<script setup>
    import IconFacebook from "./icons/IconFacebook.vue";
    import IconInstagram from "./icons/IconInstagram.vue";
    import IconTelegram from "./icons/IconTelegram.vue";
    import IconTwitter from "./icons/IconTwitter.vue";
</script>

<template>
    <footer class="bg-white/5 py-10 md:py-16">
        <div class="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col items-center">
              <ul class="flex items-center gap-x-5 md:gap-x-8 mb-6 md:mb-9">
                <li>
                  <a class="duration-200 hover:text-primary-800" target="_blank" href="javascript:;">
                    <IconInstagram class="w-6 md:w-auto"/>
                  </a>
                </li>
                <li>
                  <a class="duration-200 hover:text-primary-800" target="_blank" href="javascript:;">
                    <IconTwitter class="w-6 md:w-auto"/>
                  </a>
                </li>
                <li>
                  <a class="duration-200 hover:text-primary-800" target="_blank" href="javascript:;">
                    <IconTelegram class="w-6 md:w-auto"/>
                  </a>
                </li>
                <li>
                  <a class="duration-200 hover:text-primary-800" target="_blank" href="javascript:;">
                    <IconFacebook class="w-6 md:w-auto"/>
                  </a>
                </li>
              </ul>
              <p class="text-center text-xs md:text-sm">Liquid Lock© Copyright 2022. All rights reserved</p>
            </div>
        </div>
    </footer>
</template>