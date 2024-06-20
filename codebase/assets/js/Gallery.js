//For Showing Full Image

var fullImgBox = document.getElementById("fullImgBox");
    var fullImg = document.getElementById("fullImg");

    function openFullImg(pic){
        fullImgBox.style.display = "flex";
        fullImg.src = pic;
    }

    function closeFullImg()
    {
        fullImgBox.style.display = "none";
    }
// For Filtering

// Select all filter buttons and filterable Images
const filterbuttons = document.querySelectorAll(".filter-buttons button");
const filterableimages = document.querySelectorAll(".img-and-cont .section");

// Define the filter image function
const filterimages = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    // Iterate over each filterable image
    filterableimages.forEach( section => {
        // Add "hide" class to hide the image initiality
        section.classList.add("hide");
        //check if the image matches the selected filter or "All" is selected
        if(section.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            section.classList.remove("hide");
        }
    })
}
// Add click event listener to each filter button
filterbuttons.forEach(button => button.addEventListener("click", filterimages));