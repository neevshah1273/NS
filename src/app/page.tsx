import Image from "next/image";

export default function Home() {
  return (
    <main data-theme="night">
     <div className="fixed bottom-0 left-0 w-full p-4">
        <nav className="flex justify-center items-center">
          <div>
            <h6 className="text-2xl footer-title text-center">Connect</h6>
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
        </nav>
      </div>

      <div className="flex h-screen justify-center items-center flex-col">
       
      <div className="w-full flex flex-row justify-evenly">

        <div className="w-1/2 flex flex-col justify-center ">
          <div className="flex justify-center">
          <div className="align-middle content-center items-center m-auto my-auto headshot headshot-2"></div>
        
        
        </div>
          
            <h1 className="text-5xl flex justify-center">
                    Hi, I'm
            </h1> 
            <h1 className="text-primary text-7xl flex justify-center">
              Neev Shah
            </h1>
            <div className="h-20"></div>
            <h4 className="mx-10 mt-4 text-3xl flex justify-center text-center">I'm a Software Engineer passionate about creating scalable products and developing impactful solutions that solve real-world problems.</h4>

        </div>

      <div className="w-1/2 flex flex-col items-center justify-center">
      <div className="m-10 text-5xl">
            <h6>Looking for my experiences, projects and skills?</h6>
            <div className="flex flex-col justify-center gap-y-8 mt-8 w-4/5">

            
            {/* <button className="btn btn-accent"> */}
              <a className="btn btn-accent" href="#GLT"> Deep Dive into my Journey </a> 
            {/* </button>  
             */}
            {/* <button className="btn btn-accent"> */}
            <a className="btn btn-accent" href="/assets/Neev_Shah_Resume.pdf" download> Download Resume</a>
            {/* </button> */}
                
            
            </div>
      </div>
      </div>
      
      </div>
        
      
      
      

        {/* <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="flex flex-row">
        <div className="align-middle content-center items-center m-auto my-auto headshot headshot-2"></div>

          <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl justify-start">
              Hi, I'm
            </h1>
            <h1 className="text-primary text-7xl">
              Neev Shah
            </h1>
          </div>
        </div>
       
        
        
        <h4 className="mx-10 mt-20 text-3xl">I'm a Software Engineer passionate about creating scalable products and developing impactful solutions that solve real-world problems.</h4>


        </div>
        <div className="w-1/2 flex flex-row items-center text-secondary text-5xl">
          <div className="m-10">
            <h6>Looking for my experiences, projects and skills?</h6>
            <div className="flex justify-center gap-x-8 mt-8">

            
            <button className="btn btn-accent"> Deep Dive into my Journey</button>  
            <button className="btn btn-accent"> Download Resume</button>
            </div>
          </div>
            
            
          </div> */}
      </div>
      {/**
       * Git Lazy Tracker
       */}
      <div className="flex w-full h-screen" id="GLT">
        <div className="grid h-full flex-grow card bg-base-300 rounded-box place-items-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/GvwC1VoxJh8?si=tcunBF6WSPxXx6y4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <Image 
          src={'/assets/05.png'}
          alt="Welcome Broker"
          width={550}
          height={60}
          className="img02"
        >
        </Image>

        
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid h-full flex-grow card bg-base-300 rounded-box place-items-center">
          <div className="text-5xl text-primary">
            Git Lazy Tracker
          </div>
          <div>
          <div className="card w-96 bg-base-100 shadow-xl mb-5">
            <div className="card-body">
              <h2 className="card-title">FrontEnd</h2>
              <ul className="list-disc">
                <li>Enhanced experience with Next.Js & Tailwind CSS</li>
                <li>Setup of the NextJs server(proxy server)</li>
              </ul>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl mb-5">
            <div className="card-body">
              <h2 className="card-title">Cloud Architecture</h2>
              <ul className="list-disc">
                <li>Worked with the AWS CDK</li>
                <li>Architect cloud infrastructure utilizing the AWS services like S3, Lambda, EC2 & dynamoDB</li>
              </ul>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl mb-5">
            <div className="card-body">
              <h2 className="card-title">Teamwork is a dreamwork</h2>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="flex w-ful h-screen">
        
        
        <div className="grid h-full flex-grow card bg-base-300 rounded-box place-items-center">
          <div className="text-5xl text-primary">
            Welcome Broker
          </div>
          <div>
          <div className="card w-96 bg-base-100 shadow-xl mb-5">
            <div className="card-body">
              <h2 className="card-title">App Development</h2>
              <ul className="list-disc">
                <li>Enhanced experience of Flutter</li>
              </ul>
            </div>
          </div>
          
          <div className="card w-96 bg-base-100 shadow-xl mb-5">
            <div className="card-body">
              <h2 className="card-title">Backend</h2>
              <ul className="list-disc">
                <li>Proeficient in NodeJs</li>
                <li>Setup Notification system</li>
              </ul>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl mb-5">
            <div className="card-body">
              <h2 className="card-title"></h2>
              <ul className="list-disc">
                <li>Worked with NOSQL DB - MongoDB</li>
                <li>Worked with Docker & AWS</li>
                <li>Responsible for the entire product managing updates in the Google Play store and Apple app store</li>
              </ul>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl mb-5">
            <div className="card-body">
              <h2 className="card-title">Leadership and learning are indispensable to each other</h2>
            </div>
          </div>
          </div>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid h-full flex-grow card bg-base-300 rounded-box place-items-center">
          <div className="flex flex-row space-x-3">
            <div className="">
              <div className="flex gap-x-4">
                <Image 
                  src={'/assets/WB06.png'}
                  alt="Welcome Broker"
                  width={330}
                  height={50}
                  className="img03 rounded-3xl"
                >
                </Image>
                <Image 
                  src={'/assets/WB05.png'}
                  alt="Welcome Broker"
                  width={330}
                  height={30}
                  className="img03 rounded-3xl"
                >
                </Image>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
      <div className="flex w-full h-screen">
        <div className="grid h-full w-1/2 flex-grow card bg-base-300 rounded-box place-items-center">
          <div className="w-full p-16 ">
              <div className="transition-colors ease-linear shadow-md">
                <div className="w-full h-12 rounded-t-lg bg-gray-200 dark:bg-gray-900 flex justify-start items-center space-x-1.5 px-4">
                    <span className="w-3 h-3 border-2 border-transparent dark:border-red-400 rounded-full bg-red-400 dark:bg-transparent "></span>
                    <span className="w-3 h-3 border-2 border-transparent dark:border-yellow-400 rounded-full bg-yellow-400 dark:bg-transparent"></span>
                    <span className="w-3 h-3 border-2 border-transparent dark:border-green-400 rounded-full bg-green-400 dark:bg-transparent"></span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 border-t-0 w-full h-100 rounded-b-lg">
                <Image 
                    src={'/assets/APC01.png'}
                    alt="Apice Tech"
                    layout="responsive"
                    width={700}
                    height={30}
                    className="rounded-lg"
                  >
                  </Image>
                </div>
            </div>
           
          </div>
        
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid h-full flex-grow card bg-base-300 rounded-box place-items-center">
          <div className="text-5xl text-primary">
            Apice Tech Pvt Ltd
          </div>
          <div>
          <div className="card w-96 bg-base-100 shadow-xl mb-5">
            <div className="card-body">
              <h2 className="card-title">FrontEnd</h2>
              <ul className="list-disc">
                <li>Proficient in React.js, Redux, and SCSS, with extensive experience in creating user-friendly and efficient interfaces.</li>               
              </ul>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl mb-5">
            <div className="card-body">
              <h2 className="card-title">backend</h2>
              <ul className="list-disc">
                <li>Experienced in developing robust back-end services using Java and Spring Boot, focusing on microservice-based architecture.</li>
              </ul>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl mb-5">
            <div className="card-body">
              <h2 className="card-title">Learning is the only constant.</h2>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="flex w-ful h-screen">
        
        
        <div className="grid h-full flex-grow card bg-base-300 rounded-box place-items-center">
          <div className="text-5xl text-primary">
            ElectChain
          </div>
          <div>
          <div className="card w-96 bg-base-100 shadow-xl mb-5">
            <div className="card-body">
              <h2 className="card-title">App Development</h2>
              <ul className="list-disc">
                <li>Worked with Kotlin, Jetpack Compose</li>
              </ul>
            </div>
          </div>
          
          <div className="card w-96 bg-base-100 shadow-xl mb-5">
            <div className="card-body">
              <h2 className="card-title">Backend</h2>
              <ul className="list-disc">
                <li>Worked with NodeJs</li>
                <li>Integreated with Smart contract</li>
              </ul>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl mb-5">
            <div className="card-body">
              <h2 className="card-title"> Blockchain Development</h2>
              <ul className="list-disc">
                <li>Developed Smart contract using Solidity</li>
                <li>proof of work-based secured voting transactions</li>
              </ul>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl mb-5">
            <div className="card-body">
              <h2 className="card-title">Staying adaptable with technology keeps you resilient in an ever-changing landscape.</h2>
            </div>
          </div>
          </div>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid h-full flex-grow card bg-base-300 rounded-box place-items-center">
          <div className="flex flex-row space-x-3">
            <div className="">
              <div className="flex flex-col gap-x-4 gap-y-4">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/_u70tJwaVh4?si=0RhKBE0Tr-fPhG0l" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <div className="w-full flex justify-center items-center">
              <a href="https://link.springer.com/chapter/10.1007/978-981-19-2894-9_19" target="_blank" rel="noopener noreferrer">
                <Image 
                  src={'/assets/publishing.png'}
                  alt="RP"
                  width={30}
                  height={12}
                  className="rounded-3xl"
                />
              </a>
              </div>
                
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
      <div className="flex w-full h-screen">
        <div className="grid h-full w-1/2 flex-grow card bg-base-300 rounded-box place-items-center">
          <div className="w-full p-16 ">
              <div className="transition-colors ease-linear shadow-md">
                <div className="w-full h-12 rounded-t-lg bg-gray-200 dark:bg-gray-900 flex justify-start items-center space-x-1.5 px-4">
                    <span className="w-3 h-3 border-2 border-transparent dark:border-red-400 rounded-full bg-red-400 dark:bg-transparent "></span>
                    <span className="w-3 h-3 border-2 border-transparent dark:border-yellow-400 rounded-full bg-yellow-400 dark:bg-transparent"></span>
                    <span className="w-3 h-3 border-2 border-transparent dark:border-green-400 rounded-full bg-green-400 dark:bg-transparent"></span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 border-t-0 w-full h-88 rounded-b-lg">
                <Image 
                    src={'/assets/MC2.gif'}
                    alt="Apice Tech"
                    layout="responsive"
                    width={700}
                    height={30}
                    className="rounded-lg"
                  >
                  </Image>
                </div>
            </div>
           
          </div>
        
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid h-full flex-grow card bg-base-300 rounded-box place-items-center">
          <div className="text-5xl text-primary">
            Nuclear leakage visualization
          </div>
          <div>
          <div className="card w-96 bg-base-100 shadow-xl mb-5">
            <div className="card-body">
              <h2 className="card-title">FrontEnd</h2>
              <ul className="list-disc">
                <li>Data driven Magic with D3.js</li>               
              </ul>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl mb-5">
            <div className="card-body">
              <h2 className="card-title">backend</h2>
              <ul className="list-disc">
                <li>Worked with Flask and PostgreSQL</li>
              </ul>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl mb-5">
            <div className="card-body">
              <h2 className="card-title">Mastering visualization transforms complex ideas into clear, actionable insights.</h2>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="flex w-ful h-screen">
        
        
        <div className="grid h-full flex-grow card bg-base-300 rounded-box place-items-center">
          <div className="text-5xl text-primary">
            Crimelens
          </div>
          <div>
          <div className="card w-96 bg-base-100 shadow-xl mb-5">
            <div className="card-body">
              <h2 className="card-title">FrontEnd Development</h2>
              <ul className="list-disc">
                <li>Worked with Next.Js & Tailwind CSS</li>
              </ul>
            </div>
          </div>
          
          <div className="card w-96 bg-base-100 shadow-xl mb-5">
            <div className="card-body">
              <h2 className="card-title">Backend</h2>
              <ul className="list-disc">
                <li>Worked Java Springboot</li>
                <li> Worked with services Apache Jena Fuseki </li>
              </ul>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl mb-5">
            <div className="card-body">
              <h2 className="card-title">Knowledge Graph</h2>
              <ul className="list-disc">
                <li>Preprocessed the 3 datasets, prepared the ontology according to the datasets, created a Knowledge graph</li>
                <li>ran the SPARQL queries to fetch open linked data from the Apache Jena.</li>
              </ul>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl mb-5">
            <div className="card-body">
              <h2 className="card-title">Embracing new challenges fuels growth and sparks innovation.</h2>
            </div>
          </div>
          </div>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid h-full flex-grow card bg-base-300 rounded-box place-items-center">
          <div className="flex flex-row space-x-3">
            <div className="">
              <div className="flex gap-x-4">
                <Image 
                  src={'/assets/CL.gif'}
                  alt="Welcome Broker"
                  width={700}
                  height={40}
                  className="rounded-xl"
                >
                </Image>
                {/* <Image 
                  src={'/assets/WB05.png'}
                  alt="Welcome Broker"
                  width={330}
                  height={30}
                  className="img03 rounded-3xl"
                >
                </Image> */}
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </main>
  );
}
