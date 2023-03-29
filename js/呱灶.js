// 地圖api
function initMap() {
    var Station_latlng = { lat: 25.026334, lng: 121.466676 };	// 台北車站的經緯度
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,	//放大的倍率

        center: Station_latlng	//初始化的地圖中心位置
    });

    //--------下面是呼叫一個新marker------

    var marker = new google.maps.Marker({
        position: Station_latlng,	//marker的放置位置
        map: map //這邊的map指的是第四行的map變數
    });

}
