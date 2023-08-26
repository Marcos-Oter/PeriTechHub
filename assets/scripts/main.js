const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".category__item").offsetWidth;
const category__item = document.querySelector(".category__item");
const category__button = document.querySelectorAll(".category__section-button");

let isDragging, startX, startScrollLeft;

category__button.forEach(btn =>
    {
        btn.addEventListener("click", () =>
        {
            carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
        }
        );
    });

const startDrag = (xAxis) =>
{
    isDragging = true;
    carousel.classList.add("dragging");
    category__item.classList.add("dragging")

    startX = xAxis.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (xAxis) =>
{
    if(!isDragging) return;
    carousel.scrollLeft = xAxis.pageX;

    carousel.scrollLeft = startScrollLeft - (xAxis.pageX - startX);
}

const stopDragging = () =>
{
    isDragging = false;

    carousel.classList.remove("dragging");
    category__item.classList.remove("dragging")
}

carousel.addEventListener("mousedown",startDrag);
carousel.addEventListener("mousemove",dragging);
carousel.addEventListener("mouseup",stopDragging);