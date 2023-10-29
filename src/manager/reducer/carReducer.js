const initalState = [
  {
    id: crypto.randomUUID(),
    category: "comfort-sport",
    image:
      "https://www.motortrend.com/uploads/2023/01/2023-Mercedes-AMG-E-63S-4Matic-1.jpg?fit=around%7C875:492.1875",
    title1: "Mercedes",
    title2: "Mersedes",
    model: "E-350",
    info: "Embark on an extraordinary journey with our elite comfort-sport car rentals. Discover the perfect fusion of opulent comfort and exhilarating performance, ensuring every mile is a luxurious adventure on the road",
    year: 2023,
    price: 300,
  },
  {
    id: crypto.randomUUID(),
    category: "comfort-sport",
    image:
      "https://kolesa-uploads.ru/-/d6538655-f424-4d60-8986-b34749d2ea75/bmw-m5-front1-mini.jpg",
    title1: "BMW",
    title2: "BMW",
    model: "M5",
    info: "Embark on an extraordinary journey with our elite comfort-sport car rentals. Discover the perfect fusion of opulent comfort and exhilarating performance, ensuring every mile is a luxurious adventure on the road",
    year: 2023,
    price: 300,
  },
  {
    id: crypto.randomUUID(),
    category: "comfort-sport",
    image:
      "https://cdn.carbuzz.com/gallery-images/1600/1069000/700/1069703.jpg",
    title1: "Audi",
    title2: "Audi",
    model: "RS-7",
    info: "Embark on an extraordinary journey with our elite comfort-sport car rentals. Discover the perfect fusion of opulent comfort and exhilarating performance, ensuring every mile is a luxurious adventure on the road",
    year: 2023,
    price: 300,
  },
  {
    id: crypto.randomUUID(),
    category: "comfort-sport",
    image:
      "https://www.cnet.com/a/img/resize/32491d3d2aa6b75566d4ed55ed2646f609059b40/hub/2022/11/22/c907fd7e-74b7-4498-b74a-cd2009d55902/carrera-t-promo.jpg?auto=webp&width=1920",
    title1: "Porche",
    title2: "Porche",
    model: "911",
    info: "Embark on an extraordinary journey with our elite comfort-sport car rentals. Discover the perfect fusion of opulent comfort and exhilarating performance, ensuring every mile is a luxurious adventure on the road",
    year: 2023,
    price: 270,
  },
  {
    id: crypto.randomUUID(),
    category: "Off Road ",
    image:
      "https://daily-motor.ru/wp-content/uploads/2023/04/Brabus-900-Superblack-official-3.jpg",
    title1: "Gelandewagen",
    title2: "Gelandewagen",
    model: "G-63",
    info: "Experience the rugged allure of adventure with our high-end Off-Road car rentals. Conquer challenging terrains in style, as these powerful vehicles offer you the ultimate off-road experience, combining luxury and capability.",
    year: 2023,
    price: 380,
  },
  {
    id: crypto.randomUUID(),
    category: "Off Road",
    image:
      "https://images.carexpert.com.au/resize/3000/-/app/uploads/2023/02/2024-bmw-x6-2.jpg",
    title1: "BMW",
    title2: "BMW",
    model: "X6",
    info: "Experience the rugged allure of adventure with our high-end Off-Road car rentals. Conquer challenging terrains in style, as these powerful vehicles offer you the ultimate off-road experience, combining luxury and capability.",
    year: 2023,
    price: 320,
  },
  {
    id: crypto.randomUUID(),
    category: "Off Road",
    image:
      "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/OTTTLOOKIJPJLPDPCOZP7TANQ4.jpg",
    title1: "Toyota",
    title2: "Toyota",
    model: "Land Cruser",
    info: "Experience the rugged allure of adventure with our high-end Off-Road car rentals. Conquer challenging terrains in style, as these powerful vehicles offer you the ultimate off-road experience, combining luxury and capability.",
    year: 2023,
    price: 320,
  },
  {
    id: crypto.randomUUID(),
    category: "Off Road",
    image:
      "https://cimg1.ibsrv.net/ibimg/hgm/1920x1080-1/100/810/2023-land-rover-discovery-metropolitan-edition_100810705.jpg",
    title1: "Land Rover",
    title2: "Land Rover",
    model: "Discavery",
    info: "Experience the rugged allure of adventure with our high-end Off-Road car rentals. Conquer challenging terrains in style, as these powerful vehicles offer you the ultimate off-road experience, combining luxury and capability.",
    year: 2023,
    price: 310,
  },
  {
    id: crypto.randomUUID(),
    category: "Off Road",
    image:
      "https://www.motortrend.com/uploads/2022/08/2023-Jeep-Wrangler-Sahara-front-three-quarter-view-1.jpg",
    title1: "Jeep",
    title2: "Jeep",
    model: "Wrangler",
    info: "Experience the rugged allure of adventure with our high-end Off-Road car rentals. Conquer challenging terrains in style, as these powerful vehicles offer you the ultimate off-road experience, combining luxury and capability.",
    year: 2023,
    price: 290,
  },
  {
    id: crypto.randomUUID(),
    category: "Supercar",
    image:
      "https://www.goodwood.com/globalassets/.road--racing/event-coverage/fos/2023/07-july/ferrari-kc23/ferrari-kc23-03.jpg?crop=(0,1118,2600,2581)&width=1600",
    title1: "Ferrari",
    title2: "Ferrari",
    model: "F-488",
    info: "Unleash your inner speed demon with our exclusive supercar rentals. Dive into the world of high-octane luxury and exhilarating performance, as these elite vehicles redefine the art of driving in style and power.",
    year: 2023,
    price: 480,
  },
  {
    id: crypto.randomUUID(),
    category: "Supercar",
    image:
      "https://www.motortrend.com/uploads/2022/11/2023-Lamborghini-Huracan-Tecnica-004.jpg",
    title1: "Lamborghini",
    title2: "Lamborghini",
    model: "Huracan",
    info: "Unleash your inner speed demon with our exclusive supercar rentals. Dive into the world of high-octane luxury and exhilarating performance, as these elite vehicles redefine the art of driving in style and power.",
    year: 2023,
    price: 480,
  },
  {
    id: crypto.randomUUID(),
    category: "Supercar",
    image:
      "https://www.gtopcars.com/wp-content/uploads/2022/04/Bugatti-Veyron-Top-Speed.jpg",
    title1: "Bugatti",
    title2: "Bugatti",
    model: "Veyron",
    info: "Unleash your inner speed demon with our exclusive supercar rentals. Dive into the world of high-octane luxury and exhilarating performance, as these elite vehicles redefine the art of driving in style and power.",
    year: 2023,
    price: 510,
  },
  {
    id: crypto.randomUUID(),
    category: "Supercar",
    image:
      "https://images.summitmedia-digital.com/topgear/images/2022/12/22/buggati-chiron-profilee-9-1671716593.jpg",
    title1: "Bugatti",
    title2: "Bugatti",
    model: "Chiron",
    info: "Unleash your inner speed demon with our exclusive supercar rentals. Dive into the world of high-octane luxury and exhilarating performance, as these elite vehicles redefine the art of driving in style and power.",
    year: 2023,
    price: 520,
  },
  {
    id: crypto.randomUUID(),
    category: "Supercar",
    image:
      "https://media.ed.edmunds-media.com/lamborghini/urus/2023/oem/2023_lamborghini_urus_4dr-suv_performante_fq_oem_1_1600.jpg",
    title1: "Lamborghini",
    title2: "Lamborghini",
    model: "Urus",
    info: "Unleash your inner speed demon with our exclusive supercar rentals. Dive into the world of high-octane luxury and exhilarating performance, as these elite vehicles redefine the art of driving in style and power.",
    year: 2023,
    price: 470,
  },
  {
    id: crypto.randomUUID(),
    category: "Supercar",
    image:
      "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/wm/2023/04/hotcars-car-renders-ferrari-f50-1.jpg",
    title1: "Ferrari",
    title2: "Ferrari",
    model: "F50",
    info: "Unleash your inner speed demon with our exclusive supercar rentals. Dive into the world of high-octane luxury and exhilarating performance, as these elite vehicles redefine the art of driving in style and power.",
    year: 2023,
    price: 480,
  },
  {
    id: crypto.randomUUID(),
    category: "Ordenary",
    image:
      "https://hips.hearstapps.com/autoweek/assets/s3fs-public/17fusionsport_01_hr_0.jpg",
    title1: "Ford",
    title2: "Ford",
    model: "Fusion",
    info: "Discover the joy of simplicity with our upscale ordinary car rentals. Even in everyday travels, elevate your experience with these refined vehicles that offer comfort, reliability, and a touch of luxury to make every journey special.",
    year: 2023,
    price: 60,
  },
  {
    id: crypto.randomUUID(),
    category: "Ordenary",
    image:
      "https://img.autoabc.lv/toyota-camry/toyota-camry_2017_Sedans_223145836_3.jpg",
    title1: "Toyota",
    title2: "Toyota",
    model: "Camry",
    info: "Discover the joy of simplicity with our upscale ordinary car rentals. Even in everyday travels, elevate your experience with these refined vehicles that offer comfort, reliability, and a touch of luxury to make every journey special.",
    year: 2017,
    price: 71,
  },
  {
    id: crypto.randomUUID(),
    category: "Ordenary",
    image:
      "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/media/672263/2017-kia-optima-in-depth-model-review-car-and-driver-photo-702597-s-original.jpg",
    title1: "Kia",
    title2: "Kia",
    model: "Optima",
    info: "Discover the joy of simplicity with our upscale ordinary car rentals. Even in everyday travels, elevate your experience with these refined vehicles that offer comfort, reliability, and a touch of luxury to make every journey special.",
    year: 2015,
    price: 63,
  },
  {
    id: crypto.randomUUID(),
    category: "Ordenary",
    image:
      "https://avto.tatar/attachments/654c1b2727591c81c2c81e397de09d07c8fa5ab5/store/fill/1280/800/5381881cee2ac7f1359d5ecbbca569fab02fc09eddd04ac88b4dccce3551/Hyundai+Elantra+2017.jpg",
    title1: "Hyundai",
    title2: "Hyundai",
    model: "Elantra",
    info: "Discover the joy of simplicity with our upscale ordinary car rentals. Even in everyday travels, elevate your experience with these refined vehicles that offer comfort, reliability, and a touch of luxury to make every journey special.",
    year: 2018,
    price: 67,
  },
  {
    id: crypto.randomUUID(),
    category: "Ordenary",
    image:
      "https://i.gaw.to/vehicles/photos/08/22/082250_2017_toyota_Prius.jpg?640x400",
    title1: "Toyota",
    title2: "Toyota",
    model: "Prius",
    info: "Discover the joy of simplicity with our upscale ordinary car rentals. Even in everyday travels, elevate your experience with these refined vehicles that offer comfort, reliability, and a touch of luxury to make every journey special.",
    year: 2012,
    price: 35,
  },
  {
    id: crypto.randomUUID(),
    category: "Ordenary",
    image:
      "https://i.gaw.to/vehicles/photos/08/22/082250_2017_toyota_Prius.jpg?640x400",
    title1: "Toyota",
    title2: "Toyota",
    model: "Prius",
    info: "Discover the joy of simplicity with our upscale ordinary car rentals. Even in everyday travels, elevate your experience with these refined vehicles that offer comfort, reliability, and a touch of luxury to make every journey special.",
    year: 2012,
    price: 35,
  },
  {
    id: crypto.randomUUID(),
    category: "maqa@mamedovgmail.com",
    image:
      "https://i.gaw.to/vehicles/photos/08/22/082250_2017_toyota_Prius.jpg?640x400",
    title1: "Toyota",
    title2: "Toyota",
    model: "user12345",
    info: "Discover the joy of simplicity with our upscale ordinary car rentals. Even in everyday travels, elevate your experience with these refined vehicles that offer comfort, reliability, and a touch of luxury to make every journey special.",
    year: 2012,
    price: "Maqa",
  },
];


export const carReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADD_CARS":
      return [...state, action.shop];

    case "EDIT_CARS":
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            ...action.update,
          };
        } else {
          return item;
        }
      });

    case "GET_CARS":
      return action.shop;
    case "REMOVE_CARS":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};
