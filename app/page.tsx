"use client";

import { useState, useEffect } from "react";
import { ArrowDown, Leaf, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  // Carousel state
  const heroImages = ["/img1.jpg", "/img2.png", "/img3.png"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Image slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToProducts = () => {
    const element = document.getElementById("products-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-screen flex items-center justify-center overflow-hidden p-0 sm:p-0">
        {/* Sliding Background Images */}
        {heroImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt="Hero Background"
            className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
              idx === currentImage ? "opacity-100" : "opacity-0"
            }`}
            draggable="false"
          />
        ))}
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Animated Background Elements (optional, can be removed if too busy) */}
        {/* <div className="absolute inset-0 overflow-hidden z-20 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-200/20 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-emerald-200/20 rounded-full animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-300/20 rounded-full animate-pulse delay-500" />
        </div> */}

        <div className="relative z-30 text-center px-3 sm:px-4 max-w-full sm:max-w-6xl mx-auto w-full">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">
              <span className="text-green-300">Vertex</span> Industries
            </h1>
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-white mb-4 sm:mb-8 animate-fade-in-up delay-300 drop-shadow">
              Experts in HDPE Monofilament Woven Mesh Solutions
            </p>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-12 max-w-xs xs:max-w-sm sm:max-w-3xl mx-auto animate-fade-in-up delay-500 drop-shadow">
              Leading manufacturer and exporter of premium quality Anti-Insect
              Nets and Anti-Hail Nets, protecting crops and enhancing
              agricultural productivity across India and beyond.
            </p>
            <Button
              onClick={scrollToProducts}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg animate-fade-in-up delay-700 group w-full max-w-xs mx-auto"
            >
              Explore Our Products
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
          <ArrowDown className="h-6 w-6 text-green-300" />
        </div>
      </section>
      
      {/* Products Preview Section */}
      <section id="products-section" className="py-20 px-4 bg-white">
      <div className="mb-7 flex justify-center">
              <img
                src="/makeinindia.png"
                alt="Make in India"
                className="h-12 md:h-16 object-contain"
                style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.15))" }}
              />
            </div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Premium Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our range of high-quality HDPE Monofilament woven mesh
              solutions designed to protect and enhance agricultural
              productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-green-100">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-green-100 rounded-full mr-4">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Anti-Insect Net
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Premium quality HDPE Monofilament woven mesh designed to
                  protect crops from harmful insects while allowing optimal air
                  circulation and light penetration.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 mb-6">
                  <li>• High tensile strength</li>
                  <li>• UV Stabilized for longevity</li>
                  <li>• Multiple mesh sizes available</li>
                  <li>• BIS Certified quality</li>
                  <li>• Customized dimensions</li>
                </ul>
                <Link href="/products">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-green-50 border-green-200"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-green-100">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-emerald-100 rounded-full mr-4">
                    <Zap className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Anti-Hail Net
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Robust HDPE Monofilament woven mesh engineered to protect
                  valuable crops from hail damage while maintaining excellent
                  weather resistance and durability.
                </p>
                <ul className="space-y-2 text-sm text-gray-500 mb-6">
                  <li>• High tensile strength</li>
                  <li>• Weather resistant</li>
                  <li>• Easy installation</li>
                  <li>• Long-lasting protection</li>
                  <li>• Excellent hail protection</li>
                </ul>
                <Link href="/products">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-emerald-50 border-emerald-200"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4"
              >
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Vertex Industries?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="p-4 bg-green-100 rounded-full w-20 h-20 mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Leaf className="h-12 w-12 text-green-600 mx-auto mt-2" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                BIS certified HDPE Monofilament woven fabrics with superior UV
                stabilization and durability.
              </p>
            </div>

            <div className="text-center group">
              <div className="p-4 bg-emerald-100 rounded-full w-20 h-20 mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                <Shield className="h-12 w-12 text-emerald-600 mx-auto mt-2" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                Rigorous quality control processes ensuring consistent product
                excellence.
              </p>
            </div>

            <div className="text-center group">
              <div className="p-4 bg-green-100 rounded-full w-20 h-20 mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Zap className="h-12 w-12 text-green-600 mx-auto mt-2" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Innovation
              </h3>
              <p className="text-gray-600">
                Continuous research and development to provide cutting-edge
                agricultural solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
