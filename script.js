// 获取相册容器
const galleryContainer = document.getElementById('gallery');

// 从 images.json 加载图片并动态创建相册图片元素
fetch('images.json')
  .then(response => response.json())
  .then(images => {
    images.forEach((imageFile, index) => {
      const div = document.createElement('div');
      div.classList.add('gallery-item');

      const img = document.createElement('img');
      img.src = `images/${imageFile}`;
      img.alt = `Image ${index + 1}`;
      img.classList.add('gallery-img');

      div.appendChild(img);
      galleryContainer.appendChild(div);
    });

    // 为所有图片添加点击事件
    setupImageClickEvents();
  });

// 获取模态窗口元素
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');

// 设置图片点击事件
function setupImageClickEvents() {
  const galleryImages = document.querySelectorAll('.gallery-img');
  galleryImages.forEach(img => {
    img.addEventListener('click', function () {
      modal.style.display = "flex";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
    });
  });
}

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
