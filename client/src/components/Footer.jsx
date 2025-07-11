const Footer = () => {
  return (
    <footer className="bg-pink-800 text-white py-4 px-6 mt-auto shadow-inner">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <button className="bg-amber-100 text-pink-800 font-bold px-4 py-2 rounded-lg border border-amber-300 hover:bg-amber-200 transition">
          Crypto Price Tracker
        </button>
        <p className="text-sm text-amber-100">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
