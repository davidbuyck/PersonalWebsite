// work/js/work.js
const filterButtons = Array.from(document.querySelectorAll(".filterBtn"))
const cards = Array.from(document.querySelectorAll(".projectCard"))

const setActiveFilter = (name) => {
  filterButtons.forEach(b => b.classList.toggle("isActive", b.dataset.filter === name))
  cards.forEach(card => {
    const tags = (card.dataset.tags || "").split(/\s+/).filter(Boolean)
    const show = name === "all" || tags.includes(name)
    card.classList.toggle("isHidden", !show)
  })
}

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => setActiveFilter(btn.dataset.filter))
})

setActiveFilter("all")
