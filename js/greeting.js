const greetings = ['Good Morning 🌄', 'Good Afternoon 🕑', 'Good Evening 🌇'];

const currentHour = new Date().getHours();

let index =
  currentHour >= 12 && currentHour <= 17 ? 1 : currentHour >= 17 ? 2 : 0;

const greet = greetings[index];
