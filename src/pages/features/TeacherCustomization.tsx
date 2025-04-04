
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sliders, CheckCircle, Settings, Wrench, Code } from 'lucide-react';
import { Card } from '@/components/ui/card';

const TeacherCustomization: React.FC = () => {
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
                <Sliders className="h-12 w-12" />
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-gradient">Teacher</span> Customization
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                Take full control of the assessment process with adjustable grading parameters and the ability to train our AI to match your specific teaching style and requirements.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Adjustable parameters</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>AI training</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Custom rubrics</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Personalized workflows</span>
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
                  <Settings className="h-16 w-16 text-yellow-400" />
                  <div className="w-full max-w-md">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 border border-yellow-500/30 rounded-lg p-4 flex items-center justify-between">
                        <span className="text-sm text-yellow-400">Grammar</span>
                        <div className="h-4 w-16 bg-yellow-500/20 rounded-full">
                          <div className="h-full w-3/4 bg-yellow-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="h-20 border border-yellow-500/30 rounded-lg p-4 flex items-center justify-between">
                        <span className="text-sm text-yellow-400">Content</span>
                        <div className="h-4 w-16 bg-yellow-500/20 rounded-full">
                          <div className="h-full w-1/2 bg-yellow-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="h-20 border border-yellow-500/30 rounded-lg p-4 flex items-center justify-between">
                        <span className="text-sm text-yellow-400">Structure</span>
                        <div className="h-4 w-16 bg-yellow-500/20 rounded-full">
                          <div className="h-full w-2/3 bg-yellow-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="h-20 border border-yellow-500/30 rounded-lg p-4 flex items-center justify-between">
                        <span className="text-sm text-yellow-400">References</span>
                        <div className="h-4 w-16 bg-yellow-500/20 rounded-full">
                          <div className="h-full w-5/6 bg-yellow-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">Customizable grading parameters</p>
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
                Our teacher customization system allows you to define exactly how each assignment should be evaluated. Set specific weights for different criteria like content quality, organization, citations, and more.
              </p>
              <p className="text-gray-300">
                As you make manual adjustments to AI-suggested grades, the system learns from your preferences and gradually adapts its evaluation approach to match your teaching style and requirements.
              </p>
            </Card>
            
            <Card className="glass-morphism p-8">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">Key Benefits</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Create custom rubrics tailored to specific assignment types</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Save different evaluation templates for quick reuse</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Train AI to recognize your grading standards and preferences</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Override auto-grading when needed with easy manual adjustments</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4">
          <Card className="glass-morphism yellow-glow p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to customize your assessment process?</h2>
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

export default TeacherCustomization;
