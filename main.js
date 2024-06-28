const accordianItems = document.querySelectorAll(".accordian-item");
accordianItems.forEach((item) => {
  const title = item.querySelector(".accordian-title");
  title.addEventListener("click", () => {
    for (let i = 0; i < accordianItems.length; i++) {
      if (accordianItems[i] != item) {
        accordianItems[i].classList.remove("active");
      } else {
        accordianItems[i].classList.toggle("active");
      }
    }
  });
});
