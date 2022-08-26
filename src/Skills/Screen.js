// // // I did not write this hook, but it is a very useful react hook for doing just what you are asking.

// import { useEffect, useState } from "react";

// export default function useWindowSize() {
//   const shoudLog = useRef(true);
//   const [windowSize, setWindowSize] = useState({
//     width: undefined,
//     height: undefined,
//   });

//   useEffect(() => {
//     if (shoudLog.current) {
//       shoudLog.current = false;
//       const myTags = [
//         "JavaScript",
//         "CSS",
//         "SASS",
//         "TypeScript",
//         "ES6",
//         "Bootstrap",
//         "HTML",
//         "C++",
//         "React",
//         "Python",
//         "GIT",
//         "Figma",
//         "NPM",
//         "JSON",
//         "REST",
//         "NODE",
//         "Express",
//       ];
//       function handleResize() {
//         setWindowSize({
//           width: window.innerWidth,
//           height: window.innerHeight,
//         });
//       }
//       window.addEventListener("resize", handleResize);
//       handleResize();

//       // let tags = 0;
// if (windowSize.width > 1240) {
//   tags = 250;
// } else if (windowSize.width < 1240 && windowSize.width > 1000) {
//   tags = 200;
// } else if (windowSize.width < 1000 && windowSize.width > 900) {
//   tags = 180;
// } else if (windowSize.width < 900 && windowSize.width > 750) {
//   tags = 150;
// } else if (windowSize.width < 750 && windowSize.width > 600) {
//   tags = 130;
// } else if (windowSize.width < 600) {
//   tags = 200;
// }

//       window.removeEventListener("resize", handleResize);
//       console.log(tags);
//       const TagCloud = require("TagCloud");
//       const container = ".content";
//       TagCloud(container, myTags, {
//         radius: 240,
//         maxSpeed: "normal",
//         initSpeed: "normal",
//         direction: 135,
//         keep: true,
//       });
//       document.querySelector(".content").style.color = "#00ffff";
// }
