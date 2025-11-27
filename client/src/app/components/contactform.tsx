export default function contactForm() {
  return (
    <form className="w-full max-w-2xl mx-auto min-h-screen flex flex-col justify-center p-8 relative">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="mb-16 relative z-10">
        <h1 className="text-8xl font-black mb-6 bg-gradient-to-br from-white via-gray-100 to-gray-400 bg-clip-text text-transparent leading-tight tracking-tight">
          Let's Talk
        </h1>
        <p className="text-gray-400 text-lg font-light max-w-md">
          Have a project in mind? Let's collaborate and bring your vision to
          life.
        </p>
      </div>

      <div className="space-y-10 relative z-10">
        <div className="relative group">
          <input
            type="text"
            className="w-full px-0 py-4 bg-transparent border-b border-gray-800 text-white text-xl placeholder-transparent
            focus:outline-none focus:border-white transition-all duration-500 peer font-light tracking-wide"
            placeholder="Enter your name"
            id="name"
          />
          <label
            htmlFor="name"
            className="absolute left-0 -top-6 text-xs text-gray-600 transition-all duration-300 uppercase tracking-widest font-medium
            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal
            peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gray-400 peer-focus:uppercase peer-focus:tracking-widest"
          >
            Full Name
          </label>
          <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-purple-500 to-blue-500 group-focus-within:w-full transition-all duration-500"></div>
        </div>

        <div className="relative group">
          <input
            type="email"
            className="w-full px-0 py-4 bg-transparent border-b border-gray-800 text-white text-xl placeholder-transparent
            focus:outline-none focus:border-white transition-all duration-500 peer font-light tracking-wide"
            placeholder="your@email.com"
            id="email"
          />
          <label
            htmlFor="email"
            className="absolute left-0 -top-6 text-xs text-gray-600 transition-all duration-300 uppercase tracking-widest font-medium
            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal
            peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gray-400 peer-focus:uppercase peer-focus:tracking-widest"
          >
            Email Address
          </label>
          <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-purple-500 to-blue-500 group-focus-within:w-full transition-all duration-500"></div>
        </div>

        <div className="relative group">
          <textarea
            className="w-full px-0 py-4 bg-transparent border-b border-gray-800 text-white text-xl placeholder-transparent
            focus:outline-none focus:border-white transition-all duration-500 resize-none peer font-light tracking-wide"
            rows={5}
            placeholder="What's on your mind?"
            id="message"
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-0 -top-6 text-xs text-gray-600 transition-all duration-300 uppercase tracking-widest font-medium
            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal
            peer-focus:-top-6 peer-focus:text-xs peer-focus:text-gray-400 peer-focus:uppercase peer-focus:tracking-widest"
          >
            Your Message
          </label>
          <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-purple-500 to-blue-500 group-focus-within:w-full transition-all duration-500"></div>
        </div>
      </div>

      <div className="mt-16 flex items-center gap-6 relative z-10">
        <button
          type="submit"
          className="group relative px-10 py-5 bg-white text-black font-semibold rounded-full text-sm uppercase tracking-[0.2em]
          hover:bg-black hover:text-white transition-all duration-700 transform hover:scale-105 active:scale-95
          shadow-2xl hover:shadow-purple-500/20 overflow-hidden"
        >
          <span className="relative z-10">Send Message</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </button>
        <span className="text-gray-600 text-sm">
          or press{" "}
          <kbd className="px-2 py-1 bg-gray-900 border border-gray-800 rounded text-xs">
            Enter ↵
          </kbd>
        </span>
      </div>
    </form>
  );
}
