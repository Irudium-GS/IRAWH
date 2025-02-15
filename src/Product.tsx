import React from 'react';

const Product = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black z-0" />

        {/* Product Image */}
        <div className="relative z-10 w-full max-w-4xl mx-auto">
          <img
            src="/your-product-image.jpg" // Replace with your image path
            alt="Product Under Development"
            className="w-full h-full object-cover rounded-xl shadow-2xl"
          />
        </div>

        {/* Product Information */}
        <div className="absolute z-20 text-center px-4">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Nexus One
            </span>
          </h1>
          <p className="text-xl mb-8 opacity-90 animate-slide-up">
            The future of personal air mobility is here.
          </p>
          <p className="text-lg text-white/70 mb-8 animate-slide-up max-w-3xl mx-auto">
            Nexus One is an AI-powered, fully electric personal aircraft designed to revolutionize urban travel.
            Currently under development, we are pushing the boundaries of technology to create a truly game-changing experience.
          </p>
          
          {/* Work in Progress Message */}
          <div className="text-lg font-semibold text-white/50 animate-slide-up">
            🚧 **Work in Progress** 🚧
          </div>

          {/* Call to Action */}
          <div className="mt-12">
            <a href="/subscribe"
              className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg transition-all duration-300">
              Stay Updated 🚀
            </a>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="relative py-32 bg-black/90 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-white mb-8 animate-fade-in">
            About <span className="text-blue-400">Nexus One</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed animate-slide-up max-w-3xl mx-auto">
            Nexus One is set to be a game-changer in personal transportation. With advanced AI navigation, autonomous
            flight capabilities, and cutting-edge electric propulsion, it promises to revolutionize the way we think
            about travel. Designed with safety and efficiency in mind, Nexus One will offer unparalleled convenience in urban mobility.
          </p>
        </div>
      </div>

      {/* Stay Updated */}
      <div className="relative py-32 bg-gradient-to-b from-blue-900/50 to-black/20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-white mb-8 animate-fade-in">
            Stay Informed about <span className="text-blue-400">Nexus One</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed animate-slide-up max-w-3xl mx-auto mb-8">
            Join our mailing list to receive exclusive updates about Nexus One and be the first to know when we're ready to take flight.
          </p>
          <a href="/subscribe"
            className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg transition-all duration-300">
            Subscribe for Updates 🚀
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
