const data = {
    ted: {
        title: "TED",
        description: "TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community.",
        img: "Homepage/4.jpg"  // Update with the correct path
    },
    tedx: {
        title: "TEDx",
        description: "In the spirit of discovering and spreading ideas, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)",
        img: "Homepage/5.jpg"  // Update with the correct path
    },
    tedxtiet: {
        title: "TEDxTIET",
        description: "TEDxTIET is an annual independently organized TED event that commenced in 2015. It is driven by a dedicated team of passionate volunteers, comprising undergraduate and post-graduate students of Thapar Institute of Engineering and Technology (TIET). The main conference at TEDxTIET is a culmination of months of meticulous preparation, bringing together visionaries, innovators, and changemakers for an extraordinary day of exploration and inspiration. Set against the backdrop of Thapar University in Patiala, this event transcends traditional conferences, embodying a celebration of human creativity and resilience.",
        img: "Homepage/7.jpg"  // Update with the correct path
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
  




