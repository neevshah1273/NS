// import Head from 'next/head';
 import Image from 'next/image';

// export default function Home() {
//   return (
//     <main data-theme="night" className="bg-gray-900 text-white min-h-screen overflow-x-hidden">
//       <Head>
//         <title>Portfolio | Neev Shah</title>
//         <meta name="description" content="Portfolio featuring futuristic design and data visualization projects." />
//       </Head>

//       {/* Navbar */}
//       <header className="fixed w-full top-0 bg-gray-900/80 backdrop-blur-lg py-4 px-8 flex justify-between items-center z-50">
//         <h1 className="text-2xl font-bold">Neev Shah</h1>
//         <nav>
//           <ul className="flex gap-6 text-lg">
//             <li><a href="#about" className="hover:text-teal-400">About</a></li>
//             <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
//             <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
//           </ul>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-center relative">
//         <div className="z-10">
//           <h2 className="text-5xl font-bold mb-4">Crafting <span className="text-teal-400">Intuitive Experiences</span></h2>
//           <p className="text-xl mb-8"> Problem Solver | Software Engineer | Product Thinker</p>
//           <a href="#projects" className="bg-teal-400 text-gray-900 py-3 px-6 rounded-full font-semibold hover:bg-teal-300 transition">View My Work</a>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 px-8 text-center bg-gray-800">
//         <h2 className="text-4xl font-bold mb-4">About Me</h2>
//         <p className="text-lg max-w-2xl mx-auto">
//           I specialize in designing seamless user experiences that blend functionality and aesthetics. My focus is on data visualization, ensuring users gain insights through intuitive interactions.
//         </p>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-20 px-8 bg-gray-900 text-center">
//         <h2 className="text-4xl font-bold mb-10">Featured Projects</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition transform shadow-lg">
//             <Image src="/assets/05.png" alt="Git Lazy Tracker" width={400} height={200} className="rounded-lg" />
//             <h3 className="text-2xl text-teal-400 font-semibold mt-4">Git Lazy Tracker</h3>
//             <p>Next.js & Tailwind CSS-based web app tracking GitHub contributions with AWS cloud infrastructure.</p>
//           </div>
//           <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition transform shadow-lg">
//             <Image src="/assets/WB06.png" alt="Welcome Broker" width={400} height={200} className="rounded-lg" />
//             <h3 className="text-2xl text-teal-400 font-semibold mt-4">Welcome Broker</h3>
//             <p>Flutter-powered mobile app with Node.js backend, Docker, AWS integration, and MongoDB for real-time data.</p>
//           </div>
//           <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition transform shadow-lg">
//             <Image src="/assets/MC2.gif" alt="Nuclear Leakage Visualization" width={400} height={200} className="rounded-lg" />
//             <h3 className="text-2xl text-teal-400 font-semibold mt-4">Nuclear Leakage Visualization</h3>
//             <p>Data-driven visualization with D3.js, Flask backend, and PostgreSQL for nuclear leakage tracking.</p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 px-8 bg-gray-800 text-center">
//         <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
//         <p className="text-lg mb-6">Interested in collaborating? Let's build something amazing.</p>
//         <a href="mailto:neevshah@example.com" className="bg-teal-400 text-gray-900 py-3 px-6 rounded-full font-semibold hover:bg-teal-300 transition">Get in Touch</a>
//       </section>
//       {/* Footer */}
//       <footer className="bg-gray-900 text-center py-4 text-sm">
//         © 2025 Neev Shah. All rights reserved.
//       </footer>
//     </main>
//   );
// }
/*
This is a Next.js + Tailwind CSS project for a UX Portfolio Website.
The project includes:
- Futuristic hero section with dynamic animations.
- Responsive design using Tailwind CSS.
- Contact section aligned with reference custom CSS.
- Design consistency with exact colors, gradients, font sizes from the provided reference.
*/

// 1. pages/index.js (Main Page)

import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-[#0e0e1b] text-[#f5f5f5] min-h-screen overflow-x-hidden font-[Poppins, sans-serif]">
      <Head>
        <title>Portfolio | Neev Shah</title>
        <meta name="description" content="Portfolio featuring projects." />
      </Head>

      {/* Navbar */}
      <header className="navbar fixed w-full top-0 bg-[rgba(14,14,27,0.9)] backdrop-blur-lg py-5 px-[50px] flex justify-between items-center z-50">
        <h1 className="text-[1.8rem] font-semibold">Neev Shah</h1>
        <nav>
          <ul className="flex gap-[30px] text-lg font-normal list-none">
            <li><a href="#about" className="">About</a></li>
            <li><a href="#projects" className="">Projects</a></li>
            <li><a href="#contact" className="">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero h-screen flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_bottom,_#1b2735_0%,_#090a0f_100%)] text-center animate-fadeIn ">
        <div className="hero-content z-10 flex-1 flex flex-col ">
          <h2 className="text-[4rem] font-semibold mt-20">
          Building for  <span className="text-[#00ffe0]">Impact,</span> 
          <br/>
          Engineering for <span className="text-[#00ffe0]"> Scale</span>
          </h2>
          <p className="my-[25px] text-[1.25rem]">Problem Solver | Software Engineer | System Architect</p>
          <a href="#projects" className="cta-btn py-[15px] px-[30px] border-2 border-[#00ffe0] text-[#00ffe0] font-semibold rounded-full hover:bg-[#00ffe0] hover:text-[#0e0e1b] transition-all duration-300">
            View My Work
          </a>
        </div>
        <div className='h-24'>
            <h6 className="text-2xl text-center">Connect</h6>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="https://github.com/neevshah1273" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M12 .5C5.372.5 0 5.872 0 12.5c0 5.148 3.293 9.5 7.874 11.075.575.106.75-.249.75-.554v-2.138c-3.219.697-3.906-1.54-3.906-1.54-.527-1.335-1.287-1.692-1.287-1.692-1.052-.72.08-.706.08-.706 1.166.082 1.775 1.198 1.775 1.198 1.037 1.777 2.718 1.265 3.375.968.105-.749.407-1.265.739-1.555-2.666-.303-5.466-1.333-5.466-5.933 0-1.314.47-2.392 1.241-3.233-.125-.303-.54-1.528.117-3.175 0 0 1.008-.322 3.303 1.23a11.545 11.545 0 0 1 3.003-.404c1.019.004 2.051.138 3.003.404 2.295-1.552 3.303-1.23 3.303-1.23.657 1.647.242 2.872.118 3.175.77.841 1.241 1.92 1.241 3.233 0 4.608-2.803 5.63-5.475 5.934.419.36.793 1.086.793 2.188v3.244c0 .308.173.667.757.554C20.707 22 24 17.648 24 12.5 24 5.872 18.628.5 12 .5z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/neevshah1273" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M19 0h-14c-2.209 0-4 1.791-4 4v16c0 2.209 1.791 4 4 4h14c2.209 0 4-1.791 4-4v-16c0-2.209-1.791-4-4-4zm-11 20h-3v-11h3v11zm-1.5-12.5c-1.035 0-1.5-.665-1.5-1.5 0-.832.465-1.5 1.5-1.5s1.5.668 1.5 1.5c0 .835-.465 1.5-1.5 1.5zm13.5 12.5h-3v-5.5c0-1.37-.027-3.138-1.915-3.138-1.917 0-2.212 1.493-2.212 3.032v5.606h-3v-11h3v1.5h.042c.42-.795 1.448-1.632 2.982-1.632 3.196 0 3.785 2.106 3.785 4.844v6.288z" />
                </svg>
              </a>
              <a href="mailto:neevshah1273@gmail.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                </svg>
              </a>
            </div>
          </div>
      </section>

      {/* About Section */}
      <section id="about" className="about py-[100px] px-[50px] text-center bg-[#0e0e1b]">
        <h2 className="text-[2.5rem] font-semibold mb-[20px]">About Me</h2>
        <p className="text-[1.2rem] max-w-[800px] mx-auto leading-relaxed">
        I specialize in designing and developing high-performance software solutions that balance functionality, scalability, and maintainability. My expertise spans full-stack development, backend architecture, and frontend engineering, with a strong foundation in cloud computing, Git workflows, containerization, and CI/CD pipelines. I build robust, scalable applications using modern frameworks and technologies, ensuring reliability and efficiency across web and mobile platforms. Additionally, I integrate large language models (LLMs) to enhance AI-driven features and optimize system performance.
        </p>
      </section>

      {/* Projects Section */}
      
      <section id="projects" className="py-20 px-8 bg-gray-900 text-center">
         <h2 className="text-4xl font-bold mb-10">Featured Work</h2>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition transform shadow-lg">
            
            <div className="w-full h-[300px] flex items-center justify-center rounded-lg">
              <Image
                src="/assets/05.png"
                alt="Git Lazy Tracker"
                width={400}
                height={300}
                className="rounded-lg object-contain !w-full !h-full"
              />
            </div>
            
             {/* <Image src="/assets/05.png" alt="Git Lazy Tracker" width={400} height={200} className="rounded-lg" /> */}
            <h3 className="text-2xl text-teal-400 font-semibold mt-4">Git Lazy Tracker</h3>
            <p>Next.js & Tailwind CSS-based web app tracking GitHub contributions with AWS cloud infrastructure.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition transform shadow-lg">
            <div className="w-full h-[300px] flex items-center justify-center rounded-lg">
              <Image 
                src="/assets/WB08.png" 
                alt="Welcome Broker" 
                width={400} 
                height={300} 
                className="rounded-lg !w-full !h-full object-contain"/>
              </div>
              <h3 className="text-2xl text-teal-400 font-semibold mt-4">Welcome Broker</h3>
              <p>Flutter-powered mobile app with Node.js backend, Docker, AWS integration, and MongoDB for real-time data.</p>
           </div>
           <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition transform shadow-lg">
              <div className="w-full h-[300px] flex items-center justify-center rounded-lg">
                <Image 
                  src="/assets/MC2.gif" 
                  alt="Nuclear Leakage Visualization" 
                  width={400}
                  height={300} 
                  className="rounded-lg object-contain !w-full !h-full" />
                </div>
                <h3 className="text-2xl text-teal-400 font-semibold mt-4">Nuclear Leakage Visualization</h3>
                <p>Data-driven visualization with D3.js, Flask backend, and PostgreSQL for nuclear leakage tracking.</p>
              </div>
            </div>
            <div className="projects py-[100px] px-[50px] bg-[#131323] text-center">
              <h2 className="text-[2.5rem] font-semibold mb-[40px]">Other Projects</h2>
              <div className="project-grid grid gap-[40px] grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]">
                  <div className="project-card bg-[#1e1e35] p-[30px] rounded-[20px] shadow-lg hover:shadow-[0px_20px_40px_rgba(0,255,224,0.2)] hover:-translate-y-2 transition-all">
                    <h3 className="text-[1.5rem] text-[#00ffe0] mb-[10px] font-semibold">Crimelens</h3>
                    <p> Crafted a data visualization dashboard that shows various studies of crime in the US using Next.js, D3.js, GraphQL and a Java Spring-based backend.</p>
                  </div>
                  <div className="project-card bg-[#1e1e35] p-[30px] rounded-[20px] shadow-lg hover:shadow-[0px_20px_40px_rgba(0,255,224,0.2)] hover:-translate-y-2 transition-all">
                    <h3 className="text-[1.5rem] text-[#00ffe0] mb-[10px] font-semibold">Electchain</h3>
                    <p>Architected & Developed a blockchain-based E-Voting android application using Kotlin, Node.Js and Solidity that included various security features.</p>
                  </div>
                  <div className="project-card bg-[#1e1e35] p-[30px] rounded-[20px] shadow-lg hover:shadow-[0px_20px_40px_rgba(0,255,224,0.2)] hover:-translate-y-2 transition-all">
                    <h3 className="text-[1.5rem] text-[#00ffe0] mb-[10px] font-semibold">Auction11</h3>
                    <p>Now building an IPL fantasy auction simulator</p>
                  </div>
              </div>
            </div>
       </section>
       {/* <section id="projects" className="projects py-[100px] px-[50px] bg-[#131323] text-center"> */}
       
      {/* </section> */}
      {/* Contact Section */}
      <section id="contact" className="contact py-[100px] px-[50px] text-center bg-[#0e0e1b]">
        <h2 className="text-[2.5rem] font-semibold mb-[20px]">Let's Connect</h2>
        <p className="text-[1.2rem] mb-[30px] leading-relaxed">
          Interested in collaborating? Let's build something amazing.
        </p>
        <a href="mailto:neevshah1273@gmail.com" className="cta-btn py-[15px] px-[30px] border-2 border-[#00ffe0] text-[#00ffe0] font-semibold rounded-full hover:bg-[#00ffe0] hover:text-[#0e0e1b] transition-all duration-300">
          Get in Touch
        </a>
      </section>

      {/* Footer */}
      <footer className="py-[30px] text-center bg-[#0e0e1b] text-[0.9rem]">
        © 2025 Neev Shah. All rights reserved.
      </footer>
    </div>
  );
}

