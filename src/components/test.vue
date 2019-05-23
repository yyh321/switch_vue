<template>
    <div id="Content">
        <div class="weui-flex weui_flex_top">
            <div class="weui-flex__item level-center">
                <img class="blub" v-bind:src="modelStatus == 0?onImg:offImg">
            </div>
        </div>
        <div class="weui-flex">
            <div class="weui-flex__item level-center">
                <span>{{modelStatus == 0?'开启':'关闭'}}</span>
            </div>
        </div>
        <div class="weui-flex weui_flex_top">
            <div class="weui-flex__item level-center">
                <div class="btn_area">
                    <div class="slider_area" @click="sliderClick()">
                        <div class="click_btn" id="btn_block"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="weui_flex weui_flex_top">
            <div class="weui-flex__item level-center">
                <span class="test_desc">受控灯具当前状态为</span>
            </div>
        </div>
        <div class="weui-flex" v-if="type == 1">
            <div class="weui-flex__item level-center ">
                <div class="status_weui-cells weui-cells weui-cells_checkbox calibrate_checkbox">
                    <label class="weui-cell weui-check__label" for="clickdw" @click.prevent="chkClick('0')">
                        <div class="weui-cell__hd">
                            <input type="radio" class="weui-check" value="0" v-model="modelStatus" name="openStatus"
                                   id="clickdw"/>
                            <i class="weui-icon-checked"></i>
                        </div>
                        <div class="weui-cell__bd">
                            <!--<p class="">按下方开灯</p>-->
                            <p class="">已开启</p>
                        </div>
                    </label>
                </div>
            </div>
            <div class="weui-flex__item level-center">
                <div class="status_weui-cells weui-cells weui-cells_checkbox calibrate_checkbox">
                    <label class="weui-cell weui-check__label" for="clickup" @click.prevent="chkClick('1')">
                        <div class="weui-cell__hd">
                            <input type="radio" class="weui-check" value="1" v-model="modelStatus" name="openStatus"
                                   id="clickup"/>
                            <i class="weui-icon-checked"></i>
                        </div>
                        <div class="weui-cell__bd">
                            <!--<p class="">按上方开灯</p>-->
                            <p class="">已关闭</p>
                        </div>
                    </label>
                </div>
            </div>
        </div>
        <div class="weui-flex weui_flex_top">
            <div class="weui-flex__item level-center">
                <button type="button" class="finishedBtn" @click="testOk()" v-bind:disabled="!tested">
                    {{tested?'完成':'点击上方按键，验证结果'}}
                </button>
            </div>
        </div>
        <!--<div class="weui-flex weui_flex_top">
            <div class="weui-flex__item" onclick="again()">
                测试不满意，重新校准
            </div>
        </div>-->
    </div>
</template>

<script>
    import global from "../assets/js/global"
    export default {
        data() {
            return {
                tested: false,
                keyStatus: parseInt(sessionStorage.getItem("keyStatus")),
                currentKey: 0,
                onImg: require('../assets/image/index_dev_bulb.png'),
                offImg: require('../assets/image/index_dev_bulb_gray.png'),
                modelStatus: parseInt(sessionStorage.getItem("keyStatus")),
                type: 1,
                height: 840,
                isTest: true,
                global:global
            }
        },
        created() {
            var that = this;
            this.angle1 = this.$route.query.angle1;
            this.angle2 = this.$route.query.angle2;
            this.upValue = this.$route.query.upValue;
            this.downValue = this.$route.query.downValue;
            this.currentKey = parseInt(this.$route.query.key);
            this.type = parseInt(localStorage.getItem("type"));

            that.token = that.$utils.getQueryString("token")
            console.log(that.token)
            that.devId = that.$utils.getQueryString("deviceSn")
            console.log(that.devId)
            that.pid = that.$utils.getQueryString("pid")
            console.log(that.pid)
            that.mid = that.$utils.getQueryString("mid")


            this.type = 1;
            if (that.type == 1) {
                if (that.angle1 > that.angle2) {
                    if (that.keyStatus == 1) {
                        setTimeout(function () {
                            $('#btn_block').animate({marginTop: '34vw'}, 150);
                        }, 100)
                        that.modelStatus = 1;
                    } else if (that.keyStatus == 0) {
                        that.modelStatus = 0;
                    }
                } else {
                    if (that.keyStatus == 1) {
                        that.modelStatus = 0;
                    } else if (that.keyStatus == 0) {
                        that.modelStatus = 1;
                        setTimeout(function () {
                            $('#btn_block').animate({marginTop: '34vw'}, 150);
                        }, 200)
                    }
                }
            }
        },
        methods: {
            chkClick: function (status) {
                // status = parseInt(status);
                this.keyStatus = this.keyStatus == 0 ? 1 : 0;
                this.modelStatus = status;
                this.sendCommand(2, {keyStatus: this.keyStatus, oriKeyType: 0})
            },
            testAngle: function (angel, currentKey) {
                this.sendCommand(4, {"adjustSteerType": 2, "changeKey": currentKey, "oneLevelOn": angel})
            },
            sendCommand: function (cmdId, param) {
                let that = this;
                let load = that.$weui.loading();
                var data1 = {
                    // "mid": that.mid,
                    "devId": that.devId,
                    "cmdId": cmdId,
                    "in": param,
                    "action":"control"
                };
                $.ajax({
                    type:"post",
                    data:JSON.stringify(data1),
                    url:global.baseUrl,
                    dataType:"json",
                    contentType:"application/json",
                    success:function (response) {
                        if (response.data[0].status == 0) {
                            load.hide();
                            if (!that.isTest) {
                                that.$router.push({
                                    path: '/selectkey',
                                    query: {
                                        isSync: true,
                                        currentKey: this.currentKey,
                                        upValue: this.upValue,
                                        downValue: this.downValue
                                    }
                                })
                            }
                        } else {
                            load.hide();
                            alert("设备连接不佳请稍后重试");
                        }
                    },
                    error:function(res){
                        console.log("error",res)
                    }
                })
                // this.$axios.post('https://webapi-openapi.aihomi.com/api/v1/oauth/device/control/' + that.pid, [{
                //     "mid": that.mid,
                //     "devId": that.devId,
                //     "cmdId": cmdId,
                //     "in": param
                // }], {
                //     headers: {
                //         'Authorization': 'Bearer ' + that.token,
                //         'Content-Type': 'application/json;charset=UTF-8'
                //     }
                // }).then(response => {
                //     console.log("返回值:  ", response);
                //     if (response.data[0].status == 0) {
                //         load.hide();
                //         if (!that.isTest) {
                //             that.$router.push({
                //                 path: '/selectkey',
                //                 query: {
                //                     isSync: true,
                //                     currentKey: this.currentKey,
                //                     upValue: this.upValue,
                //                     downValue: this.downValue
                //                 }
                //             })
                //         }
                //     } else {
                //         load.hide();
                //         alert("设备连接不佳请稍后重试");
                //     }
                // }).catch(response => {
                //     console.log("error", response)
                // })
            },
            testOk: function () {
                //设置以校准
                if (this.currentKey == 1) {
                    window.lefted = true;
                } else if (this.currentKey == 2) {
                    window.middled = true;
                } else if (this.currentKey == 4) {
                    window.righted = true;
                }
                let param = {adjustSteerType: 3}
                param.oneLevelOn = this.upValue;
                param.oneLevelOff = this.downValue;
                param.twoLevelOn = 90;
                param.twoLevelOff = 90;
                param.threeLevelOn = 90;
                param.threeLevelOff = 90;
                param.changeKey = this.currentKey;
                // switch (this.currentKey) {
                //     case 1:
                //         param.changeKey = 1;
                //         param.oneLevelOn = this.upValue;
                //         param.oneLevelOff = this.downValue;
                //         param.twoLevelOn = 90;
                //         param.twoLevelOff = 90;
                //         param.threeLevelOn = 90;
                //         param.threeLevelOff = 90;
                //         break;
                //     case 2:
                //         param.changeKey = 2;
                //         param.oneLevelOn = 90;
                //         param.oneLevelOff = 90;
                //         param.twoLevelOn = this.upValue;
                //         param.twoLevelOff = this.downValue;
                //         param.threeLevelOn = 90;
                //         param.threeLevelOff = 90;
                //         break;
                //     case 4:
                //         param.changeKey = 4;
                //         param.oneLevelOn = 90;
                //         param.oneLevelOff = 90;
                //         param.twoLevelOn = 90;
                //         param.twoLevelOff = 90;
                //         param.threeLevelOn = this.upValue;
                //         param.threeLevelOff = this.downValue;
                //         break
                // }
                //保存
                this.isTest = false;
                this.sendCommand(4, param);
            },
            sliderClick: function () {
                var that = this;
                that.tested = true;
                if (that.type == 1) {
                    console.log("   modelStatus:  " + that.modelStatus + "    keyStatus:   " + that.keyStatus);
                    if ((that.modelStatus == 0 && that.keyStatus == 1) || (that.modelStatus == 1 && that.keyStatus == 0)) {//舵机在上端
                        that.testAngle(that.angle1 > that.angle2 ? that.angle2 : that.angle1, that.currentKey);
                    } else {
                        that.testAngle(that.angle1 > that.angle2 ? that.angle1 : that.angle2, that.currentKey);
                        //发第二个角度
                    }

                    console.log("   modelStatus:  " + that.modelStatus);
                    that.modelStatus = that.modelStatus == 1 ? 0 : 1;
                } else {
                    $('#btn_block').animate({marginTop: '34vw'}, 150);
                    $('#btn_block').animate({marginTop: '0vw'}, 150);
                    that.modelStatus = 0;
                    if (that.keyStatus == 1) {
                        that.utils.testAngle(that.angle1 > that.angle2 ? that.angle1 : that.angle2, that.currentKey);
                        var wId = setTimeout(function () {
                            that.testAngle(that.angle1 > that.angle2 ? that.angle2 : that.angle1, that.currentKey);
                        }, 200)
                        // timeoutIds.push(wId);
                    } else {
                        that.utils.testAngle(that.angle1 > that.angle2 ? that.angle2 : that.angle1, that.currentKey);
                        var wId = setTimeout(function () {
                            that.utils.testAngle(that.angle1 > that.angle2 ? that.angle1 : that.angle2, that.currentKey);
                        }, 200)
                        // timeoutIds.push(wId);
                    }
                }
            }
        },
        watch: {
            modelStatus: function (newVal, oldVal) {
                newVal = parseInt(newVal);
                if (this.type == 1) {
                    if (newVal == 0) {
                        $('#btn_block').animate({marginTop: '0vw'}, 150);
                    } else {
                        $('#btn_block').animate({marginTop: '34vw'}, 150);
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>