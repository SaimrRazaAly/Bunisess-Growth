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
            <div class="md:max-w-[150px] w-[100px] aspect-auto"><img src="${value.image}" alt="" width="md:100% 100px"></div>
            <div class="info-text">
              <h3 class="font-semibold mb-2 text-[20px]">${value.title}</h3>
              <p class="font-extralight">${value.paragraph}</p>
            </div>
          </div>
        `;
});

