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
      <div class="image-container lg:max-w-[350px] w-[150px] overflow-hidden">
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
    first:true,
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
  const textColorClass = value.even ? "text-white" : "text-black";
  const bgColorClass = value.even ? "bg-white text-black" : "bg-[#151515] text-white";
  const firstbox = value.first ? "lg:translate-y-[90px]" : " ";
  const buttonClass = `${bgColorClass} py-2 w-full font-mono  text-[1.3rem] mt-10 `;
  
  return `
  <div class="py-4 border border-black px-10 even:bg-[#151515] even:border-none last:bg-white last:border-none w-full text-center lg:min-h-[540px]  lg:w-auto ">
    <div class="flex items-start flex-col ">
      <div class="flex items-center gap-1">
        <sup class="font-semibold text-[2rem] lg:text-[2rem] ${textColorClass}">${value.even ? "$" : "$"}</sup>
        <h1 class="${textColorClass} text-[2.5rem] v_sm:text-[3.6rem] sm:text-[4.5rem] md:text-[3.5rem]  lg:text-[5rem] font-extrabold font-mono">${value.price}</h1>
        <sub class="mt-4 text-[1.2rem] md:text-[1rem] lg:text-[1.2rem] font-bold ${textColorClass}">per month</sub>
      </div>
      <p class="mt-3 text-[1.1rem] md:text-[1.2rem] text-start md:leading-7  ${textColorClass}">${value.para}</p>
      <ul class="list-[square] list-inside flex flex-col text-left text-[1rem] mt-11 gap-5  overflow-y-auto">
        ${value.options.map(option => `<li class="${textColorClass}">${option}</li>`).join("")}
      </ul>
      <button class="${buttonClass} ${firstbox}">Join</button>
    </div>
  </div>
  `;
  
});




const faqs = [
  { 
    question: "Why should I track and analyze business statistics?", 
    answer: "Always tracking and analyzing your business statistics is essential for identifying growth opportunities, improving decision-making, and ensuring long-term success." 
  },
  { 
    question: "What is the benefit of using a single platform for business management?", 
    answer: "Using a single platform for managing sales, team, clients, and marketing simplifies workflows, saves time, and ensures all your data is easily accessible in one place." 
  },
  { 
    question: "How can this platform help improve my business performance?", 
    answer: "This platform provides powerful, affordable, and easy tools to optimize your sales processes, manage teams effectively, and boost client engagement." 
  },
  { 
    question: "Is the platform suitable for small and large businesses?", 
    answer: "Yes, the platform is designed to cater to both small and large businesses, offering flexibility and scalability as your business grows." 
  }
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