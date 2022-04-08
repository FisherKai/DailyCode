// 记录抢购次数
let count = 1;
let interval_buy, interval_order;

function buy() {
    console.log(`正在进行第${count}次抢购`);
    // buyBtn2 立即购买
    let buyBtn2 = document.querySelector("#buyBtn2");
    // popupConfirm popup确认按钮
    let popupConfirm = document.querySelector("#popupConfirm");
    if (buyBtn2 && buyBtn2.children[0].innerHTML !== "已预约") {
        buyBtn2.click();
        popupConfirm.click();
        interval_order = setInterval(order, 100);
        clearInterval(interval_buy);
        count = 1;
    }
    count++;
}

function order() {
    console.log(`正在进行第${count}提交订单`);
    // bg_2  提交订单
    // bg_g_jd 确定提交订单
    let bg2 = document.querySelector(".bg_2");
    let bg_g_jd = document.querySelector(".bg_g_jd");
    if (bg2) {
        bg2.click();
        bg_g_jd.click();
        clearInterval(interval_order);
        console.log(`恭喜抢购成功，请去手机端‘待支付’支付`);
    }
}

interval_buy = setInterval(buy, 100);

setTimeout(function () {
    clearInterval(interval_buy);
}, 10000);

// let scr