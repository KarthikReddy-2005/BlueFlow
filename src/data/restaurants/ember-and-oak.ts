import type { Restaurant } from "./types";

export const emberAndOak: Restaurant = {
  slug: "ember-and-oak",

  name: "Ember & Oak",
  tagline: "Seasonal American cooking, wood-fired in the heart of Austin.",
  description:
    "A modern neighborhood restaurant celebrating seasonal ingredients, live-fire cooking, craft cocktails, and warm Texas hospitality.",

  cuisine: "Modern American",
  priceRange: "$$",

  timezone: "America/Chicago",
  heroImage: "/restaurants/ember-and-oak/hero.webp",

  design: {
    heroPosition: "center",
    heroAlign: "left",
    primaryColor: "#2F3A2E",
    secondaryColor: "#C58B55",
    accentColor: "#D6A66A",
    backgroundColor: "#F6F1E8",
    textColor: "#1D1D1B",
  },

  phone: "(512) 555-0147",
  email: "hello@emberandoak.example",

  address: {
    street: "214 West Cedar Street",
    city: "Austin",
    state: "Texas",
    zipCode: "78701",
    country: "USA",
    parkingNote: "Street parking and nearby public parking available.",
  },

  hours: [
    {
      day: "Monday",
      hours: "Closed",
    },
    {
      day: "Tuesday",
      hours: "5:00 PM – 10:00 PM",
    },
    {
      day: "Wednesday",
      hours: "5:00 PM – 10:00 PM",
    },
    {
      day: "Thursday",
      hours: "5:00 PM – 10:00 PM",
    },
    {
      day: "Friday",
      hours: "5:00 PM – 11:00 PM",
    },
    {
      day: "Saturday",
      hours: "11:00 AM – 11:00 PM",
    },
    {
      day: "Sunday",
      hours: "11:00 AM – 9:00 PM",
    },
  ],

  featuredDishes: [
    {
      id: "wood-fired-ribeye",
      name: "Wood-Fired Ribeye",
      description:
        "Prime ribeye, smoked garlic butter, roasted shallots and seasonal greens.",
      price: "$42",
      image: "/restaurants/ember-and-oak/ribeye.jpg",
    },

    {
      id: "burrata",
      name: "Texas Peach Burrata",
      description:
        "Fresh burrata, grilled peaches, basil oil, toasted pecans and sourdough.",
      price: "$17",
      image: "/restaurants/ember-and-oak/burrata.jpg",
    },

    {
      id: "salmon",
      name: "Ember Roasted Salmon",
      description:
        "Atlantic salmon, charred vegetables, lemon herb butter and crispy potatoes.",
      price: "$31",
      image: "/restaurants/ember-and-oak/salmon.jpg",
    },
  ],

  menu: [
    {
      id: "starters",
      name: "Starters",

      items: [
        {
          id: "burrata",
          name: "Texas Peach Burrata",
          description:
            "Fresh burrata, grilled peaches, basil oil and toasted pecans.",
          price: "$17",
          dietary: {
            vegetarian: true,
          },
        },

        {
          id: "calamari",
          name: "Crispy Calamari",
          description: "Lemon, herbs, roasted garlic aioli and smoked chili.",
          price: "$18",
        },

        {
          id: "charred-carrots",
          name: "Fire-Roasted Carrots",
          description: "Whipped feta, pistachio, herbs and local honey.",
          price: "$14",
          dietary: {
            vegetarian: true,
            glutenFree: true,
          },
        },
      ],
    },

    {
      id: "mains",
      name: "Mains",

      items: [
        {
          id: "ribeye",
          name: "Wood-Fired Ribeye",
          description:
            "Prime ribeye, smoked garlic butter, roasted shallots and seasonal greens.",
          price: "$42",
          dietary: {
            glutenFree: true,
          },
        },

        {
          id: "salmon",
          name: "Ember Roasted Salmon",
          description:
            "Charred vegetables, lemon herb butter and crispy potatoes.",
          price: "$31",
          dietary: {
            glutenFree: true,
          },
        },

        {
          id: "mushroom-pasta",
          name: "Wild Mushroom Pappardelle",
          description:
            "House pasta, wild mushrooms, parmesan, thyme and brown butter.",
          price: "$26",
          dietary: {
            vegetarian: true,
          },
        },
      ],
    },

    {
      id: "desserts",
      name: "Desserts",

      items: [
        {
          id: "chocolate-cake",
          name: "Dark Chocolate Cake",
          description: "Dark chocolate ganache, espresso cream and sea salt.",
          price: "$12",
        },

        {
          id: "cheesecake",
          name: "Burnt Honey Cheesecake",
          description: "Honey caramel, seasonal berries and toasted almonds.",
          price: "$11",
        },
      ],
    },

    {
      id: "cocktails",
      name: "Cocktails",

      items: [
        {
          id: "old-fashioned",
          name: "Oak-Smoked Old Fashioned",
          description: "Bourbon, bitters, orange and oak smoke.",
          price: "$15",
        },

        {
          id: "ember-paloma",
          name: "Ember Paloma",
          description: "Tequila, grapefruit, lime and smoked sea salt.",
          price: "$14",
        },
      ],
    },
  ],

  gallery: [
    {
      src: "/restaurants/ember-and-oak/gallery-1.jpg",
      alt: "Ember and Oak dining room",
      category: "interior",
    },
    {
      src: "/restaurants/ember-and-oak/gallery-2.jpg",
      alt: "Wood-fired dish",
      category: "food",
    },
    {
      src: "/restaurants/ember-and-oak/gallery-3.jpg",
      alt: "Restaurant cocktail",
      category: "drinks",
    },
    {
      src: "/restaurants/ember-and-oak/gallery-4.jpg",
      alt: "Restaurant dining experience",
      category: "people",
    },
    {
      src: "/restaurants/ember-and-oak/gallery-5.jpg",
      alt: "Seasonal dish",
      category: "food",
    },
    {
      src: "/restaurants/ember-and-oak/gallery-6.jpg",
      alt: "Ember and Oak interior",
      category: "interior",
    },
  ],


  social: {
  },

  rating: 4.8,
  reviewCount: 1247,

  reviews: [
    {
      id: "review-1",
      author: "Sarah M.",
      rating: 5,
      text: "Beautiful atmosphere, incredible food and some of the best service we've had in Austin.",
      source: "Google",
    },

    {
      id: "review-2",
      author: "Daniel R.",
      rating: 5,
      text: "The wood-fired ribeye was outstanding. Perfect place for dinner downtown.",
      source: "Google",
    },

    {
      id: "review-3",
      author: "Emily T.",
      rating: 5,
      text: "Fantastic cocktails, beautiful interior and a menu that actually lives up to the photos.",
      source: "Google",
    },
  ],

  about: {
    heading: "Gather Around the Fire",
    description:
      "Ember & Oak was created around a simple idea: great ingredients taste best when treated simply. Our kitchen combines seasonal Texas produce with live-fire cooking, bringing friends and families together around food made with care.",
    image: "/restaurants/ember-and-oak/about.jpg",
  },

  events: {
    enabled: true,
    heading: "Private Dining & Events",
    description:
      "From intimate dinners to celebrations, our team can create a memorable private dining experience built around your occasion.",
    image: "/restaurants/ember-and-oak/events.jpg",
  },

  copy: {
    featuredHeading: "A taste of what's waiting.",
    featuredDescription:
      "Seasonal ingredients, thoughtful preparation and dishes made to be shared around the table.",
    menuHeading: "Made for the table.",
    menuDescription:
      "Seasonal ingredients, live-fire cooking and familiar flavors approached with a little more intention.",
    galleryHeading: "Come for dinner.\nStay for the evening.",
    galleryDescription:
      "Good food, warm light and the kind of tables you don't want to leave.",
    reservationHeading: "Make tonight\nworth remembering.",
    reservationDescription:
      "Join us for seasonal cooking, warm hospitality and an evening built around the table.",
  },

  seo: {
    title: "Ember & Oak | Modern American Restaurant in Austin",
    description:
      "Seasonal American cooking, wood-fired dishes and craft cocktails in downtown Austin.",
    image: "/restaurants/ember-and-oak/hero.webp",
  },
};
