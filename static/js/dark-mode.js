document.addEventListener("DOMContentLoaded", function () {
  // 创建按钮
  const toggleBtn = document.createElement("button");
  toggleBtn.id = "dark-mode-toggle";
  toggleBtn.style.position = "fixed";
  toggleBtn.style.bottom = "10px";
  toggleBtn.style.right = "10px";
  toggleBtn.style.zIndex = 9999;
  toggleBtn.style.width = "40px";
  toggleBtn.style.height = "40px";
  toggleBtn.style.border = "none";
  toggleBtn.style.borderRadius = "50%";
  toggleBtn.style.fontSize = "1.2em";
  toggleBtn.style.display = "flex";
  toggleBtn.style.alignItems = "center";
  toggleBtn.style.justifyContent = "center";
  toggleBtn.style.cursor = "pointer";
  toggleBtn.style.transition = "all 0.3s ease";
  toggleBtn.style.backgroundColor = "transparent"; // 浅色主题背景
  toggleBtn.style.color = "#333"; // 浅色主题图标颜色

  // 创建 Font Awesome 图标
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-moon"; // 初始月亮
  toggleBtn.appendChild(icon);

  // 添加到页面
  document.body.appendChild(toggleBtn);

  // Dark Mode CSS
  const darkStyle = document.getElementById("dark-mode-style");

  // 读取上次保存状态
  const saved = localStorage.getItem("darkMode");
  if (saved === "true") {
    darkStyle.disabled = false;
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    toggleBtn.style.backgroundColor = "#343541";
    toggleBtn.style.color = "#f8f8f2";
  }

  // 点击切换
  toggleBtn.addEventListener("click", function () {
    darkStyle.disabled = !darkStyle.disabled;
    localStorage.setItem("darkMode", !darkStyle.disabled);

    if (darkStyle.disabled) {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
      toggleBtn.style.backgroundColor = "#eee";
      toggleBtn.style.color = "#333";
    } else {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
      toggleBtn.style.backgroundColor = "#343541";
      toggleBtn.style.color = "#f8f8f2";
    }
  });

  // Hover 动画
  toggleBtn.addEventListener("mouseover", () => {
    toggleBtn.style.transform = "rotate(15deg)";
  });
  toggleBtn.addEventListener("mouseout", () => {
    toggleBtn.style.transform = "rotate(0deg)";
  });
});
