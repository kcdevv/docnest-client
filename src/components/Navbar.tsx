import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <Link to={"/"}><h1 className="text-2xl font-bold text-blue-600">DocNest</h1></Link>
        <div className="space-x-6">
          <Link to="/features" className="hover:text-blue-600">Features</Link>
          <Link to="/pricing" className="hover:text-blue-600">Pricing</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
      </nav>
  )
}

export default Navbar