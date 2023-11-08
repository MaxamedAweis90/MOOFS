let videoList = document.querySelectorAll('.list');

videoList.forEach(video => {
  video.onclick = () => {
    // Add 'active' class to the selected video
    videoList.forEach(item => item.classList.remove('active'));
    video.classList.add('active');

    let src = video.querySelector('.list-video').src;
    let title = video.querySelector('.list-title').innerHTML;
    document.querySelector('.main-video-container .main-video').src = src;
    document.querySelector('.main-video-container .main-video').play();
    document.querySelector('.main-video-container .main-video-title').innerHTML = title;
  };
});