import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/python.png";
import Tools3 from "/assets/tools/django.png";
import Tools4 from "/assets/tools/fastapi.png";
// import Tools5 from "/assets/tools/dart.png";
import Tools6 from "/assets/tools/dart.png";
import Tools7 from "/assets/tools/flutter.png";
import Tools8 from "/assets/tools/github.png";
// import Tools9 from "/assets/tools/ai.png";
// import Tools10 from "/assets/tools/canva.png";
// import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/java.png";
import Tools13 from "/assets/tools/firebase.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools16 from "/assets/tools/js.png";
import Tools17 from "/assets/tools/postgresql.png";
// import Tools18 from "/assets/tools/vite.png";
import Tools19 from "/assets/tools/mysql.png";


export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Python",
    ket: "Language",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Django",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Fast Api",
    ket: "Framework",
    dad: "400",
  },
  // {
  //   id: 5,
  //   gambar: Tools5,
  //   nama: "Bootstrap",
  //   ket: "Framework",
  //   dad: "500",
  // },
  {
    id: 6,
    gambar: Tools6,
    nama: "Dart",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Flutter",
    ket: "Framework",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  // {
  //   id: 9,
  //   gambar: Tools9,
  //   nama: "Adobe Illustrator",
  //   ket: "Design App",
  //   dad: "900",
  // },
  // {
  //   id: 10,
  //   gambar: Tools10,
  //   nama: "Canva",
  //   ket: "Design App",
  //   dad: "1000",
  // },
  // {
  //   id: 11,
  //   gambar: Tools11,
  //   nama: "Figma",
  //   ket: "Design App",
  //   dad: "1100",
  // },
  {
    id: 12,
    gambar: Tools12,
    nama: "Java",
    ket: "Language",
    dad: "1200",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "HTML",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "CSS",
    ket: "Language",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "JavaScript",
    ket: "Language",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "PostgreSQL",
    ket: "Language",
    dad: "1700",
  },
  // {
  //   id: 18,
  //   gambar: Tools18,
  //   nama: "Vite",
  //   ket: "Framework",
  //   dad: "1800",
  // },
  {
    id: 19,
    gambar: Tools19,
    nama: "MySql",
    ket: "Framework",
    dad: "1900",
  },
];

import Proyek1 from "/assets/proyek/proyek1.jpg";
import Proyek2 from "/assets/proyek/proyek2.jpg";
import Proyek3 from "/assets/proyek/proyek3.jpg";
import Proyek4 from "/assets/proyek/proyek4.jpg";
import Proyek5 from "/assets/proyek/proyek5.jpg";
import Proyek6 from "/assets/proyek/proyek6.jpg";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "Expenses Tracker App",
    subtitle: "A mobile application built using Flutter...",
    fullDescription: "Your Expenses Tracker App is a smart and user-friendly application designed to help individuals efficiently manage their daily finances. It allows users to record their income and expenses, categorize transactions, and monitor spending patterns in real time. The app focuses on simplicity and clarity, making it easy for users to understand where their money is going and how they can optimize their budget.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(105deg, #3B82F6, #000)",
    url: "https://github.com/deino0069/expenses-tracker",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "Meal Application",
    subtitle: "An intuitive platform to explore recipes, plan meals, and simplify cooking...",
    fullDescription: "A feature-rich meal application designed to help users discover, organize, and prepare a wide variety of recipes with ease. The app allows users to browse meals by categories, view detailed ingredients and step-by-step instructions, and plan their meals efficiently. With a clean and intuitive interface, it enhances the cooking experience by making recipe management simple and accessible. This project highlights practical application development, focusing on user experience, structured data handling, and seamless navigation.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/deino0069/meal_app",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "Notesphere - A Notes App",
    subtitle: "A modern note-taking application designed to capture, organize, and manage ideas effortlessly.",
    fullDescription: "Notesphere is a powerful and user-friendly note-taking application that helps users create, organize, and manage their notes efficiently. It allows users to write, edit, and categorize notes for better accessibility and productivity. With a clean interface and seamless navigation, the app ensures a smooth experience for capturing ideas, tasks, and important information anytime. This project demonstrates practical application development with a focus on user experience, data organization, and efficient content management.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/deino0069/notes_app",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Cab Booking Website",
    subtitle: "A user-friendly platform designed to simplify cab booking with seamless navigation and real-time availability.",
    fullDescription: "A dynamic cab booking website developed to provide users with a smooth and efficient ride-booking experience. The platform allows users to search for available cabs, book rides, and manage their travel details with ease. It focuses on intuitive design, fast performance, and reliable functionality to ensure a hassle-free user experience. This project demonstrates practical web development skills, including backend integration, database management, and responsive UI design, making it a scalable solution for modern transportation services.", borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/deino0069/Cab_booking_project",
    dad: "400",
  },
  {
    id: 5,
    image: Proyek5,
    title: "Rental Ecommerce Website",
    subtitle: "A modern cross-platform eCommerce application designed for seamless shopping on both mobile and desktop.....",
    fullDescription: "A cross-platform eCommerce application available on both mobile and desktop, built to provide users with a smooth and efficient online shopping experience. The platform allows users to browse products, view detailed descriptions, add items to their cart, and securely complete purchases. It features an intuitive user interface, fast performance, and responsive design to ensure accessibility across devices. The application aims to simplify online shopping while delivering a reliable and user-friendly experience for customers.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/deino0069/ecommerce-web",
    dad: "500",
  },
  {
    id: 6,
    image: Proyek6,
    title: "Tools and Automations",
    subtitle: "Smart tools and automation solutions built to simplify tasks and boost productivity..",
    fullDescription: "A set of automation tools designed to streamline workflows, reduce manual effort, and improve efficiency through reliable and user-friendly solutions.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/deino0069",
    dad: "600",
  },
];
