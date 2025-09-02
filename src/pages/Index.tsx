import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CarListings from '@/components/CarListings';
import WhyWrlds from '@/components/WhyWrlds';
import BlogPreview from '@/components/BlogPreview';
import SEO from '@/components/SEO';
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const carsElements = document.querySelectorAll('[id="cars"]');
    if (carsElements.length > 1) {
      // If there are multiple elements with id="cars", rename one
      carsElements[1].id = 'cars-footer';
    }
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="CarFinder - Best Car Comparison Platform" 
        description="Compare cars side-by-side with detailed specs, pricing, and expert reviews. Find your perfect car with our smart comparison platform."
        imageUrl="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['car comparison', 'car finder', 'car specs', 'car prices', 'vehicle comparison', 'car reviews', 'auto shopping']}
      />
      <Hero />
      <CarListings />
      <Features />
      <WhyWrlds />
      <BlogPreview />
    </PageLayout>
  );
};

export default Index;