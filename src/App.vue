<template>
    <div id="app">
        <header>
            <my-header></my-header>
        </header>
        <section class="content" :class="{'open': isNavOpen}">
            <!-- 导航按钮 -->
            <div class="menu-btn" @click.stop="openNav" :class="{'open-nav': isNavOpen}">
                <div class="icon line1"></div>
                <div class="icon line2"></div>
                <div class="icon line3"></div>
            </div>
            <!-- LOGO -->
            <div class="logo"></div>
            <div class="content-wrapper">
                <transition name="fade">
                    <router-view></router-view>
                </transition>
            </div>
            <footer>
                <copy-right></copy-right>
            </footer>
        </section>
    </div>
</template>

<script>
    import header from './components/header/header.vue';
    import copyright from './components/copyright/copyright.vue';

    export default {
        data() {
            return {
                isNavOpen: true
            }
        },
        methods: {
            // 点击导航切换
            openNav() {
                this.isNavOpen = !this.isNavOpen
            }
        },
        components: {
            'my-header': header,
            'copy-right': copyright
        }
    }
</script>

<style type="text/css" scoped>
    .content {
        width: 100%;
        min-height: 100%;
        min-width: 320px;
        background-color: rgb(255,255,255);
        position: absolute;
        transition-duration: 0.5s;
    }
    .content-wrapper {
        min-width: 320px;
        max-width: 800px;
        margin: 60px auto 0;
    }
    .content .menu-btn {
        display: none;
    }
    .content .logo {
        display: none;
    }
    @media screen and (max-width: 860px) {
        .content-wrapper {
            padding: 0 2vw;
        }
        .content.open {
            transform: translateX(250px) translateY(50px);
        }
        .content .menu-btn {
            display: block;
            width: 50px;
            height: 50px;
            position: absolute;
            top: 0;
            left: 0;
            background-color: #62ceb7;
        }
        .content .menu-btn .icon {
            transition-duration: 0.2s;
            position: absolute;
            width: 30px;
            height: 2px;
            background-color: #fff;
            left: 10px;
        }
        .content .menu-btn .icon.line1 {
            top: 17px;
        }
        .content .menu-btn .icon.line2 {
            top: 24px;
        }
        .content .menu-btn .icon.line3 {
            top: 31px;
        }
        .content .menu-btn.open-nav .line1 {
            top: 24px;
            transform: rotate(-45deg);
        }
        .content .menu-btn.open-nav .line2 {
            background-color: transparent;
        }
        .content .menu-btn.open-nav .line3 {
            top: 24px;
            transform: rotate(45deg);
        }
        .content .logo {
            display: block;
            width: 200px;
            height: 40px;
            background:url(common/image/logo.png) no-repeat right center;
            background-size: 80%;
            position: absolute;
            right: 10px;
            top: 5px;
            z-index: 999;
        }
    }
    .fade-enter-active {
        transition: all .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
        transform: rotate( -70deg ) translateX( 300px );
    }
    .copyright {
        width: 100%;
        padding: 40px 0;
        text-align: center;
        bottom: 1px solid #e1e1e1;
        font-size: 14px;
    }
</style>
