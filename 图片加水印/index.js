window.onload = function () {
    bindEvent();
}

function bindEvent() {
    const uploadEle = document.getElementById("upload");
    const containerEle = document.getElementById("container");

    uploadEle.addEventListener('change', function (e) {
        let file = e.target.files[0];
        containerEle.appendChild(file)
    })
}