import {
  github , linkdin , gmail
} from '../assets/index';

export const projects = [
  {
    id : 1,
    name : 'Dall-E Clone using MERN Stack Cloudinary',
    image : '/Dalle.png',
    description : 'In this project we have used a API from OpenAI to build a Dalle Clone.We have used MERN Stack and save the generated image and store them to Cloudinary.',
  },
  {
    id : 2,
    name : 'Money Track a Expense Tracker using MERN Stack',
    image : '/Expensetrack.png',
    description : 'In this project we have Build a custom logic at backend with user authentication where user can track their expenses and visualize their expenses.'
  },
  {
    id : 3,
    name : "TASKI all in one chomre extension",
    image : "/taski.png",
    description : 'In this project we have build a chomre extension where users can manage their daily task and another functionality like expense tracker,password managment are also implemented'
  },
  {
    id : 4,
    name: "E-Commerce Web app",
    image : '/Expensetrack.png',
    description : 'In this project we have built a E-commerce website where user can add items to cart and checkout using strip payment gateway'
  },
  {
    id : 5,
    name: "Room GPT Clone",
    image : '/Expensetrack.png',
    description : 'In this project we have AI driven application where user can authe using clerk and provide image of room based on select parameters image of room will recreate based on tast'
  }
  
];



export const contact = [
  { id : 1 , link : 'https://github.com/prashik0202' , name : 'prashik0202' , icon : github},
  { id : 2 , link : 'mailto:gamreprashik03@gmail.com' , name : 'gamreprashik03@gmail.com' , icon : gmail},
  { id : 3 , link : 'https://www.linkedin.com/in/prashik-gamre-25278b231/' , name : 'prashik0202' , icon : linkdin}
]