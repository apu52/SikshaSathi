
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquareText, CheckCircle, MessageSquare, ThumbsUp, Edit } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AIFeedback: React.FC = () => {
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
                <MessageSquareText className="h-12 w-12" />
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-gradient">AI-Generated</span> Feedback
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                Provide timely, constructive feedback to students with AI-powered comments that identify areas for improvement and highlight strengths in their work.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Instant feedback</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Contextual comments</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Improvement areas</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Editable suggestions</span>
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
                  <MessageSquare className="h-16 w-16 text-yellow-400" />
                  <div className="w-full max-w-md">
                    <div className="space-y-4">
                      <div className="border border-yellow-500/30 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-yellow-500/20 rounded-full p-1 mr-3">
                            <ThumbsUp className="h-4 w-4 text-yellow-400" />
                          </div>
                          <div>
                            <p className="text-yellow-400 text-sm font-semibold mb-1">Strength</p>
                            <p className="text-gray-300 text-sm">Well-structured introduction that clearly states your thesis.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border border-yellow-500/30 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-yellow-500/20 rounded-full p-1 mr-3">
                            <Edit className="h-4 w-4 text-yellow-400" />
                          </div>
                          <div>
                            <p className="text-yellow-400 text-sm font-semibold mb-1">Suggestion</p>
                            <p className="text-gray-300 text-sm">Consider adding more examples to support your second argument.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">Detailed AI-generated feedback</p>
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
                Our AI analyzes each student submission and generates constructive, educational feedback tailored to the specific content. It identifies strengths to reinforce positive aspects and provides suggestions for areas that need improvement.
              </p>
              <p className="text-gray-300">
                Teachers can review and edit the AI-generated feedback before it's shared with students, ensuring that all comments align with their teaching approach and lesson objectives.
              </p>
            </Card>
            
            <Card className="glass-morphism p-8">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">Key Benefits</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Save time with instant feedback generation for each submission</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Provide more detailed feedback than time would normally allow</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Maintain consistency in feedback quality across all students</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Help students understand exactly how to improve their work</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4">
          <Card className="glass-morphism yellow-glow p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to provide better feedback faster?</h2>
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

export default AIFeedback;
