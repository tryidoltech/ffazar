const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
});
let items = [
    {
        heading: "Let your mind explore new world",
        description: "This is the description for the first item.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo hic, corrupti perferendis nam excepturi quaerat sequi doloribus eaque iusto laborum quibusdam repellat, labore laboriosam repudiandae ducimus voluptatibus non cumque vitae.",
        image: "https://ouch-cdn2.icons8.com/9PPmo9AYtXt7aNW4QRyHPWnrVk6wB9k2EKUbKu7hfAA/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjIw/L2Q3YjBhOWEyLTA2/YzUtNDU3Ni05YzE4/LTJkMTFkYWFlYTAz/Mi5zdmc.png",
        buttonText: "Learn More"
    },
    {
        heading: "Let your mind explore new world",
        description: "This is the description for the second item.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo hic, corrupti perferendis nam excepturi quaerat sequi doloribus eaque iusto laborum quibusdam repellat, labore laboriosam repudiandae ducimus voluptatibus non cumque vitae.",
        image: "https://ouch-cdn2.icons8.com/MkMiifgW_zLA-TS8ACfSBm0NJU_p17WIublFVdVQNbo/rs:fit:368:245/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjMw/L2ZkNTkxOWJlLWRj/MDUtNDRjNi1hZDc0/LTk4MzRjMzc0ZjRl/NC5wbmc.png",
        buttonText: "Discover More"
    },
    {
        heading: "Let your mind explore new world",
        description: "This is the description for the third item.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo hic, corrupti perferendis nam excepturi quaerat sequi doloribus eaque iusto laborum quibusdam repellat, labore laboriosam repudiandae ducimus voluptatibus non cumque vitae.",
        image: "https://ouch-cdn2.icons8.com/WprnpqE4i1dOjWy3yHItGX43JUU_CDtFKW8zVCNb6vg/rs:fit:368:265/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTc1/LzNhMzMyZWY0LTc5/MjMtNDQ5Zi1hOWY3/LWFhYjFmNGMzNGQx/OS5wbmc.png",
        buttonText: "Explore"
    }

];

let currentItem = 0;

function updateShowcase() {
    const headingElement = document.getElementById('heading');
    const descriptionElement = document.getElementById('description');
    const imageElement = document.getElementById('showcase-image');
    const buttonElement = document.getElementById('action-btn');

    // Apply fade-out effect
    document.querySelector('.showcase').classList.remove('fade-in');
    setTimeout(() => {
        // Update content after fade-out
        headingElement.textContent = items[currentItem].heading;
        descriptionElement.textContent = items[currentItem].description;
        imageElement.src = items[currentItem].image;
        buttonElement.textContent = items[currentItem].buttonText;

        // Apply fade-in effect
        document.querySelector('.showcase').classList.add('fade-in');

        // Move to next item in the array
        currentItem = (currentItem + 1) % items.length;
    }, 500);  // Matches the transition time
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    setInterval(updateShowcase, 2000);  // Change every 2 seconds
});
