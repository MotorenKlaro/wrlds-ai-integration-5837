import { ArrowRight, Car, Search, BarChart, MessageSquare } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {["first", "second"].map((carPosition, index) => (
              <motion.div
                key={carPosition}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Car Image Section */}
                <div className="relative h-64 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/e924102c-9517-4d20-bd15-43df76b22f58.png"
                      alt={`${carPosition} car comparison`}
                      className="w-4/5 h-auto max-h-48 object-contain filter brightness-110"
                    />
                  </div>
                </div>
                
                {/* Car Selection Form */}
                <div className="p-6 space-y-6">
                  <h3 className="text-2xl font-bold text-foreground capitalize">
                    Add {carPosition} car
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Make Selection */}
                    <div className="space-y-2">
                      <Label htmlFor={`make-${carPosition}`} className="text-sm font-medium text-muted-foreground">
                        Make
                      </Label>
                      <Select>
                        <SelectTrigger className="w-full h-12 border-input bg-background">
                          <SelectValue placeholder="Choose a make" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="toyota">Toyota</SelectItem>
                          <SelectItem value="honda">Honda</SelectItem>
                          <SelectItem value="ford">Ford</SelectItem>
                          <SelectItem value="bmw">BMW</SelectItem>
                          <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                          <SelectItem value="audi">Audi</SelectItem>
                          <SelectItem value="volkswagen">Volkswagen</SelectItem>
                          <SelectItem value="nissan">Nissan</SelectItem>
                          <SelectItem value="hyundai">Hyundai</SelectItem>
                          <SelectItem value="kia">Kia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* Model Selection */}
                    <div className="space-y-2">
                      <Label htmlFor={`model-${carPosition}`} className="text-sm font-medium text-muted-foreground">
                        Model
                      </Label>
                      <Select>
                        <SelectTrigger className="w-full h-12 border-input bg-background">
                          <SelectValue placeholder="Choose a model" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="camry">Camry</SelectItem>
                          <SelectItem value="corolla">Corolla</SelectItem>
                          <SelectItem value="accord">Accord</SelectItem>
                          <SelectItem value="civic">Civic</SelectItem>
                          <SelectItem value="f150">F-150</SelectItem>
                          <SelectItem value="mustang">Mustang</SelectItem>
                          <SelectItem value="3series">3 Series</SelectItem>
                          <SelectItem value="x5">X5</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 text-base">
              Compare Selected Cars
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>

    </motion.div>;
};

export default Hero;
