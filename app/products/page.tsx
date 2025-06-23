"use client"

import type React from "react"

import { useState } from "react"
import { Shield, Zap, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SampleRequestModal from "@/components/sample-request-modal"

interface ProductSpec {
  label: string
  value: string
}

interface Product {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  image: string
  specs: ProductSpec[]
  features: string[]
  applications: string[]
}

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  // Add these state variables after the existing useState
  const [showSampleModal, setShowSampleModal] = useState(false)
  const [selectedProductForSample, setSelectedProductForSample] = useState("")

  // Add this function for handling sample request:
  const handleSampleRequest = (productName: string) => {
    setSelectedProductForSample(productName)
    setShowSampleModal(true)
  }

  const [showSampleForm, setShowSampleForm] = useState(false)
  const [sampleFormData, setSampleFormData] = useState({
    name: "",
    mobile: "",
    productName: "",
  })
  const [isSubmittingSample, setIsSubmittingSample] = useState(false)
  const [sampleSubmitted, setSampleSubmitted] = useState(false)

  // Add this function for handling sample form
  const handleSampleRequestOld = async (productName: string) => {
    setSampleFormData((prev) => ({ ...prev, productName }))
    setShowSampleForm(true)
  }

  const handleSampleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmittingSample(true)

    try {
      // Send SMS to company
      const response = await fetch("/api/send-sms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "+919503290174", // Mr. Pawar's number
          message: `New Sample Request:
Name: ${sampleFormData.name}
Mobile: ${sampleFormData.mobile}
Product: ${sampleFormData.productName}
Time: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`,
        }),
      })

      if (response.ok) {
        setSampleSubmitted(true)
        setTimeout(() => {
          setShowSampleForm(false)
          setSampleSubmitted(false)
          setSampleFormData({ name: "", mobile: "", productName: "" })
        }, 3000)
      }
    } catch (error) {
      console.error("Error sending sample request:", error)
    } finally {
      setIsSubmittingSample(false)
    }
  }

  const products: Product[] = [
    {
      id: "anti-insect-net",
      name: "Anti-Insect Net",
      description:
        "Premium quality HDPE monofilament mesh designed to protect crops from harmful insects while allowing optimal air circulation and light penetration.",
      icon: <Shield className="h-8 w-8 text-green-600" />,
      image: "/anti_insect.avif",
      specs: [
        { label: "Material", value: "HDPE Monofilament" },
        { label: "Mesh Size", value: "25x10, 40x25, 50x25 mesh" },
        { label: "GSM", value: "50-120 GSM" },
        { label: "Width", value: "1m to 6m" },
        { label: "Length", value: "Standard 100m rolls" },
        { label: "Color", value: "Milky White/Natural" },
        { label: "Packing", value: "Bundles/Rolls" },
        { label: "Warranty", value: "5 years" },
        { label: "Nomination", value: "BIS Certified" },
      ],
      features: [
        "100% Virgin HDPE material",
        "UV stabilized for longevity",
        "Excellent air permeability",
        "High tensile strength",
        "Resistant to chemicals and weather",
      ],
      applications: [
        "Greenhouse cultivation",
        "Nursery protection",
        "Vegetable farming",
        "Flower cultivation",
        "Fruit orchards",
        "Organic farming",
      ],
    },
    {
      id: "anti-hail-net",
      name: "Anti-Hail Net",
      description:
        "Robust HDPE woven mesh engineered to protect valuable crops from hail damage while maintaining excellent weather resistance and durability.",
      icon: <Zap className="h-8 w-8 text-emerald-600" />,
      image: "/anti_hail.jpeg",
      specs: [
        { label: "Type", value: "Leno(Woven)" },
        { label: "Material", value: "HDPE" },
        { label: "Mesh Size", value: "6x10" },
        { label: "GSM", value: "70 GSM" },
        { label: "Width", value: "8m & 10m" },
        { label: "Length", value: "30m" },
        { label: "Color", value: "Natural" },
        { label: "Life", value: "5 years" },
        { label: "Packing", value: "Inner Polyethylene and outer rafia bag" },
      ],
      features: [
        "High tensile strength",
        "Superior weather resistance",
        "Easy installation and maintenance",
        "Excellent hail protection",
        "UV stabilized for extended life",
        "Cost-effective solution",
      ],
      applications: [
        "Snow protection",
        "Apple orchards",
        "Grape vineyards",
        "Stone fruit protection",
        "Nursery protection",
        "Agricultural farms",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />

      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of premium HDPE woven mesh solutions, engineered to protect and enhance
              agricultural productivity.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-green-100 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-green-100 rounded-full mr-4 group-hover:bg-green-200 transition-colors">
                      {product.icon}
                    </div>
                    <CardTitle className="text-2xl text-gray-800">{product.name}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-800">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white group-hover:bg-green-700"
                  >
                    View Specifications
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* <div className="text-center bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Need Custom Solutions?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We offer customized HDPE mesh solutions tailored to your specific agricultural needs. Contact us for
              detailed specifications and bulk pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
                Contact Us Today
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Download Catalog
              </Button>
            </div>
          </div> */}
        </div>
      </div> 

      {/* Product Details Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center">
                  <div className="p-2 bg-green-100 rounded-full mr-3">{selectedProduct.icon}</div>
                  {selectedProduct.name} - Technical Specifications
                </DialogTitle>
              </DialogHeader>

              <div className="grid md:grid-cols-1 gap-8 mt-6">
                <div className="flex flex-col gap-8 mt-6">
                  <img
                    src={selectedProduct.image || "/placeholder.svg"}
                    alt={selectedProduct.name}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Technical Specifications</h3>
                    {selectedProduct.id === "anti-insect-net" ? (
                      <>
                        <div className="overflow-x-auto mb-6">
                          <table className="min-w-full border border-gray-200 text-sm text-center bg-yellow-50">
                            <thead>
                              <tr>
                                <th className="border border-gray-300 px-2 py-1 align-bottom">MESH</th>
                                <th className="border border-gray-300 px-2 py-1" colSpan={2}>40</th>
                                <th className="border border-gray-300 px-2 py-1" colSpan={2}>50</th>
                              </tr>
                              <tr>
                                <th className="border border-gray-300 px-2 py-1 align-bottom">GSM</th>
                                <th className="border border-gray-300 px-2 py-1">105</th>
                                <th className="border border-gray-300 px-2 py-1">115</th>
                                <th className="border border-gray-300 px-2 py-1">120</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-gray-300 px-2 py-1 font-semibold">WIDTH</td>
                                <td className="border border-gray-300 px-2 py-1">2.60M, 3.20M, 3.65M, 4.20M, 5.20M</td>
                                <td className="border border-gray-300 px-2 py-1">4.20M, 5.20M</td>
                                <td className="border border-gray-300 px-2 py-1">3.20M, 3.65M</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="overflow-x-auto mb-6">
                          <table className="min-w-full border border-gray-200 text-sm text-left bg-yellow-50">
                            <thead>
                              <tr>
                                <th className="border border-gray-300 px-3 py-2 font-semibold">Specification</th>
                                <th className="border border-gray-300 px-3 py-2 font-semibold">Value</th>
                              </tr>
                            </thead>
                            <tbody>
                              {selectedProduct.specs.filter(spec => !["Mesh Size", "GSM", "Width"].includes(spec.label)).map((spec, idx) => (
                                <tr key={idx}>
                                  <td className="border border-gray-300 px-3 py-2 font-medium text-gray-700">{spec.label}</td>
                                  <td className="border border-gray-300 px-3 py-2 text-gray-600">{spec.value}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </>
                    ) : (
                      <div className="overflow-x-auto mb-6">
                        <table className="min-w-full border border-gray-200 text-sm text-left bg-yellow-50">
                          <thead>
                            <tr>
                              <th className="border border-gray-300 px-3 py-2 font-semibold">Specification</th>
                              <th className="border border-gray-300 px-3 py-2 font-semibold">Value</th>
                            </tr>
                          </thead>
                          <tbody>
                            {selectedProduct.specs.map((spec, idx) => (
                              <tr key={idx}>
                                <td className="border border-gray-300 px-3 py-2 font-medium text-gray-700">{spec.label}</td>
                                <td className="border border-gray-300 px-3 py-2 text-gray-600">{spec.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Applications</h3>
                    <ul className="space-y-2">
                      {selectedProduct.applications.map((app, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Quality Assurance</h4>
                    <p className="text-sm text-green-700">
                      All our products are BIS certified and manufactured using 100% virgin HDPE material with advanced
                      UV stabilization technology for maximum durability and performance.
                    </p>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <Button
                      asChild
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      <a href="/contact">Contact Us</a>
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Add this before the closing </div> and <Footer /> */}
      <SampleRequestModal
        isOpen={showSampleModal}
        onClose={() => setShowSampleModal(false)}
        productName={selectedProductForSample}
      />
      <Footer />
    </div>
  )
}
