const days = document.querySelectorAll('.day');

days.forEach(day => {
  const title = day.querySelector('h2');
  const ul = day.querySelector('ul');

  // 默认折叠
  ul.style.display = 'none';

  // 点击标题展开/折叠
  title.addEventListener('click', () => {
    ul.style.display = ul.style.display === 'none' ? 'block': 'none';
    
    // 点击卡片切换背景色
    if (day.style.backgroundColor === 'yellow') {
      day.style.backgroundColor = '#ffe4e1';
    } else {
      day.style.backgroundColor = 'yellow';
    }
  });

  // 点击每条 liemoji 跳动
  const items = day.querySelectorAll('li');
  items.forEach(item => {
    item.addEventListener('click', () => {
      item.style.transform = 'translateY(-5px)';
      setTimeout(() => {
        item.style.transform = 'translateY(0)';
      }, 300);
    });
  });
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log('Service Worker Registered'))
    .catch(err => console.log('SW registration failed: ', err));
}



