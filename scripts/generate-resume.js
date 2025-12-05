import { jsPDF } from "jspdf";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const doc = new jsPDF();

const lineHeight = 7;
let y = 20;
const margin = 20;
const pageWidth = doc.internal.pageSize.getWidth();
const contentWidth = pageWidth - margin * 2;

function addText(text, fontSize = 11, fontStyle = "normal", align = "left") {
    doc.setFont("helvetica", fontStyle);
    doc.setFontSize(fontSize);

    if (align === "center") {
        doc.text(text, pageWidth / 2, y, { align: "center" });
    } else if (align === "right") {
        doc.text(text, pageWidth - margin, y, { align: "right" });
    } else {
        const splitText = doc.splitTextToSize(text, contentWidth);
        doc.text(splitText, margin, y);
        return splitText.length * lineHeight / 1.5; // Return height used
    }
    return lineHeight;
}

function addSectionHeader(text) {
    y += 5;
    addText(text, 14, "bold");
    y += 2;
    doc.setLineWidth(0.5);
    doc.line(margin, y, pageWidth - margin, y);
    y += 6;
}

// Header
addText("Swadeep Dhondi", 22, "bold", "center");
y += 8;
addText("+91 8309948761 | maildswadeep@gmail.com | linkedin.com/in/swadeepdhondi | github.com/Swadeep006", 10, "normal", "center");
y += 10;

// Education
addSectionHeader("Education");
addText("ACE Engineering College Ghatkesar", 11, "bold");
y += 5;
addText("Bachelor of Technology in Computer Science and Engineering (AIML)", 11, "normal");
doc.setFont("helvetica", "italic");
doc.text("November 2022 – May 2026", pageWidth - margin, y - 5, { align: "right" });
y += 5;
addText("• CGPA: 8.29 (Present)", 11, "normal");
y += 5;

// Technical Skills
addSectionHeader("Technical Skills");
const skills = [
    "Languages: Cpp, C, Python, Java, Javascript",
    "Web Development: HTML, CSS, JavaScript, Node.js, Express.js, React.js",
    "Developer Tools: Git, Github, VS Code, Google Colab, Postman, Figma",
    "Databases: MongoDB, MySQL",
    "AI Technologies: Machine Learning, Deep Learning"
];
skills.forEach(skill => {
    addText(skill, 11, "normal");
    y += 6;
});

// Experience
addSectionHeader("Experience");
addText("Web Developer Intern", 11, "bold");
doc.setFont("helvetica", "italic");
doc.text("March 2025 – November 2025", pageWidth - margin, y, { align: "right" });
y += 5;
addText("HashInclude, Madhapur", 11, "italic");
y += 5;
const experiencePoints = [
    "• Designed and implemented responsive user interfaces using Figma and WordPress, enhancing cross-device user experience."
];
experiencePoints.forEach(point => {
    const height = addText(point, 11, "normal");
    y += height + 2;
});

// Projects
addSectionHeader("Projects");

function addProject(title, tech, date, points) {
    addText(title, 11, "bold");
    doc.setFont("helvetica", "italic");
    doc.text(date, pageWidth - margin, y, { align: "right" });
    y += 5;
    addText(tech, 10, "italic");
    y += 5;
    points.forEach(point => {
        const height = addText(point, 11, "normal");
        y += height + 2;
    });
    y += 3;
}

addProject(
    "X Blogs – Blogging Platform",
    "React, Node.js, Express, MongoDB, JWT, Zustand, Editor.js, Tailwind",
    "Oct 2025 – Nov 2025",
    [
        "• Built a full-stack blogging platform with secure JWT authentication using HTTP-only cookies and a rich text editor powered by Editor.js.",
        "• Developed a responsive UI with Tailwind, implemented hamburger-based mobile navigation, blog sorting (latest-first), and file upload preview.",
        "• Created REST APIs for blog CRUD operations, user management, and image uploads using Node.js, Express, and MongoDB.",
        "• Integrated Zustand for efficient global state management and optimized performance using Vite."
    ]
);

addProject(
    "Sociopedia – Social Media Application",
    "React, Node.js, Express, MongoDB, JWT, Multer, Redux, Tailwind",
    "Dec 2024",
    [
        "• Developed a full-stack social media application featuring user profiles, posts, comments, likes, and friend requests.",
        "• Implemented a secure backend using Node.js, Express.js, JWT authentication, bcrypt for password hashing, Multer + GridFS for media uploads, and MongoDB/Mongoose for data modeling.",
        "• Built a responsive and intuitive frontend using React, Redux for state management, and Material UI for clean UI components.",
        "• Applied best practices for API security, modular architecture, and performance optimization across the stack."
    ]
);

addProject(
    "Movie Recommender System",
    "Python, Jupyter Notebook, Pandas, NumPy, Scikit-learn, Streamlit",
    "Oct 2024",
    [
        "• Developed a content-based recommendation system using cosine similarity on TF-IDF vectors, processing metadata from a dataset of 5,000+ movies.",
        "• Achieved 95% relevance accuracy (based on manual validation) with <200ms response time in a Streamlit web app.",
        "• Performed text preprocessing (lowercasing, stemming, stopword removal) on fields such as genres, cast, crew, and plot summaries."
    ]
);

const outputPath = path.join(__dirname, "../public/resume.pdf");
doc.save(outputPath);
console.log("Resume generated at " + outputPath);
