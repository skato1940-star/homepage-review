// 例：ページ読み込み時にアニメーションを追加するなど
window.onload = () => {
  console.log("ページが読み込まれました");
};

// 更新情報の読み込み
fetch("news.json")
  .then(res => res.json())
  .then(newsItems => {
    const newsList = document.querySelector(".news ul");
    newsList.innerHTML = ""; // 既存の内容をクリア

    newsItems.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.date} ${item.text}`;
      newsList.appendChild(li);
    });
  });
