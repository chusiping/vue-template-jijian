<template>
    <div id="all">
        <input type="text" id="suggestId" name="address_detail" placeholder="地址" v-model="address_detail"
            class="input_style">
        <div id="allmap"></div>
    </div>
</template>
<script>
export default {
    name: 'home',
    data() {
        return {
            address_detail: null,
            userlocation: {
                lng: '121.160724',
                lat: '31.173277',
            },
        }
    },
    mounted() {
        this.$nextTick(aaa)
    },
}

function aaa() {
    let th = this
    // 创建Map实例
    let map = new BMap.Map('allmap')
    // 初始化地图,设置中心点坐标，
    let point = new BMap.Point(121.160724, 31.173277) // 创建点坐标，汉得公司的经纬度坐标
    map.centerAndZoom(point, 15)
    map.enableScrollWheelZoom()
    let ac = new BMap.Autocomplete( // 建立一个自动完成的对象
        {
            input: 'suggestId',
            location: map,
        }
    )
    let myValue
    ac.addEventListener('onconfirm', function (e) { // 鼠标点击下拉列表后的事件
        let _value = e.item.value
        myValue = _value.province + _value.city + _value.district + _value
        .street + _value.business
        this.address_detail = myValue
        setPlace()
    })

    function setPlace() {
        map.clearOverlays() // 清除地图上所有覆盖物
        function myFun() {
            th.userlocation = local.getResults().getPoi(0).point // 获取第一个智能搜索的结果
            map.centerAndZoom(th.userlocation, 18)
            map.addOverlay(new BMap.Marker(th.userlocation)) // 添加标注
        }

        var local = new BMap.LocalSearch(map, { // 智能搜索
            onSearchComplete: myFun,
        })
        local.search(myValue)

        // 测试输出坐标（指的是输入框最后确定地点的经纬度）
        map.addEventListener('click', (e) => {
            // 经度
            console.log(th.userlocation.lng)
            // 维度
            console.log(th.userlocation.lat)
        })
    }
}
</script>

<style scoped>
html {
    height: 100%;
    width: 80%;
}

body {
    height: 80%;
    margin: 10px;
    padding: 10px
}

#allmap {
    height: 80%
}
</style>