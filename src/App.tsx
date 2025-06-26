import React, { useState } from 'react';
import { 
  Instagram, 
  Users, 
  Gift, 
  Handshake, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Play,
  MessageCircle,
  TrendingUp,
  Award,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const benefits = [
    {
      icon: Users,
      title: "10,000 Guaranteed Followers",
      description: "Instantly boost your Instagram presence with 10k high-quality, engaged followers to jumpstart your creator journey."
    },
    {
      icon: Gift,
      title: "₹5K-10K Product Vouchers",
      description: "Access exclusive product vouchers worth ₹5,000 to ₹10,000 to create amazing content and grow your influence."
    },
    {
      icon: Handshake,
      title: "Brand Deal Worth ₹5K-10K",
      description: "Secure your first major brand collaboration with guaranteed deals valued between ₹5,000 to ₹10,000."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      handle: "@priya_lifestyle",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Within 30 days of joining, I went from 2k to 12k followers and landed my first major brand deal! The mentorship program is incredible.",
      followers: "12.5K"
    },
    {
      name: "Arjun Patel",
      handle: "@arjun_fitness",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The program delivered exactly what was promised. The followers are genuine, and the brand connections opened doors I never imagined.",
      followers: "15.2K"
    },
    {
      name: "Sneha Gupta",
      handle: "@sneha_food",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Best investment I made for my creator career! The vouchers helped me create better content, and the brand deal paid for itself.",
      followers: "18.7K"
    }
  ];

  const faqs = [
    {
      question: "How quickly will I receive the 10k followers?",
      answer: "Followers are delivered gradually over 7-14 days to ensure natural growth and maintain account safety. This organic delivery method protects your account from any potential issues."
    },
    {
      question: "Are the followers real and active?",
      answer: "Yes, all followers are real accounts with genuine engagement patterns. We use advanced targeting to ensure followers are relevant to your niche and likely to engage with your content."
    },
    {
      question: "When will I get my brand deal opportunity?",
      answer: "Brand deal opportunities are presented within 30-45 days of enrollment. We work with you to identify the best match for your niche and audience to ensure successful collaborations."
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer: "We offer a 60-day satisfaction guarantee. If you don't see the promised results within the specified timeframe, we'll work with you to make it right or provide a full refund."
    },
    {
      question: "Is this program suitable for all niches?",
      answer: "Yes, our program works for all content niches including lifestyle, fitness, food, fashion, tech, and more. We customize our approach based on your specific niche and target audience."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">CreatorBoost</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Success Stories</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
            </nav>
            <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">For Micro Creators (1K-15K Followers)</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Transform Your Instagram Into a 
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Money-Making Machine</span>
                </h1>
                <p className="text-xl text-purple-100 leading-relaxed">
                  Get 10K guaranteed followers, ₹5K-10K product vouchers, and brand deals worth ₹5K-10K. Everything you need to become a successful Instagram creator.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-white text-purple-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105">
                  <span>Enroll Now for ₹15,000</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Success Stories</span>
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-purple-200 text-sm">Creators Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">₹2Cr+</div>
                  <div className="text-purple-200 text-sm">Earnings Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-purple-200 text-sm">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-6 h-full flex flex-col justify-center items-center space-y-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
                    <Instagram className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">Your Creator Journey</h3>
                    <p className="text-gray-600">Starts Here</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 w-full">
                    <div className="bg-purple-100 rounded-lg p-3 text-center">
                      <Users className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-purple-900">10K+</div>
                    </div>
                    <div className="bg-pink-100 rounded-lg p-3 text-center">
                      <Gift className="w-6 h-6 text-pink-600 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-pink-900">₹10K</div>
                    </div>
                    <div className="bg-orange-100 rounded-lg p-3 text-center">
                      <Handshake className="w-6 h-6 text-orange-600 mx-auto mb-1" />
                      <div className="text-sm font-semibold text-orange-900">Deals</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive mentorship program provides instant results and long-term growth strategies for ambitious micro creators.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                <div className="mt-6 flex items-center text-purple-600 font-medium group-hover:text-purple-700 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Results from Real Creators
            </h2>
            <p className="text-xl text-gray-600">
              See how our mentorship program transformed these micro creators into Instagram success stories.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-purple-600">{testimonial.handle}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{testimonial.followers} followers</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-purple-900 to-pink-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">
              One Investment, Lifetime Benefits
            </h2>
            <p className="text-xl text-purple-100">
              Join hundreds of successful creators who transformed their Instagram presence with our mentorship program.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white border-opacity-20">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-2">Creator Mentorship Program</h3>
                <p className="text-purple-200">Everything you need to succeed as an Instagram creator</p>
              </div>

              <div className="text-center">
                <div className="text-6xl font-bold mb-2">₹15,000</div>
                <div className="text-purple-200">One-time investment</div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span>10,000 guaranteed followers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span>₹5K-10K product vouchers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span>Brand deal worth ₹5K-10K</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span>1-on-1 mentorship sessions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span>Content strategy guidance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span>60-day money-back guarantee</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-12 py-4 rounded-full text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  Enroll Now - Transform Your Instagram
                </button>
                <p className="text-sm text-purple-200 mt-4">
                  Limited spots available • Secure payment • Instant access
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our creator mentorship program.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">
              Ready to Transform Your Instagram Journey?
            </h2>
            <p className="text-xl text-purple-100">
              Join the ranks of successful creators who turned their passion into profit. Your Instagram success story starts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-12 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Your Journey - ₹15,000
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Chat with Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">CreatorBoost</h3>
              </div>
              <p className="text-gray-400">
                Empowering micro creators to build successful Instagram businesses through proven mentorship and guaranteed results.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Program</h4>
              <div className="space-y-2">
                <a href="#features" className="text-gray-400 hover:text-white transition-colors block">Features</a>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors block">Success Stories</a>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors block">Pricing</a>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors block">FAQ</a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors block">Help Center</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors block">Contact Us</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors block">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors block">Privacy Policy</a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">hello@creatorboost.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">Mumbai, India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CreatorBoost. All rights reserved. Transform your Instagram, transform your life.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;