const About = () => {
  return (
    <div className="flex justify-between w-10/12 m-auto my-8">
      <img
        className="w-5/12 rounded-md "
        src="https://i.pinimg.com/1200x/24/68/a1/2468a19e048308eabf19eabc4a2ce7a7.jpg"
      />
      <div className="w-6/12">
        <h1 className="font-bold text-4xl leading-1.5 my-4">
          React development is carried out by passionate developers
        </h1>
        <p className="font-normal text-slate-400 py-8  ">
          React is a popular JavaScript library for building user interfaces,
          particularly for single-page applications. Developed by Facebook, it
          allows developers to create reusable UI components that manage their
          own state. React employs a virtual DOM to optimize updates, ensuring
          efficient rendering and a smooth user experience.
           It supports JSX, a
          syntax extension that allows mixing HTML and JavaScript, making code
          more intuitive. React is widely used for its flexibility, speed, and
          ease of integration with other tools and libraries. 
        </p>
      </div>
    </div>
  );
};

export default About;
