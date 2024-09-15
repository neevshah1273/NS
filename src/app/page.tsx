import Image from "next/image";

export default function Home() {
  return (
    <main data-theme="night">
      <div className="flex h-screen">
        <div className="w-1/2 text-secondary text-5xl">
          Looking for my experience, projects and skills?
          <button className="btn btn-accent"> Download Resume</button>
        </div>
        <div className="w-1/2">
          <button className="btn btn-ghost"> Deep Dive into my Journey</button>
        </div>
      </div>
      {/**
       * Git Lazy Tracker
       */}
      <div className="flex w-ful h-screen">
        <div className="grid h-full flex-grow card bg-base-300 rounded-box place-items-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/GvwC1VoxJh8?si=tcunBF6WSPxXx6y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
              <h2 className="card-title">Learning new technologies is like unlocking the next level in the game of innovation.</h2>
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
                <li>Magic with D3.js</li>               
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
    </main>
  );
}
