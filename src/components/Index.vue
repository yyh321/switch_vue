<script src="../../node_modules/weui.js/dist/weui.min.js"></script>
<template>
    <div class="back" style="position: relative; padding-bottom: 100px;width:100%; height: auto!important;" id="goBack">


        <div style="position: absolute; width: 100%; top: 0px; left:0; height:56vw;" :class="[global.themeType == 'nochange' ? 'isYellow' : 'isBlue' ]">
        </div>


        <div class="weui-flex">
            <div class="weui-flex__item level-center">
                <div class="weui-panel panel">
                    <div class="weui-panel__bd">
                        <!--<div class="weui-flex">-->
                        <!--<div class="weui-flex__item level-center panel_header">-->
                        <!--{{onLine?'在线':'离线'}}-->
                        <!--</div>-->
                        <!--</div>-->

                        <div class="weui-flex" style="margin-top: 10px;">
                            <div class="weui-flex__item level-center">
                                <div class="lamp__pic lamp__pic__switch vertical-center" v-if="keyCount==1&&onLine&&global.themeType == 'nochange'">
                                    <img src="../assets/image/seitch_zigbee_one_icon@3x.png" alt="outline">
                                </div>
                                <div class="lamp__pic lamp__pic__switch vertical-center" v-if="keyCount==1&&onLine&&global.themeType != 'nochange'">
                                    <img src="../assets/image/seitch_zigbee_one_icon2.png" alt="outline">
                                </div>
                                <div class="lamp__pic lamp__pic__switch vertical-center" v-if="keyCount==1&&!onLine">
                                    <img src="../assets/image/switch_icon2.png" alt="outline">
                                </div>
                                <div class="lamp__pic lamp__pic__switch vertical-center" v-if="keyCount==2&&onLine&&global.themeType == 'nochange'">
                                    <img src="../assets/image/seitch_zigbee_two_icon@3x.png" alt="outline">
                                </div>
                                <div class="lamp__pic lamp__pic__switch vertical-center" v-if="keyCount==2&&onLine&&global.themeType != 'nochange'">
                                    <img src="../assets/image/seitch_zigbee_two_icon2.png" alt="outline">
                                </div>
                                <div class="lamp__pic lamp__pic__switch vertical-center" v-if="keyCount==2&&!onLine&&global.themeType == 'nochange'">
                                    <img src="../assets/image/switch_zigbee_two_ununited_icon@3x.png" alt="outline">
                                </div>
                                <div class="lamp__pic lamp__pic__switch vertical-center" v-if="keyCount==3&&onLine&&global.themeType == 'nochange'">
                                    <img src="../assets/image/seitch_zigbee_three_icon@3x.png" alt="outline">
                                </div>
                                <div class="lamp__pic lamp__pic__switch vertical-center" v-if="keyCount==3&&onLine&&global.themeType != 'nochange'">
                                    <img src="../assets/image/seitch_zigbee_three_icon2.png" alt="outline">
                                </div>
                                <div class="lamp__pic lamp__pic__switch vertical-center" v-if="keyCount==3&&!onLine&&global.themeType == 'nochange'">
                                    <img src="../assets/image/switch_zigbee_three_ununited_icon@3x.png" alt="outline">
                                </div>
                            </div>
                        </div>

                        <div class="weui-flex">
                            <div class="weui-flex__item level-center">
                                <p class="mh-product-title">开关精灵(ZigBee)</p>
                            </div>
                        </div>

                        <!--onLine-->
                        <div class="weui-flex" v-if="onLine">
                            <div class="weui-flex__item level-center">
                                <p class="mh-product-state"><span class="dotPic"><img src="../assets/image/greenDot.png" alt=""></span>已连接</p>
                            </div>
                        </div>
                        <!--v-if="onLine ==  false"-->
                        <div class="weui-flex" v-if="onLine ==  false">
                            <div class="weui-flex__item level-center">
                                <p class="mh-product-state"><span class="dotPic"><img src="../assets/image/redDot.png" alt=""></span>未响应<span class="warning-pic"><img src="../assets/image/warnning.png"alt=""></span></p>
                            </div>
                        </div>

                        <div class="weui-flex" style=" height: 1px!important; margin-top: 10px">
                            <div class="weui-flex__item level-center">
                                <div style="height: 1px; background: #EBEBEB; width: 94%!important;"></div>
                            </div>
                        </div>


                        <div class="weui-flex">
                            <div class="weui-flex__item">
                                <div>
                                    <div class="weui-cell weui-cell_switch" v-if="leftKeyShow">
                                        <div class="weui-cell__bd">{{keyCount == 1?"开关":"左键"}}</div>
                                        <div class="mh-switch" :style="{'opacity': (onLine==true ? '1':'0.5')}">
                                            <div v-if="isOpen1 == 1" @click="onOff1(1,1)"
                                                 class="mh-switch-box" :style="{'background': (global.themeType == 'nochange' ? '#F1AC2E':'#2BB6FC')}">开启
                                            </div>
                                            <div v-if="isOpen1 == 0" @click="onOff1(1,1)"
                                                 class="mh-switch-box mh-switch-right">开启
                                            </div>
                                            <div v-if="isOpen1 == 1" @click="onOff1(0,1)"
                                                 class="mh-switch-box mh-switch-right">关闭
                                            </div>
                                            <div v-if="isOpen1 == 0" @click="onOff1(0,1)"
                                                 class="mh-switch-box" :style="{'background': (global.themeType == 'nochange' ? '#F1AC2E':'#2BB6FC')}">关闭
                                            </div>
                                        </div>
                                    </div>
                                    <!--v-if="middleKeyShow"-->
                                    <div class="weui-cell weui-cell_switch" v-if="middleKeyShow">
                                        <div class="weui-cell__bd">中键</div>
                                        <div class="mh-switch" :style="{'opacity': (onLine==true ? '1':'0.5')}">
                                            <div v-if="isOpen2 == 1" @click="onOff1(1,2)"
                                                 class="mh-switch-box" :style="{'background': (global.themeType == 'nochange' ? '#F1AC2E':'#2BB6FC')}">开启
                                            </div>
                                            <div v-if="isOpen2 == 0" @click="onOff1(1,2)"
                                                 class="mh-switch-box mh-switch-right">开启
                                            </div>
                                            <div v-if="isOpen2 == 1" @click="onOff1(0,2)"
                                                 class="mh-switch-box mh-switch-right">关闭
                                            </div>
                                            <div v-if="isOpen2 == 0" @click="onOff1(0,2)"
                                                 class="mh-switch-box" :style="{'background': (global.themeType == 'nochange' ? '#F1AC2E':'#2BB6FC')}">关闭
                                            </div>
                                        </div>
                                    </div>
                                    <!--v-if="rightKeyShow"-->
                                    <div class="weui-cell weui-cell_switch" v-if="rightKeyShow">
                                        <div class="weui-cell__bd">右键</div>
                                        <div class="mh-switch" :style="{'opacity': (onLine==true ? '1':'0.5')}">
                                            <div v-if="isOpen3 == 1" @click="onOff1(1,3)"
                                                 class="mh-switch-box" :style="{'background': (global.themeType == 'nochange' ? '#F1AC2E':'#2BB6FC')}">开启
                                            </div>
                                            <div v-if="isOpen3 == 0" @click="onOff1(1,3)"
                                                 class="mh-switch-box mh-switch-right">开启
                                            </div>
                                            <div v-if="isOpen3 == 1" @click="onOff1(0,3)"
                                                 class="mh-switch-box mh-switch-right">关闭
                                            </div>
                                            <div v-if="isOpen3 == 0" @click="onOff1(0,3)"
                                                 class="mh-switch-box" :style="{'background': (global.themeType == 'nochange' ? '#F1AC2E':'#2BB6FC')}">关闭
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="weui-flex">
            <div class="weui-flex__item level-center">
                <div class="weui-panel panel">
                    <div class="weui-panel__bd">
                        <div class="weui-flex">
                            <div class="weui-flex__item">
                                <div class="">

                                    <div class="weui-flex" style=" height: 1px!important;position: relative; overflow: hidden;">
                                        <div class="weui-flex__item level-center">
                                            <div style="height: 0.5px; background:#e5e5e5; width: 100%!important;position: relative; left: 2%;"></div>
                                        </div>
                                    </div>

                                    <a href="javascript:;">
                                        <div class="weui-cell weui-cell_access">
                                            <div style="width:100%; display: flex; justify-content: space-between;" @click="openPanelFun(1)">
                                                <div class="weui-cell__bd">
                                                    <p>延时关灯</p>
                                                </div>
                                                <!--class="weui-cell__ft"-->
                                                <div :class="[openPanel=='1'?'weui-cell__ft1':'weui-cell__ft']"></div>
                                            </div>
                                        </div>
                                        <!--v-if="isOpenPanel&&openPanel=='1'"-->
                                        <div class="weui-cell weui-cell_access" v-if="isOpenPanel && openPanel=='1' && leftKeyShow"  @click="clickPaker(1,1)">
                                            <div style="width:100%; display: flex; justify-content: space-between;">
                                                <div class="weui-cell__bd" style="text-indent: 1em">{{keyCount == 1?"开关":"左键"}}</div>
                                                <div class="weui-cell__ft">{{leftShowTime}}</div>
                                            </div>
                                        </div>

                                        <div class="weui-cell weui-cell_access" v-if="isOpenPanel && openPanel=='1' && middleKeyShow" @click="clickPaker(1,2)">
                                            <!--v-if="isOpenPanel&&openPanel=='1'&&middleKeyShow"-->
                                            <div  style="width:100%; display: flex; justify-content: space-between;">
                                                <div class="weui-cell__bd" style="text-indent: 1em">中键</div>
                                                <div class="weui-cell__ft">{{midShowTime}}</div>
                                            </div>
                                        </div>

                                        <div class="weui-cell weui-cell_access" v-if="isOpenPanel && openPanel=='1' && rightKeyShow" @click="clickPaker(1,3)">
                                            <!--v-if="isOpenPanel&&openPanel=='1'"-->
                                            <div style="width:100%; display: flex; justify-content: space-between;">
                                            <div class="weui-cell__bd" style="text-indent: 1em">右键</div>
                                            <div class="weui-cell__ft">{{rightShowTime}}</div>
                                            </div>
                                        </div>
                                    </a>

                                    <div class="weui-flex" style=" height: 1px!important;position: relative; overflow: hidden;">
                                        <div class="weui-flex__item level-center">
                                            <div style="height: 1px; background:#e5e5e5; width: 100%!important;position: relative; left: 2%;"></div>
                                        </div>
                                    </div>

                                    <a href="javascript:;">
                                        <div class="weui-cell weui-cell_access">
                                            <div style="width:100%; display: flex; justify-content: space-between;" @click="openPanelFun(2)">
                                                <div class="weui-cell__bd">
                                                    <p>超时自动关灯</p>
                                                </div>
                                                <!--class="weui-cell__ft"-->
                                                <div :class="[openPanel=='2'?'weui-cell__ft1':'weui-cell__ft']"></div>
                                            </div>
                                        </div>

                                        <!-- -if="leftKeyShow"-->
                                        <div class="weui-cell weui-cell_access" v-if="isOpenPanel&&openPanel=='2'" @click="clickPaker(2,1)">
                                            <div style="width:100%; display: flex; justify-content: space-between;" v-if="leftKeyShow">
                                                <div class="weui-cell__bd" style="text-indent: 1em">{{keyCount == 1?"开关":"左键"}}</div>
                                                <div class="weui-cell__ft">{{leftShowTime1}}</div>
                                            </div>
                                        </div>

                                        <div class="weui-cell weui-cell_access" v-if="isOpenPanel&&openPanel=='2'&&middleKeyShow" @click="clickPaker(2,2)">
                                            <!--v-if="middleKeyShow"-->
                                            <div  style="width:100%; display: flex; justify-content: space-between;">
                                                <div class="weui-cell__bd" style="text-indent: 1em">中键</div>
                                                <div class="weui-cell__ft">{{midShowTime1}}</div>
                                            </div>
                                        </div>

                                        <div class="weui-cell weui-cell_access" v-if="isOpenPanel&&openPanel=='2'" @click="clickPaker(2,3)">
                                            <!--v-if="rightKeyShow"-->
                                            <div style="width:100%; display: flex; justify-content: space-between;" v-if="rightKeyShow">
                                                <div class="weui-cell__bd" style="text-indent: 1em">右键</div>
                                                <div class="weui-cell__ft">{{rightShowTime1}}</div>
                                            </div>
                                        </div>

                                        <!--<div class="weui-cell weui-cell_access" v-if="isOpenPanel&&openPanel=='2'">-->
                                            <!--<div style="width:100%; display: flex; justify-content: space-between;">-->
                                                <!--<div class="weui-cell__bd">-->
                                                    <!--<p>左键</p>-->
                                                <!--</div>-->
                                                <!--<div class="weui-cell__ft">5：00</div>-->
                                            <!--</div>-->
                                        <!--</div>-->
                                    </a>


                                    <div class="weui-flex" style=" height: 1px!important;position: relative; overflow: hidden;">
                                        <div class="weui-flex__item level-center">
                                            <div style="height: 1px; background:#e5e5e5; width: 100%!important;position: relative; left: 2%;"></div>
                                        </div>
                                    </div>


                                    <a href="javascript:;">
                                        <div class="weui-cell weui-cell_access">
                                            <!--@click="toTimingFun(0)"-->
                                            <div style="width:100%; display: flex; justify-content: space-between;" @click="openPanelFun(3)">
                                                <div class="weui-cell__bd">
                                                    <p>定时开关灯</p>
                                                </div>
                                                <!--class="weui-cell__ft"-->
                                                <div :class="[openPanel=='3'?'weui-cell__ft1':'weui-cell__ft']"></div>
                                            </div>
                                        </div>

                                        <!-- -if="leftKeyShow"-->
                                        <div class="weui-cell weui-cell_access" v-if="isOpenPanel&&openPanel=='3'&&leftKeyShow" @click="toTimingFun(1)">
                                            <div style="width:100%; display: flex; justify-content: space-between;" v-if="leftKeyShow">
                                                <div class="weui-cell__bd" style="text-indent: 1em">{{keyCount == 1?"开关":"左键"}}</div>
                                                <div class="weui-cell__ft"></div>
                                            </div>
                                        </div>

                                        <div class="weui-cell weui-cell_access" v-if="isOpenPanel&&openPanel=='3'&&middleKeyShow" @click="toTimingFun(2)">
                                            <!--v-if="middleKeyShow"-->
                                            <div  style="width:100%; display: flex; justify-content: space-between;">
                                                <div class="weui-cell__bd" style="text-indent: 1em">中键</div>
                                                <div class="weui-cell__ft"></div>
                                            </div>
                                        </div>

                                        <div class="weui-cell weui-cell_access" v-if="isOpenPanel&&openPanel=='3'&&rightKeyShow" @click="toTimingFun(3)">
                                            <!--v-if="rightKeyShow"-->
                                            <div style="width:100%; display: flex; justify-content: space-between;" v-if="rightKeyShow">
                                                <div class="weui-cell__bd" style="text-indent: 1em">右键</div>
                                                <div class="weui-cell__ft"></div>
                                            </div>
                                        </div>

                                    </a>

                                    <div class="weui-flex" style=" height: 1px!important;position: relative; overflow: hidden;">
                                        <div class="weui-flex__item level-center">
                                            <div style="height: 1px; background:#e5e5e5; width: 100%!important;position: relative; left: 2%;"></div>
                                        </div>
                                    </div>


                                    <a href="javascript:;">
                                        <div class="weui-cell weui-cell_access">
                                            <div style="width:100%; display: flex; justify-content: space-between;">
                                                <div class="weui-cell__bd">
                                                    <p>光感自动开灯</p>
                                                </div>
                                                <!--class="weui-cell__ft"-->
                                                <!--<di/v>-->
                                                    <div class="mh-switch" :style="{'opacity': (onLine==true ? '1':'0.5')}">
                                                        <div v-if="isOpenLight == 1" @click="onOff2(1,2)"
                                                             class="mh-switch-box" :style="{'background': (global.themeType == 'nochange' ? '#F1AC2E':'#2BB6FC')}">开启
                                                        </div>
                                                        <div v-if="isOpenLight == 0" @click="onOff2(1,2)"
                                                             class="mh-switch-box mh-switch-right">开启
                                                        </div>
                                                        <div v-if="isOpenLight == 1" @click="onOff2(0,2)"
                                                             class="mh-switch-box mh-switch-right">关闭
                                                        </div>
                                                        <div v-if="isOpenLight == 0" @click="onOff2(0,2)"
                                                             class="mh-switch-box" :style="{'background': (global.themeType == 'nochange' ? '#F1AC2E':'#2BB6FC')}">关闭
                                                        </div>
                                                    </div>
                                                <!--</div>-->
                                                <!--<div :class="[openPanel=='1'?'weui-cell__ft1':'weui-cell__ft']"></div>-->
                                            </div>
                                        </div>
                                    </a>

                                    <div class="weui-flex" style=" height: 1px!important;position: relative; overflow: hidden;">
                                        <div class="weui-flex__item level-center">
                                            <div style="height: 1px; background:#e5e5e5; width: 100%!important;position: relative; left: 2%;"></div>
                                        </div>
                                    </div>

                                    <a href="javascript:;">
                                        <div class="weui-cell weui-cell_access">
                                            <div style="width:100%; display: flex; justify-content: space-between;">
                                                <div class="weui-cell__bd">
                                                    <p>光感自动关灯</p>
                                                </div>
                                                <!--class="weui-cell__ft"-->
                                                <!--<di/v>-->
                                                <div class="mh-switch" :style="{'opacity': (onLine==true ? '1':'0.5')}">
                                                    <div v-if="isCloseLight == 1" @click="onOff3(1,3)"
                                                         class="mh-switch-box" :style="{'background': (global.themeType == 'nochange' ? '#F1AC2E':'#2BB6FC')}">开启
                                                    </div>
                                                    <div v-if="isCloseLight == 0" @click="onOff3(1,3)"
                                                         class="mh-switch-box mh-switch-right">开启
                                                    </div>
                                                    <div v-if="isCloseLight == 1" @click="onOff3(0,3)"
                                                         class="mh-switch-box mh-switch-right">关闭
                                                    </div>
                                                    <div v-if="isCloseLight == 0" @click="onOff3(0,3)"
                                                         class="mh-switch-box" :style="{'background': (global.themeType == 'nochange' ? '#F1AC2E':'#2BB6FC')}">关闭
                                                    </div>
                                                </div>
                                                <!--</div>-->
                                                <!--<div :class="[openPanel=='1'?'weui-cell__ft1':'weui-cell__ft']"></div>-->
                                            </div>
                                        </div>
                                    </a>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="weui-flex">
            <div class="weui-flex__item level-center">
                <div class="weui-panel panel">
                    <div class="weui-panel__bd">
                        <div class="weui-flex">
                            <div class="weui-flex__item">
                                <div>
                                    <a class="weui-cell weui-cell_access" href="javascript:;" @click="isBox3=true">
                                        <div class="weui-cell__bd">
                                            <p>原开关类型</p>
                                        </div>
                                        <div class="weui-cell__ft">{{isCommonType==1?'普通开关':'自复位开关'}}</div>
                                    </a>
                                    <a class="weui-cell weui-cell_access" href="javascript:;" @click="isBox2 = true">
                                        <div class="weui-cell__bd">
                                            <p>原开关状态</p>
                                        </div>
                                        <div class="weui-cell__ft">{{keyStatus == 0?'按下方开启':'按上方开启'}}</div>
                                    </a>
                                    <a class="weui-cell weui-cell_access" href="javascript:;" @click="isBox1=true">
                                        <div class="weui-cell__bd">
                                             <p>控制距离</p>
                                        </div>
                                        <div class="weui-cell__ft">{{power==3?'增强模式':'常用模式 '}}</div>
                                    </a>
                                    <a class="weui-cell weui-cell_access" href="javascript:;" @click="toGuidePage()">
                                        <div class="weui-cell__bd">
                                            <p>按键校准</p>
                                        </div>
                                        <div class="weui-cell__ft"></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--<img src="../assets/image/" al/t="">-->
        <!--<div class="page__bd page__bd_spacing">-->
            <!--<a href="javascript:;" class="weui-btn weui-btn_default" id="showPicker">单列选择器</a>-->
            <!--<a href="javascript:;" class="weui-btn weui-btn_default" id="showDatePicker">日期选择器</a>-->
        <!--</div>-->


        <!--&lt;!&ndash;v-if="onLine == false"&ndash;&gt; v-if="onLine == false"-->
        <div style="opacity: 1;" v-if="onLine == false">
            <div class="weui-mask" style="opacity: 1!important;"></div>
            <div class="weui-dialog" style="background:none!important; width: 100%;">
                <div class="weui-flex" style="margin-top: 10px; height: 100vh;">
                    <div class="weui-flex__item level-center">
                        <div class="outLineBox" style="">
                            <div style="width: 92px; height: 92px; border:2px dashed #CACACA; margin: 0 auto;">
                                <div class="outLinePic">
                                    <div class="vertical-center" v-if="keyCount==1&&!onLine">
                                        <img src="../assets/image/switch_icon2.png" alt="outline">
                                    </div>
                                    <div class="vertical-center" v-if="keyCount==2&&!onLine">
                                        <img src="../assets/image/switch_zigbee_two_ununited_icon@3x.png" alt="outline">
                                    </div>
                                    <div class="vertical-center" v-if="keyCount==3&&!onLine">
                                        <img src="../assets/image/switch_zigbee_three_ununited_icon@3x.png" alt="outline">
                                    </div>
                                </div>
                            </div>
                            <div style="font-size: 16px;color: #fff; line-height: 20px; margin-top: 5px;">开关精灵(ZigBee)</div>
                            <div style="font-size: 14px;color: #fff;  line-height: 20px;">此设备未响应</div>
                        </div>


                        <div @click="closePage" style="background: rgba(255,255,255,0.20); border-radius: 22px; position: fixed; bottom: 15%; width: 114px; height: 30px; line-height: 30px; color: #fff;">
                            返回首页
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="js_dialog" style="opacity: 1;" v-if="isBox1">
            <div class="weui-mask" @click="isBox1 = false"></div>
            <div class="weui-dialog" style="top: 70%!important;">
                <div class="weui-dialog__hd"><strong class="weui-dialog__title">控制距离</strong></div>
                <div class="dialog-box"
                     style="border-radius:8px; border: 1px solid #E3E3E3; line-height: 50px; width:90%;  margin: 0 auto;">
                    <div style="display: flex; flex-direction: column;padding:0 15px; align-items: flex-start">
                        <div style="display:flex; width: 100%; justify-content: space-between;">
                            <span :class="[isChoose == 1?'isOrangeTxt':'isGrayTxt']"  v-if="global.themeType == 'nochange'">常用模式</span>
                            <span :class="[isChoose == 1?'isBlueTxt':'isGrayTxt']" v-if="global.themeType != 'nochange'">常用模式</span>
                            <div style="display: inline-flex; align-items: flex-end;">
                                <div @click="chooseMode(1)">
                                    <div v-if="isChoose == 1" class="weui-icon-success"
                                         :style="{'color': (global.themeType == 'nochange' ? '#F4AC28':'#2BB6FC')}"></div>
                                    <div v-if="isChoose == 0" class="weui-icon-circle"
                                         style="line-height: 50px; color:#D4D2D2;"></div>
                                </div>
                            </div>
                        </div>
                        <div style="display:flex; width: 100%; justify-content: space-between; border-top: 1px solid #E3E3E3">
                            <span :class="[isChoose1 == 1?'isOrangeTxt':'isGrayTxt']" v-if="global.themeType == 'nochange'">增强模式</span>
                            <span :class="[isChoose1 == 1?'isBlueTxt':'isGrayTxt']" v-if="global.themeType != 'nochange'">增强模式</span>
                            <div @click="chooseMode(2)">
                                <div v-if="isChoose1 == 1" class="weui-icon-success"
                                     :style="{'color': (global.themeType == 'nochange' ? '#F4AC28':'#2BB6FC')}"></div>
                                <div v-if="isChoose1 == 0" class="weui-icon-circle"
                                     style="line-height: 50px; color:#D4D2D2;"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="font-size:12px; color:#B3B3B3; margin-top: 8px;  width:90%; text-align: left;  margin: 0 auto; line-height: 16px!important; ">
                    <p>以上数据由北京毫米科技有限公司在测试环境下完成，仅供参考，实际控制范围以实物为准。</p>
                    <!--<p> </p>-->
                </div>

                <div @click="isBox1 = false" :class="[global.themeType == 'nochange' ? 'isYellow' : 'isBlue' ]"
                     style="width: 62%; border-radius:30px; margin: 10px auto; color: #fff; height: 40px; line-height: 40px;">
                    确定
                </div>
            </div>
        </div>

        <!--v-if="isBox2"-->
        <div class="js_dialog" style="opacity: 1;" v-if="isBox2">
            <div class="weui-mask" @click="isBox2 = false"></div>
            <div class="weui-dialog" style="padding-bottom: 20px;">
                <div class="weui-dialog__hd"><strong class="weui-dialog__title">原开关状态</strong></div>
                <div style="border-radius:8px; border: 1px solid #E3E3E3; line-height: 50px; width:90%;  margin: 0 auto;">
                    <div style="display: flex; flex-direction: column;padding:0 15px; align-items: flex-start">
                        <div style="display:flex; width: 100%; justify-content: space-between;" @click="chooseMode2(1)">
                            <span :class="[isChooseUp == 1?'isOrangeTxt':'isGrayTxt']"  v-if="global.themeType == 'nochange'">按上方开启</span>
                            <span :class="[isChooseUp == 1?'isBlueTxt':'isGrayTxt']" v-if="global.themeType != 'nochange'">按上方开启</span>
                            <div style="display: inline-flex; align-items: flex-end;">
                                <div >
                                    <div v-if="isChooseUp == 1" class="weui-icon-success"
                                         :style="{'color': (global.themeType == 'nochange' ? '#F4AC28':'#2BB6FC')}"></div>
                                    <div v-if="isChooseUp == 0" class="weui-icon-circle"
                                         style="line-height: 50px; color:#D4D2D2;"></div>
                                </div>
                            </div>
                        </div>

                        <div style="display:flex; width: 100%; justify-content: space-between; height: 100px;">
                            <div class="dialog-img"><img src="../assets/image/switch_state_card_above_n.png"/></div>
                        </div>

                        <div style="display:flex; width: 100%; justify-content: space-between; border-top: 1px solid #E3E3E3; padding-bottom:10px; " @click="chooseMode2(2)">
                            <div>
                                <span :class="[isChooseDown == 1?'isOrangeTxt':'isGrayTxt']" v-if="global.themeType == 'nochange'">按下方开启</span>
                                <span :class="[isChooseDown == 1?'isBlueTxt':'isGrayTxt']" v-if="global.themeType != 'nochange'">按下方开启</span>
                                <span :class="[global.themeType == 'nochange' ? 'isYellow' : 'isBlue' ]"
                                      style="display: inline-block; font-size: 10px; padding: 0px 8px; margin:0px 0 0 10px!important; height: 20px!important; line-height: 20px!important; border-radius: 13px; color: #fff ">默认</span>
                            </div>

                            <div >
                                <div v-if="isChooseDown == 1" class="weui-icon-success"  :style="{'color': (global.themeType == 'nochange' ? '#F4AC28':'#2BB6FC')}"></div>
                                <div v-if="isChooseDown == 0" class="weui-icon-circle"
                                     style="line-height: 50px; color:#D4D2D2;"></div>
                            </div>
                        </div>


                        <div style="display:flex; width: 100%; justify-content: space-between; height: 100px;">
                            <div class="dialog-img"><img src="../assets/image/switch_state_card_bottom_n.png"/></div>
                        </div>
                    </div>
                </div>
                <div style="font-size:12px; color:#B3B3B3; margin-top: 8px;  width:90%; text-align: left;  margin: 0 auto; line-height: 16px!important; ">
                    <p>注：此设置将应用到开关的全部按键。</p>
                </div>

                <div @click="isBox2 = false" :class="[global.themeType == 'nochange' ? 'isYellow' : 'isBlue' ]"
                     style="width: 62%; border-radius:30px; margin: 10px auto; color: #fff; height: 40px; line-height: 40px;">
                    确定
                </div>
            </div>
        </div>

        <!--v-if="isBox3"-->
        <!--v-if="isBox3"-->
        <div class="js_dialog" style="opacity: 1;" v-if="isBox3">
            <div class="weui-mask" @click="isBox3 = false"></div>
            <div class="weui-dialog" style="padding-bottom: 20px;">
                <div class="weui-dialog__hd"><strong class="weui-dialog__title">原开关类型</strong></div>
                <div style="border-radius:8px; border: 1px solid #E3E3E3; line-height: 50px; width:90%;  margin: 0 auto;">
                    <div style="display: flex; flex-direction: column;padding:0 15px; align-items: flex-start">
                        <div style="display:flex; width: 100%; justify-content: space-between;" @click="chooseType(1)">
                            <span :class="[isCommonType == 1?'isBlueTxt':'isGrayTxt']" v-if="global.themeType != 'nochange'">普通开关</span>
                            <span :class="[isCommonType == 1?'isOrangeTxt':'isGrayTxt']" v-if="global.themeType == 'nochange'">普通开关</span>
                            <span :class="[global.themeType == 'nochange' ? 'isYellow' : 'isBlue' ]"
                                  style="display: inline-block; font-size: 10px; padding: 0px 8px; margin-left:-48%; margin-top: 15px; height: 20px!important; line-height: 20px!important; border-radius: 13px; color: #fff ">默认</span>
                            <div style="display: inline-flex; align-items: flex-end;">
                                <div>
                                    <div v-if="isCommonType == 1" class="weui-icon-success"
                                         :style="{'color': (global.themeType == 'nochange' ? '#F4AC28':'#2BB6FC')}"></div>
                                    <div v-if="isCommonType == 0" class="weui-icon-circle"
                                         style="line-height: 50px; color:#D4D2D2;"></div>
                                </div>
                            </div>
                        </div>

                        <div style="display:flex; width: 100%; justify-content: space-between; height: 100px;">
                            <div class="dialog-img">
                                <img src="../assets/image/switch_type1.png" v-if="global.themeType != 'nochange'">
                                <img src="../assets/image/switch_type_card_above_n.png" v-if="global.themeType == 'nochange'">
                            </div>
                        </div>

                        <div style="display:flex; width: 100%; justify-content: space-between; border-top: 1px solid #E3E3E3" @click="chooseType(2)">
                            <div>
                                <span :class="[isSpecialType == 1?'isOrangeTxt':'isGrayTxt']" v-if="global.themeType == 'nochange'">自复位开关</span>
                                <span :class="[isSpecialType == 1?'isBlueTxt':'isGrayTxt']" v-if="global.themeType != 'nochange'">自复位开关</span>
                                <!--<span :class="[global.themeType == 'nochange' ? 'isYellow' : 'isBlue' ]"-->
                                    <!--style="display: inline-block; font-size: 10px; padding: 0px 8px; margin-left: 5px; height: 20px; line-height: 20px; border-radius: 13px; color: #fff ">默认</span>-->
                            </div>

                            <div>
                                <div v-if="isSpecialType == 1" class="weui-icon-success"  :style="{'color': (global.themeType == 'nochange' ? '#F4AC28':'#2BB6FC')}"></div>
                                <div v-if="isSpecialType == 0" class="weui-icon-circle"
                                     style="line-height: 50px; color:#D4D2D2;"></div>
                            </div>
                        </div>


                        <div style="display:flex; width: 100%; justify-content: space-between; height: 100px;">
                            <div class="dialog-img">
                                <img src="../assets/image/switch_type2.png" v-if="global.themeType != 'nochange'"/>
                                <img src="../assets/image/switch_type_card_bottom_n.png" v-if="global.themeType == 'nochange'">
                            </div>
                        </div>
                    </div>
                </div>
                <div style="font-size:12px; color:#B3B3B3; margin-top: 8px;  width:90%; text-align: left;  margin: 0 auto; line-height: 16px!important; ">
                    <p>注：此设置将应用到开关的全部按键。</p>
                </div>

                <!--isBox3 = false-->
                <div @click="closeBox3(isChooseType)" :class="[global.themeType == 'nochange' ? 'isYellow' : 'isBlue' ]"
                     style="width: 62%; border-radius:30px; margin: 10px auto; color: #fff; height: 40px; line-height: 40px;">
                    确定
                </div>
            </div>
        </div>

        <div style="position: absolute!important; bottom:5%!important; left:13%; text-align: center">
        <p  style="color: #999!important; font-size: 14px!important;">开关精灵(ZigBee)  <span style="color: #999!important; display: inline-block; margin-left: 5px;">ID:{{devId}}</span></p>
        </div>
        <!--<div class="js_dialog" id="isBox5" style="opacity: 1;">-->
            <!--<div class="weui-mask" @click="isBox5=false"></div>-->
            <!--<div class="weui-dialog weui-skin_android">-->
                <!--<div class="weui-dialog__hd">-->
                    <!--<strong class="weui-dialog__title">延时关灯</strong>-->
                    <!--<span>开关</span>-->
                <!--</div>-->
                <!--<div class="weui-dialog__bd">-->

                <!--</div>-->
                <!--<div class="weui-dialog__ft">-->
                    <!--<a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default">辅助操作</a>-->
                    <!--<a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">主操作</a>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->

        <!--mh-last-product-id-->
        <!--<mt-picker></mt-picker>-->
    </div>
</template>

<script>
    import global from "assets/js/global"
    // import timingPage from "./timingPage"
    import js1 from "assets/js/js1"
    export default {
        data() {
            return {
                imgobj:{},
                leftKeyStatus: false,
                middleKeyStatus: false,
                rightKeyStatus: false,
                leftKeyShow: true,
                middleKeyShow: false,
                rightKeyShow: false,
                keyCount: 1,
                kid:0,
                onLine: false,
                keyStatus: 0,
                power: 0,
                token: "",
                pid: "",
                mid: "",
                devId: "",
                isOpen1: 1,   //左键开关
                isOpen2: 1,   //中间开关
                isOpen3: 1,   //右键开关
                isCloseLight:1,
                isOpenLight:1,
                isBox1: false, //控制距离弹框
                isBox2: false, //控制开关状态
                isBox3: false, //开关类型
                isBox4:true,//时间选择器
                isBox6:false,//未响应
                isChoose: 1,  //常用模式勾选
                isChoose1: 0, //增强模式
                isChooseUp: 1,  //按上方开启
                isChooseDown: 0, //按下方开启
                isCommonType:0,  //是否普通类型
                isSpecialType:0, //自复位开关
                global:global,
                openPanel:0,//打开面板
                isOpenPanel:false,
                isBox5:true,
                timingData:[],
                leftTimeValue:0,
                leftTimeValue1:0,
                leftDelayTimeValue:0,
                midDelayTimeValue:0,
                rightDelayTimeValue:0,
                leftOvertimeVale:0,
                midOvertimeVale:0,
                rightOvertimeVale:0,
                midTimeValue:0,
                rightTimeValue:0,
                delayedTime:0,
                delayedClick:0,
                pickerTitle:0,
                pickerTitle1:0,
                imgSwitch:'0',//1,2,4
                picSwitch:'0', //imgSwitch:leftOpen(左键)  leftOff(左键关) midOpen midOff  rightOff rightOpen
                switchType:0,//左中右
                switchStatus:"0",
                switchStatus1:"0",
                switchStatus2:"0",
                oneData:[],
                timestamp:"0",
                timeId:0,
                timeId2:0,
                timeId3:0,
                timeIdOver1:0,
                timeIdOver2:0,
                timeIdOver3:0,
                leftShowTime:0,
                midShowTime:0,
                rightShowTime:0,
                leftShowTime1:0,
                midShowTime1:0,
                rightShowTime1:0,
                isRefresh:true,
                switchDelay1:0,//延时左键开关图片
                switchDelay2:0,//延时左键开关图片
                switchDelay3:0,//延时左键开关图片
                switchOver1:0,//超时左键开关图片
                switchOver2:0,//超时左键开关图片
                switchOver3:0,//超时左键开关图片
                switchPicArr:[
                    {str:0,key:1},
                    {str:0,key:2},
                    {str:0,key:3},
                ],
                switchPicArr1:[
                    {str:0,key:1},
                    {str:0,key:2},
                    {str:0,key:3},
                ],
                isChooseType:0,
                // data:[]
            }
        },
        created() {
            console.log($)
            let that = this;
            that.global.headTitle = "设备功能";
            that.initFun();
        },
        methods: {
            initFun(){
                let that = this;
                let href = location.hrzief;
                let axios = require('axios');
                let jsonpAdapter = require('axios-jsonp');

                console.log(href)
                that.token = that.$utils.getQueryString("token")
                console.log(that.token)
                that.devId = that.$utils.getQueryString("deviceSn")
                console.log(that.devId)
                that.pid = that.$utils.getQueryString("pid")
                console.log(that.pid)
                that.mid = that.$utils.getQueryString("mid")
                console.log(that.mid)
                that.timestamp = Date.parse(new Date());//当前时间戳
                console.log(that.timestamp)
                console.log(jsonpAdapter);
                var data= {
                    "action":"get-device",
                    "devId":that.devId
                }

                // console.log(data1);

                $.ajax({
                    type:"post",
                    data:JSON.stringify(data),
                    url:global.baseUrl,
                    dataType:"json",
                    contentType:"application/json",
                    success:function (response) {
                        console.log("返回值:  ",response);
                        console.log("时间列表： ",JSON.parse(response.data[0].out.statusList))
                        for(let k in  JSON.parse(response.data[0].out.statusList)) {
                            let n = k;
                            if(JSON.parse(response.data[0].out.statusList).hasOwnProperty(k)) {
                                // console.log(n);
                                /*检测obj对象中是否有k这个属性*/
                                that.timingData.push({"key":k,"value":JSON.parse(response.data[0].out.statusList)[k]})
                            }
                        }

                        that.onLine = response.data[0].online;
                        that.keyStatus = response.data[0].out.keyStatus;
                        that.switchType = response.data[0].out.oriKeyType;
                        if(that.keyStatus == 0){
                            that.isChooseUp = 0;
                            that.isChooseDown = 1;
                        }else{
                            that.isChooseDown = 0;
                            that.isChooseUp = 1;
                        }
                        console.log("开关方向：",that.keyStatus)
                        if(that.switchType == 0){
                            that.isCommonType = 1;
                        }else{
                            that.isSpecialType = 1;
                            that.isCommonType = 0;
                        }


                        sessionStorage.setItem("keyStatus", that.keyStatus)
                        that.power = response.data[0].out.powerDegree;
                        if(that.power == 3){
                            that.isChoose = 0;
                            that.isChoose1 = 1;
                        }else{
                            that.isChoose = 1;
                            that.isChoose1 = 0;
                        }

                        that.isOpenLight = response.data[0].out.envlightOpenLampEnable;


                        that.keyCount = response.data[0].out.keyCount;
                        that.isOpen2 = response.data[0].out.envlightCloseLampEnable;
                        that.isOpen3 = response.data[0].out.envlightCloseLampEnable;
                        let list = JSON.parse(response.data[0].out.statusList)
                        console.log("列表：  ",list)
                        for(let i in list){
                            console.log("角标： "+i);
                            if(i == 1){
                                that.switchDelay1 = list[i].lazyCloseStatus;
                                // that.getSwitchPic(1)
                                that.getSwitchPic(that.switchDelay1,1);
                                that.switchOver1 = list[i].overTimeOffEnable;
                                that.getSwitchPic1(that.switchOver1,1)
                            }
                            if (that.keyCount == 2){
                                if(i = 2){
                                    that.switchDelay3 = list[i].lazyCloseStatus;
                                    that.getSwitchPic(that.switchDelay1,2)
                                    that.switchOver3 = list[i].overTimeOffEnable;
                                    that.getSwitchPic1(that.switchOver3,2)
                                }
                            }
                            if (that.keyCount == 3){
                                if(i == 2){
                                    that.switchDelay2 = list[i].lazyCloseStatus;
                                    that.getSwitchPic(that.switchDelay2,2)
                                    that.switchOver2 = list[i].overTimeOffEnable;
                                    that.getSwitchPic1(that.switchOver2,2)
                                }
                                if(i == 4){
                                    that.switchDelay3 = list[i].lazyCloseStatus;
                                    that.getSwitchPic(that.switchDelay3,3)
                                    that.switchOver3 = list[i].overTimeOffEnable;
                                    that.getSwitchPic1(that.switchOver3,3)
                                }
                            }
                        }
                        // console.log(JSON.parse(response.data[0].out.statusList[1]))
                        // that.switchDelay1 =  response.data[0].out.envlightCloseLampEnable;
                        sessionStorage.setItem("keyCount", that.keyCount);
                        switch (that.keyCount) {
                            case 1:
                                that.isOpen1 = response.data[0].out.oneKeyStatus
                                that.leftKeyShow = true;
                                // that.getSwitchPic();
                                break;
                            case 2:
                                that.isOpen1 = response.data[0].out.oneKeyStatus
                                that.isOpen3 = response.data[0].out.twoKeyStatus
                                that.leftKeyShow = true;
                                that.rightKeyShow = true;
                                break;
                            case 3:
                                that.isOpen1 = response.data[0].out.oneKeyStatus
                                that.isOpen2 = response.data[0].out.twoKeyStatus
                                that.isOpen3 = response.data[0].out.threeKeyStatus
                                that.leftKeyShow = true;
                                that.middleKeyShow = true;
                                that.rightKeyShow = true;
                                break;
                        }

                        for(var i in JSON.parse(response.data[0].out.statusList)){
                            if(i == 1){
                                    that.leftDelayTimeValue =(JSON.parse(response.data[0].out.statusList)[i].lazyCloseTime - that.timestamp)/1000-1;
                                    that.leftOvertimeVale = (JSON.parse(response.data[0].out.statusList)[i].overtimeOffTime);
                            }
                            if(i == 2 && that.keyCount == 3){
                                    that.midDelayTimeValue =(JSON.parse(response.data[0].out.statusList)[i].lazyCloseTime - that.timestamp)/1000-1;
                                    that.midOvertimeVale = (JSON.parse(response.data[0].out.statusList)[i].overtimeOffTime);
                            }
                            //
                            if(that.keyCount == 2 && i == 2 || that.keyCount == 3 && i == 4){
                                that.rightDelayTimeValue =(JSON.parse(response.data[0].out.statusList)[i].lazyCloseTime - that.timestamp)/1000-1;
                                that.rightOvertimeVale = (JSON.parse(response.data[0].out.statusList)[i].overtimeOffTime);
                            }
                            console.log(i+"返回类型")


                        }

                    },
                    error:function(response){
                        console.log("error:  ",response)
                     }
                })
            },
            toGuidePage(){
                this.$router.push({
                    path: '/confirm'
                })
            },
            control: function (cmdId, param) {
                var that = this;
                var data = {
                    // "mid": that.mid,
                    "devId": that.devId,
                    "cmdId": cmdId,
                    "in": param,
                    "action":"control"
                }
                // console.log(data);
                $.ajax({
                    type:"post",
                    data:JSON.stringify(data),
                    url:global.baseUrl,
                    // url:"http://http://171.208.222.146:6060/rmscript/iot/intent",
                    dataType:"json",
                    contentType:"application/json",
                    success:function (response) {
                        console.log("命令",response)
                        that.isBox3 = false;
                    }
                })
                // this.$axios.post('https://webapi-openapi.aihomi.com/api/v1/oauth/device/control/'+that.pid,  [{
                //     "mid": that.mid,
                //     "devId": that.devId,
                //     "cmdId": cmdId,
                //     "in": param
                // }], {
                //     headers: {
                //         'Authorization': 'Bearer '+that.token,
                //         'Content-Type': 'application/json;charset=UTF-8'
                //     }
                // }).then(response => {
                //     that.isBox3 = false;
                //     console.log("返回值  ",response);
                // }).catch(response => {
                //     console.log("error ",response)
                // })
            },
            onOff1(num, num2){
                //打开面板函数
                if (this.onLine == true) {
                    if (num == 0) {
                        if(this.keyCount == 2 && num2 == 3){
                            num2 = 2;
                        }
                        switch (num2) {
                            case 1:
                                this.isOpen1 = 0;
                                this.control(1, {"oneKeyStatus": 0, "changeKey": num2})
                                break;
                            case 2:
                                if(this.keyCount == 2){
                                    this.isOpen3 = 0;
                                }else{
                                    this.isOpen2 = 0;
                                }
                                this.control(1, {"twoKeyStatus": 0, "changeKey": num2})
                                break;
                            case 3:
                                this.isOpen3 = 0;
                                this.control(1, {"threeKeyStatus": 0, "changeKey": num2})
                                break;
                        }
                    } else {
                        if(this.keyCount == 2 && num2 == 3){
                            num2 = 2;
                        }
                        switch (num2) {
                            case 1:
                                this.isOpen1 = 1;
                                this.control(1, {"oneKeyStatus": 1, "changeKey": num2})
                                break;
                            case 2:
                                if(this.keyCount == 2){
                                    this.isOpen3 = 1;
                                }else{
                                    this.isOpen2 = 1;
                                }
                                this.control(1, {"twoKeyStatus": 1, "changeKey": num2})
                                break;
                            case 3:
                                this.isOpen3 = 1;
                                this.control(1, {"threeKeyStatus": 1, "changeKey": num2})
                                break;
                        }
                    }
                }
            },
            onOff2(num){
                //光敏自动开
                let that = this;
                let lightData = {};
                lightData.changeKey = 1;
                that.isRefresh = false;
                if (this.onLine == true) {
                    // alert(num2)
                    // if (num2 == 2) {
                        if (num == 0) {
                            that.isOpenLight = 0;
                            lightData.envlightOpenLampEnable = 0;
                            that.postData(lightData,5)
                        } else {
                            that.isOpenLight = 1;
                            lightData.envlightOpenLampEnable = 1;
                            that.postData(lightData,5)
                        }
                    // }
                }
            },
            onOff3(num){
                //光敏自动关
                let that = this;
                let lightData = {};
                lightData.changeKey = 1;
                that.isRefresh = false;
                if (this.onLine == true) {
                    if (num == 0) {
                        that.isCloseLight = 0;
                        lightData.envlightCloseLampEnable = 0;
                        //     //     console.log(lightData);
                        that.postData(lightData,5)
                    } else {
                        that.isCloseLight = 1;
                        lightData.envlightCloseLampEnable = 1;
                        //     //     console.log(lightData);
                        that.postData(lightData,5)
                    }
               }
            },
            chooseMode(num) {
                //控制距离
                let that = this;
                if (num == 1) {
                    that.isChoose = 1;
                    that.isChoose1 = 0;
                    that.power = 1;
                } else {
                    that.isChoose = 0;
                    that.isChoose1 = 1;
                    that.power = 3;
                }
                that.control(3,{keyStatus:that.keyStatus,powerDegree:that.power})
            },
            chooseMode2(num) {
                //
                let that = this;
                if (num == 1) {
                    that.isChooseUp = 1;
                    that.isChooseDown = 0;
                    that.keyStatus = 1;
                } else {
                    that.isChooseUp = 0;
                    that.isChooseDown = 1;
                    that.keyStatus = 0;
                }
                that.control(2,{keyStatus:that.keyStatus,oriKeyType:0})
            },
            chooseType(num){
                let that = this;
                if(num == 1){
                    that.isChooseType = 1;
                    //
                    that.isCommonType = 1;
                    that.isSpecialType = 0;
                    // // switchType.keyStatus = 1;
                    // that.switchType = 0;
                    // console.log("keyStatus",that.keyStatus);
                    // console.log("oriKeyType",that.switchType);
                    // that.control(2,{keyStatus:that.keyStatus,oriKeyType:that.switchType})
                }else{
                    that.isChooseType = 0;
                    //
                    that.isCommonType = 0;
                    that.isSpecialType = 1;
                    // // switchType.keyStatus = 0;
                    // that.switchType = 1;
                    // console.log("keyStatusqq",that.keyStatus);
                    // console.log("oriKeyTypeqq",that.switchType);
                    // that.control(2,{keyStatus:that.keyStatus,oriKeyType:that.switchType})
                }
                // that.control(2,{keyStatus:that.keyStatus,oriKeyType:that.switchType})
            },
            closeBox3(num){
                let that = this;
                if(num == 1){
                    // that.isChooseType = 1;

                    that.isCommonType = 1;
                    that.isSpecialType = 0;
                    // switchType.keyStatus = 1;
                    that.switchType = 0;
                    console.log("keyStatus",that.keyStatus);
                    console.log("oriKeyType",that.switchType);
                    that.control(2,{keyStatus:that.keyStatus,oriKeyType:that.switchType})
                }else{
                    // that.isChooseType = 0;

                    that.isCommonType = 0;
                    that.isSpecialType = 1;
                    // switchType.keyStatus = 0;
                    that.switchType = 1;
                    console.log("keyStatusqq",that.keyStatus);
                    console.log("oriKeyTypeqq",that.switchType);
                    that.control(2,{keyStatus:that.keyStatus,oriKeyType:that.switchType})
                }
            },
            openPanelFun(num){
                let that = this;
                // that.openPanel = num;
                if(num == that.openPanel){
                    that.openPanel = 0;
                    that.isOpenPanel = false;
                }else {
                    that.openPanel = num;
                    that.isOpenPanel = true;
                }

            },
            clickPaker(num,key){
                //num 第几个功能、key 第几按键
                let that =this;
                var data = this.$utils.getMutiData(12, 60, false);
                // let keyModle = 0;
                if(that.keyCount == 1 && key == 1){//单键
                    that.pickerTitle1 = "（开关）";
                }
                if(that.keyCount != 1 && key == 1){
                    that.pickerTitle1 = "（左键）";
                }
                if(that.keyCount != 1 && key == 2){
                    that.pickerTitle1 = "（中键）";
                }
                if(that.keyCount != 1 && key == 3){
                    that.pickerTitle1 = "（右键）";
                }



                if(num == 1){
                    that.pickerTitle = "延时关灯";
                    if(num == 1 && key == 1){
                        that.picSwitch = 0;
                    }

                    if(num == 1 && key == 2){
                        that.picSwitch = 1;
                    }

                    if(num == 1 && key == 3){
                        that.picSwitch = 2;
                    }
                    that.toShowPicker(1,key);
                }

                if(num == 2){
                    that.pickerTitle = "超时自动开关";
                    if(num == 2 && key == 1){
                        that.picSwitch = 3;
                    }

                    if(num == 2 && key == 2){
                        that.picSwitch = 4;
                    }

                    if(num == 2 && key == 3){
                        that.picSwitch = 5;
                    }
                    that.toShowPicker(2,key);
                }

                if(num == 3){
                    that.pickerTitle = "定时";
                    // that.toShowPicker(1,key);
                }

                // that.returnSwitchType(num,key)
            },

            getSwitchPic1(value,num) {
                console.log(num + "  &   " + value);
                let that = this;
                for (var i in  that.switchPicArr1) {
                    // let str = switchPic+i;
                    // console.log("角标" + i)
                    if (that.switchPicArr1[i].key == num) {
                        if (value == 0) {
                            that.switchPicArr1[i].str = require('../assets/image/newSwitch.png');
                        } else {
                            that.switchPicArr1[i].str = require('../assets/image/newSwitchOpen.png');
                        }
                        console.log(that.switchPicArr1[i])
                    }
                }
            },
            updatePic(item,isOpen){
                if(isOpen == 0){
                    item.src = require('../assets/image/newSwitch.png');
                }else{
                    item.src = require('../assets/image/newSwitchOpen.png');
                }
            },
            getSwitchPic(value,num){
                console.log(num +"  &   "+value);
                let that = this;
                for(var i in  that.switchPicArr){
                    // let str = switchPic+i;
                    // console.log("角标"+i)
                    if(that.switchPicArr[i].key == num){
                        if(value == 0){
                           that.switchPicArr[i].str = require('../assets/image/newSwitch.png');
                        }else{
                            that.switchPicArr[i].str = require('../assets/image/newSwitchOpen.png');
                        }
                    }
                }
                // if(num == 0){
                //     if(value == 0){
                //        that.switchPic0 = require('../assets/image/newSwitch.png');
                //     }else{
                //        that.switchPic0 = require('../assets/image/newSwitchOpen.png');
                //     }
                // }
                //
                // if(num == 1){
                //     if(value == 1){
                //         that.switchPic1 = require('../assets/image/newSwitch.png');
                //     }else{
                //         that.switchPic1 = require('../assets/image/newSwitchOpen.png');
                //     }
                // }

                // alert(num);
                // alert(value);
                // let imgBox = document.createElement("img");
                // imgBox.src = that.switchPic;
                // that.imgobj = imgBox;
                // pickerBtn.append(imgBox)
                // if(num == 0){
                //     if(value == 1){
                //         that.switchPic = require('../assets/image/newSwitchOpen.png');
                //     }else{
                //         that.switchPic = require('../assets/image/newSwitch.png');
                //     }
                // }else{
                //     that.switchPic = 0;
                // }

            },
            toShowPicker(mode,key){
                let that = this;
                let data = "";
                let timeNum = 0;
                let timeTxt1 = "";
                let timeTxt2 = "";
                let keyId = "0";
                let sId = "0";
                if(mode == 1){
                    data = this.$utils.getMutiData(12, 60, false);
                    timeNum = 12;
                    timeTxt1 = "时";
                    timeTxt2 = "分"
                }
                if(mode == 2){
                    data = this.$utils.getMutiData(60, 60, false);
                    timeNum = 60;
                    timeTxt1 = "分";
                    timeTxt2 = "秒"
                }

                let inData = {};

                that.$weui.picker(data.first, data.second, {
                    container: 'body',
                    id:that.kid++,
                    defaultValue: [0, 0],
                    onChange: function (result) {
                        var element = document.getElementById("weui-picker-confirm");
                        var pickerBox = document.getElementById("weui-picker-confirm").parentNode.parentNode;
                        // pickerBox.style.bottom = "20%";
                        var itemArray = $(".weui-picker__item");

                        for (var i = 0; i < itemArray.length; i++) {
                            var id = "ele" + i;
                            $("#" + id).remove();
                            var id1 = "elem" + i;
                            $("#" + id1).remove();
                            $(itemArray[i]).removeClass("homi-picker__item")
                            if ($(itemArray[i]).html() === result[0].value.toString() && i<timeNum) {
                                var hourElementStr = "<span id='ele" + i + "' style='font-weight: normal;color: #fff'>" +timeTxt1+"</span>"
                                $(itemArray[i]).append(hourElementStr);
                                $(itemArray[i]).addClass("homi-picker__item")
                            }

                            if ($(itemArray[i]).html() === result[1].value.toString() && i>=timeNum-1) {
                                var str = i-timeNum;
                                var secondElementStr = "<span id='elem" + str + "' style='font-weight: normal;color: #fff'>"+timeTxt2+"</span>"
                                $(itemArray[i]).append(secondElementStr);
                                $(itemArray[i]).addClass("homi-picker__item")
                                console.log(secondElementStr)
                            }
                        }

                    },
                    onConfirm: function (result) {
                        if(mode == 1){
                            if((result[0].value != 0 && result[1].value != 0 )|| (result[0].value != 0 && result[1].value == 0) || (result[0].value == 0 && result[1].value != 0)) {
                                that.leftTimeValue = that.$utils.time2sec(true, result[0].value + ":" + result[1].value + ":00");
                                var addTime = result[0].value*60*60 + result[1].value*60;
                                // var addTime2 = result[0].value*60 + result[1].value*60;
                                if (that.leftTimeValue != 0) {
                                    inData.changeKey = key;
                                    if(that.keyCount == 3&&key == 3){
                                        inData.changeKey = 4;
                                    }
                                    inData.lazyCloseStatus = mode;
                                    inData.seconds = that.leftTimeValue;
                                    that.postData(inData,7)
                                    if(key == 1){
                                        that.leftDelayTimeValue = addTime
                                    }
                                    if(key == 2 && that.keyCount == 3){
                                        that.midDelayTimeValue = addTime
                                    }
                                    if(key == 3 && that.keyCount == 2 || key == 3 && that.keyCount == 3){
                                        that.rightDelayTimeValue = addTime
                                    }

                                }
                            }
                        }

                        if(mode == 2){
                            if(result[0].value == 0 && result[1].value == 0 ){
                                alert("请输入超时时间")
                            }
                            if((result[0].value != 0 && result[1].value != 0 )|| (result[0].value != 0 && result[1].value == 0) || (result[0].value == 0 && result[1].value != 0)) {
                                // that.leftTimeValue1 = that.$utils.time2sec(true, result[0].value + ":" + result[1].value + ":00")
                                that.leftTimeValue1 = that.$utils.time2sec(true,"00:"+ result[0].value + ":" + result[1].value)
                                var addTime2 = result[0].value*60 + result[1].value;
                                if (that.leftTimeValue1 != 0) {
                                    inData.changeKey = key;
                                    if(that.keyCount == 3&&key == 3){
                                        inData.changeKey = 4;
                                    }
                                    inData.overTimeOffEnable = 1;
                                    // inData.overtimeOffTime = that.leftTimeValue1;
                                    inData.overtimeOffTime = +addTime2;
                                    console.log(inData)
                                    that.postData(inData,6)
                                    if(key == 1){
                                        that.leftOvertimeVale = that.leftTimeValue1;
                                    }
                                    if(key == 2 && that.keyCount == 3){
                                        that.midOvertimeVale = that.leftTimeValue1;
                                    }
                                    if(key == 3 && that.keyCount == 2 || key == 3 && that.keyCount == 3){
                                        that.rightOvertimeVale = that.leftTimeValue1;
                                    }
                                }
                            }
                        }
                    },
                });

                setTimeout(function () {
                    var pickerBody = document.getElementById("homi-picker-body");
                    var homiTitle = document.getElementById("homiTitle");
                    var homiTiming = document.getElementById("homi-timing");
                    var pickerBtn = document.getElementById("pickerBtn");
                    let imgBox = document.createElement("img");
                    let postSwitchData = {};
                    var data = {};
                    data.mode = mode;
                    data.key = key;
                    if(mode == 1&& key == 1){
                        sId = "0";
                    }

                    console.log("图片数组",that.switchPicArr1)
                    console.log("mode"+mode);
                    if(mode == 1){
                        imgBox.src = that.switchPicArr[key-1].str;
                    }else if(mode == 2){
                        imgBox.src = that.switchPicArr1[key-1].str;
                    }

                    // console.log(item.str)
                    pickerBtn.append(imgBox);
                    /*for(var i in that.switchPicArr){
                        console.log(i)
                        var item = that.switchPicArr[i];
                        // if(item.key == sId ){

                            // that.getSwitchPic(that.switchDelay1,that.picSwitch);

                            // return;
                        // }

                    }*/

                    // pickerBtn.append(imgBox)



                    //
                    // if(mode == 1&& key == 2){
                    //     // alert(that.picSwitch);
                    //     that.getSwitchPic(that.switchDelay2,that.picSwitch);
                    //     imgBox.src = that.switchPic;
                    //     pickerBtn.append(imgBox)
                    // }
                    //
                    // if(mode == 1&& key == 3){
                    //     // alert(that.picSwitch);
                    //     that.getSwitchPic(1,that.picSwitch);
                    //     imgBox.src = that.switchPic;
                    //     pickerBtn.append(imgBox)
                    // }
                    // if(mode == 1&& key == 2){
                    //     that.getSwitchPic(switchDelay2,1);
                    // }
                    // if(mode == 1&& key == 3){
                    //     that.getSwitchPic(switchDelay3,2);
                    // }

                    // imgBox.src = that.switchPic;



                    pickerBtn.addEventListener("click",function(){
                        // console.log(confirmBtn)
                        // imgBox.src = "";
                        console.log("mode  "+mode+"  key: "+data.key)
                        if(data.mode == 1){
                            if(data.key == 1){
                                if(that.switchDelay1 == 0) {
                                    pickerBody.style.opacity = "0.9";

                                    postSwitchData.changeKey = 1;
                                    postSwitchData.lazyCloseStatus = 1;
                                    // that.postData(postSwitchData,6)
                                    that.switchDelay1 = 1;
                                    that.updatePic(imgBox,that.switchDelay1);
                                }else{
                                    pickerBody.style.opacity = "1";
                                    postSwitchData.changeKey = 1;
                                    postSwitchData.lazyCloseStatus = 0;
                                    // that.postData(postSwitchData,6)
                                    that.switchDelay1 = 0;
                                    that.updatePic(imgBox,that.switchDelay1);
                                }
                                that.getSwitchPic( that.switchDelay1,1);
                            }

                            if(data.key == 2){
                                if(that.switchDelay2 == 0) {
                                    pickerBody.style.opacity = "0.9";
                                    // that.getSwitchPic(that.switchDelay2,that.picSwitch);
                                    postSwitchData.changeKey = 2;
                                    postSwitchData.lazyCloseStatus = 1;
                                    // that.postData(postSwitchData,6)
                                    that.switchDelay2 = 1;
                                    that.updatePic(imgBox,that.switchDelay2);
                                }else{
                                    pickerBody.style.opacity = "1";
                                    // that.getSwitchPic(that.switchDelay2,that.picSwitch);
                                    postSwitchData.changeKey = 2;
                                    postSwitchData.lazyCloseStatus = 0;
                                    // that.postData(postSwitchData,6)
                                    that.switchDelay2 = 0;
                                    that.updatePic(imgBox,that.switchDelay2);
                                }
                                that.getSwitchPic( that.switchDelay2,2);
                            }

                            if(data.key == 3){
                                if(that.switchDelay3 == 0) {
                                    pickerBody.style.opacity = "0.9";
                                    // that.getSwitchPic(that.switchDelay3,that.picSwitch);
                                    postSwitchData.changeKey = 3;
                                    postSwitchData.lazyCloseStatus = 1;
                                    // that.postData(postSwitchData,6)
                                    that.switchDelay3 = 1;
                                    that.updatePic(imgBox,that.switchDelay3);
                                }else{
                                    pickerBody.style.opacity = "1";
                                    // that.getSwitchPic(that.switchDelay3,that.picSwitch);
                                    postSwitchData.changeKey = 3;
                                    postSwitchData.lazyCloseStatus = 0;
                                    // that.postData(postSwitchData,6)
                                    that.switchDelay3 = 0;
                                    that.updatePic(imgBox,that.switchDelay3);
                                }
                                that.getSwitchPic( that.switchDelay3,3);

                            }

                        }

                        if(data.mode == 2){
                            if(data.key == 1){
                                if(that.switchOver1 == 0) {
                                    pickerBody.style.opacity = "0.9";
                                    // that.getSwitchPic(that.switchOver1,that.picSwitch);
                                    postSwitchData.changeKey = 1;
                                    postSwitchData.overTimeOffEnable = 0;
                                    // that.postData(postSwitchData,7)
                                    that.switchOver1 = 1;
                                    that.updatePic(imgBox,that.switchOver1);
                                }else{
                                    pickerBody.style.opacity = "1";
                                    // that.getSwitchPic( that.switchOver1,that.picSwitch);
                                    postSwitchData.changeKey = 1;
                                    postSwitchData.overTimeOffEnable = 1;
                                    // that.postData(postSwitchData,7)
                                    that.switchOver1 = 0;
                                    that.updatePic(imgBox,that.switchOver1);
                                }
                                that.getSwitchPic(that.switchOver1,1);
                            }

                            if(data.key == 2){
                                if(that.switchOver2 == 0) {
                                    pickerBody.style.opacity = "0.9";
                                    // that.getSwitchPic(that.switchOver2,that.picSwitch);
                                    postSwitchData.changeKey = 2;
                                    postSwitchData.overTimeOffEnable = 0;
                                    // that.postData(postSwitchData,7)
                                    that.switchOver2 = 1;
                                    that.updatePic(imgBox,that.switchOver2);
                                }else{
                                    pickerBody.style.opacity = "1";
                                    // that.getSwitchPic(that.switchOver2,that.picSwitch);
                                    postSwitchData.changeKey = 2;
                                    postSwitchData.overTimeOffEnable = 1;
                                    // that.postData(postSwitchData,7)
                                    that.switchOver2 = 0;
                                    that.updatePic(imgBox,that.switchOver2);
                                }
                                that.getSwitchPic(that.switchOver2,2);
                            }
                            //
                            if(data.key == 3){
                                if(that.switchOver3 == 0) {
                                    pickerBody.style.opacity = "0.9";
                                    that.getSwitchPic(that.switchOver3,that.picSwitch);
                                    postSwitchData.changeKey = 3;
                                    postSwitchData.overTimeOffEnable = 0;
                                    // that.postData(postSwitchData,7)
                                    that.switchOver3 = 1;
                                    that.updatePic(imgBox,that.switchOver3);
                                }else{
                                    pickerBody.style.opacity = "1";
                                    // that.getSwitchPic(that.switchOver3,that.picSwitch);
                                    postSwitchData.changeKey = 3;
                                    postSwitchData.overTimeOffEnable = 1;
                                    // that.postData(postSwitchData,7)
                                    that.switchOver3 = 0;
                                    that.updatePic(imgBox,that.switchOver3);
                                }
                                that.getSwitchPic(that.switchOver3,3);
                            }

                        }


                        // console.log(data);
                        // if(that.switchDelay1 == 0){
                        //     that.getSwitchPic(that.switchDelay1);
                        //     that.switchDelay1 == 1;
                        // }else{
                        //     that.getSwitchPic(that.switchDelay1);
                        //     that.switchDelay1 == 0;
                        // }

                        // imgBox.src = that.switchPic;
                        // pickerBtn.append(imgBox)
                    },false)
                    if (that.onOff == 1) {
                        homiTitle.innerHTML = that.pickerTitle + that.pickerTitle1;

                    } else {
                        homiTitle.innerHTML = that.pickerTitle + that.pickerTitle1;
                    }
                }, 50)
            },

            postData(data,cmdId){
                let that = this;
                var data1 = {
                    // "mid": that.mid,
                    "devId": that.devId,
                    "cmdId": cmdId,
                    "in": data,
                    "action":"control"
                }
                console.log("post",data1);
                $.ajax({
                    type:"post",
                    data:JSON.stringify(data1),
                    url:global.baseUrl,
                    // url:"http://171.208.222.146:6060/rmscript/iot/intent",
                    dataType:"json",
                    contentType:"application/json",
                    success:function (res) {
                        console.log(res)
                    },
                    error:function(res){
                        console.log("error",res)
                    }
                })
                // this.$axios.post('https://webapi-openapi.aihomi.com/api/v1/oauth/device/control/'+that.pid, [{
                //     "mid": that.mid,
                //     "devId": that.devId,
                //     "cmdId": cmdId,
                //     "in": data
                // }], {
                //     headers: {
                //         'Authorization': 'Bearer '+that.token,
                //         'Content-Type': 'application/json;charset=UTF-8'
                //     }
                // }).then(response => {
                //     console.log(response);
                // }).catch(response => {
                //     console.log("error:  ",response)
                // })
                //     //             // console.log(result)
            },
            toTimingFun(key){
                let that = this;
                let index = 0;
                let data ={};
                if(that.keyCount == 3 && key == 3){
                    index = 4;
                } else {
                    index = key;
                };
                data.keyCount = that.keyCount;data.key = index;
                that.$router.push({path:'/timingPage',query:{data:data}})
                // if()
                // data.map(function(item){
                //     if(item.key == index){
                //         // data = item;
                //         data.changeKey = key
                //         that.$router.push({path:'/timingPage',query:{data:data}})
                //         // console.log(item)
                //     }
                //     // console.log(item)
                // })
                // data.key = key;
                // this.$router.push({name: '/timingPage'})
                // this.$router.push({path:'/timingPage',query:{data:data}})
                // console.log(data)
            },
            closePage(){
                var u = navigator.userAgent;
                var goBack=document.getElementById("goBack");
                // 针对ios原生浏览器处理
                if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && /(Safari)/i.test(u)){
                    goBack.setAttribute("onclick","javascript:window.location=document.referrer;");
                }
            }
        },
        watch: {
            // leftKeyStatus:function (newVal, oldVal) {
            //    newVal?this.control(1,{"oneKeyStatus":1,"changeKey":1}):this.control(1,{"oneKeyStatus":0,"changeKey":1})
            // },
            // middleKeyStatus:function (newVal, oldVal) {
            //    newVal?this.control(1,{"oneKeyStatus":1,"changeKey":1}):this.control(1,{"oneKeyStatus":0,"changeKey":1})
            // },
            // rightKeyStatus:function (newVal, oldVal) {
            //    newVal?this.control(1,{"oneKeyStatus":1,"changeKey":1}):this.control(1,{"oneKeyStatus":0,"changeKey":1})
            // }

            leftDelayTimeValue: function (newVal, oldVal) {
                var that = this;
                if (that.timeId !== 0) {
                    clearTimeout(that.timeId);
                }
                if (newVal >= 0) {

                    that.timeId = setTimeout(function () {
                        that.leftDelayTimeValue -= 1;
                        that.leftShowTime = that.$utils.watchTime(newVal);
                        // console.log("左键",that.leftDelayTimeValue)
                    }, 1000)
                } else {
                    clearTimeout(that.timeId);
                    that.leftShowTime = "";
                    that.leftDelayTimeValue = -1;
                }
            },
            midDelayTimeValue: function (newVal, oldVal) {
                var that = this;
                if (that.timeId2 !== 0) {
                    clearTimeout(that.timeId2);
                }
                if (newVal >= 0) {

                    that.timeId2 = setTimeout(function () {
                        that.midDelayTimeValue -= 1;
                        that.midShowTime = that.$utils.watchTime(newVal);
                        // console.log("中键",that.midDelayTimeValue)
                    }, 1000)
                } else {
                    clearTimeout(that.timeId2);
                    that.midShowTime = "";
                    that.midDelayTimeValue = -1;
                }
                // console.log("aaaaaaaaaaa");
            },
            rightDelayTimeValue: function (newVal, oldVal) {
                var that = this;
                if (that.timeId3 !== 0) {
                    clearTimeout(that.timeId3);
                }
                if (newVal >= 0) {

                    that.timeId3 = setTimeout(function () {
                        that.rightDelayTimeValue -= 1;
                        that.rightShowTime = that.$utils.watchTime(newVal);
                        // console.log("右键",that.rightDelayTimeValue)
                    }, 1000)
                } else {
                    clearTimeout(that.timeId3);
                    that.rightShowTime = "";
                    that.rightDelayTimeValue = -1;
                }
            },
            leftOvertimeVale:function (newVal, oldVal) {
                var that = this;
                // if (that.timeIdOver1 !== 0) {
                //     clearTimeout(that.timeIdOver1);
                // }
                // console.log("chaoshi",newVal)
                if (newVal >= 0) {

                    that.leftShowTime1 = that.$utils.watchTime(newVal);
                    console.log("chaoshi",that.leftShowTime1)
                    // that.leftShowTime1 = newVal;
                    // that.timeIdOver1 = setTimeout(function () {
                    //     that.leftOvertimeVale -= 1;
                    //     // console.log(that.leftTimeValue )
                    // }, 1000)
                } else {
                    // clearTimeout(that.timeIdOver1);
                    that.leftShowTime1 = "";
                    // that.leftOvertimeVale = -1;
                }
            },
            midOvertimeVale:function (newVal, oldVal) {
                var that = this;
                // if (that.timeIdOver2 !== 0) {
                //     clearTimeout(that.timeIdOver2);
                // }
                // console.log(newVal)
                if (newVal >= 0) {
                    that.midShowTime1 = that.$utils.watchTime(newVal);
                    // that.timeIdOver2 = setTimeout(function () {
                    //     that.midOvertimeVale -= 1;
                    //     // console.log(that.leftTimeValue )
                    // }, 1000)
                } else {
                    // clearTimeout(that.timeIdOver2);
                    that.midShowTime1 = "";
                    // that.midOvertimeVale = -1;
                }
            },
            rightOvertimeVale:function (newVal, oldVal) {
                var that = this;
                // if (that.timeIdOver3 !== 0) {
                //     clearTimeout(that.timeIdOver3);
                // }
                // c
                //
                // onsole.log(newVal)
                if (newVal >= 0) {
                    that.rightShowTime1 = that.$utils.watchTime(newVal);
                    // that.timeIdOver3 = setTimeout(function () {
                    //     that.rightOvertimeVale -= 1;
                    //     // console.log(that.leftTimeValue )
                    // }, 1000)
                } else {
                    // clearTimeout(that.timeIdOver3);
                    that.rightShowTime1 = "";
                    // that.rightOvertimeVale = -1;
                }
            },

            // closePage1(){
            //     // this.isBox6 = false;
            //     alert("aaaa");
            //     // Matrix.close();
            // }


        }
    }
</script>
<style scoped>
    .packerStyle{
        width: 95%;
        margin: 0 auto;
        bottom: 50%;
        border-radius: 10px;
    }
    .isBlue{background:#2BB6FC!important;}
    .isYellow{background:#F1AC2E!important;}
    .isBlueTxt{color:#2BB6FC!important;}
    .isOrangeTxt{color: #F1AC2E;}
    .isGrayTxt{color: #333;}
    .weui-icon-success{line-height: 50px;}
    .panel {
        margin-top: 15px;
        background: #FFFFFF;
        box-shadow: 0 0px 6px 0 rgba(163, 163, 163, 0.50);
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 5px 0 5px 0;
        width: 80vw;
    }

    .panel_header {
        height: 40px;
    }

    /*.panel_header {
      /*height: 179px;*/
    /*}*/

    .weui-cells:before {
        /*padding: 0 10px!important;*/
        border-top: none !important;
    }

    .weui-cells:after {
        border-bottom: none !important;
    }

    .weui-panel__hd:after{border:none;}

    .weui-cell__bd{font-size: 16px!important;}

    .weui-panel:before{
        border-top: 0!important;
    }

    .weui-panel:after{
        border-bottom: 0!important;
    }

    .weui-slider__track{background: #F1AC2E;}


    .weui-panel{width: 90%;}

    .dialog-img{width: 100%}
    .dialog-img img{width: 100%;}
    /*.weui-dialog__title{text-align: left!important; background: red;  width: 100%; align-items: flex-start;}*/


    .weui-dialog{border-radius: 11.2px!important; width: 80%;}
    .weui-dialog__hd {
        padding: 1.3em 1.0em 0.5em;
        text-align: left;
    }
    .weui-dialog__title{font-size: 18px;
        color: #383838; font-weight: bold;}

    a{color: #383838;}

   .weui-cell__ft1:after {
        content: " ";
        display: inline-block;
        height: 0.34286rem;
        width: 0.34286rem;
        /*border-width: 0.11429rem 0.11429rem 0 0;*/
        border-width: 0 0.11429rem 0.11429rem 0;
        border-color: #C8C8CD;
        border-style: solid;
        -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        position: relative;
        top: -0.11429rem;
        position: absolute;
        top: 50%;
        margin-top: -0.22857rem;
        right: 1.1429rem;
    }
    .weui-dialog{width: 92%;
        max-width: 100%!important;
        /*position: absolute;*/
        top: 60%;}

    .weui-cell_access:hover{
        background: none!important;
    }

    .weui-cell:before{width: 94%;}
    .outLineBox{width: 180px; height: 180px; position: absolute; top:23%; left: 50%;margin-left: -90px;}
    .outLinePic{ width: 100px; height: 110px; margin: 0 auto;}
    .outLinePic img{width: 100%;}
    /*.weui-cell_access{background: red;}*/
    /*.weui-cell__bd{background: red;}*/
   /*.js_dialog{background: red!important; width: 100%;}*/
   /*.homi-picker-btn{*/
      /*background: blue!important;*/
   /*}*/

    /*.switchPickerBtn{width: 40%!important; background: black!important;}*/
    /*.switchPickerBtn img{width: 100%;}*/


    /*.weui-picker{bottom: 50%!important;}*/
</style>
