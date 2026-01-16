const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-6 from-gray-100 to-white">
      <h1 className="text-5xl font-bold max-w-3xl">Build. Secure. Scale.</h1>
      <p className="mt-6 text-lg text-gray-600 max-w-xl">
        A modern task management platform with secure authentication and a clean
        dashboard experience.
      </p>
      <div className="mt-8 flex gap-4">
        <a href="/signup" className="btn">
          Get Started
        </a>
        <a href="/signin" className="border px-4 py-2 rounded">
          Login
        </a>
      </div>
    </section>
  );
};

export default Hero;
