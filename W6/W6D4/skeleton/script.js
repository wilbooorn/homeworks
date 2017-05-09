document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  const placesNav = document.getElementsByClassName("list-container")[0];
  placesNav.addEventListener("submit", event => {
    event.preventDefault();
    const placeInputEl = document.getElementsByClassName("favorite-input")[0];
    const placeName = placeInputEl.value;
    placeInputEl.value = "";

    const ul = document.getElementById("sf-places");
    const li = document.createElement("li");
    li.textContent = placeName;
    ul.appendChild(li);

  });


  // adding new photos

  const formButton = document.getElementsByClassName("photo-show-button")[0];
  formButton.addEventListener("click", event => {
    event.preventDefault();
    const dogForm = document.getElementsByClassName("photo-form-container")[0];
    dogForm.classList.toggle("hidden");
  });

  const dogForm = document.getElementsByClassName("photo-form-container")[0];
  dogForm.addEventListener("submit", event => {
    event.preventDefault();
    const dogPicUrlEl = document.getElementsByClassName("photo-url-input")[0];
    const dogPicUrl = dogPicUrlEl.value;
    dogPicUrlEl.value = "";

    const ul = document.getElementsByClassName("dog-photos")[0];
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = dogPicUrl;
    li.appendChild(img);
    ul.append(li);
  });



});
