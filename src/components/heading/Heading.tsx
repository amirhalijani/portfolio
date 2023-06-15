import Image from "next/image"
import HeadingBanner from "../../utils/images/heading/Heading-Banner.jpg"

const Heading = () => {
  return (
    <div id="aboutme" className="flex flex-col lg:flex-row items-center w-full gap-x-8 px-4 py-6 lg:p-0 gap-y-3">
      <Image src={HeadingBanner} alt="Banner" className="w-full lg:w-1/2" />
      <div className="w-full text-center lg:text-left lg:w-1/2 flex flex-col justify-center gap-y-3 lg:gap-y-6">
        <h1 className="text-[2.5rem] lg:text-[3.5rem] font-['Poppins-Black']">Amir Alijani</h1>
        <p className="w-full lg:w-[80%] text-[0.8rem] lg:text-[1rem] text-justify lg:leading-9 text-gray-600 font-['Poppins-Regular']">
          Software engineer with more than two years of experience working with different teams as well as self-employed.
          Proficient in front-end development and familiar with database, data structure, Python, Golang, C++ and Java.
          Interested in learning and working with new technologies and doing research and academic projects.
        </p>
      </div>
    </div>
  )
}

export default Heading