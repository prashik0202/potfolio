import {
  github,
  linkdin,
  gmail,
  Dalle,
  ecommerce,
  Taski,
  ExpenseTracker,
  roomgpt,
} from "../assets/index";

export const projects = [
  {
    id: "Dalle",
    name: "Dall-E Clone using MERN Stack Cloudinary",
    image: Dalle,
    smalldesc:
      "In this project we have used a API from OpenAI to build a Dalle Clone.We have used MERN Stack and save the generated image and store them to Cloudinary",
    description:
      "In this project we have build a Dall-E Clone using MERN Stack and implemented user authentication using third party package i.e clerk. In this user can login using its google account or email address and after authentication is done user can create AI generated image by giving prompt and this prompt is send to OpenAI api and it returns the image and we save this image in MongoDB wiht imageURL and real image is stored on cloudinary",
    technology: [
      { tname: "MERN Stack" },
      { tname: "Open-AI" },
      { tname: "Clerk Auth" },
      { tname: "Cloudinary" },
      { tname: "TailwindCss" },
    ],
  },
  {
    id: "MoneyTracker",
    name: "Money Track a Expense Tracker using MERN Stack",
    image: ExpenseTracker,
    smalldesc:
      "In this project we have Build a custom logic at backend with user authentication where user can track their expenses and visualize their expenses.",
    description:
      "Money Tracker is build using MERN Stack where user authentication is achived using JWT token and all transactions are stored on MongoDB Atlas and user can visualize their transaction and categories their transactions based on their spending, also user can delete the transaction and store every day transaction on this web app.",
    technology: [{ tname: "MERN Stack" }, { tname: "Material-UI" }],
  },
  {
    id: "Taski",
    name: "TASKI all in one chomre extension",
    image: Taski,
    smalldesc:
      "In this project we have build a chomre extension where users can manage their daily task and another functionality like expense tracker,password managment are also implemented",
    description:
      "Taski is a chome extension build using ReactJs and MaterailUI for components and this is all in one extension where user can add task based on their priority and also keep track their daily expense where user can visualize their daily expense, last feature which is Password Manager which store the password in hashed form in localstorage and while copying the password get's decrypted.",
    technology: [{ tname: "ReactJs" }, { tname: "Material-UI" }],
  },
  {
    id: "Ecommerce",
    name: "E-Commerce Web app",
    image: ecommerce,
    smalldesc:
      "In this project we have built a E-commerce website where user can add items to cart and checkout using strip payment gateway",
    description:
      "Ecommer is Online shopping platform where use can purchase and in this project we have implemented using Strapi which is CMS and frontend framework ReactJs and Material UI as componenets library and for checkout we have use Sripe Payment gateway",
    technology: [
      { tname: "MERN Stack" },
      { tname: "Strapi" },
      { tname: "Stripe" },
      { tname: "Material-UI" },
    ],
  },
  {
    id: "RoomGPT",
    name: "Room GPT Clone",
    image: roomgpt,
    smalldesc:
      "In this project we have AI driven application where user can authe using clerk and provide image of room based on select parameters image of room will recreate based on taste",
    description:
      "The AI-driven Room Recreation Application is a cutting-edge platform designed to revolutionize interior design and decoration. Leveraging advanced artificial intelligence algorithms, the application allows users to authenticate using Clerk, a secure authentication system, and then provide input parameters such as room dimensions, preferred style, color scheme, and furniture preferences. Based on this input, the application recreates a realistic image of the room, customized to the user's taste and specifications.",
    technology: [
      { tname: "NextJs" },
      { tname: "Replicate" },
      { tname: "Cloudinary" },
      { tname: "TailwindCss" },
      { tname: "Clerk Auth" },
    ],
  },
];

export const contact = [
  {
    id: 1,
    link: "https://github.com/prashik0202",
    name: "prashik0202",
    icon: github,
  },
  {
    id: 2,
    link: "mailto:gamreprashik03@gmail.com",
    name: "gamreprashik03@gmail.com",
    icon: gmail,
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/prashik-gamre-25278b231/",
    name: "prashik0202",
    icon: linkdin,
  },
];
