// 图片文件名列表
const imageFiles = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg',
    // 你可以添加更多图片，不需要修改 HTML 文件
];

// 获取相册容器
const galleryContainer = document.getElementById('gallery');

// 动态创建相册图片元素
imageFiles.forEach((imageFile, index) => {
    const div = document.createElement('div');
    div.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = `images/${imageFile}`;
    img.alt = `Image ${index + 1}`;
    img.classList.add('gallery-img');

    div.appendChild(img);
    galleryContainer.appendChild(div);
});

// 获取模态窗口元素
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');

// 所有图片点击事件
galleryContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('gallery-img')) {
        modal.style.display = "flex";
        modalImg.src = event.target.src;
        captionText.innerHTML = event.target.alt;
    }
});

// 关闭模态窗口
const close = document.getElementsByClassName("close")[0];
close.onclick = function() { 
    modal.style.display = "none";
};

// 点击模态背景关闭窗口
modal.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
