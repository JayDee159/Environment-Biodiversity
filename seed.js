const mongoose = require("mongoose");
const Animal = require("./models/Animal");

mongoose.connect("mongodb://127.0.0.1:27017/bio_bkn");

const animals = [

  // 🇮🇳 INDIA
  {
    name: "Bengal Tiger",
    scientificName: "Panthera tigris tigris",
    category: "Mammal",
    habitat: "Forests and Mangroves",
    diet: "Carnivore",
    lifespan: "10-15 years",
    conservationStatus: "Endangered",
    population: 3167,
    description: "Largest tiger subspecies found in India.",
    image: "bengal_tiger.jpg"
  },
  {
    name: "Asiatic Lion",
    scientificName: "Panthera leo persica",
    category: "Mammal",
    habitat: "Gir Forest",
    diet: "Carnivore",
    lifespan: "16-18 years",
    conservationStatus: "Endangered",
    population: 670,
    description: "Only wild population exists in Gujarat, India.",
    image: "asiatic_lion.jpg"
  },
  {
    name: "Indian Elephant",
    scientificName: "Elephas maximus indicus",
    category: "Mammal",
    habitat: "Forest Corridors",
    diet: "Herbivore",
    lifespan: "60-70 years",
    conservationStatus: "Endangered",
    population: 27000,
    description: "Important keystone species in Indian ecosystems.",
    image: "indian_elephant.jpg"
  },
  {
    name: "Gharial",
    scientificName: "Gavialis gangeticus",
    category: "Reptile",
    habitat: "Rivers",
    diet: "Carnivore",
    lifespan: "40-60 years",
    conservationStatus: "Critically Endangered",
    population: 900,
    description: "Long-snouted crocodilian native to Indian rivers.",
    image: "gharial.jpg"
  },
  {
    name: "Great Indian Bustard",
    scientificName: "Ardeotis nigriceps",
    category: "Bird",
    habitat: "Grasslands",
    diet: "Omnivore",
    lifespan: "12-15 years",
    conservationStatus: "Critically Endangered",
    population: 150,
    description: "One of the heaviest flying birds in the world.",
    image: "great_indian_bustard.jpg"
  },

  // 🌍 GLOBAL
  {
    name: "Giant Panda",
    scientificName: "Ailuropoda melanoleuca",
    category: "Mammal",
    habitat: "Bamboo Forests",
    diet: "Herbivore",
    lifespan: "20 years",
    conservationStatus: "Vulnerable",
    population: 1864,
    description: "Native to China and feeds primarily on bamboo.",
    image: "giant_panda.jpg"
  },
  {
    name: "African Black Rhino",
    scientificName: "Diceros bicornis",
    category: "Mammal",
    habitat: "Savannas",
    diet: "Herbivore",
    lifespan: "35-50 years",
    conservationStatus: "Critically Endangered",
    population: 5600,
    description: "Threatened primarily due to poaching.",
    image: "black_rhino.jpg"
  },
  {
    name: "Polar Bear",
    scientificName: "Ursus maritimus",
    category: "Mammal",
    habitat: "Arctic Sea Ice",
    diet: "Carnivore",
    lifespan: "20-30 years",
    conservationStatus: "Vulnerable",
    population: 26000,
    description: "Dependent on sea ice for hunting seals.",
    image: "polar_bear.jpg"
  },
  {
    name: "Snow Leopard",
    scientificName: "Panthera uncia",
    category: "Mammal",
    habitat: "Mountain Regions",
    diet: "Carnivore",
    lifespan: "15-18 years",
    conservationStatus: "Vulnerable",
    population: 6500,
    description: "Found in Central and South Asia mountains.",
    image: "snow_leopard.jpg"
  },
  {
    name: "Blue Whale",
    scientificName: "Balaenoptera musculus",
    category: "Mammal",
    habitat: "Oceans",
    diet: "Carnivore (Krill)",
    lifespan: "80-90 years",
    conservationStatus: "Endangered",
    population: 25000,
    description: "Largest animal to ever exist on Earth.",
    image: "blue_whale.jpg"
  },

  // 🚨 CRITICALLY ENDANGERED
  {
    name: "Vaquita",
    scientificName: "Phocoena sinus",
    category: "Mammal",
    habitat: "Gulf of California",
    diet: "Carnivore",
    lifespan: "20 years",
    conservationStatus: "Critically Endangered",
    population: 10,
    description: "World's rarest marine mammal.",
    image: "vaquita.jpg"
  },
  {
    name: "Northern White Rhino",
    scientificName: "Ceratotherium simum cottoni",
    category: "Mammal",
    habitat: "Grasslands",
    diet: "Herbivore",
    lifespan: "40 years",
    conservationStatus: "Critically Endangered",
    population: 2,
    description: "Only two females remain alive.",
    image: "northern_white_rhino.jpg"
  },
  {
    name: "Javan Rhino",
    scientificName: "Rhinoceros sondaicus",
    category: "Mammal",
    habitat: "Tropical Forest",
    diet: "Herbivore",
    lifespan: "30-40 years",
    conservationStatus: "Critically Endangered",
    population: 76,
    description: "One of the rarest large mammals on Earth.",
    image: "javan_rhino.jpg"
  },
  {
    name: "Kakapo",
    scientificName: "Strigops habroptilus",
    category: "Bird",
    habitat: "New Zealand Forests",
    diet: "Herbivore",
    lifespan: "60 years",
    conservationStatus: "Critically Endangered",
    population: 250,
    description: "Flightless parrot native to New Zealand.",
    image: "kakapo.jpg"
  },

  // ☠️ EXTINCT
  {
    name: "Dodo",
    scientificName: "Raphus cucullatus",
    category: "Bird",
    habitat: "Mauritius",
    diet: "Herbivore",
    lifespan: "Unknown",
    conservationStatus: "Extinct",
    population: 0,
    description: "Extinct due to overhunting in 1681.",
    image: "dodo.jpg"
  },
  {
    name: "Passenger Pigeon",
    scientificName: "Ectopistes migratorius",
    category: "Bird",
    habitat: "North America",
    diet: "Herbivore",
    lifespan: "Unknown",
    conservationStatus: "Extinct",
    population: 0,
    description: "Extinct due to mass hunting in 1914.",
    image: "passenger_pigeon.jpg"
  },
  {
    name: "Tasmanian Tiger",
    scientificName: "Thylacinus cynocephalus",
    category: "Mammal",
    habitat: "Tasmania",
    diet: "Carnivore",
    lifespan: "Unknown",
    conservationStatus: "Extinct",
    population: 0,
    description: "Last known individual died in 1936.",
    image: "tasmanian_tiger.jpg"
  }

];

const seedDB = async () => {
  await Animal.deleteMany({});
  await Animal.insertMany(animals);
  console.log("Database Seeded Successfully");
  mongoose.connection.close();
};

seedDB();