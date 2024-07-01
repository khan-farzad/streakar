import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div id="features" className="px-10 py-20 mb-40">
      <div className="flex gap-2 px-10">
        <Image
          alt="pointer"
          src={"/pointer2.svg"}
          height={49}
          width={99}
          className="my-5 [transform:rotateY(180deg)]"
        />
        <h2 className="text-5xl font-semibold">Features</h2>
      </div>
      <div className="flex-center flex-col md:flex-row gap-20 *:shadow-2xl">
        <div className="bg-red-200 rounded-3xl p-10 text-center -rotate-12">
          <h3 className="text-2xl font-semibold">
            Effortlessly Track Your Hobbies
          </h3>
          <p>
            Enjoy a fun and simple way to keep tabs on your passions with
            Steakar, turning every moment into a delightful experience.
          </p>
        </div>
        <div className="bg-blue-200 rounded-3xl p-10 text-center">
          <h3 className="text-2xl font-semibold">Collaborate with Friends</h3>
          <p>
            Make it fun while staying disciplined with Steakar, where teamwork
            and enjoyment go hand in hand.
          </p>
        </div>
        <div className="bg-purple-200 rounded-3xl p-10 text-center rotate-12">
          <h3 className="text-2xl font-semibold">
            Maintain and Flaunt Your Streak
          </h3>
          <p>
            Celebrate your consistency and showcase the days you completed your
            tasks with pride on Steakar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
