import {Link} from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import './styles/default.css'
import './styles/LineIcons.css'
import './styles/style.css'
import './styles/slick.css'
import './styles/magnific-popup.css'
import './styles/bootstrap.min.css'
import HomePoster from '../../Components/HomePoster'
import Services from '../../Components/Services'
import Pricing from '../../Components/Pricing'
import Testimonial from '../../Components/Testimonial'
import Subscribe from '../../Components/Subscribe'
import Clients from '../../Components/Clients'
import Contacts from '../../Components/Contacts'
import Footer from '../../Components/Footer'

const Landingpage = () => {
  return (
    <div>
       <Navbar/>
       <HomePoster/>
       <Services/>
       <Pricing/>
       <Subscribe/>
       <Testimonial/>
       <Clients/>
       <Contacts/>
       <Footer/>
       <a className="back-to-top" href="#"><i className="lni-chevron-up"></i></a>
    </div>
  )
}

export default Landingpage