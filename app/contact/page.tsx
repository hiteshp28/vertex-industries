"use client";

import type React from "react";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-sample-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            message: "",
          });
        }, 3000);
      } else {
        alert(
          "Failed to send message. Please try again or contact us directly."
        );
      }
    } catch (error) {
      console.error("Error sending contact message:", error);
      alert("Failed to send message. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: "Phone",
      details: ["+91-22-26054493 / 26461069"],
      action: "Call Now",
      actionLink: "tel:+912226054493",
    },
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: "Mobile",
      details: ["+91-9821018954"],
      action: "Call Now",
      actionLink: "tel:+919821018954",
    },
    {
      icon: <Mail className="h-6 w-6 text-emerald-600" />,
      title: "Email",
      details: ["vertexind12@gmail.com"],
      action: "Send Email",
      actionLink: "mailto:vertexind12@gmail.com",
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-green-600" />,
      title: "WhatsApp for Samples",
      details: ["Mr. Pawar: +91-9503290174"],
      action: "Chat Now",
      actionLink: "https://wa.me/919503290174",
    },
    {
      icon: <MapPin className="h-6 w-6 text-emerald-600" />,
      title: "Office Address",
      details: [
        "2, Violete Villa, Ground Floor",
        "West Avenue Road, Santacruz (W)",
        "Mumbai 400 054, India",
      ],
      action: "Get Directions",
      actionLink:
        "https://www.google.com/maps/search/?api=1&query=2,+Violete+Villa,+Ground+Floor,+West+Avenue+Road,+Santacruz+(W),+Mumbai+400054,+India",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />

      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6 mt-5">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discuss your HDPE mesh requirements for Anti-Insect Nets or
              Anti-Hail Nets? Get in touch with our experts for personalized
              solutions and competitive pricing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-all duration-300 border-green-100"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-green-100 rounded-full">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            {info.title}
                          </h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 mb-1">
                              {detail}
                            </p>
                          ))}
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-3 border-green-600 text-green-600 hover:bg-green-50"
                            asChild
                          >
                            <a
                              href={info.actionLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {info.action}
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Business Hours */}
              <Card className="border-green-100">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Saturday:</span>
                      <span className="font-medium">11:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium text-red-600">Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-700">
                      <strong>Emergency Contact:</strong> For urgent
                      requirements, WhatsApp Mr. Pawar at +91-9503290174 anytime.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Google Maps */}
            <div className="mt-16">
              <Card className="overflow-hidden shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800 flex items-center">
                    <MapPin className="h-6 w-6 text-green-600 mr-3" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative h-96 bg-gray-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8267739562447!2d72.8347107!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x7c5b4b8c4b8c4b8c!2sWest%20Avenue%20Rd%2C%20Santacruz%20West%2C%20Mumbai%2C%20Maharashtra%20400054!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Vertex Industries Location"
                    />
                  </div>
                  <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                          Visit Our Office
                        </h4>
                        <p className="text-gray-600">
                          2, Violete Villa, Ground Floor, West Avenue Road,
                          Santacruz (W), Mumbai 400 054
                        </p>
                      </div>
                      <Button
                        className="mt-4 md:mt-0 bg-green-600 hover:bg-green-700 text-white"
                        asChild
                      >
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=2,+Violete+Villa,+Ground+Floor,+West+Avenue+Road,+Santacruz+(W),+Mumbai+400054,+India"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Get Directions
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
