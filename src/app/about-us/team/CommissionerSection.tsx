import Image from "next/image";
import React from "react";

interface CommissionerSectionProps {
  imgSrc: string;
  heading: string;
  description: string;
}

const CommissionerSection: React.FC<CommissionerSectionProps> = ({ imgSrc, heading, description }) => {
  return (
    <section className="w-full bg-white py-10 md:py-20 px-4 md:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-20 w-full mx-auto">
      <div className="w-full md:w-auto flex-shrink-0 flex justify-center">
        <Image src={imgSrc} alt="Commissioner" width={300} height={300} className="rounded-xl object-cover w-full h-[350px] md:w-[400px] md:h-[340px]" />
      </div>
      <div className="flex-1 w-full mt-4 md:mt-0">
        <h2 className="text-lg md:text-[43px] font-medium mb-2 md:mb-4 text-dark-primary">{heading}</h2>
        <p className="text-gray-700 text-sm md:text-[1rem] leading-relaxed text-justify whitespace-pre-line">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non itaque ab maxime nam similique repellendus quidem, neque dolores labore architecto sapiente praesentium quo mollitia officia ex fugit? Dolorum, eaque ut!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, error quos? Accusamus distinctio cupiditate natus delectus inventore neque ut nisi placeat quae nobis harum consectetur quos ducimus beatae, nulla quisquam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, aliquid! Aut soluta, dolorum error eligendi recusandae harum ab nostrum quos ipsam. Quam repellat debitis at, nisi quia eius deserunt! Dolore.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quidem distinctio numquam minus earum laboriosam, dicta et similique, commodi asperiores ut alias reiciendis unde! Nisi doloremque odit facere quas laudantium!
        </p>
      </div>
    </section>
  );
};

export default CommissionerSection; 