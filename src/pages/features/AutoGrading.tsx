
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowLeft, BarChart4, CheckCircle, Award, ListChecks, History } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AutoGrading: React.FC = () => {
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
                <BarChart4 className="h-12 w-12" />
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-gradient">Automatic</span> Grading & Ranking
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                Save hours of manual grading with our intelligent evaluation system that assigns scores based on customizable criteria and rubrics.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Custom rubrics</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Auto scoring</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Class ranking</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Grade distribution</span>
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
                  <Award className="h-16 w-16 text-yellow-400" />
                  <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
                    <div className="flex flex-col items-center">
                      <div className="h-24 bg-gradient-to-t from-yellow-500/30 to-yellow-500/10 rounded-lg w-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-yellow-400">A</span>
                      </div>
                      <span className="text-xs mt-2 text-gray-400">90-100%</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-16 mt-8 bg-gradient-to-t from-yellow-500/20 to-yellow-500/5 rounded-lg w-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-yellow-300">B</span>
                      </div>
                      <span className="text-xs mt-2 text-gray-400">80-89%</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-10 mt-14 bg-gradient-to-t from-yellow-500/15 to-yellow-500/5 rounded-lg w-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-yellow-200">C</span>
                      </div>
                      <span className="text-xs mt-2 text-gray-400">70-79%</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">Automatic grade distribution</p>
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
                Our system uses AI to analyze student submissions against customizable rubrics created by teachers. It evaluates various aspects like content quality, organization, adherence to guidelines, and more.
              </p>
              <p className="text-gray-300">
                After grading, the system automatically ranks students within their class, generating detailed distribution charts to help teachers identify overall performance patterns.
              </p>
            </Card>
            
            <Card className="glass-morphism p-8">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">Key Benefits</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Save hours of grading time with automatic assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Ensure consistent evaluation with standardized rubrics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Identify class-wide strengths and weaknesses through visual analytics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Track individual and group progress over the academic term</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4">
          <Card className="glass-morphism yellow-glow p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to revolutionize your grading process?</h2>
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

export default AutoGrading;
