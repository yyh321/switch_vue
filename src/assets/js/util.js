var count = 0;
var sId = 0;
var s2Id = 0;
var cId = 0;
var timeout;

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
function getBlueToothStatus() {
    //监听蓝牙状态变化事件
    window.hilink.onBluetoothAdapterStateChange("onBluetoothAdapterStateChange");
    window.onBluetoothAdapterStateChange = function (res) {
        console.log("蓝牙状态: " + res);
        //字符串转成JSON对象
        res = JSON.parse(res);
        //判断蓝牙适配器是否可用，可否连接
        window.connected = res.available;
        var isIndex = window.onblueToothAdpter(res.available);
        console.log("是否主页:  "+isIndex);
        if (!isIndex) {
            window.history.go(0-(history.length-1));
        }
        if (res.available) {
            clearTimeout(timeout);
            window.bleAdpter = res.available;//蓝牙适配器是否可用
            if (!res.discovering) {//如果没有搜索到设备
                console.log("调用开始连接")
                discoverDevice(); //扫描
                sId = setInterval(function () {
                    console.log("count: " + count);
                    if (count < 5) {
                        count++;
                        if(window.deviceId !== ""){
                            discoverDevice() //重连
                        }
                    } else {
                        count = 0;
                        //清除
                        clearInterval(sId);
                        var body = '<div class="weui-mask"><div class="weui-dialog" style="top: 50%"><div class="weui-dialog__hd"><span class="weui-dialog__title">连接超时</span></div><div class="weui-dialog__bd level-left" style="text-align: left;padding: 4px 15px 30px 24px; font-size: 14px;line-height: 20px;color: #7383A2">请尝试以下操作：</br>1.请确认蓝牙设备已开机，并处于附近。</br>2.请关闭手机蓝牙，再重新开启。（尤其是安卓设备）。</br>3.若仍无法连接，请重启设备。</div><div class="weui-dialog__ft"><a href="javascript:;" onclick="back()" class="weui-dialog__btn weui-dialog__btn_primary" style="font-size: 15px">确定</a></div></div></div>'
                        $("body").append(body);

                        /*if (isIndex) {
                            console.log("index超时了")
                            window.connectOverTime();
                        }else{
                            console.log("超时了")
                        }*/
                    }
                }, 5000)
            }
        } else {
            window.deviceId = ""
            console.log("是否弹:"+window.isIos)
            //请求打开蓝牙
            if (!window.isIos && !isIndex) {
                window.hilink.openBluetoothAdapter();
            }
            timeout = setTimeout(function () {
                var body = '<div class="weui-mask"><div class="weui-dialog" style="top: 50%"><div class="weui-dialog__hd"><span class="weui-dialog__title">连接超时</span></div><div class="weui-dialog__bd level-left" style="text-align: left;padding: 4px 15px 30px 24px; font-size: 14px;line-height: 20px;color: #7383A2">请尝试以下操作：</br>1.请确认蓝牙设备已开机，并处于附近。</br>2.请关闭手机蓝牙，再重新开启。（尤其是安卓设备）。</br>3.若仍无法连接，请重启设备。</div><div class="weui-dialog__ft"><a href="javascript:;" onclick="back()" class="weui-dialog__btn weui-dialog__btn_primary" style="font-size: 15px">确定</a></div></div></div>'
                $("body").append(body);
            },30000)
        }
        clearTimeout(timeout);
    }
    //获取蓝牙模块状态
    window.hilink.getBluetoothAdapterState("getBlueToothState");
    window.getBlueToothState = function (res) {
        res = JSON.parse(res);
        console.log("discover:" + res.discovering + "  available:" + res.available + "  errCode:" + res.errCode);
        var isIndex = window.onblueToothAdpter(res.available);
        if (res.available) {
            window.bleAdpter = res.available;
            if (!res.discovering) {
                discoverDevice();
                sId = setInterval(function () {
                    console.log("count: " + count);
                    if (count < 5) {
                        count++;
                        discoverDevice() //重连
                    } else {
                        count = 0;
                        clearInterval(sId);//停止重连
                        var body = '<div class="weui-mask"><div class="weui-dialog" style="top: 50%"><div class="weui-dialog__hd"><span class="weui-dialog__title">连接超时</span></div><div class="weui-dialog__bd level-left" style="text-align: left;padding: 4px 15px 30px 24px; font-size: 14px;line-height: 20px;color: #7383A2">请尝试以下操作：</br>1.请确认蓝牙设备已开机，并处于附近。</br>2.请关闭手机蓝牙，再重新开启。（尤其是安卓设备）。</br>3.若仍无法连接，请重启设备。</div><div class="weui-dialog__ft"><a href="javascript:;" onclick="back()" class="weui-dialog__btn weui-dialog__btn_primary" style="font-size: 15px">确定</a></div></div></div>'
                        $("body").append(body);
                    }
                }, 5000)
            }
        }else {
            window.deviceId = "";
            if (!window.isIos && !isIndex) {
                window.hilink.openBluetoothAdapter();
            }
            timeout = setTimeout(function () {
                var body = '<div class="weui-mask"><div class="weui-dialog" style="top: 50%"><div class="weui-dialog__hd"><span class="weui-dialog__title">连接超时</span></div><div class="weui-dialog__bd level-left" style="text-align: left;padding: 4px 15px 30px 24px; font-size: 14px;line-height: 20px;color: #7383A2">请尝试以下操作：</br>1.请确认蓝牙设备已开机，并处于附近。</br>2.请关闭手机蓝牙，再重新开启。（尤其是安卓设备）。</br>3.若仍无法连接，请重启设备。</div><div class="weui-dialog__ft"><a href="javascript:;" onclick="back()" class="weui-dialog__btn weui-dialog__btn_primary" style="font-size: 15px">确定</a></div></div></div>'
                $("body").append(body);
            },30000)
        }
    }
}

function discoverDevice() {
    //之前已经连接，则断开；之前没连接，不影响其他
    window.hilink.closeBLEConnection(window.deviceId);
    //结束扫描，会清空所有的扫描结果数据，使startBluetoothDevicesDiscovery之后扫描到的设备可以重新上报
    window.hilink.stopBluetoothDevicesDiscovery();
    //监听扫描的结果
    window.hilink.onBluetoothDeviceFound("onDeviceFound");
    window.hilink.startBluetoothDevicesDiscovery(["6e400001-b5a3-f393-e0a9-e50e24dcca9e"], false, 0)
}

window.onDeviceFound = function (res) {
    // console.log("foundDevice :" + res);
    if (window.isIos) {
        var ios_device = JSON.parse(res);
        var advertisData = ios_device.advertisData;
        if (advertisData != null && advertisData != undefined && advertisData != "") {
            advertisData = advertisData.replace(/\s+/g, "");
            advertisData = advertisData.substring(1, advertisData.length - 1);
            if (advertisData.toUpperCase() == window.uniqueId) {
                console.log("ios is searched:   " + advertisData);
                window.deviceId = ios_device.deviceId;
            }
        }
    } else {
        var android_device = JSON.parse(res)[0];
        var advertisData = android_device.advertisData;
        if (advertisData != null && advertisData != undefined && advertisData != "") {
            if (advertisData.toUpperCase().indexOf(window.uniqueId) != -1) {
                console.log("android is searched:   " + advertisData)
                window.deviceId = android_device.deviceId;
                console.log("window.deviceId=",window.deviceId)
            }
        }

        /*var dev = localStorage.getItem("deviceIdmac");
        console.log("dev=======",dev);
        var dev1 = JSON.parse(dev);
        console.log("dev=======",dev1);
        for(var i = 0; i < dev1.length; i++) {
            console.log("dev1[i].advertisDatas===",dev1[i].advertisDatas);
            console.log("dev1[i].mac=====",dev1[i].mac);
             if (dev1[i].advertisDatas === window.uniqueId.toUpperCase()) {
                 var mac = dev1[i].mac;
             }
        }
        for(var i=0;i<dev1.length;i++){
             console.log(dev1[i].mac);  //取json中的值
        }
        console.log("mac====",mac);
        window.deviceId = mac;
 */

    }
    console.log("deviceId:   ", window.deviceId);
    if (window.deviceId != "") {
        var discoverRet = window.hilink.stopBluetoothDevicesDiscovery();
        console.log("stopDiscover: " + discoverRet);
        if (discoverRet == 0) {
            clearInterval(sId);
            connectDevice();    //连接设备
        }
    }
};
function connectDevice() {
    window.onServiceDiscover = function (res) {
        console.log("onServiceDiscover:   " + res)
        if (!window.isIos) {
            res = JSON.parse(res);
            res = res.errCode;
        }
        console.log("onServiceDiscover:   " + res)
        window.serviceId = res;
        if (res == 0) {
            //通知低功耗蓝牙设备的特征值的值，通过onBLECharacteristicValueChange返回值
            var notifyRetCode = window.hilink.notifyBLECharacteristicValueChange(window.deviceId, "6e400001-b5a3-f393-e0a9-e50e24dcca9e", "6e400003-b5a3-f393-e0a9-e50e24dcca9e", true);
            console.log("notifyRetCode:  " + notifyRetCode);
            if (notifyRetCode == 0) {
                //返回值
                window.hilink.onBLECharacteristicValueChange("onValueChanged")
                window.onValueChanged = function (res) {
                    res = JSON.parse(res);
                    // console.log("change",res);
                    var backStr = res.data.toUpperCase();
                    if (backStr.indexOf("0104") != -1) {
                        writeValue("010001040000");
                    }
                    if (backStr.indexOf("0106") != -1) {
                        writeValue("010001060001" + date2hex());
                    }
                    if (backStr.indexOf("01D20101") != -1) {
                        writeValue("010001D20000");
                    }
                    if (backStr.indexOf("01E") == -1 ||backStr.indexOf("017F") == -1) {
                        console.log("收到命令:   " + backStr);
                        window.onValue(backStr);
                    }
                }
            }
        }
    }
    //监听蓝牙连接状态的改变事件
    window.hilink.onBLEConnectionStateChange("onConnectStateChange");
    if (window.deviceId != "") {
        console.log("hbhbhjbkbhjbhjbhjbhhj"+window.deviceId)
        var connectRet = window.hilink.createBLEConnection(window.deviceId);
        cId = setInterval(function () {
            if(window.serviceId != 0){
                window.hilink.closeBLEConnection(window.deviceId);
                console.log(window.deviceId)
                var connectRet = window.hilink.createBLEConnection(window.deviceId);
                console.log("connectRet=",connectRet)
            }else {
                clearInterval(cId);
            }
        },30000)
        console.log("connectRet:  " + connectRet + "    deviceId:   " + window.deviceId);
    }
    //蓝牙设备建立连接，开始发现设备支持的服务，服务发现完成，调用本接口通知上层
    window.hilink.onBLEServicesDiscovered("onServiceDiscover");
    console.log("yyyyyyyy")
}

window.onConnectStateChange = function (res) {
    console.log("连接状态变化:  " + res)
    res = JSON.parse(res);
    window.connected = res.connected;
    var isIndex = window.onConnect(res.connected);
    console.log("isIndex: "+isIndex);
    if (!res.connected) {
        window.deviceId = "";
        if(!isIndex){
            var body = '<div class="weui-mask"><div class="weui-dialog weui-dialog__custom"><div class="weui-dialog__bd" style="padding: 10px;"><div class="weui-loading loading"></div><br/><span class="errtxt">检测到与设备断开，正在重连...</span></div><div class="weui-dialog__ft"><a href="javascript:;" onclick="back()" class="weui-dialog__btn weui-dialog__btn_primary" style="font-size: 15px">取消</a></div></div></div>'
            $("body").append(body);
        }
        //所有可操作按钮置灰   N秒后进行重连
        if(window.bleAdpter){
            s2Id = setInterval(function () {
                if(count < 5){
                    count++;
                    discoverDevice() //重连
                    console.log("重新连接000000000000=",count);
                }else{
                    count = 0;
                    console.log("-----------停止重连5次已满")
                    clearInterval(s2Id);
                    var body = '<div class="weui-mask"><div class="weui-dialog" style="top: 50%"><div class="weui-dialog__hd"><span class="weui-dialog__title">连接超时</span></div><div class="weui-dialog__bd level-left" style="text-align: left;padding: 4px 15px 30px 24px; font-size: 14px;line-height: 20px;color: #7383A2">请尝试以下操作：</br>1.请确认蓝牙设备已开机，并处于附近。</br>2.请关闭手机蓝牙，再重新开启。（尤其是安卓设备）。</br>3.若仍无法连接，请重启设备。</div><div class="weui-dialog__ft"><a href="javascript:;" onclick="back()" class="weui-dialog__btn weui-dialog__btn_primary" style="font-size: 15px">确定</a></div></div></div>'
                    $("body").append(body);
                }
            }, 5000);
        }
    } else {
        $(".weui-mask").remove();
        count = 0;
        clearInterval(s2Id);

    }
};

window.back=function() {
    window.hilink.closeBLEConnection(window.deviceId);
    window.hilink.finishDeviceActivity()
};

function writeValue(command) {
    console.log("发送命令:   " + command);
    window.hilink.writeBLECharacteristicValue(window.deviceId, "6e400001-b5a3-f393-e0a9-e50e24dcca9e", "6e400002-b5a3-f393-e0a9-e50e24dcca9e", command, "writeOk")
    window.writeOk = function (res) {
    }; //android 必须写回调
}

/**
 *
 * 当前时间 转16进制
 * @returns {*|string}
 */
function date2hex() {
    var result = "";
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    year = year.toString();
    year = year.substring(year.length - 2, year.length);
    year = parseInt(year);
    result = int2HexStr(year) + int2HexStr(month) + int2HexStr(day) + int2HexStr(hour) + int2HexStr(minute) + int2HexStr(second);
    return result;
}

/**
 * 十进制转16进制字符串
 * @param data
 * @returns {string}
 */
function int2HexStr(data) {
    var first = "";
    var second = "";
    if (data / 16 < 10) {
        first = "" + Math.floor(data / 16);
    } else {
        switch (Math.floor(data / 16)) {
            case 10:
                first = "A";
                break;
            case 11:
                first = "B";
                break;
            case 12:
                first = "C";
                break;
            case 13:
                first = "D";
                break;
            case 14:
                first = "E";
                break;
            case 15:
                first = "F";
                break;
        }
    }
    if ((data % 16) < 10) {
        second = "" + (data % 16);
    } else {
        switch (data % 16) {
            case 10:
                second = "A";
                break;
            case 11:
                second = "B";
                break;
            case 12:
                second = "C";
                break;
            case 13:
                second = "D";
                break;
            case 14:
                second = "E";
                break;
            case 15:
                second = "F";
                break;
        }
    }
    return first + second;
}

/**
 * int 前置补0
 * @param i
 * @returns {number | *}
 */
function intPlus(i) {
    i = parseInt(i);
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


/**
 * 16进制前置补0
 * @param data
 * @param length
 * @returns {string}
 */
function hexPlus(data, length) {
    var result = data.toString();
    var len = result.length;
    var count = length - len;
    for (var i = 0; i < count; i++) {
        result = "0" + result;
    }
    return result;
}

/**
 * 16进制转 10进制
 * @param str
 * @returns {string}
 */
function hex2dec(str) {
    var result = "";
    var i = 0;
    var length = str.length;
    var temp = "";
    while (i < length) {
        temp = parseInt(str.substring(i, i + 2), 16).toString();
        result += temp;
        i += 2;
    }
    return result;
}

/**
 *
 * @param data
 * @returns {string}
 */
function int2Bin(data) {
    var result = data.toString(2);
    if (result.length == 1) {
        result = "00" + result;
    } else if (result.length == 2) {
        result = "0" + result;
    }
    return result;
}

function dec2hex(data) {
    var result = "";
    result = data.toString(16).toLocaleUpperCase();
    if (result.length == 1) {
        result = "000" + result;
    } else if (result.length == 2) {
        result = "00" + result;
    } else if (result.length == 3) {
        result = "0" + result;
    }
    return result;
}

function formatSecond(h, s) {
    var t = "";
    if (parseInt(s) > -1) {
        var hour = Math.floor(s / 3600);
        var min = Math.floor(s / 60) % 60;
        var sec = s % 60;
        if (h) {
            if (hour < 10) {
                t = '0' + hour + ":";
            } else {
                t = hour + ":";
            }
        }
        if (min < 10) {
            t += "0";
        }
        t += min + ":";
        if (sec < 10) {
            t += "0";
        }
        t += sec.toFixed(0);
    }
    return t;
}

function formatdelay(h, s) {
    var t = "";
    if (parseInt(s) > -1) {
        var hour = Math.floor(s / 3600);
        var min = Math.floor(s / 60) % 60;
        var sec = s % 60;
        if (h) {
            t = hour + "小时";
        }
        if(min == 0){
            t = t;
        }else {
            t += min + "分钟";
        }

        if(sec == 0){
            t = t;
        }else {
            t += sec + "秒";
        }
    }
    return t;
}

function formatdelay1(h, s) {
    // var  t1 = "00" + ":";
    var t = "";
    if (parseInt(s) > -1) {
        var hour = Math.floor(s / 3600);
        var min = Math.floor(s / 60) % 60;
        var sec = s % 60;
        if (hour) {
            if (hour < 10) {
                t = '0' + hour + ":";
            } else {
                t = hour + ":";
            }
        }
        if (min < 10) {
            t += "0";
        }
        t += min + ":";
        if (sec < 10) {
            t += "0";
        }
        t += sec.toFixed(0);
    }
   console.log("util",t);
    return t;
}

// function formatdelay(h, s) {
//     var t = "";
//     if (parseInt(s) > -1) {
//         var hour = Math.floor(s / 3600);
//         var min = Math.floor(s / 60) % 60;
//         var sec = s % 60;
//         if (h) {
//             t = hour + ":";
//         }else{
//             t = "00 :"
//         }
//         if(min == 0){
//             t = t;
//         }else {
//             t += min + ":";
//         }
//
//         if(sec == 0){
//             t = t;
//         }else {
//             t += sec;
//         }
//     }
//     return t;
// }



/**
 * 时间转秒
 * @param hour
 * @param time
 * @returns {number}
 */

var time2sec = function (hour, time) {
    var result = 0;
    time = time.split(":")
    console.log("time",time.length)
    switch (time.length) {
        case 1:
            result = parseInt(time[0]);
            break;
        case 2:
            if (hour) {
                result = parseInt(time[0]) * 3600 + parseInt(time[1]) * 60;
            } else {
                result = parseInt(time[0]) * 60 + parseInt(time[1]);
            }
            break;
        case 3:
            result = parseInt(time[0]) * 3600 + parseInt(time[1]) * 60 + parseInt(time[2]);
    }
    console.log(result);
    return result;
};

// var time3sec = function (min, time) {
//     var result = 0;
//     time = time.split(":")
//     console.log(time.length)
//     switch (time.length) {
//         case 1:
//             result = parseInt(time[0]);
//             break;
//         case 2:
//             if (min) {
//                 result = parseInt(time[0]) * 60 + parseInt(time[1]) * 1;
//             }
//             break;
//         case 3:
//             result = parseInt(time[0]) * 3600 + parseInt(time[1]) * 60 + parseInt(time[2]);
//     }
//     console.log(result)
//     return result;
// };

/**
 * 星期格式化
 * @param i
 * @returns {string}
 */

function formatWeek(i) {
    var result = "";
    switch (i) {
        case 0:
            result = "周一";
            break;
        case 1:
            result = "周二";
            break;
        case 2:
            result = "周三";
            break;
        case 3:
            result = "周四";
            break;
        case 4:
            result = "周五";
            break;
        case 5:
            result = "周六";
            break;
        case 6:
            result = "周日";
            break;
    }
    return result;
}

function getRepeatDesc(repeat) {
    var repeatStr = repeat.toString(2);
    var len = repeatStr.length;
    for (var i = 0; i < 8 - len; i++) {
        repeatStr = "0" + repeatStr;
    }
    return getWeek(repeatStr);
}

function getWeek(repeatStr) {
    if (repeatStr === "00000000" || repeatStr === "00000001") {
        return "启动一次"
    } else if (repeatStr === "11111111" || repeatStr === "11111110") {
        return "每天"
    } else if (repeatStr === "11000001" || repeatStr === "11000000") {
        return "周末"
    } else if (repeatStr === "00111111" || repeatStr === "00111110") {
        return "工作日"
    } else {
        var week = "";
        for (var i = 0; i < 7; i++) {
            // console.log("532kuang==",week);
            week = (repeatStr.substring(i, i + 1) == 1 ? (formatWeek(6 - i) + "，") : "") + week;
            // console.log("534kuang",week);
        }
        // console.log("537kuang",week.length - 1);
        return week.substring(0, week.length - 1);
        // console.log("537kuang",week.length - 1);
    }
}


function getMutiDatadelay(hour, min, second) {
    var result = {}
    var firstCol = []
    var secondCol = []
    for (var i = 0; i < hour; i++) {
        var temp = {};
        if (second) {
            temp.label = i + "分";
            temp.value = i;
        } else {
            temp.label = i + "时";
            temp.value = i;
        }
        firstCol.push(temp);
    }

    for (var i = 0; i < min; i++) {
        var temp = {};
        if (min == 6) {
            temp.label = i * 10 + "分";
            temp.value = i * 10;
        } else {
            if (second) {
                temp.label = i + "秒";
                temp.value = i;
            } else {
                temp.label = i + "分";
                temp.value = i;
            }
        }
        secondCol.push(temp);
    }

    result.first = firstCol;
    result.second = secondCol;
    return result;
}

/**
 * 设置定时
 * @param index  定时编号num
 * @param enable 定时使能
 * @param option 开/关
 * @param time  时间
 * @param repeat 重复周期
 * @param key 按键
 * @returns {string}
 */
function joinTimeCommand(index, enable, option, time, repeat, key) {
    if(repeat.length == 1){
        repeat = "0"+repeat;
    }
    var command = "0144010" + index.toString() + "0" + (enable ? "1" : "0") + "0" + option.toString() + time.toString() + repeat.toString() + "0" + key.toString();
    return command;
}

function watch(time) {
    var hour = parseInt(time / 3600);
    var second = parseInt(time % 3600);
    var minute = parseInt(second / 60);
    var second1 = second % 60;
    return intPlus(hour) + ":" + intPlus(minute) + ":" + intPlus(second1);
}

function testAngle (value,key) {
    console.log("send command :  "+value)
    var testCommand = "0155020";
    testCommand = testCommand + key;
    testCommand += int2HexStr(value);
    writeValue(testCommand);
}

function getMutiData(hour, min, second) {
    var result = {}
    var firstCol = []
    var secondCol = []
    for (var i = 0; i < hour; i++) {
        var temp = {};
        if (second) {
            if(i>=0 && i<10){
                temp.label = "0" + i;
                temp.value = "0" + i;
            }else {
                temp.label = i;
                temp.value = i;
            }
        } else {
            if(i>=0 && i<10){
                temp.label = "0" + i;
                temp.value = "0" + i;
            }else {
                temp.label = i;
                temp.value = i;
            }
        }
        firstCol.push(temp);
    }

    for (var i = 0; i < min; i++) {
        var temp = {};
        if (min == 6) {
            temp.label = i * 10 ;
            temp.value = i * 10;
        } else {
            if (second) {
                if(i>=0 && i<10){
                    temp.label = "0" + i;
                    temp.value = "0" + i;
                }else {
                    temp.label = i;
                    temp.value = i;
                }
            } else {
                if(i>=0 && i<10){
                    temp.label = "0" + i;
                    temp.value = "0" + i;
                }else {
                    temp.label = i;
                    temp.value = i;
                }
            }
        }
        secondCol.push(temp);
    }

    result.first = firstCol;
    result.second = secondCol;
    return result;
}

function getMutiData2(min, second) {
    var result = {}
    var firstCol = []
    var secondCol = []
    for (var i = 0; i < hour; i++) {
        var temp = {};
        if (second) {
            if(i>=0 && i<10){
                temp.label = "0" + i;
                temp.value = "0" + i;
            }else {
                temp.label = i;
                temp.value = i;
            }
        } else {
            if(i>=0 && i<10){
                temp.label = "0" + i;
                temp.value = "0" + i;
            }else {
                temp.label = i;
                temp.value = i;
            }
        }
        firstCol.push(temp);
    }

    for (var i = 0; i < min; i++) {
        var temp = {};
        if (min == 6) {
            temp.label = i * 10 ;
            temp.value = i * 10;
        } else {
            if (second) {
                if(i>=0 && i<10){
                    temp.label = "0" + i;
                    temp.value = "0" + i;
                }else {
                    temp.label = i;
                    temp.value = i;
                }
            } else {
                if(i>=0 && i<10){
                    temp.label = "0" + i;
                    temp.value = "0" + i;
                }else {
                    temp.label = i;
                    temp.value = i;
                }
            }
        }
        secondCol.push(temp);
    }

    result.first = firstCol;
    result.second = secondCol;
    return result;
}

function addClass(element,value) {
    if (!element.className) {
        element.className = value;
    } else {
        newClassName = element.className;
        newClassName+= " ";
        newClassName+= value;
        element.className = newClassName;
    }
}

// function getRepeatDesc(repeat) {
//     var repeatStr = repeat.toString(2);
//     var len = repeatStr.length;
//     for (var i = 0; i < 8 - len; i++) {
//         repeatStr = "0" + repeatStr;
//     }
//     return getWeek(repeatStr);
// }


export default {
    getMutiData:getMutiData,
    getBlueToothStatus: getBlueToothStatus,
    writeValue: writeValue,
    int2Bin: int2Bin,
    int2HexStr: int2HexStr,
    dec2hex: dec2hex,
    formatSecond: formatSecond,
    formatdelay:formatdelay,
    formatdelay1:formatdelay1,
    intPlus: intPlus,
    getRepeatDesc: getRepeatDesc,
    getMutiData: getMutiData,
    hexPlus: hexPlus,
    joinTimeCommand: joinTimeCommand,
    time2sec: time2sec,
    watchTime:watch,
    formatWeek:formatWeek,
    testAngle:testAngle,
    hex2dec:hex2dec,
    getWeek:getWeek,
    getQueryString:getQueryString,
    // getRepeatDesc:getRepeatDesc
}



