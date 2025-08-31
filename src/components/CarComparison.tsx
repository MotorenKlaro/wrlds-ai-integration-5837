import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Plus, X, Car, DollarSign, Fuel, Gauge, Users, Calendar } from 'lucide-react';
import { motion } from "framer-motion";

interface CompareSlot {
  id?: string;
  make?: string;
  model?: string;
  year?: number;
  price?: number;
  fuel_type?: string;
  transmission?: string;
  body_type?: string;
  engine_size?: number;
  horsepower?: number;
  fuel_economy_city?: number;
  fuel_economy_highway?: number;
  safety_rating?: number;
  image_url?: string;
  features?: string[];
}

const CarComparison = () => {
  const [compareSlots, setCompareSlots] = useState<(CompareSlot | null)[]>([null, null, null]);
  
  // Sample cars for demo - in real app, this would come from search/selection
  const sampleCars: CompareSlot[] = [
    {
      id: "1",
      make: "Toyota",
      model: "Camry",
      year: 2024,
      price: 28000,
      fuel_type: "Hybrid",
      transmission: "Automatic",
      body_type: "Sedan",
      horsepower: 208,
      fuel_economy_city: 28,
      fuel_economy_highway: 32,
      safety_rating: 5,
      image_url: "/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png",
      features: ["Safety Sense 2.0", "LED Headlights", "Wireless CarPlay"]
    },
    {
      id: "2", 
      make: "Honda",
      model: "Accord",
      year: 2024,
      price: 27500,
      fuel_type: "Gasoline",
      transmission: "Automatic",
      body_type: "Sedan",
      horsepower: 192,
      fuel_economy_city: 32,
      fuel_economy_highway: 42,
      safety_rating: 5,
      image_url: "/lovable-uploads/4bfa0d71-3ed2-4693-90b6-35142468907f.png",
      features: ["Honda Sensing", "Wireless Charging", "Sunroof"]
    },
    {
      id: "3",
      make: "BMW",
      model: "3 Series",
      year: 2024,
      price: 42000,
      fuel_type: "Gasoline",
      transmission: "Automatic",
      body_type: "Sedan", 
      horsepower: 255,
      fuel_economy_city: 26,
      fuel_economy_highway: 36,
      safety_rating: 5,
      image_url: "/lovable-uploads/30473baa-85f4-4931-aad9-c722ae7a4918.png",
      features: ["iDrive 8", "Premium Sound", "Sport Package"]
    }
  ];

  const addCarToCompare = (car: CompareSlot, index: number) => {
    const newSlots = [...compareSlots];
    newSlots[index] = car;
    setCompareSlots(newSlots);
  };

  const removeCarFromCompare = (index: number) => {
    const newSlots = [...compareSlots];
    newSlots[index] = null;
    setCompareSlots(newSlots);
  };

  return (
    <section className="bg-gray-50 py-16 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <div className="inline-block mb-3 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Compare Cars
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Compare Cars Side by Side
          </h2>
          <p className="text-gray-600 text-lg">
            Make informed decisions by comparing specifications, features, and pricing of multiple vehicles
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {compareSlots.map((slot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 border-dashed border-gray-200 hover:border-primary/30 transition-colors">
                {slot ? (
                  <div className="relative">
                    <button
                      onClick={() => removeCarFromCompare(index)}
                      className="absolute top-2 right-2 z-10 p-1 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors"
                    >
                      <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                    </button>
                    
                    <div className="relative h-48 bg-gray-100 overflow-hidden rounded-t-lg">
                      {slot.image_url ? (
                        <img 
                          src={slot.image_url} 
                          alt={`${slot.year} ${slot.make} ${slot.model}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <Car className="w-12 h-12 text-gray-500" />
                        </div>
                      )}
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="bg-white/90 text-gray-700">
                          {slot.year}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-4">
                      <div className="mb-4">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">
                          {slot.make} {slot.model}
                        </h3>
                        <p className="text-gray-500 text-sm">{slot.body_type} • {slot.transmission}</p>
                      </div>

                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between py-1 border-b border-gray-100">
                          <div className="flex items-center text-gray-600">
                            <DollarSign className="w-4 h-4 mr-2" />
                            <span>Price</span>
                          </div>
                          <span className="font-semibold">${slot.price?.toLocaleString()}</span>
                        </div>
                        
                        <div className="flex items-center justify-between py-1 border-b border-gray-100">
                          <div className="flex items-center text-gray-600">
                            <Fuel className="w-4 h-4 mr-2" />
                            <span>Fuel Type</span>
                          </div>
                          <span className="font-semibold">{slot.fuel_type}</span>
                        </div>

                        {slot.horsepower && (
                          <div className="flex items-center justify-between py-1 border-b border-gray-100">
                            <div className="flex items-center text-gray-600">
                              <Gauge className="w-4 h-4 mr-2" />
                              <span>Power</span>
                            </div>
                            <span className="font-semibold">{slot.horsepower} HP</span>
                          </div>
                        )}

                        {slot.fuel_economy_city && (
                          <div className="flex items-center justify-between py-1 border-b border-gray-100">
                            <div className="flex items-center text-gray-600">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span>City MPG</span>
                            </div>
                            <span className="font-semibold">{slot.fuel_economy_city}</span>
                          </div>
                        )}

                        {slot.safety_rating && (
                          <div className="flex items-center justify-between py-1">
                            <div className="flex items-center text-gray-600">
                              <Users className="w-4 h-4 mr-2" />
                              <span>Safety</span>
                            </div>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className={`text-xs ${i < slot.safety_rating! ? 'text-yellow-400' : 'text-gray-300'}`}>
                                  ★
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {slot.features && slot.features.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-gray-100">
                          <h4 className="text-xs font-semibold text-gray-700 mb-2">Key Features</h4>
                          <div className="flex flex-wrap gap-1">
                            {slot.features.slice(0, 2).map((feature, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                            {slot.features.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{slot.features.length - 2}
                              </Badge>
                            )}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </div>
                ) : (
                  <CardContent className="p-8 h-full flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <Plus className="w-8 h-8 text-gray-400" />  
                    </div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Add Car to Compare</h3>
                    <p className="text-gray-500 text-sm mb-4">Select a car to add to comparison</p>
                    
                    {/* Quick add buttons for demo */}
                    <div className="space-y-2 w-full">
                      {sampleCars.slice(0, 2).map((car, carIndex) => (
                        <Button
                          key={carIndex}
                          variant="outline"
                          size="sm"
                          className="w-full justify-start text-xs"
                          onClick={() => addCarToCompare(car, index)}
                        >
                          <Car className="w-3 h-3 mr-2" />
                          {car.year} {car.make} {car.model}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Plus className="w-4 h-4 mr-2" />
            Add More Cars
          </Button>
          <Button variant="outline" className="group">
            View Detailed Comparison
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Popular Comparisons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Comparisons</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "Toyota Camry vs Honda Accord",
              "BMW 3 Series vs Mercedes C-Class", 
              "Tesla Model 3 vs BMW i4",
              "Honda CR-V vs Toyota RAV4"
            ].map((comparison, index) => (
              <Badge
                key={index} 
                variant="secondary"
                className="cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {comparison}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CarComparison;