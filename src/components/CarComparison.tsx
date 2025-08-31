import { ArrowRight, Search } from "lucide-react";
import { motion } from "framer-motion";

const CarComparison = () => {
  return (
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
  );
};

export default CarComparison;