import { ArrowRight, Car, Search, BarChart, MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const isMobile = useIsMobile();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return <motion.div className="relative w-full" initial="hidden" animate="visible" variants={containerVariants}>
      <div className="banner-container bg-black relative overflow-hidden h-[50vh] sm:h-[60vh] md:h-[500px] lg:h-[550px] xl:h-[600px] w-full">
        <div className="absolute inset-0 bg-black w-full">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="metadata"
            className={`w-full h-full object-cover opacity-70 grayscale ${isMobile ? 'object-right' : 'object-center'}`}
            poster="/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png"
          >
            <source src="/lovable-uploads/video_1751292840840_1751292842546.mp4" type="video/mp4" />
            {/* Fallback image if video fails to load */}
            <img 
              src="/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png" 
              alt="WRLDS Technologies Connected People" 
              className={`w-full h-full object-cover opacity-70 grayscale ${isMobile ? 'object-right' : 'object-center'}`} 
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-white"></div>
        </div>
        
        <div className="banner-overlay bg-transparent pt-20 sm:pt-24 md:pt-32 w-full">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
            <motion.div className="w-full max-w-4xl text-center" variants={itemVariants}>
              <motion.h1 className="banner-title text-white" variants={itemVariants}>Find Your Perfect Car with Smart Comparison</motion.h1>
              <motion.p className="banner-subtitle text-gray-300 mt-4 sm:mt-6" variants={itemVariants}>
                Compare cars side-by-side with detailed specs, pricing, and expert insights to make the right choice.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center items-center" variants={itemVariants}>
                {/* Styled as a button but using an anchor tag for project navigation */}
                <button 
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-all shadow-lg hover:shadow-xl hover:shadow-gray-300/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={e => {
                    e.preventDefault();
                    const carsSection = document.getElementById('cars');
                    if (carsSection) {
                      carsSection.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  Browse Cars
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                {/* Using the Button component from shadcn but with custom styling to match the explore button */}
                <button 
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:shadow-gray-300/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={scrollToContact}
                >
                  Contact Us
                  <MessageSquare className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Car Comparison Section */}
      <div className="relative z-10 bg-white py-16 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-3 px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
              Compare Cars
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Compare Cars Side by Side
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Make informed decisions by comparing specifications, features, and pricing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map((slot) => (
              <motion.div
                key={slot}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: slot * 0.1 }}
                className="bg-white border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-gray-300 transition-colors"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Add Car {slot}</h3>
                <p className="text-gray-500 text-sm mb-4">Select a car to compare</p>
                <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                  Choose Car
                </button>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors">
              Start Comparison
              <ArrowRight className="w-4 h-4 ml-2 inline" />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Cars Section */}
      <div className="relative z-10 bg-gray-50 py-16 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-3 px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
              Featured Cars
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Find Your Perfect Car
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Browse our curated selection of vehicles with detailed specifications and pricing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { name: "Toyota Camry 2024", type: "Sedan", price: "$28,000", image: "/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png" },
              { name: "Honda CR-V 2024", type: "SUV", price: "$32,000", image: "/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png" },
              { name: "BMW 3 Series 2024", type: "Luxury", price: "$42,000", image: "/lovable-uploads/30473baa-85f4-4931-aad9-c722ae7a4918.png" }
            ].map((car, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{car.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{car.type}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">{car.price}</span>
                    <button className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-12">
            <button className="px-6 py-3 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors">
              View All Cars
              <ArrowRight className="w-4 h-4 ml-2 inline" />
            </button>
          </div>

          {/* Feature Cards */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4" variants={containerVariants} initial="hidden" animate="visible" transition={{
            delay: 0.6
          }}>
            <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
                <Search className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Smart Search</h3>
              <p className="text-gray-600 text-xs md:text-sm">Advanced filtering and search capabilities to find cars that match your exact needs.</p>
            </motion.div>
            
            <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
                <BarChart className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Detailed Comparison</h3>
              <p className="text-gray-600 text-xs md:text-sm">Side-by-side comparisons with comprehensive specs, pricing, and performance data.</p>
            </motion.div>
            
            <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
                <Car className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">All Vehicle Types</h3>
              <p className="text-gray-600 text-xs md:text-sm">From compact cars to SUVs, sedans to trucks - find the perfect vehicle for your lifestyle.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>;
};

export default Hero;
