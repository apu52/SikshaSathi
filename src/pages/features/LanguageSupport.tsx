
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Languages, CheckCircle, Globe, MessageSquare, Translation } from 'lucide-react';
import { Card } from '@/components/ui/card';

const LanguageSupport: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-100">
      <Navbar />
      
      <div className="pt-24 pb-20">
        {/* Hero Section */}
        <div className="container mx-auto px-4 mb-16">
          <Link to="/features" className="inline-flex items-center text-yellow-400 hover:text-yellow-500 mb-8">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to All Features
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <div className="h-24 w-24 rounded-2xl bg-yellow-500/20 flex items-center justify-center text-yellow-400 mb-6">
                <Languages className="h-12 w-12" />
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-gradient">Multi-Language</span> Support
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                Our platform supports diverse user groups across India with interfaces and tools available in multiple regional languages, making education more accessible for all.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Indian languages</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Language detection</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Translation tools</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Localized interfaces</span>
                </div>
              </div>
              
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-dark-100">
                <Link to="/register">Try It Now</Link>
              </Button>
            </div>
            
            <div className="w-full md:w-1/2">
              <Card className="glass-morphism hover:yellow-glow p-8 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-yellow-500/5 to-transparent"></div>
                <div className="flex flex-col items-center space-y-8">
                  <Globe className="h-16 w-16 text-yellow-400" />
                  <div className="w-full max-w-md">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border border-yellow-500/30 rounded-lg p-4 text-center">
                        <p className="text-yellow-400 text-xs mb-2">हिन्दी</p>
                        <p className="text-gray-300 text-sm">छात्र असाइनमेंट अपलोड</p>
                      </div>
                      <div className="border border-yellow-500/30 rounded-lg p-4 text-center">
                        <p className="text-yellow-400 text-xs mb-2">தமிழ்</p>
                        <p className="text-gray-300 text-sm">மாணவர் படைப்பு பதிவேற்றம்</p>
                      </div>
                      <div className="border border-yellow-500/30 rounded-lg p-4 text-center">
                        <p className="text-yellow-400 text-xs mb-2">বাংলা</p>
                        <p className="text-gray-300 text-sm">ছাত্র অ্যাসাইনমেন্ট আপলোড</p>
                      </div>
                      <div className="border border-yellow-500/30 rounded-lg p-4 text-center">
                        <p className="text-yellow-400 text-xs mb-2">తెలుగు</p>
                        <p className="text-gray-300 text-sm">విద్యార్థి అసైన్‌మెంట్ అప్‌లోడ్</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">Multiple Indian languages supported</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Details Section */}
        <div className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glass-morphism p-8">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">How It Works</h2>
              <p className="text-gray-300 mb-4">
                Our platform detects the user's preferred language and automatically displays the interface in that language. For content such as assignments and feedback, we provide translation tools to convert between languages.
              </p>
              <p className="text-gray-300">
                We currently support Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Punjabi, and Odia, with more languages being added regularly to ensure broad accessibility across India.
              </p>
            </Card>
            
            <Card className="glass-morphism p-8">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">Key Benefits</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Make education technology accessible to non-English speakers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Allow students to submit work in their most comfortable language</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Provide equal educational opportunities across language barriers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Support India's diverse linguistic landscape in education</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4">
          <Card className="glass-morphism yellow-glow p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to make education more accessible?</h2>
            <p className="text-gray-300 mb-6">Get started with our free trial and experience the difference.</p>
            <div className="flex justify-center">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-dark-100">
                <Link to="/register">Start Your Free Trial</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default LanguageSupport;
