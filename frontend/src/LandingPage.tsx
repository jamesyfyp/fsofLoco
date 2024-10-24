import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Truck, Wrench, Clock, BarChart, Star, ChevronRight } from "lucide-react"



export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="min-w-full px-4 lg:px-6 h-16 flex items-center bg-black text-white fixed top-0 z-50">
        <Truck className="h-6 w-6 mr-2" />
        <span className="text-lg font-bold">Fleet Services Of Florida</span>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#services">
            Services
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
            Testimonials
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Keep Your Fleet Running Smoothly
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Professional automotive maintenance services for businesses with vehicle fleets. Reduce downtime,
                  increase efficiency, and save costs.
                </p>
              </div>
              <div className="space-x-4">
                <a href="#contact" ><Button>Get Started</Button></a>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Why Choose Fleet Services Of Florida?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Wrench className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">Expert Technicians</h3>
                <p className="text-gray-500">Our certified mechanics ensure top-quality service for all vehicle types.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Clock className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
                <p className="text-gray-500">Round-the-clock support to keep your fleet operational at all times.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BarChart className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">Data-Driven Insights</h3>
                <p className="text-gray-500">Detailed reports and analytics to optimize your fleet's performance.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Preventive Maintenance</h3>
                <p className="text-gray-500 mb-4">Regular check-ups and servicing to prevent breakdowns and extend vehicle life.</p>
                <Button variant="outline">Learn More</Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Emergency Repairs</h3>
                <p className="text-gray-500 mb-4">Quick response and efficient repairs to get your vehicles back on the road.</p>
                <Button variant="outline">Learn More</Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Fleet Management Software</h3>
                <p className="text-gray-500 mb-4">Cutting-edge software to track maintenance schedules and vehicle performance.</p>
                <Button variant="outline">Learn More</Button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Customized Maintenance Plans</h3>
                <p className="text-gray-500 mb-4">Tailored solutions to meet the specific needs of your fleet and business.</p>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Star className="h-6 w-6 text-yellow-500 mb-4" />
                <p className="text-gray-600 mb-4">
                  "Fleet Services Of Florida has significantly reduced our vehicle downtime. Their service is unparalleled!"
                </p>
                <p className="font-bold">John Doe, CEO of LogisticsPro</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <Star className="h-6 w-6 text-yellow-500 mb-4" />
                <p className="text-gray-600 mb-4">
                  "The preventive maintenance program has saved us thousands in potential repair costs."
                </p>
                <p className="font-bold">Jane Smith, Fleet Manager at SpeedyDelivery</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <Star className="h-6 w-6 text-yellow-500 mb-4" />
                <p className="text-gray-600 mb-4">
                  "Their 24/7 support has been a game-changer for our night operations. Highly recommended!"
                </p>
                <p className="font-bold">Mike Johnson, Operations Director at NightHaul Inc.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Optimize Your Fleet?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Contact us today for a free consultation and see how Fleet Services Of Florida can transform your fleet maintenance.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <Input required type="text" placeholder="Your Name" />
                  <Input required type="text" placeholder="Your Company" />
                  <Input required type="email" placeholder="Enter your email" />
                  <Button type="submit">
                    Get Started <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t text-white">
        <p className="text-xs text-gray-500">© 2024 Fleet Services Of Florida. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}