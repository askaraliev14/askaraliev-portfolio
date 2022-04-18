// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import Container from "@mui/material/Container";
//
// const ContentCanvas = () => {
//     const particlesInit = async (main) => {
//         await loadFull(main);
//     };
//
//     return (
//         <Container>
//             <Particles
//                 id="tsparticles"
//                 init={particlesInit}
//                 options={{
//                     fpsLimit: 60,
//                     interactivity: {
//
//                         events: {
//                             onClick: {
//                                 enable: true,
//                                 mode: "push",
//                             },
//                             onHover: {
//                                 enable: true,
//                                 mode: "repulse",
//                             },
//                             resize: true,
//                         },
//                         modes: {
//                             push: {
//                                 quantity: 4,
//                             },
//                             repulse: {
//                                 distance: 200,
//                                 duration: 0.8,
//                             },
//                         },
//                     },
//                     particles: {
//                         color: {
//                             value: "#ffffff",
//                         },
//                         links: {
//                             color: "#ffffff",
//                             distance: 150,
//                             enable: true,
//                             opacity: 0.5,
//                             width: 1,
//                         },
//                         collisions: {
//                             enable: true,
//                         },
//                         move: {
//                             direction: "none",
//                             enable: true,
//                             outModes: {
//                                 default: "bounce",
//                             },
//                             random: false,
//                             speed: 0.5,
//                             straight: false,
//                         },
//                         number: {
//                             density: {
//                                 enable: true,
//                                 area: 800,
//                             },
//                             value: 50,
//                         },
//                         opacity: {
//                             value: 0.5,
//                         },
//                         shape: {
//                             type: "circle",
//                         },
//                         size: {
//                             value: { min: 0.5, max: 3 },
//                         },
//                     },
//                     detectRetina: true,
//                 }}
//             />
//         </Container>
//     );
// };
//
// export default ContentCanvas;