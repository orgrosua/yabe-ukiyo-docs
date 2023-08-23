<template>
    <header class="sticky@md top:0 flex w:full mx:auto z-index:99999 bg:white justify-content:center bb:1|solid|rgba(0,0,0,0.1)">
        <div class="flex w:full max-w:xl align-items:center px:32">
            <a href="/" class="flex">
                <h1 class="py:16 f:30">
                    <svg class="svg-inline--fa fill:current" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="m161 307c0-19.299 15.701-35 35-35h30c8.271 0 15-6.729 15-15s-6.729-15-15-15h-210c-8.284 0-15 6.716-15 15 0 33.081 6.274 65.194 18.228 95h96.772c24.813 0 45-20.187 45-45z"></path>
                            <path d="m421.854 351.743c-7.911 23.733-30.031 39.804-55.042 39.989-19.475.144-44.306.209-61.707.238-7.777.013-14.105 6.352-14.105 14.13v.753c0 8.352 6.729 15.147 15 15.147h12c29.224 0 53 23.776 53 53v9.734c23.839-12.069 45.87-27.98 65.312-47.422 29.841-29.841 51.365-65.779 63.431-105.001l-51.627.362c-11.934.084-22.489 7.748-26.262 19.07z"></path>
                            <path d="m496 242h-227.58c1.665 4.695 2.58 9.742 2.58 15 0 24.813-20.187 45-45 45h-30c-2.757 0-5 2.243-5 5 0 41.355-33.645 75-75 75h-82.385c11.291 20.016 25.379 38.619 42.073 55.312 48.163 48.164 112.199 74.688 180.312 74.688 29.411 0 58.059-4.956 85-14.454v-22.546c0-12.682-10.318-23-23-23h-12c-24.813 0-45-20.253-45-45.147v-.753c0-24.292 19.763-44.088 44.054-44.13 17.362-.029 42.132-.094 61.536-.237 12.178-.09 22.949-7.917 26.802-19.477 7.834-23.501 29.741-39.408 54.513-39.582l59.103-.415c2.635-14.791 3.992-29.92 3.992-45.259 0-8.284-6.716-15-15-15z"></path>
                            <path d="m373.5 87.5c0 13.867-4.208 26.767-11.406 37.5h18.906v24.437c-14.365 4.794-25.699 16.27-30.286 30.727 7.45 9.171 12.793 20.037 15.442 31.836h108.718c-5.513-14.288-17.735-25.267-32.791-29.038-3.948-15.767-15.802-28.425-31.083-33.525v-24.437h35c20.678 0 37.5-16.822 37.5-37.5 0-18.252-13.107-33.5-30.403-36.826-3.385-28.501-27.7-50.674-57.097-50.674-22.568 0-42.128 13.076-51.536 32.043 17.709 12.316 29.036 32.794 29.036 55.457z"></path>
                            <path d="m66 125h35v24.437c-15.281 5.1-27.135 17.758-31.083 33.525-15.056 3.77-27.278 14.75-32.791 29.038h108.718c2.649-11.799 7.992-22.664 15.442-31.836-4.587-14.457-15.92-25.933-30.286-30.727v-24.437h18.906c-7.199-10.733-11.406-23.633-11.406-37.5 0-22.663 11.327-43.141 29.036-55.457-9.408-18.967-28.968-32.043-51.536-32.043-29.397 0-53.712 22.173-57.097 50.674-17.296 3.326-30.403 18.574-30.403 36.826 0 20.678 16.822 37.5 37.5 37.5z"></path>
                            <path d="m206 125h35v24.437c-15.281 5.1-27.135 17.758-31.083 33.525-15.056 3.77-27.278 14.75-32.791 29.038h157.748c-5.513-14.288-17.735-25.267-32.791-29.038-3.948-15.767-15.802-28.425-31.083-33.525v-24.437h35c20.678 0 37.5-16.822 37.5-37.5 0-18.252-13.107-33.5-30.403-36.826-3.385-28.501-27.7-50.674-57.097-50.674s-53.712 22.173-57.097 50.674c-17.296 3.326-30.403 18.574-30.403 36.826 0 20.678 16.822 37.5 37.5 37.5z"></path>
                        </g>
                    </svg>
                    Yabe Ukiyo
                </h1>
            </a>
            <div class="mx:10"><span class="bg:blue-90 r:6 px:10 py:4 font:mono">v{{ wp_v12.version }}</span></div>
            <div class="flex-grow:1"></div>
            <nav class="hidden flex@md primary-nav">
                <div class="flex align-items:center mr:18">
                    <a href="/#features" class="px:15 bg:blue-90:hover py:8:hover r:8">Features</a>
                    <a href="/#pricing" class="px:15 bg:blue-90:hover py:8:hover r:8">Pricing</a>
                    <a href="/en" class="px:15 bg:blue-90:hover py:8:hover r:8">Documentation</a>
                    <a href="https://www.facebook.com/groups/1142662969627943" class="px:15 bg:blue-90:hover py:8:hover r:8">Community</a>
                    <!-- <a class="px:15 bg:blue-90:hover py:8:hover r:8">Blogs</a> -->
                    <a href="https://rosua.org/checkout/order-history" class="px:15 bg:blue-90:hover py:8:hover r:8">Account</a>
                </div>
                <div class="flex align-items:center">
                    <a href="https://www.dropbox.com/scl/fi/1scslfso9tc1th1xl2f5g/yabe-ukiyo-1.0.1.zip?rlkey=yzrtoks9e4tlgtfzqpw7ua88l&dl=1" class="px:12 py:8 r:8 bg:green bg:green-40:hover fg:white">Get Yabe Ukiyo</a>
                </div>
            </nav>
            <div class="">
                <button @click="isMobileMenuOpen = true" class="block hidden@md">
                    <i class="fa-solid fa-bars f:30"></i>
                </button>
            </div>
        </div>
        <!-- Mobile Menu overlay -->
        <Transition name="mobile-nav-slide">
            <div v-if="isMobileMenuOpen" class="z-index:10 fixed bg:blue-80 w:full h:full">
                <button @click="isMobileMenuOpen = false" class="fixed top:20 right:20">
                    <i class="fa-solid fa-xmark f:30"></i>
                </button>
                <nav class="align-items:center flex h:full primary-nav">
                    <ul class="mobile-menu__container flex flex:col gap-y:20 mx:auto text:center">
                        <li><a href="/#features" class="mobile-menu__link">Features</a></li>
                        <li><a href="/#pricing" class="mobile-menu__link">Pricing</a></li>
                        <li><a href="/en">Documentation</a></li>
                        <li><a href="https://www.facebook.com/groups/1142662969627943"></a>Community</li>
                        <li><a href="https://rosua.org/checkout/order-history">Account</a></li>
                    </ul>
                </nav>
            </div>
        </Transition>
    </header>
    <main id="main">
        <!-- Intro -->
        <div class="block-intro w:full max-w:xl mx:auto flex flex:column text:center my:60">
            <!-- Headline -->
            <div class="headline px:20 mx:30 my:30 lh:1.4">
                <h1 class="title mt:55 f:30 f:38@sm f:48@md font:bold fg:#222">The <span class="bg:grass-90 r:8 px:6">Remote Templates Manager</span> Plugin for Bricks</h1>
                <p class="my:16 mx:65@md f:22 fg:gray-40">
                    Manage or sell multiple Bricks template libraries with seamless integration into WordPress e-commerce platforms.
                </p>
            </div>
            <!-- Core Features -->
            <div class="max-w:fit-content px:32 mx:auto mt:15 mb:30">
                <div class="feature__container grid-cols:2 grid-cols:3@sm grid-cols:6@lg grid-auto-cols:auto gap-x:15 gap-y:30 gap:64@sm">

                    <div class="feature__item ">
                        <div class="feature__icon fg:#4e6fc3">
                            <i class="fa-solid fa-key"></i>
                        </div>
                        <div class="feature__title">
                            License System
                        </div>
                    </div>

                    <div class="feature__item ">
                        <div class="feature__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80px" height="80px" viewBox="0 0 80 80" version="1.1"><!-- Generator: Sketch 59.1 (86144) - https://sketch.com -->
                                <title>Logo</title>
                                <desc>Created with Sketch.</desc>
                                <g id="Logos,-Favicon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Bricks---(Font:-Isidora-Sans)" transform="translate(-80.000000, -60.000000)">
                                        <g id="Logo" transform="translate(80.000000, 60.000000)">
                                            <g>
                                                <rect id="Bottom-Right" fill="#FFEE99" x="40" y="40" width="40" height="40"></rect>
                                                <rect id="Bottom-Left" fill="#FFD53E" x="0" y="40" width="40" height="40"></rect>
                                                <rect id="Top-Left" fill="#FFE66D" x="0" y="0" width="40" height="40"></rect>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div class="feature__title">
                            Truly a Bricks add-on
                        </div>
                    </div>

                    <div class="feature__item ">
                        <div class="feature__icon">
                            <svg preserveAspectRatio="xMidYMid" version="1.1" viewBox="0 0 256 153" xmlns="http://www.w3.org/2000/svg" class="">
                                <path d="m23.759 0h208.38c13.187 0 23.863 10.675 23.863 23.863v79.542c0 13.187-10.675 23.863-23.863 23.863h-74.727l10.257 25.118-45.109-25.118h-98.695c-13.187 0-23.863-10.675-23.863-23.863v-79.542c-0.10466-13.083 10.571-23.863 23.758-23.863z" fill="#7f54b3"></path>
                                <path d="m14.578 21.75c1.4569-1.9772 3.6423-3.0179 6.5561-3.226 5.3073-0.41626 8.3252 2.0813 9.0537 7.4927 3.226 21.75 6.7642 40.169 10.511 55.259l22.79-43.395c2.0813-3.9545 4.6829-6.0358 7.8049-6.2439 4.5789-0.3122 7.3886 2.6016 8.5333 8.7415 2.6016 13.841 5.9317 25.6 9.8862 35.59 2.7057-26.433 7.2846-45.476 13.737-57.236 1.561-2.9138 3.8504-4.3707 6.8683-4.5789 2.3935-0.20813 4.5789 0.52033 6.5561 2.0813 1.9772 1.561 3.0179 3.5382 3.226 5.9317 0.10406 1.8732-0.20813 3.4341-1.0407 4.9951-4.0585 7.4927-7.3886 20.085-10.094 37.567-2.6016 16.963-3.5382 30.179-2.9138 39.649 0.20813 2.6016-0.20813 4.8911-1.2488 6.8683-1.2488 2.2894-3.122 3.5382-5.5154 3.7463-2.7057 0.20813-5.5154-1.0406-8.2211-3.8504-9.678-9.8862-17.379-24.663-22.998-44.332-6.7642 13.32-11.759 23.311-14.985 29.971-6.1398 11.759-11.343 17.795-15.714 18.107-2.8098 0.20813-5.2033-2.1854-7.2846-7.1805-5.3073-13.633-11.031-39.961-17.171-78.985-0.41626-2.7057 0.20813-5.0992 1.665-6.9724zm223.64 16.338c-3.7463-6.5561-9.2618-10.511-16.65-12.072-1.9772-0.41626-3.8504-0.62439-5.6195-0.62439-9.9902 0-18.107 5.2033-24.455 15.61-5.4114 8.8455-8.1171 18.628-8.1171 29.346 0 8.013 1.665 14.881 4.9951 20.605 3.7463 6.5561 9.2618 10.511 16.65 12.072 1.9772 0.41626 3.8504 0.62439 5.6195 0.62439 10.094 0 18.211-5.2033 24.455-15.61 5.4114-8.9496 8.1171-18.732 8.1171-29.45 0.10406-8.1171-1.665-14.881-4.9951-20.501zm-13.112 28.826c-1.4569 6.8683-4.0585 11.967-7.9089 15.402-3.0179 2.7057-5.8276 3.8504-8.4293 3.3301-2.4976-0.52033-4.5789-2.7057-6.1398-6.7642-1.2488-3.226-1.8732-6.452-1.8732-9.4699 0-2.6016 0.20813-5.2033 0.72846-7.5967 0.93659-4.2667 2.7057-8.4293 5.5154-12.384 3.4341-5.0992 7.0764-7.1805 10.823-6.452 2.4976 0.52033 4.5789 2.7057 6.1398 6.7642 1.2488 3.226 1.8732 6.452 1.8732 9.4699 0 2.7057-0.20813 5.3073-0.72846 7.7008zm-52.033-28.826c-3.7463-6.5561-9.3659-10.511-16.65-12.072-1.9772-0.41626-3.8504-0.62439-5.6195-0.62439-9.9902 0-18.107 5.2033-24.455 15.61-5.4114 8.8455-8.1171 18.628-8.1171 29.346 0 8.013 1.665 14.881 4.9951 20.605 3.7463 6.5561 9.2618 10.511 16.65 12.072 1.9772 0.41626 3.8504 0.62439 5.6195 0.62439 10.094 0 18.211-5.2033 24.455-15.61 5.4114-8.9496 8.1171-18.732 8.1171-29.45 0-8.1171-1.665-14.881-4.9951-20.501zm-13.216 28.826c-1.4569 6.8683-4.0585 11.967-7.9089 15.402-3.0179 2.7057-5.8276 3.8504-8.4293 3.3301-2.4976-0.52033-4.5789-2.7057-6.1398-6.7642-1.2488-3.226-1.8732-6.452-1.8732-9.4699 0-2.6016 0.20813-5.2033 0.72846-7.5967 0.93658-4.2667 2.7057-8.4293 5.5154-12.384 3.4341-5.0992 7.0764-7.1805 10.823-6.452 2.4976 0.52033 4.5789 2.7057 6.1398 6.7642 1.2488 3.226 1.8732 6.452 1.8732 9.4699 0.10406 2.7057-0.20813 5.3073-0.72846 7.7008z" fill="#fff"></path>
                            </svg>
                        </div>
                        <div class="feature__title">
                            WooCommerce integration
                        </div>
                    </div>

                    <div class="feature__item ">
                        <div class="feature__icon fg:#4e6fc3">
                            <img src="assets/landing/highlighted-feature-easy-digital-downloads.png" alt="Easy Digital Downloads" class="w:full">
                        </div>
                        <div class="feature__title">
                            Easy Digital Downloads integration
                        </div>
                    </div>

                    <div class="feature__item">
                        <div class="feature__icon fg:crimson round">
                            <i class="fa-light fa-face-smile-hearts"></i>
                        </div>
                        <div class="feature__title">
                            Easy to use and intuitive
                        </div>
                    </div>

                    <div class="feature__item ">
                        <div class="feature__icon fg:sky">
                            <i class="fa-light fa-feather"></i>
                        </div>
                        <div class="feature__title">
                            Lightweight and blazingly fast
                        </div>
                    </div>

                </div>
            </div>
            <!-- CTA: Get Yabe Ukiyo Now -->
            <div class="cta my:20 flex flex:column gap:40">
                <a :href="wp_v12.download_link" class="flex gap:10 align-items:center mx:auto py:20 px:48 bg:green bg:green-40:hover fg:white f:20 rounded">
                    Download Yabe Ukiyo Now
                    <i class="fa-solid fa-arrow-right-long hidden block@3xs a:hover_{translateX(35%)} ~easing:ease ~duration:300ms"></i>
                </a>

                <div class="badges__list grid-cols:1 grid-cols:2@sm grid-cols:4@md">
                    <div class="badges__item">
                        <div class="f:24">
                            <i class="fa-solid fa-hand-holding-dollar fg:#29b077"></i>
                        </div>
                        <div class="f:12 text:left">
                            <strong>Free</strong> Forever
                        </div>
                    </div>

                    <div class="badges__item">
                        <div class="f:24">
                            <i class="fa-solid fa-headset"></i>
                        </div>
                        <div class="f:12 text:left">
                            <div class="flex fg:#feb82c mb:2">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <strong>Support</strong> Quality
                        </div>
                    </div>

                    <div class="badges__item">
                        <div class="f:24 fg:crimson">
                            <i class="fa-solid fa-face-smile-hearts"></i>
                        </div>
                        <div class="f:12 text:left">
                            <strong> {{ happyCustomers + wp_v12.active_installs }}+ Happy</strong>
                            Users
                        </div>
                    </div>

                    <div class="badges__item">
                        <div class="f:24 fg:#4e6fc3">
                            <i class="fa-brands fa-wordpress"></i>
                        </div>
                        <div class="f:12 text:left">
                            <strong>{{ totalDownloads }}+ Download</strong> & Counting
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sponsors -->
            <div class="mx:auto my:40 flex flex:row align-items:center gap:10">
                <a href="https://github.com/sponsors/suabahasa?o=esb" target="_blank" class="github-sponsor px:16 py:5 bg:#fafbfc bg:#f3f4f6:hover font:medium lh:20px r:6 b:1|solid|rgba(27,31,35,.15) ~background-color|.2s|cubic-bezier(0.3,0,0.5,1) text:none user-select:none">
                    <i class="fa-regular fa-heart mr:8 fg:#6a737d f:16 ~transform|.15s|cubic-bezier(0.2,0,0.13,2) scale(1) .github-sponsor:hover_{scale(1.1)}"></i>
                    <span class="f:14 fg:#24292e text-align:center ">Sponsor</span>
                </a>

                <div class="rel flex gap-x:10">
                    <canvas ref="pupRiveCanvas" class="abs z-index:3 h:36 top:-28 right:10"></canvas>
                    <a @mouseenter="$event => koFiHovered = true" @mouseleave="$event => koFiHovered = false" :href="wp_v12.donate_link" target="_blank">
                        <img class="h:28" src="https://storage.ko-fi.com/cdn/brandasset/kofi_button_dark.png" alt="Buy Me a Coffee at ko-fi.com" />
                    </a>
                </div>
            </div>

            <!-- Snapshot -->
            <div class="mx:30@sm mx:40@md my:30 px:20">
                <div class="rel bg:gray-90 r:8 p:10">
                    <figure>
                        <img width="1719" height="975" class="w:full h:auto" src="/assets/landing/intro-screenshot.png" alt="">
                    </figure>
                    <!-- Watch the video -->
                    <!-- <a data-fslightbox href="https://youtu.be/uMj0x0ucnOw">
                        <div class="abs top:50% left:50% translate(-50%,-50%) px:32 py:14 bg:black/.8 bg:red:hover fg:white r:8 b:1|solid|white">
                            <i class="fa-solid fa-play"></i>
                        </div>
                    </a> -->
                </div>
            </div>

            <!-- As seen on -->
            <div class="flex flex:column align-items:center justify-content:center mb:60 mx:30@sm mx:40@md py:30 r:8 bg:gray-98">
                <div class="f:24 fg:gray-40 mb:20 capitalize font:medium">As seen on</div>
                <!-- <div class="max-w:md grid-cols:1 grid-cols:2@sm grid-cols:4@md gap:20 gap:30@sm align-items:center">
                    <div v-for="seen_on in AS_SEEN_ON" class="flex justify-content:center">
                        <a :href="seen_on.url" target="_blank" rel="noopener noreferrer">
                            <img :src="seen_on.logo" :alt="seen_on.name" class="max-h:64 max-w:full" :title="seen_on.name">
                        </a>
                    </div>
                </div> -->

                <div class="mt:30 text:center">
                    <a href="https://rosua.org/support-portal" target="_blank" class="text:underline">
                        Are you interested in featuring us? We can offer you a free license.
                    </a>
                </div>
            </div>
        </div>

        <!-- Feature Section -->
        <div id="features" class="block-features max-w:xl flex flex:column align-items:center my:60 mx:20 mx:30@sm mx:40@md mx:auto@xl">
            <div class="px:8 py:4 mb:8 r:8 bg:sky-95 fg:sky-55 text:center uppercase font:bold ls:2">Fully-featured</div>
            <h2 class="mb:22 f:36 font:semibold text:center">Made for Bricks Designers and Developers</h2>
            <div class="flex text:center justify-content:center">
                <p class="max-w:60%@md f:18 lh:1.5">
                    At Yabe Ukiyo, we created an <strong>easy-to-use yet e-commerce ready plugin</strong> for Bricks to empower your template libraries.
                </p>
            </div>


            <!-- Highlighted features -->
            <div class="my:60 w:full">
                <!-- feature container -->
                <div class="feature__container grid grid-cols:1 grid-cols:12@md gap:20 my:30 pl:2%@sm w:full">
                    <div v-for="(feature, index) in HIGHLIGHTED_FEATURES" :class="[feature.class, `bg:${feature.color}-90`]" class="feature__item r:8 overflow:hidden">
                        <div class="h:430 h:600@md">
                            <div class="m:20">
                                <div :class="[`fg:${feature.color}-60`]" class="feature__item-title flex align-items:center column-gap:15">
                                    <i class="fa-solid fa-circle"></i>
                                    <div class="f:18 fg:gray-10 font:semibold">{{ feature.title }}</div>
                                </div>

                                <div class="mt:10 lh:1.5 overflow:hidden">
                                    <div v-html="feature.description"></div>
                                </div>
                            </div>

                            <!-- Feature snapshots -->
                            <div class="feature__snapshot rel pt:10">
                                <img :src="feature.image" :alt="feature.title" width="768" height="768" class="abs w:90% h:auto rtl:8 right:0">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Highlighted features -->

            <!-- E-commerce integrations -->
            <div class="e-commerce-integration flex flex:column-reverse flex:row@md w:full my:60">
                <!-- Feature Detail -->
                <div class="feature__detail my:30 flex flex:column flex-basis:37%@md align-items:flex-start justify-content:center w:full pr:3%@sm {bt:1|solid|gray-85}>:not([hidden])~:not([hidden])">
                    <div class="w:full flex flex:column align-items:flex-start">
                        <div class="px:8 py:4 mb:8 r:8 fg:indigo-55 bg:indigo-95 uppercase f:14 font:extrabold ls:3 ">
                            commerce-ready
                        </div>
                        <h2 class="mb:22 f:36 font:semibold">
                            E-commerce Platform Integrations
                        </h2>
                        <div class="f:18 lh:1.5">
                            Yabe Ukiyo provides <strong>effortless integration</strong> with the most widely used e-commerce platforms for WordPress.
                        </div>

                    </div>
                </div>

                <!-- E-commerce logo -->
                <div class="e-commerce__grids flex flex-grow:1">
                    <div class="w:full">
                        <div class="bg:indigo-95 p:20 r:8 flex flex:column align-items:center h:full overflow:hidden">
                            <div class="p:20 h:full w:full r:8 justify-items:center align-items:center grid-cols:2 grid-cols:3@sm grid-cols:4@xl grid-auto-flow:dense bg:white">
                                <a v-for="platform in E_COMMERCE" :href="platform.url" class="flex w:full align-items:center justify-content:center bg:gray-95:hover">
                                    <div class="p:20">
                                        <div class="flex flex:column align-items:center text:center">
                                            <img :src="platform.icon" :alt="platform.name" class="w:64 h:64">
                                            <div class="pt:10">
                                                {{ platform.name }}
                                                <i v-if="platform.pro" class="fa-solid fa-rectangle-pro fg:blue"></i>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Testimonial -->
        <div id="testimonials" class="block-testimonials max-w:xl flex flex:column my:60 mx:20 mx:30@sm mx:40@md mx:auto@xl">

            <h2 class="mb:22 f:36 font:semibold text:center">Wall of Loves <i class="fa-solid fa-square-heart fg:crimson"></i></h2>
            <div class="flex text:center justify-content:center">
                <p class="max-w:60%@md f:18 lh:1.5">
                    We made not only a plugin that works but also a plugin that will make you smile.
                </p>
            </div>

            <div class="testimonials__wall w:full bg:gray-95 my:60 p:20 p:30@sm p:40@md r:8 ">

                <div class="testimonials__container cols:1 cols:2@sm cols:3@md gap-x:20">
                    <div v-for="testimonial in randomizeTestimonials" class="testimonials__item my:20 break-inside:avoid">
                        <figure class="r:16 bg:white p:20 box-shadow:rgb(255,255,255)|0px|0px|0px|0px,rgba(17,24,39,0.05)|0px|0px|0px|1px,rgba(0,0,0,0.1)|0px|0px|0px|0px,rgba(0,0,0,0.1)|0px|0px|6px|-4px box-shadow:rgb(255,255,255)|0px|0px|0px|0px,rgba(17,24,39,0.05)|0px|0px|0px|1px,rgba(0,0,0,0.1)|0px|10px|15px|-3px,rgba(0,0,0,0.1)|0px|4px|6px|-4px:hover">
                            <blockquote class="fg:#111827">
                                <p class="">{{ testimonial.message }}</p>
                            </blockquote>
                            <figcaption class="mt:24 flex align-items:center gap-x:16">
                                <img class="h:40 w:40 rounded obj:cover" :src="testimonial.submitterAvatar ?? '/assets/landing/testimonial-gravatar.svg'" alt="">
                                <div>
                                    <div class="font:semibold">{{ testimonial.submitterName }}</div>
                                    <div class="fg:gray-60">{{ testimonial.submitterTitle }}</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>

                <div class="mt:30 text:center">
                    <a href="https://wordpress.org/support/plugin/yabe-ukiyo/reviews/?filter=5/#new-post" target="_blank" class="text:underline">
                        submit your testimonial
                    </a>
                </div>
            </div>
        </div>

        <!-- Pricing -->
        <div id="pricing" class="block-pricing max-w:xl flex flex:column my:60 mx:20 mx:30@sm mx:40@md mx:auto@xl">

            <div class="flex flex:column align-items:center mb:16">
                <div class="px:16 py:6 r:8 bg:crimson-95 fg:crimson-55 b:1|solid|crimson-65 text:center font:medium ls:2 lh:1.5">
                    <i class="fa-solid fa-gift fg:crimson pr:6"></i> <span class="ls:1 font:bold">50% off</span> until <span class="ls:1 font:bold">Sept 1</span>, with code: <code class="font:extrabold bg:white">EARTH-FOREST</code>
                </div>
            </div>

            <!-- Title -->
            <h2 class="mb:22 f:36 font:semibold text:center">Pricing</h2>

            <div class="flex text:center justify-content:center">
                <p class="max-w:60%@md f:18 lh:1.5">
                    <!-- We have some generous plans for you to choose from. -->
                    Your time and coffee are precious, so we made some generous plans for you to choose from.
                </p>
            </div>

            <!-- <div class="flex justify-content:center my:30">
                <fieldset class="grid-cols:2 gap-x:4 rounded p:4 text:center f:14 font:semibold lh:1.6 box-shadow:rgb(255,255,255)|0px|0px|0px|0px|inset,rgb(229,231,235)|0px|0px|0px|1px|inset,rgba(0,0,0,0)|0px|0px|0px|0px">
                    <legend class="sr-only">Payment frequency</legend>
                    <label @click="selectedPricingDuration = 'year'" :class="[selectedPricingDuration === 'year' ? 'bg:blue fg:white' : 'fg:gray-40 bg:blue/.1:hover']" class="cursor:pointer rounded px:10 py:4">
                        <input type="radio" name="frequency" value="annually" class="sr-only">
                        <span>Annually</span>
                    </label>
                    <label @click="selectedPricingDuration = 'one-time'" :class="[selectedPricingDuration === 'one-time' ? 'bg:blue fg:white' : 'fg:gray-40  bg:blue/.1:hover']" class="cursor:pointer rounded px:10 py:4">
                        <input type="radio" name="frequency" value="one-time" class="sr-only">
                        <span>One-time</span>
                    </label>
                </fieldset>
            </div> -->

            <div class="my:15"></div>

            <div class="pricing__wall w:full bg:white my:30 ">

                <div :class="availablePricing.length % 3 === 0 ? 'grid-cols:3@md mx:5%@md' : 'grid-cols:2@md mx:15%@md'" class="pricing__container gap:20 grid-cols:1">
                    <div v-for="price in availablePricing" :class="{ 'most-popular': price.isMostPopular, 'emphasized': price.isEmphasized }" class="pricing__item r:8 p:32 p:40@md">
                        <div class="flex align-items:center justify-content:space-between gap-x:16">
                            <h3 class="pricing__item-title fg:gray-10 f:20 font:semibold lh:1.8">{{ price.title }}</h3>
                            <p v-if="price.isMostPopular" class="special-badge rounded fg:blue-40 bg:blue-90 px:10 py:4 f:12 font:semibold lh:1.65">
                                Most popular
                            </p>
                            <p v-if="price.isEmphasized" class="special-badge rounded fg:blue-40 bg:blue-90 px:10 py:4 f:12 font:semibold lh:1.65">
                                Most favored
                            </p>
                        </div>
                        <p class="pricing__item-subtitle mt:16 f:16 lh:1.72 fg:gray-40">{{ price.subtitle }}</p>
                        <p v-if="price.amount" class="pricing__item-amount mt:24 flex align-items:baseline gap-x:4">
                            <span class="f:36 font:bold ls:0.4 fg:gray-10">${{ price.amount }}</span>
                            <span v-if="price.duration !== 'one-time'" class="f:16 font:semibold lh:1.72 fg:gray-40">/year</span>
                        </p>
                        <p v-else class="pricing__item-amount mt:24 flex align-items:baseline gap-x:4">
                            <span class="f:36 font:bold ls:0.4 fg:gray-10">Free</span>
                        </p>
                        <a :href="price.purchaseButton.url" class="pricing__item-buy mt:24 block r:8 py:8 px:12 text:center f:16 font:semibold lh:1.72 focus-visible:outline outline-offset:2:focus-visible outline-color:blue:focus-visible">
                            {{ price.purchaseButton.text ?? 'Buy' }}
                        </a>
                        <ul role="list" class="pricing__item-feature-container mt:32 f:16 lh:1.72 fg:gray-50 mt:40@lg">
                            <li v-for="feature in price.features" class="flex gap-x:12">
                                <template v-if="typeof feature === 'object'">
                                    <i :class="feature.icon" class="h:24 w:20 flex:none fg:blue"></i>
                                    {{ feature.text }}
                                </template>
                                <template v-else>
                                    <i class="fa-solid fa-check h:24 w:20 flex:none fg:blue"></i>
                                    {{ feature }}
                                </template>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="mx:auto my:30 flex flex:column gap:40">
                    <div class="badges__list grid-cols:1 grid-cols:2@sm grid-cols:4@md">
                        <div class="badges__item">
                            <div class="f:24">
                                <i class="fa-solid fa-badge-dollar fg:#29b077"></i>
                            </div>
                            <div class="f:12 text:left">
                                <strong>14-day Money</strong>
                                <br> Back Guarantee
                            </div>
                        </div>

                        <div class="badges__item">
                            <div class="f:24">
                                <i class="fa-solid fa-headset"></i>
                            </div>
                            <div class="f:12 text:left">
                                <div class="flex fg:#feb82c mb:2">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <strong>Support</strong> Quality
                            </div>
                        </div>

                        <div class="badges__item">
                            <div class="f:24 fg:crimson">
                                <i class="fa-solid fa-face-smile-hearts"></i>
                            </div>
                            <div class="f:12 text:left">
                                <strong> {{ happyCustomers }}+ Happy</strong>
                                Users
                            </div>
                        </div>

                        <div class="badges__item">
                            <div class="f:24 fg:#4e6fc3">
                                <i class="fa-brands fa-wordpress"></i>
                            </div>
                            <div class="f:12 text:left">
                                <strong> {{ activeSites }}+ Active</strong>
                                Sites
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>


    </main>
    <footer class="flex flex:colum my:60">
        <div class="mx:auto flex align-items:center f:16 fg:gray" title="Made with hundred cups of coffee in Indonesia">
            Made with hundred <i class="fa-solid fa-mug px:8"></i> of <i class="fa-solid fa-coffee-bean px:8"></i> in <span class="font:bold px:4">Indonesia</span>
        </div>
    </footer>
</template>

<script setup>
import { ref, watch, computed, onBeforeMount, onMounted } from 'vue';
import { Rive } from '@rive-app/canvas';

/** @type {Rive} */
let pupRive = null;
const koFiHovered = ref(false);

const pupRiveCanvas = ref(null);

const isMobileMenuOpen = ref(false);

const happyCustomers = ref(0);
const activeSites = ref(0);
const totalDownloads = ref(0);

const wp_v10 = ref({
    downloaded: 1,
});
const wp_v12 = ref({
    version: '1.0.1',
    active_installs: 1,
    donate_link: 'https://ko-fi.com/Q5Q75XSF7',
    download_link: 'https://www.dropbox.com/scl/fi/1scslfso9tc1th1xl2f5g/yabe-ukiyo-1.0.1.zip?rlkey=yzrtoks9e4tlgtfzqpw7ua88l&dl=1',
});

const HIGHLIGHTED_FEATURES = [
    {
        title: 'License & Remote System',
        description: `Manage access to your template libraries with a license system. You can create unlimited licenses and assign them to your customers.`,
        image: '/assets/landing/feature-license-remote-system.png',
        color: 'blue',
        class: 'grid-col-span:6',
    },
    {
        title: 'E-commerce integration',
        description: `Sell your template libraries with ease. Yabe Ukiyo is integrated with the most popular e-commerce plugins.`,
        image: '/assets/landing/feature-e-commerce-ready.png',
        color: 'gold',
        class: 'grid-col-span:6',
    },
    {
        title: 'Truely a Bricks add-on',
        description: `Yabe Ukiyo built only a thin layer on top of Bricks Builder. Fully compatible with Bricks's built-in template library system and make it a future-proof add-on.`,
        image: '/assets/landing/feature-thin-layer.png',
        color: 'indigo',
        class: 'grid-col-span:6',
    },
    {
        title: 'Lightweight and blazingly fast',
        description: `The license system is built on Bricks' built-in system, WordPress REST API, and a modern JavaScript framework for an instant, responsive user experience. It has a small footprint and won't slow down your site.`,
        image: '/assets/landing/feature-lightweight-blazingly-fast.png',
        color: 'grass',
        class: 'grid-col-span:6',
    },
];

const TESTIMONIALS = [
    {
        createdAt: '2023-01-01',
        submitterName: 'Joshua Gugun Siagian',
        submitterAvatar: '/assets/landing/testimonial-joshua-gugun-siagian.jpg',
        submitterTitle: 'Rosua.org',
        message: ``
    },
];

const AS_SEEN_ON = [
    {
        name: 'Rosua',
        url: 'https://rosua.org',
        logo: '/assets/landing/as-seen-on-rosua.png',
    },
];

const E_COMMERCE = [
    {
        name: 'WooCommerce',
        url: '/en/e-commerce/woocommerce/',
        icon: 'assets/landing/e-commerce-woocommerce.svg',
    },
    {
        name: 'Easy Digital Downloads',
        url: '/en/e-commerce/easy-digital-downloads/',
        icon: 'assets/landing/e-commerce-easy-digital-downloads.svg',
        pro: true,
    },
    {
        name: 'SureCart (Soon)',
        url: 'https://surecart.com/?sc=298',
        icon: 'assets/landing/e-commerce-surecart.svg',
        pro: true,
    },
];

const PRICING = [
    {
        duration: 'year',
        amount: 0,
        isMostPopular: false,
        isEmphasized: false,
        title: 'Starter',
        subtitle: 'Get started with the free version and enjoy the full features',
        features: [
            'All features',
            {
                icon: 'fa-regular fa-asterisk',
                text: 'Limited e-commerce integrations'
            },
            {
                icon: 'fa-regular fa-planet-ringed',
                text: 'Unlimited personal sites'
            },
            {
                icon: 'fa-regular fa-planet-ringed',
                text: 'Unlimited client sites'
            },
            {
                icon: 'fa-solid fa-rotate',
                text: 'Free updates'
            },
            {
                icon: 'fa-solid fa-messages',
                text: 'Community support'
            },
        ],
        purchaseButton: {
            text: 'Download',
            url: 'https://www.dropbox.com/scl/fi/1scslfso9tc1th1xl2f5g/yabe-ukiyo-1.0.1.zip?rlkey=yzrtoks9e4tlgtfzqpw7ua88l&dl=1',
        },
    },
    {
        duration: 'year',
        amount: 19,
        isMostPopular: false,
        isEmphasized: false,
        title: 'Personal',
        subtitle: 'Best for blogger, individual & solopreneur',
        features: [
            'All features',
            'All e-commerce integrations',
            {
                icon: 'fa-regular fa-planet-ringed',
                text: 'Unlimited personal sites'
            },
            {
                icon: 'fa-solid fa-rotate',
                text: 'Free updates'
            },
            {
                icon: 'fa-solid fa-headset',
                text: 'Standard support'
            },
        ],
        purchaseButton: { url: 'https://rosua.org/checkout/?edd_action=add_to_cart&download_id=1404&edd_options[price_id]=1' },
    },
    {
        duration: 'year',
        amount: 39,
        isMostPopular: true,
        isEmphasized: false,
        title: 'Agency',
        subtitle: 'Perfect For Agency Owners with high volume',
        features: [
            'All features',
            'All e-commerce integrations',
            {
                icon: 'fa-regular fa-planet-ringed',
                text: 'Unlimited personal sites'
            },
            {
                icon: 'fa-regular fa-planet-ringed',
                text: 'Unlimited client sites'
            },
            {
                icon: 'fa-solid fa-rotate',
                text: 'Free updates'
            },
            {
                icon: 'fa-solid fa-headset',
                text: 'Standard support'
            },
        ],
        purchaseButton: { url: 'https://rosua.org/checkout/?edd_action=add_to_cart&download_id=1404&edd_options[price_id]=2' },
    },
    // {
    //     duration: 'one-time',
    //     amount: 79,
    //     isMostPopular: false,
    //     isEmphasized: false,
    //     title: 'Personal',
    //     subtitle: 'Best for blogger, individual & solopreneur',
    //     features: [
    //         'All features',
    //         'All integrations',
    //         {
    //             icon: 'fa-regular fa-planet-ringed',
    //             text: 'Unlimited personal sites'
    //         },
    //         {
    //             icon: 'fa-solid fa-rotate',
    //             text: 'Free updates'
    //         },
    //         {
    //             icon: 'fa-solid fa-headset',
    //             text: 'Standard support (first year)'
    //         },
    //     ],
    //     purchaseButton: { url: 'https://rosua.org/checkout/?edd_action=add_to_cart&download_id=1404&edd_options[price_id]=3' },
    // },
    // {
    //     duration: 'one-time',
    //     amount: 159,
    //     isMostPopular: false,
    //     isEmphasized: true,
    //     title: 'Agency',
    //     subtitle: 'Perfect For Agency Owners with high volume',
    //     features: [
    //         'All features',
    //         'All integrations',
    //         {
    //             icon: 'fa-regular fa-planet-ringed',
    //             text: 'Unlimited personal sites'
    //         },
    //         {
    //             icon: 'fa-regular fa-planet-ringed',
    //             text: 'Unlimited client sites'
    //         },
    //         {
    //             icon: 'fa-solid fa-rotate',
    //             text: 'Free updates'
    //         },
    //         {
    //             icon: 'fa-solid fa-headset',
    //             text: 'Standard support (first year)'
    //         },
    //     ],
    //     purchaseButton: { url: 'https://rosua.org/checkout/?edd_action=add_to_cart&download_id=1404&edd_options[price_id]=4' },
    // },
];

const selectedFeatureIndex = ref(0);
const getSelectedFeature = computed(() => {
    return HIGHLIGHTED_FEATURES[selectedFeatureIndex.value];
});

const randomizeTestimonials = computed(() => {
    // return TESTIMONIALS;
    return [];
});

// available pricing duration: year, one-time
const selectedPricingDuration = ref('year');

const availablePricing = computed(() => {
    return PRICING.filter(item => item.duration === selectedPricingDuration.value);
});

watch(koFiHovered, (value) => {
    pupRive.stateMachineInputs('YeyMachine')[0].value = value;
});

watch(isMobileMenuOpen, (newState, oldState) => {
    if (newState) {
        setTimeout(() => {
            // auto close the mobile nav when menu item is clicked
            const mobileNavLinks = document.querySelectorAll('.mobile-menu__link');
            mobileNavLinks.forEach(link => {
                link.addEventListener('click', () => {
                    isMobileMenuOpen.value = false;
                });
            });
        }, 100);
    }
});

onBeforeMount(() => {
    fetch('https://rosua.org/wp-json/rosua-edd/v1/stats/total_users')
        .then(res => res.json())
        .then(res => {
            happyCustomers.value += res[0].count_users;
        })
        .catch(err => {
            console.log(err);
        });

    fetch('https://rosua.org/wp-json/rosua-edd/v1/stats/total_sites')
        .then(res => res.json())
        .then(res => {
            // search array of object with download_id = 1404 (Yabe Ukiyo)
            const download = res.find(item => item.download_id === 1404);
            activeSites.value += download.count_sites;
            totalDownloads.value += download.count_sites;
        })
        .catch(err => {
            console.log(err);
        });

    // fetch('https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&slug=yabe-ukiyo')
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error("Not 2xx response", { cause: response });
    //         }

    //         return response.json();
    //     })
    //     .then(data => {
    //         wp_v12.value = data;
    //         activeSites.value += wp_v12.value.active_installs;
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // fetch('https://api.wordpress.org/plugins/info/1.0/yabe-ukiyo.json')
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error("Not 2xx response", { cause: response });
    //         }

    //         return response.json();
    //     })
    //     .then(data => {
    //         wp_v10.value = data;
    //         totalDownloads.value += wp_v10.value.downloaded;
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
});

onMounted(() => {

    setTimeout(() => {
        // if hash is not empty, scroll to the element
        const hash = window.location.hash;
        if (hash) {
            const el = document.querySelector(hash);

            if (el) {
                el.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });
            }
        }

        window.themeService.current = 'light';
    }, 100);


    pupRive = new Rive({
        src: 'https://cdn.jsdelivr.net/gh/orgrosua/yabe-ukiyo-docs/public/assets/landing/pup.riv',
        canvas: pupRiveCanvas.value,
        autoplay: true,
        stateMachines: 'YeyMachine',
        onLoad: () => {
            pupRive.resizeDrawingSurfaceToCanvas();
        },
    });

    // Refresh the lightbox when the DOM is ready
    window.refreshFsLightbox();
});
</script>

<style lang="scss">
/* Typography */
* {
    font-family: "Outfit", sans-serif;
}

html {
    scroll-behavior: smooth;
}

.primary-nav {
    font-weight: 600;
}

.block-intro {
    .feature__container {}

    .feature__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }

    .feature__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        width: 64px;
        height: 64px;
        background-color: #f9f8fa;
        border-radius: 50%;

        svg:not(.svg-inline--fa) {
            width: 40px;
            height: 40px;
        }
    }

    .feature__title {
        font-size: 16px;
        color: #555456;
        max-width: 120px;
    }
}

.badges__list {
    margin-left: auto;
    margin-right: auto;
    // display: flex;
    gap: 10px;
}

.badges__item {
    display: flex;
    gap: 8px;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 6px;
    padding-bottom: 6px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 160px;
    border-radius: 1e9em;
}

code {
    padding: 2px 4px;
    font-size: .9rem;
    line-height: 1;
    background-color: #afb8c133;
    border-radius: 6px;
    font-weight: 300;
}

/*
  Mobile nav overlay slide transition
*/
.mobile-nav-slide-enter-active {
    transition: all 0.3s ease-out;
}

.mobile-nav-slide-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.mobile-nav-slide-enter-from,
.mobile-nav-slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.testimonials__item blockquote p {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    line-height: 1.4;
}

$color-blue-50: #175fe9;
$color-blue-55: #2671ea;

$color-blue-70: #81acf3;
$color-blue-80: #c6dbfe;

$tw-color-gray-300: #d1d5db;
$tw-color-gray-900: #111827;

@function hexAlpha($hex, $alpha) {
    $opacity: $alpha * 100%;
    @return rgba(red($hex), green($hex), blue($hex), $opacity);
}

.pricing__item {
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, rgb(229, 231, 235) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;

    // if not most popular and not emphasized
    &:not(.most-popular):not(.emphasized) {
        .pricing__item-buy {
            color: $color-blue-50;
            box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px inset, $color-blue-80 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px;

            &:hover {
                box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px inset, $color-blue-70 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
            }
        }
    }

    .pricing__item-feature-container {
        &>:not([hidden])~:not([hidden]) {
            margin-top: 0.75rem;
        }
    }

    &.most-popular {
        box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, $color-blue-50 0px 0px 0px 2px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;

        .pricing__item-title {
            color: $color-blue-50;
        }

        .pricing__item-buy {
            color: white;
            background-color: $color-blue-50;

            &:hover {
                background-color: $color-blue-55;
            }
        }

    }

    &.emphasized {
        background-color: $tw-color-gray-900;

        .pricing__item-title,
        .pricing__item-amount>span {
            color: white;
        }

        .pricing__item-subtitle,
        .pricing__item-feature-container>li {
            color: $tw-color-gray-300;

            svg {
                color: white;
            }
        }

        .pricing__item-buy {
            color: white;
            background-color: hexAlpha(#fff, 0.1);

            &:hover {
                background-color: hexAlpha(#fff, 0.2);
            }
        }

        .special-badge {
            color: white;
            background-color: hexAlpha(#fff, 0.1);
        }
    }
}
</style>