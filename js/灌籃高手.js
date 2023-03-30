window.onload = function () {

    // 點擊按鈕切換圖片，先獲取2個按鈕
    let prev = document.getElementById("prev")
    let next = document.getElementById("next")

    // 獲取img標籤
    let img = document.getElementsByClassName("img")[0]

    // 創建一個數組，用來保存圖片的路徑
    let imgArr = ["../images/01.jpg", "../images/1.jpg", "../images/2.jpg", "../images/3.jpg", "../images/4.jpg", "../images/5.jpg", "../images/6.jpg", "../images/7.jpg", "../images/8.jpg", "../images/9.jpg", "../images/10.jpg", "../images/11.jpg", "../images/12.jpg", "../images/13.jpg", "../images/14.jpg", "../images/15.jpg", "../images/16.jpg", "../images/17.jpg", "../images/18.jpg", "../images/19.jpg", "../images/20.jpg", "../images/21.jpg", "../images/22.jpg"]

    // 創建一個數組，用來保存圖片的名稱
    let imgNameArr = ["灌籃高手"]

    // 創建一個變量,來保存當前正在顯示的圖片索引
    let index = 0

    // 獲取id為info的p元素
    let info = document.getElementById("info")

    // 設置提示文字
    // img_Name.innerHTML = imgNameArr[index]
    info.innerHTML = "總共 " + imgArr.length + " 張圖片 - 第 " + (index + 1) + " 張"



    // 分別為2個按鈕綁定單擊響應函數
    prev.onclick = function () {
        // 切換到上一張,index自減
        index--
        // 判斷index是否小於0
        if (index < 0) {
            // 回到第四張
            index = imgArr.length - 1
        }
        // 要切換圖片,就是要修改img標籤的src屬性 => 要修改一個元素的屬性 元素.屬性=屬性值
        img.src = imgArr[index]

        // 設置提示文字
        // img_Name.innerHTML = imgNameArr[index]
        info.innerHTML = "總共 " + imgArr.length + " 張圖片 - 第 " + (index + 1) + " 張"

    }


    next.onclick = function () {
        // 切換到下一張是index自增
        index++
        if (index > imgArr.length - 1) {
            // 回到第一張
            index = 0
        }
        // 要切換圖片,就是要修改img標籤的src屬性 => 要修改一個元素的屬性 元素.屬性=屬性值
        img.src = imgArr[index]

        // 設置提示文字
        // img_Name.innerHTML = imgNameArr[index]
        info.innerHTML = "總共 " + imgArr.length + " 張圖片 - 第 " + (index + 1) + " 張"

    }
}