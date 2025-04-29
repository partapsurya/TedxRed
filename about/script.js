const data = {
    ted: {
        title: "TED",
        description: "Technology, Entertainment, Design – ideas worth spreading.",
        img: "homepage/1.jpg"  // Update with the correct path
    },
    tedx: {
        title: "TEDx",
        description: "Independently organized TED events around the globe.",
        img: "homepage/2.jpg"  // Update with the correct path
    },
    tedxtiet: {
        title: "TEDxTIET",
        description: "TEDx event hosted by Thapar Institute of Engineering and Technology.",
        img: "homepage/3.jpg"  // Update with the correct path
    }
};
  
  const navItems = document.querySelectorAll(".nav-item");
  const cardTitle = document.getElementById("card-title");
  const cardDesc = document.getElementById("card-description");
  const cardImg = document.querySelector(".card-img");
  
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      // Remove active class from all
      navItems.forEach(nav => nav.classList.remove("active"));
      item.classList.add("active");
  
      const type = item.getAttribute("data-type");
      cardTitle.textContent = data[type].title;
      cardDesc.textContent = data[type].description;
      cardImg.src = data[type].img;
    });
  });
  




