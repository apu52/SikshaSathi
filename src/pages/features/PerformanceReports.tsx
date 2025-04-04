
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowLeft, LineChart, CheckCircle, BarChart, PieChart, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

const PerformanceReports: React.FC = () => {
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
                <LineChart className="h-12 w-12" />
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-gradient">Student Performance</span> Reports
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                Track academic progress over time with comprehensive analytics that highlight strengths and weaknesses, helping both teachers and students make data-driven decisions.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Longitudinal tracking</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Skill gap analysis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Comparative metrics</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Shareable reports</span>
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
                  <BarChart className="h-16 w-16 text-yellow-400" />
                  <div className="w-full max-w-md">
                    <div className="space-y-4">
                      <div className="border border-yellow-500/30 rounded-lg p-6">
                        <div className="flex justify-between mb-4">
                          <h3 className="text-yellow-400">Performance Trend</h3>
                          <TrendingUp className="h-5 w-5 text-green-500" />
                        </div>
                        <div className="h-32 flex items-end space-x-2">
                          {[30, 45, 35, 60, 70, 80, 75].map((height, index) => (
                            <div key={index} className="flex-1 flex flex-col items-center">
                              <div 
                                className="w-full bg-gradient-to-t from-yellow-500 to-yellow-300 rounded-t-sm" 
                                style={{height: `${height}%`}}
                              ></div>
                              <span className="text-xs mt-1 text-gray-400">{`A${index+1}`}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">Student progress visualization</p>
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
                Our system collects data from all student submissions and activities, creating comprehensive performance profiles that track progress across assignments, subjects, and time periods.
              </p>
              <p className="text-gray-300">
                Advanced analytics identify patterns in student performance, highlighting strengths to build upon and pinpointing specific areas where additional support or instruction may be needed.
              </p>
            </Card>
            
            <Card className="glass-morphism p-8">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">Key Benefits</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Identify long-term trends in student performance across subjects</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Target instruction to address specific skill gaps and learning needs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Generate professional reports for parent-teacher conferences</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Help students visualize their progress and set achievable goals</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4">
          <Card className="glass-morphism yellow-glow p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to track student progress effectively?</h2>
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

export default PerformanceReports;
