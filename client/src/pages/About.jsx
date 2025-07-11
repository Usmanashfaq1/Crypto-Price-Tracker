export default function About() {
  return (
    <div className="flex justify-center min-h-screen bg-pink-200 p-4 m-5">
      <div className="max-w-3xl bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-6">
          About Me
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Hey! 👋 I'm <span className="font-semibold text-pink-500">Usman</span>
          , a passionate and curious software developer with a strong interest
          in building web applications that are fast, accessible, and beautiful.
          I specialize in the JavaScript ecosystem — particularly React,
          Node.js, and Express — and I'm constantly learning to improve my
          skills.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          My journey started with a love for solving problems and creating
          things that people can use. Whether it's frontend design or backend
          logic, I enjoy making ideas come to life on the web.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Outside of coding, I play soccer daily 🥅⚽, dive into badminton for
          fun, and enjoy exploring nature with my family. I'm also focused on
          personal growth — becoming more disciplined, mindful, and consistent.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Let’s build something great together 🚀
        </p>
      </div>
    </div>
  );
}
