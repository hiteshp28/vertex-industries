"use client";

import { useState, useEffect } from "react";
import { Award, Globe, Users, Leaf, CheckCircle, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const milestones = [
    {
      year: "1995",
      title: "Company Founded",
      description:
        "Mr. Rajendra Tibrewala established Vertex Industries with a vision to revolutionize agricultural protection solutions.",
    },
    {
      year: "2000",
      title: "HDPE Specialization",
      description:
        "Focused expertise in HDPE monofilament fabrics and woven mesh technologies.",
    },
    {
      year: "2005",
      title: "BIS Certification",
      description:
        "Achieved BIS certification, establishing quality standards and credibility in the market.",
    },
    {
      year: "2010",
      title: "Export Excellence",
      description:
        "Expanded to international markets, becoming a trusted exporter of premium mesh solutions.",
    },
    {
      year: "2015",
      title: "Innovation Hub",
      description:
        "Established R&D facility for continuous product development and quality enhancement.",
    },
    {
      year: "2024",
      title: "Market Leadership",
      description:
        "Leading manufacturer with pan-India presence and growing international footprint.",
    },
  ];

  const values = [
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: "Quality Excellence",
      description:
        "Committed to delivering premium quality products that exceed industry standards and customer expectations.",
    },
    {
      icon: <Globe className="h-8 w-8 text-emerald-600" />,
      title: "Global Reach",
      description:
        "Serving customers across India and international markets with reliable export solutions.",
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Sustainability",
      description:
        "Promoting sustainable agriculture through eco-friendly HDPE solutions that protect crops and environment.",
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-600" />,
      title: "Customer Focus",
      description:
        "Building lasting relationships through personalized service and customized solutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />

      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Hero Section */}
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-6 mt-5">
              About Vertex Industries
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
             We would like to inform
              you about our firm VERTEX INDUSTRIES. We are leading manufacturers
              and exporters of HDPE monofilament woven fabric in India and beyond.
            </p>
          </div>

          {/* Founder Section */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Our Vision
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Vertex Industries is a name synonymous with innovation,
                  quality, and trust in agricultural protection solutions.
                  Originally established in 1978 under its parent company <strong>Lotus
                  Industries</strong>, the company began its journey in the manufacturing
                  of HDPE monofilament products and woven mesh fabrics. Over the
                  decades, it built a solid foundation in technical textile
                  manufacturing with a focus on precision, performance, and
                  durability.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  In 2012, under the visionary leadership of{" "}
                  <strong>Mr. Rajendra Tibrewala</strong>, the company
                  diversified into the agriculture sector, recognizing the
                  urgent need for advanced crop protection solutions tailored to
                  Indian farming conditions. Thus, Vertex Industries was
                  born—with a mission to empower farmers with world-class,
                  sustainable, and affordable agro-shade and anti-insect netting
                  products.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {" "}
                  We remain committed to innovation, sustainability, and
                  farmer-centric solutions, ensuring our legacy continues to
                  grow—rooted in quality, driven by purpose.
                </p>
                {/* <div className="flex items-center space-x-4">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    25+ Years of Industry Experience
                  </span>
                </div>
                <div className="flex items-center space-x-4 mt-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    BIS Certified Manufacturing
                  </span>
                </div>
                <div className="flex items-center space-x-4 mt-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    Export Excellence Award Recipient
                  </span>
                </div> */}
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <img
                    src="/About_us.jpg"
                    alt="Mr. Rajendra Tibrewala - Founder"
                    className="w-full h-96 object-cover rounded-2xl shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl" />
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Values */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Our Mission & Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Driven by excellence, guided by sustainability, and committed to
                empowering agriculture.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-green-100"
                >
                  <CardContent className="p-8">
                    <div className="p-4 bg-green-50 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Vertex Industries
              for their agricultural protection needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
