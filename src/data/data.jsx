import img from "../assets/im.jpeg";
import img1 from "../assets/im0.jpeg";
import img2 from "../assets/im3.jpeg";
import img3 from "../assets/imo.jpeg";
import img4 from "../assets/im1.jpeg";
import img5 from "../assets/im4.jpeg";
import mba from "../assets/icon/student.png";
import mba0 from "../assets/icon/exam.png";
import mba1 from "../assets/icon/graduat.png";
import mba2 from "../assets/icon/shop.png";
import mba3 from "../assets/icon/sponsorship.png";
import mba4 from "../assets/icon/trophy.png";
import mba5 from "../assets/icon/water.png";
const cardData = [
  {
    id: 1,
    image: mba,
    title: "MBA EXAMS",
    description:
      "50 + MBA exams. Do you know enough about them?\nKnow important dates, preparation tips, syllabus and more",
  },
  {
    id: 2,
    image: mba0,
    title: "MBA RANKINGS",
    description:
      "Curious to know the top MBA colleges?\nCheck out latest college rankings from trusted sources",
  },
  {
    id: 3,
    image: mba1,
    title: "IIM & NON IIM CALL PREDICTOR",
    description:
      "IIMs consider a lot more than just the CAT score\nFind your eligibility and chances of getting an IIM call",
  },
  {
    id: 4,
    image: mba2,
    title: "FIND MBA COLLEGES",
    description:
      "Want to find the right MBA college for you?\nFind colleges based on their location, fees, specialization and more",
  },
  {
    id: 5,
    image: mba3,
    title: "ASK CURRENT MBA STUDENT",
    description:
      "Have college specific questions?\nGet answers from current students of more than 400 colleges",
  },
  {
    id: 6,
    image: mba4,
    title: "ALUMNI SALARY DATA",
    description:
      "Wondering about your career journey post-MBA?\nCheck out salary data of MBA college alumni",
  },
  {
    id: 7,
    image:mba5,
    title: "COMPARE COLLEGES",
    description:
      "You always have options. Did you choose the right one?\nCompare colleges based on salary, rank and more",
  },
];
const collegeData = [
  {
    id: 1,
    logo: mba4,
    name: "NEW HORIZON COLLEGE OF ENGINEERING",
    location: "Bangalore",
    learnMore: "#",
    bottomText:
      "Top Engg College in India | Highest Package: 43 LPA Open 2026-28!",
  },
  {
    id: 2,
    logo: mba2,
    name: "KRUPANIDHI COLLEGE OF MANAGEMENT",
    location: "Bangalore",
    learnMore: "#",
    bottomText:
      "Ranked Among Top BBA Colleges in India | Admissions Open 2026-28!",
  },
  {
    id: 3,
    logo: mba,
    name: "CGC University",
    location: "Mohali",
    learnMore: "#",
    bottomText:
      "Early Bird Super 500 | 10% Extra Scholarship for First 500 Admissions.",
  },
  {
    id: 4,
    logo: mba4,
    name: "IIM Indore - Indian Institute of Management",
    location: "Indore",
    learnMore: "#",
    bottomText: "Ranked 4 for IIMs by Outlook 2020 Admissions Open 2026-28!",
  },
];
const newsData = [
  {
    id: 1,
    badge: "LIVE",
    title:
      "Odisha 10th, 12th Board Exam Time Table 2026 (Soon) Live Updates; Check Odisha CHSE & Matric Exam...",
    desc: "Odisha CHSE exam date 2026 and Odisha BSE Date Sheet 2026 is expected to be released anytime soon in November 2025.",
    author: "Salviya Antony",
    date: "Nov 27, 2025",
    shares: "1 Shares",
    comments: null,
    views: null,
    image: img,
  },
  {
    id: 2,
    badge: "LIVE",
    title:
      "JEE Main 2026 Registration Last Date (TODAY) Live: Apply at jeemain.nta.nic.in; Documents, Fees",
    desc: "The National Testing Agency (NTA) is conducting the JEE Main 2026 registration for session 1 at jeemain.nta.nic.in.",
    author: "Samridhi Mishra",
    date: "Nov 27, 2025",
    comments: "3 Comments",
    shares: "2 Shares",
    views: null,
    image: img1,
  },
  {
    id: 3,
    badge: "LIVE",
    title:
      "HBSE Date Sheet 2026 Shortly @bseh.org.in; Check Live Updates on HBSE Exam Dates",
    desc: "Haryana Board is set to release the HBSE Date Sheet 2026 on their official website soon.",
    author: "Jasleen Taneja",
    date: "Nov 27, 2025",
    comments: null,
    shares: null,
    views: null,
    image: img2,
  },
  {
    id: 4,
    title: "Career Paths for Women in Early Childhood Education",
    desc: "For candidates involved in teaching for early childhood education, their job role includes guiding children and nurturing them.",
    author: "Anshul Jindal",
    date: "Nov 27, 2025",
    comments: null,
    shares: null,
    views: "162 Views",
    image: img3,
  },
  {
    id: 5,
    title:
      "Maharashtra to Seek Renaming IIT Bombay as IIT Mumbai; Fadnavis says will write to PM Modi",
    desc: "The move comes after recent remarks by Union minister Jitendra Singh during an event at IIT Bombay.",
    author: "ABHAY ANAND",
    date: "Nov 27, 2025",
    shares: "1 Shares",
    views: null,
    image: img4,
  },
  {
    id: 6,
    title:
      "Event Planning vs Event Management: Difference, Entrance Exam, Role, Definition",
    desc: "Event planning and event management are essential components of the events industry, yet they encompass distinct professional roles.",
    author: "Porishmita Paul",
    date: "Nov 27, 2025",
    views: "142 Views",
    shares: null,
    comments: null,
    image: img5,
  },
];
const mainVideo = {
  url: "https://www.youtube.com/embed/yqjo39Wft9Y?si=Ku-0ym9ckrWFDKPu",
  title: "INI CET 2026 (January Session) Student Reactions",
  views: "7K Views",
  date: "Nov 9, 2025",
  likes: "36 Likes",
};

const nextVideos = [
  {
    url: "https://www.youtube.com/embed/xTRUXIGX22U?si=j7nm_f04heXOb58C",
    thumbnail: img,
    title:
      "Amitabh Kant: India’s Engineering Education Must Focus on AI & EV...",
    views: "143 Views",
    date: "Oct 28, 2025",
    likes: "7 Likes",
  },
  {
    url: "https://www.youtube.com/embed/4ZQS3cd8B9k?si=ftG0pofjfflqPOyL",
    thumbnail:img1,
    title: "XAT 2026 Registration: Step by Step Process",
    views: "251 Views",
    date: "Jul 21, 2025",
    likes: "1 Likes",
  },
  {
    url: "https://www.youtube.com/embed/vHv9gpwl3bs?si=AogAQ7AQxSmlan4T",
    thumbnail: img5,
    title:
      "Amitabh Kant: India’s Engineering Education Must Focus on AI & EV...",
    views: "143 Views",
    date: "Oct 28, 2025",
    likes: "7 Likes",
  },
  {
    url: "https://www.youtube.com/embed/4ZQS3cd8B9k?si=ftG0pofjfflqPOyL",
    thumbnail: img2,
    title: "XAT 2026 Registration: Step by Step Process",
    views: "251 Views",
    date: "Jul 21, 2025",
    likes: "1 Likes",
  },
  {
    url: "https://www.youtube.com/embed/vHv9gpwl3bs?si=AogAQ7AQxSmlan4T",
    thumbnail: img4,
    title:
      "Amitabh Kant: India’s Engineering Education Must Focus on AI & EV...",
    views: "143 Views",
    date: "Oct 28, 2025",
    likes: "7 Likes",
  },
  {
    url: "https://www.youtube.com/embed/4ZQS3cd8B9k?si=ftG0pofjfflqPOyL",
    thumbnail: img3,
    title: "XAT 2026 Registration: Step by Step Process",
    views: "251 Views",
    date: "Jul 21, 2025",
    likes: "1 Likes",
  },
  {
    url: "https://www.youtube.com/embed/vHv9gpwl3bs?si=AogAQ7AQxSmlan4T",
    thumbnail: img5,
    title:
      "Amitabh Kant: India’s Engineering Education Must Focus on AI & EV...",
    views: "143 Views",
    date: "Oct 28, 2025",
    likes: "7 Likes",
  },
];
const articles = [
  {
    id: 1,
    live: true,
    title:
      "NIFT 2026 Notification (Anytime Soon) LIVE: Exam Date, NIFT UG/PG Registration Release Date",
    desc:
      "NIFT Applications for UG and PG programmes are expected anytime now. The registration will begin on the website of NIFT...",
    author: "Sayeba Naushad",
    date: "Nov 27, 2025",
    comments: 1,
    shares: 13,
    views: 0,
    image: img1,
  },
  {
    id: 2,
    live: true,
    title:
      "Board Exam Date Sheet 2026 Class 10, 12 Live Updates: Check CBSE, Maharashtra Board, UP Board, GSEB, HBSE Date Sheet",
    desc:
      "Board exam date sheet 2026 for class 10 and 12 for several states is released on the official website. For rest, it will be released soon...",
    author: "Jasleen Taneja",
    date: "Nov 27, 2025",
    comments: 1,
    shares: 13,
    views: 0,
    image: img4,
  },
  {
    id: 3,
    live: false,
    title:
      "Landmark Judgements & Important Cases for Law Entrance Exam Preparation",
    desc:
      "For the AIBE 2025 exam, familiarising yourself with these landmark judgments is essential for excelling AIBE Exam 2025...",
    author: "Anupama Mehra",
    date: "Nov 27, 2025",
    comments: 1,
    shares: 75,
    views: "59K",
    image: img3,
  },
  {
    id: 4,
    live: true,
    title:
      "Bihar Board Class 10, 12 Exam Date Sheet 2026 (Anytime Soon); Live Updates on BSEB Matric, Inter Time Table PDF",
    desc:
      "The Bihar School Examination Board will hold the BSEB Matric and Intermediate exams 2026 in February 2026, tentatively...",
    author: "Md Shahzad",
    date: "Nov 27, 2025",
    comments: 1,
    shares: 0,
    views: 0,
    image: img,
  },
];
const courses = [
  "After 12th - Science",
  "After 12th - Arts",
  "After 12th - Commerce",
  "B.Ed",
  "D.El.Ed (Diploma in Elementary Education)",
  "BSc",
  "Nursery Teacher Training (NTT)",
  "B Tech (Bachelor of Technology)",
  "MBA (Masters of Business Administration)",
  "Early Childhood Care & Education (ECCE)",
  "B.Sc Nursing",
  "BBA (Bachelor of Business Administration)",
  "B.A (Bachelor of Arts)",
  "Chartered Accountancy",
  "LL.B.",
  "BCA (Bachelor of Computer Applications)",
  "GNM Course",
  "MSW (Master of Social Work)",
  "MBBS",
  "Ph.D.",
  "B.Com",
  "Cabin Crew/Air Hostess"
];
export { cardData, collegeData, newsData, nextVideos, mainVideo,articles,courses  };
