import { Breadcrumb } from "@/components/breadcrumb"
import CarCarousel from '../components/car-carousel'
import { CarDetails } from "@/components/car-details"
import { EMICalculator } from "@/components/emi-calculator"
import { SiteHeader } from "@/components/site-header"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SiteHeader />
      <main className="container px-4 py-6">
        <Breadcrumb />
        <div className="mt-6 grid gap-6 lg:grid-cols-[2fr,1fr]">
          <CarCarousel 
            images={["/1.JPG", "/2.JPG", "/3.JPG", "/4.JPG"]} 
            soldOut={false} 
          />
          <div className="space-y-6">
            <EMICalculator />
            <CarDetails
              title="2021 Mahindra Thar LX 4 STR Hard Top Diesel MT 4WD"
              specs={["13K km", "Diesel", "Manual"]}
              location="Spinny Car Hub, Trillium Avenue, Gurgaon"
              price={13.26}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

