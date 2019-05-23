<template>
    <div id="Content">
        <div class="weui-flex weui_flex_top">
            <div class="weui-flex__item level-center">
                <span class="weui-text calibrate_desc">请正确安装开关精灵</span>
            </div>
        </div>
        <div class="weui-flex">
            <div class="weui-flex__item level-center">
                <span class="weui-text calibrate_txt">先将原开关清洁晾干，再将软胶条对齐原开关的上下两端边缘粘贴并压紧后，吸附上产品。请调整位置，同原开关上下左右居中对齐。</span>
            </div>
        </div>
        <div class="weui-flex">
            <div class="weui-flex__item level-center">
                <img class="img_middle" src="../assets/image/switch_calibration_icon_blue.png" v-if="global.themeType != 'nochange'">
                <img class="img_middle" src="../assets/image/switch_calibration_install_icon_n.png" v-if="global.themeType == 'nochange'">
            </div>
        </div>
        <div class="weui-flex" style="margin-top: 5px">
            <div class="weui-flex__item level-center">
                <div class="status_weui-cells weui-cells weui-cells_checkbox calibrate_checkbox">
                    <label class="weui-cell weui-check__label" for="vali">
                        <div class="weui-cell__hd" style="display: flex">
                            <input type="checkbox" class="weui-check" v-model="isChk" value="1" name="vali" id="vali"/>
                            <i class="weui-icon-checked weui-icon-checked1"  :style="{'color': (global.themeType == 'nochange' ? '#F4AC28':'#2BB6FC')}"></i>
                        </div>
                        <div class="weui-cell__bd">
                            <p class="calibrate_chktxt">已正确安装</p>
                        </div>
                    </label>
                </div>
            </div>
        </div>
        <div class="weui-flex" style="margin-top: 5px">
            <div class="weui-flex__item level-center">
                <!--[global.themeType == 'nochange' ? 'weui-btn_custom1' : 'weui-btn_custom2' ]-->
                <button :class="[global.themeType == 'nochange' ? 'weui-btn_custom1' : 'weui-btn_custom2' ]" type="button" v-bind:disabled="!isChk" @click="nextPage()">下一步</button>
            </div>
        </div>
    </div>
</template>

<script>
    import global from "../assets/js/global"
    export default {
        data() {
            return {
                isChk: false,
                height:840,
                global:global
            }
        },
        created(){
            var that = this;
            that.global.headTitle = "按键校准向导";
        },
        methods: {
            nextPage: function () {
                this.$router.push({
                    path:'/selectkey'
                })
            }
        }
    }
</script>

<style scoped>

</style>