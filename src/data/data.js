import {
  github , linkdin , gmail, Dalle, ecommerce, Taski, ExpenseTracker,roomgpt
} from '../assets/index';



export const projects = [
  {
    "id" : 'Dalle',
    "name" : "Dall-E Clone using MERN Stack Cloudinary",
    "image" : Dalle,
    "description" : "In this project we have used a API from OpenAI to build a Dalle Clone.We have used MERN Stack and save the generated image and store them to Cloudinary.",
    "technology" : [
      { "tname" : "MERN Stack"},
      { "tname" : "Open-AI"},
      { "tname" : "Clerk Auth"},
      { "tname" : "Cloudinary"},
      { "tname" : "TailwindCss"},
    ]
  },
  {
    "id" : "MoneyTracker",
    "name" : "Money Track a Expense Tracker using MERN Stack",
    "image" : ExpenseTracker,
    "description" : "In this project we have Build a custom logic at backend with user authentication where user can track their expenses and visualize their expenses.",
    "technology" : [
      { "tname" : "MERN Stack" },
      { "tname" : "Material-UI" },
    ]
  },
  {
    "id" : "Taski",
    "name" : "TASKI all in one chomre extension",
    "image" : Taski,
    "description" : "In this project we have build a chomre extension where users can manage their daily task and another functionality like expense tracker,password managment are also implemented",
    "technology" : [
      { "tname" : "ReactJs"},
      { "tname" : "Material-UI"},
    ]
  },
  {
    "id" : "Ecommerce",
    "name": "E-Commerce Web app",
    "image" : ecommerce,
    "description" : "In this project we have built a E-commerce website where user can add items to cart and checkout using strip payment gateway",
    "technology" : [
      { "tname" : "MERN Stack"},
      { "tname" : "Strapi"},
      { "tname" : "Stripe"},
      { "tname" : "Material-UI"},
    ]
  },
  {
    "id" : "RoomGPT",
    "name" : "Room GPT Clone",
    "image" : roomgpt,
    "description" : "In this project we have AI driven application where user can authe using clerk and provide image of room based on select parameters image of room will recreate based on tast",
    "technology" : [
      { "tname" : "NextJs"},
      { "tname" : "Replicate"},
      { "tname" : "Cloudinary"},
      { "tname" : "TailwindCss"},
      { "tname" : "Clerk Auth"},
    ]
  }
  
];



export const contact = [
  { id : 1 , link : 'https://github.com/prashik0202' , name : 'prashik0202' , icon : github},
  { id : 2 , link : 'mailto:gamreprashik03@gmail.com' , name : 'gamreprashik03@gmail.com' , icon : gmail},
  { id : 3 , link : 'https://www.linkedin.com/in/prashik-gamre-25278b231/' , name : 'prashik0202' , icon : linkdin}
]

