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
          <div class="lg:max-w-[300px]  w-[150px]"><img src="${value.image}" alt="" ></div>
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

console.log(a);


// faq section 

function toggleAccordion(item) {
  const content = document.getElementById(`content-${item}`);
  const icon = document.getElementById(`icon-${item}`);
  const isVisible = !content.classList.contains('hidden');

  // Toggle visibility
  content.classList.toggle('hidden');
  icon.classList.toggle('rotate-180', !isVisible);
}