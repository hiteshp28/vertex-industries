"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, Send } from "lucide-react"

interface SampleRequestModalProps {
  isOpen: boolean
  onClose: () => void
  productName: string
}

export default function SampleRequestModal({ isOpen, onClose, productName }: SampleRequestModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-sample-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.mobile,
          productName,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setTimeout(() => {
          onClose()
          setIsSubmitted(false)
          setFormData({ name: "", mobile: "" })
        }, 3000)
      } else {
        alert("Failed to send request. Please try again or contact us directly.")
      }
    } catch (error) {
      console.error("Error sending sample request:", error)
      alert("Failed to send request. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl text-gray-800">Request Sample - {productName}</DialogTitle>
        </DialogHeader>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700 font-medium">
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="border-green-200 focus:border-green-500 focus:ring-green-500"
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mobile" className="text-gray-700 font-medium">
                Mobile Number *
              </Label>
              <Input
                id="mobile"
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleInputChange}
                required
                pattern="[0-9]{10}"
                className="border-green-200 focus:border-green-500 focus:ring-green-500"
                placeholder="Enter 10-digit mobile number"
              />
            </div>

            <div className="p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-green-700">
                <strong>Note:</strong> Our team will contact you within 24 hours to arrange sample delivery. Samples are
                provided free of cost.
              </p>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Sending Request...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <Send className="h-4 w-4 mr-2" />
                  Request Sample
                </div>
              )}
            </Button>
          </form>
        ) : (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample Request Sent Successfully!</h3>
            <p className="text-gray-600">
              Mr. Pawar has been notified and will contact you shortly for sample delivery.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
