let image: HTMLImageElement | null = document.querySelector(".img")

function unBlurImage(this: HTMLImageElement) {
  this.classList.add("un-blur")
}

image?.addEventListener("mouseenter", unBlurImage)

image?.addEventListener("mouseleave", function (this: HTMLImageElement) {
  this.classList.remove("un-blur")
})
