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
      <div className="flex w-ful h-screen">
        <div className="grid h-full flex-grow card bg-base-300 rounded-box place-items-center">
          Image of the 
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
            <div className="row-auto">
              <div className="columns-auto">
                <Image 
                  src={'/assets/01.jpg'}
                  alt="Welcome Broker"
                  width={200}
                  height={30}
                  className="img01"
                >
                </Image>
                <Image 
                  src={'/assets/02.jpg'}
                  alt="Welcome Broker"
                  width={400}
                  height={30}
                  className="img02"
                >
                </Image>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
      <div className="flex w-ful h-screen">
        <div className="grid h-full flex-grow card bg-base-300 rounded-box place-items-center">
          Image of the 
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
    </main>
  );
}
