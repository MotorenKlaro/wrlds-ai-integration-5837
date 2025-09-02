
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, Search, Heart, User } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full", isScrolled ? "bg-white shadow-sm" : "bg-black")} initial={{
      opacity: 1,
      y: 0
    }} animate={{
      opacity: 1,
      y: 0
    }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src="/lovable-uploads/7e30cb8f-2f48-454a-8a09-314729fa4523.png" alt="Motoren Klaro Logo" className={cn("h-8 w-auto", isScrolled ? "" : "brightness-0 invert")} />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu className={cn(isScrolled ? "" : "text-white")}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Car Categories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Sedans</div>
                          <p className="text-sm text-gray-500">Compare luxury and economy sedans</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">SUVs</div>
                          <p className="text-sm text-gray-500">Family-friendly SUVs and crossovers</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Electric Vehicles</div>
                          <p className="text-sm text-gray-500">Eco-friendly electric cars</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Trucks & Pickups</div>
                          <p className="text-sm text-gray-500">Heavy-duty and light trucks</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Tools & Guides
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/about" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Car Buying Guide</div>
                          <p className="text-sm text-gray-500">Tips and advice for buying your next car</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/about" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Comparison Tool</div>
                          <p className="text-sm text-gray-500">Compare cars side-by-side</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/blog">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Car News
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <button className={cn("p-2 rounded-md transition-colors", isScrolled ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100" : "text-gray-100 hover:text-white hover:bg-gray-800")}>
                    <Search size={20} />
                  </button>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <button className={cn("p-2 rounded-md transition-colors", isScrolled ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100" : "text-gray-100 hover:text-white hover:bg-gray-800")}>
                    <Heart size={20} />
                  </button>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <button className={cn("p-2 rounded-md transition-colors", isScrolled ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100" : "text-gray-100 hover:text-white hover:bg-gray-800")}>
                    <User size={20} />
                  </button>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <button className={cn("px-4 py-2 rounded-md transition-colors", isScrolled ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-primary text-primary-foreground hover:bg-primary/90")}>
                    Sign Up
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={cn("focus:outline-none", isScrolled ? "text-gray-700" : "text-white")}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Reduced height and simplified */}
      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0")}>
        <div className={cn("px-3 pt-2 pb-3 space-y-1 shadow-sm overflow-y-auto max-h-80", isScrolled ? "bg-white" : "bg-black")}>
          <Link to="/" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Home
          </Link>
          
          <Link to="/about" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            About Us
          </Link>
          
          {/* Simplified Car Categories - no dropdown */}
          <Link to="/" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Car Categories
          </Link>
          
          {/* Simplified Tools & Guides - no dropdown */}
          <Link to="/about" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Tools & Guides
          </Link>
          
          <Link to="/blog" className={cn("block px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Car News
          </Link>
          
          <div className="flex items-center gap-2 px-3 py-1.5">
            <button className={cn("p-2 rounded-md transition-colors", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}>
              <Search size={18} />
            </button>
            <button className={cn("p-2 rounded-md transition-colors", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}>
              <Heart size={18} />
            </button>
            <button className={cn("p-2 rounded-md transition-colors", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}>
              <User size={18} />
            </button>
          </div>
          
          <button className={cn("block w-full text-left px-3 py-1.5 rounded-md text-sm", isScrolled ? "text-primary-foreground bg-primary hover:bg-primary/90" : "text-primary-foreground bg-primary hover:bg-primary/90")}>
            Sign Up
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
