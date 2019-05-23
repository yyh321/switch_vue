<template>
    <div>
        ssss
    </div>
</template>

<script>
    export default {
        name: "index2",
        created() {
            this.setTime()
        },
        methods: {
            setTime: function () {
                var that = this;
                // if (type == that.onOff) {
                    var data = that.utils.getMutiData(24, 60);
                    this.weui.picker(data.first, data.second, {
                        container: 'body',
                        defaultValue: [0, 0],
                        onChange: function (result) {
                            var itemArray = $(".weui-picker__item");
                            for (var i = 0; i < itemArray.length; i++) {
                                var id = "ele" + i;
                                $("#" + id).remove();
                                $(itemArray[i]).removeClass("homi-picker__item")
                                if ($(itemArray[i]).html() === result[0].value.toString() && i<24) {
                                    var hourElementStr = "<span id='ele" + i + "' style='font-weight: normal;color:#007DFF'> 时</span>"
                                    $(itemArray[i]).append(hourElementStr);
                                    $(itemArray[i]).addClass("homi-picker__item")
                                }
                                if ($(itemArray[i]).html() === result[1].value.toString() && i>=24) {
                                    var secondElementStr = "<span id='ele" + i + "' style='font-weight: normal;color:#007DFF'> 分</span>"
                                    $(itemArray[i]).append(secondElementStr);
                                    $(itemArray[i]).addClass("homi-picker__item")
                                }
                            }
                        },
                        onConfirm: function (result) {
                            that.time = (that.utils.intPlus(result[0].value) + ":" + that.utils.intPlus(result[1].value)).toString();
                        },
                    })
                    setTimeout(function () {
                            $('.homi-picker_hd').html("关闭时间")
                    }, 50)
                // }
            },
        }
    }
</script>

<style scoped>

</style>