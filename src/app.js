const data = [
  {
    title: "Shared Cloud Libraries",
    paragraph:
      "Navigate to the Your work panel in the left sidebar Select the library you want to share. Select the Share icon in the upper right to share the library.",
    image: "asserts/icons/one.svg",
  },
  {
    title: "Free developer handoff, right inside",
    paragraph:
      "Cloud Inspector makes it easy for developers to get the information they need to turn pixels into code — all in the browser and, most importantly, for free.",
    image: "asserts/icons/two.svg",
  },
  {
    title: "Real-time collaborative editing",
    paragraph:
      "Room Service helps you build real-time collaborative features. Add real-time data sync! Let users edit the same data at the same time.",
    image: "asserts/icons/three.svg",
  },
  {
    title: "Integrations with the Cloud API",
    paragraph:
      "Unlocking that value requires an iPaaS that delivers the transformative power of APIs and integration. ",
    image: "asserts/icons/four.svg",
  },
];

let List = document.querySelector("#how-list");

List.innerHTML = data.map((value) => {
  return `
          <div class="flex items-center text-start  justify-center gap-4">
          <div class="md:max-w-[150px] w-[100px] "><img src="${value.image}" alt="" width="md:100% 100px"></div>
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
  <div class=" py-4 border border-black px-5 even:bg-[#151515]">
  <div class="flex items-start flex-col">
      <div class=flex items-center gap-1>
      <sup class="font-semibold text-[1.5rem]  ${value.even ? " text-white" : " text-black"}">$</sup>
  <h1 class=" ${value.even ? " text-white" : " text-black"} text-[4.5rem] font-extrabold font-mono   ">${value.price}</h1>
  <sub class="  ${value.even ? " text-white" : " text-black"} text-[1.2rem] font-bold translate-y-4">per month</sub>
  </div>
  <p class="text-[1.4rem]   ${value.even ? " text-white" : " text-black"}">${value.para}</p>
  
  <ul class="list-[square] list-inside flex flex-col  text-left text-[1.2rem] mt-11 border h-[15rem] ">

   ${value.options.map((option) => {
     return `<li class=${
       value.even ? "text-white" : "text-black"
     }>${option}</li>`;
   })}
      
  </ul>
  
  
    <button class="${value.even ? "bg-white text-black" : "bg-[#151515]  text-white"}  py-2 w-full  font-mono text-[1.3rem] mt-10">Join</button>
 
  </div>


</div>
        `;
});

console.log(a);
