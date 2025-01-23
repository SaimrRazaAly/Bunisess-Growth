const data = [
  {
    title: "Shared Cloud Libraries",
    paragraph:"Navigate to the Your work panel in the left sidebar Select the library you want to share. Select the Share icon in the upper right to share the library.",
    image: "asserts/icons/one.svg",
  },
  {
    title: "Free developer handoff, right inside",
    paragraph:"Cloud Inspector makes it easy for developers to get the information they need to turn pixels into code — all in the browser and, most importantly, for free.",
    image: "asserts/icons/two.svg",
  },
  {
    title: "Real-time collaborative editing",
    paragraph:"Room Service helps you build real-time collaborative features. Add real-time data sync! Let users edit the same data at the same time.",
    image: "asserts/icons/three.svg",
  },
  {
    title: "Integrations with the Cloud API",
    paragraph:"Unlocking that value requires an iPaaS that delivers the transformative power of APIs and integration. ",
    image: "asserts/icons/four.svg",
  },
];

let List = document.querySelector("#how-list");

List.innerHTML = data.map((value) => {
  return `
             <div class="flex items-center text-start justify-center gap-4">
      <div class="image-container lg:max-w-[300px] w-[150px] overflow-hidden">
        <img src="${value.image}" alt="" class="w-full h-auto object-contain" />
      </div>
      <div class="info-text">
        <h3 class="font-semibold mb-2 text-[20px]">${value.title}</h3>
        <p class="font-extralight">${value.paragraph}</p>
      </div>
    </div>
        `;
});

const pricing = [
  {
    price: 49,
    para: "A pay -once license, just for you",
    options: [
      "The Mac app -- yours to keep",
      "  Beautiful White_level",
      "One year of saving to Cloud",
    ],
  },
  {
    price: 99,
    para: "A pay -once license, just for you",
    options: [
      "The Mac app -- yours to keep",
      "  Beautiful White_level",
      "One year of saving to Cloud",
      "  Beautiful White_level",
      "One year of saving to Cloud",
    ],

    even: true,
  },
  {
    price: 299,
    para: "A pay -once license, just for you",
    options: [
      "The Mac app -- yours to keep",
      "  Beautiful White_level",
      "The Mac app -- yours to keep",
      "  Beautiful White_level",
      "One year of saving to Cloud",
    ],
  },
];

let pricing_seciton = document.querySelector("#pricing-section");

pricing_seciton.innerHTML = pricing.map((value) => {
  return `
  <div class="py-4 border border-black px-10 even:bg-[#151515] even:border-none last:bg-white last:border-none w-full text-center lg:w-auto">
  <div class="flex items-start flex-col">
      <div class=flex items-center gap-1>
      <sup class="font-semibold translate-y-[50px] text-[2rem] lg:text-[1.5rem]  md:translate-y-10 ${
        value.even ? " text-white" : " text-black"
      }">$</sup>
  <h1 class=" ${
    value.even ? " text-white" : " text-black"
  } text-[2rem] sm:text-[4.5rem] md:text-[3.5rem] font-extrabold font-mono   ">${value.price}</h1>
  <sub class="translate-y-[70px]  ${
    value.even ? " text-white" : " text-black"
  }  text-[1.2rem] mt-4  md:text-[1rem] font-bold  md:translate-y-10 translate-y-12">per month</sub>
  </div>
  <p class=" text-[1.7rem] md:text-[1.2rem]  text-start md:leading-7 leading-10 ${value.even ? " text-white" : " text-black"}">${
    value.para
  }</p>
  
  <ul class="list-[square] list-inside flex flex-col  text-left text-[1rem] mt-11 gap-5  h-[15rem] ">

   ${value.options.map((option) => {
     return `<li class=${
       value.even ? "text-white " : "text-black"
      }>${option}</li>`;
   }).join("")}
      
  </ul>
  
  
    <button class="${
      value.even ? "bg-white text-black" : "bg-[#151515]  text-white"
    }  py-2 w-full  font-mono text-[1.3rem] mt-0 lg:mt-10">Join</button>
 
  </div>


</div>
        `;
});




const faqs = [
  { question: "What is Tailwind CSS?", answer: "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs." },
  { question: "How do I install Tailwind CSS?", answer: "You can install Tailwind via npm, yarn, or by using a CDN for quick setups." },
  { question: "What is the benefit of using utility-first CSS?", answer: "It allows for faster styling, reduces the need for custom CSS, and encourages a modular approach." },
  { question: "Can I use Tailwind CSS with React?", answer: "Yes, Tailwind CSS works well with React, and many developers use it in their React projects." }
];

const faqContainer = document.getElementById('faq-container');

// Function to generate FAQ item HTML
function createFaqItem(faq, index) {
  return `
      <div class="mb-4 border-b border-gray-300">
          <button 
              class="text-[1.2rem] font-bold p-2 w-full text-left text-lg text-gray-800 flex items-center justify-between focus:outline-none"
              onclick="toggleAnswer(${index})">
              ${faq.question}
              <span id="icon-${index}" class="text-[1.4rem]">+</span>
          </button>
          <p id="answer-${index}" 
             class=" p-2 text-[1rem] mt-1 text-gray-600 hidden transition-all duration-500 ease-in-out max-h-0 overflow-hidden">
              ${faq.answer}
          </p>
      </div>
  `;
}

// Render FAQ items
faqContainer.innerHTML = faqs.map((faq, index) => createFaqItem(faq, index)).join("");

// Function to toggle FAQ answers
function toggleAnswer(index) {
  const answer = document.getElementById(`answer-${index}`);
  const icon = document.getElementById(`icon-${index}`);
  const allAnswers = document.querySelectorAll('#faq-container p');
  const allIcons = document.querySelectorAll('#faq-container span');

  // Close all other answers
  allAnswers.forEach((ans, i) => {
      if (i !== index && !ans.classList.contains('hidden')) {
          ans.classList.add('hidden', 'max-h-0');
          ans.classList.remove('max-h-[1000px]');
          allIcons[i].textContent = '+';
      }
  });

  // Toggle the clicked answer
  if (answer.classList.contains('hidden')) {
      answer.classList.remove('hidden');
      answer.classList.add('max-h-[1000px]', 'opacity-100');
      icon.textContent = '-';
  } else {
      answer.classList.add('hidden', 'max-h-0');
      answer.classList.remove('max-h-[1000px]');
      icon.textContent = '+';
  }
}

toggleAnswer(0)

//  navbar 

let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
const loginBtn = document.getElementById('login-btn');


window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;


  if (scrollTop > lastScrollTop) {
    // User is scrolling down, hide the navbar
    navbar.style.top = '-100px'; // Moves the navbar off-screen;
  } 
  else if (scrollTop == 0) {
    navbar.classList.remove('bg-white', 'p-2', 'shadow-md');
    navbar.style.top = '0';
    loginBtn.classList.remove('underline');
  }
  else {
    // User is scrolling up, show the navbar
    navbar.style.top = '0';
    navbar.classList.add('bg-white','!py-2', 'shadow-md');
    loginBtn.classList.add('underline');
  }

  // Update the last scroll position
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Avoid negative scroll

});