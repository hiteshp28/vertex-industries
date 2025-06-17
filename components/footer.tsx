import Link from "next/link"
import { Leaf, Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-green-600 rounded-full">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Vertex</span>
                <span className="text-xl font-bold text-green-400">Industries</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed text-sm">
              Leading manufacturer and exporter of premium HDPE woven mesh solutions, including Anti-Insect Nets and
              Anti-Hail Nets.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-gray-300 text-sm">+91 9821018954</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-gray-300 text-sm">vertexind12@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-4 w-4 text-green-400" />
                <span className="text-gray-300 text-sm">WhatsApp: Mr. Pawar - 9503290174</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Our Address</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-green-400 mt-1" />
              <p className="text-gray-300 leading-relaxed text-sm">
                2, Violete Villa, Ground Floor
                <br />
                West Avenue Road, Santacruz (W)
                <br />
                Mumbai 400 054, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs">© 2024 Vertex Industries. All rights reserved.</p>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <span className="text-gray-400 text-xs">BIS Certified</span>
            <span className="text-gray-400 text-xs">Export Quality</span>
            <span className="text-gray-400 text-xs">ISO Standards</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
