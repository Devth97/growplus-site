import { Routes, Route } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

// Pages
import Home from "@/pages/Home"
import FoodBeverage from "@/pages/FoodBeverage"
import RealEstate from "@/pages/RealEstate"
import Jewellery from "@/pages/Jewellery"

export default function App() {
    return (
        <div className="bg-[#050505] text-white min-h-screen font-body selection:bg-primary selection:text-black">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/food-and-beverage-marketing" element={<FoodBeverage />} />
                <Route path="/real-estate-marketing" element={<RealEstate />} />
                <Route path="/jewellery-branding" element={<Jewellery />} />
            </Routes>
            <Footer />
        </div>
    )
}
