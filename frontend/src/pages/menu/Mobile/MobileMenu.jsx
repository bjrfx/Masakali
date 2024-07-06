import React from 'react'
// import image1 from '../../../assets/imagesnew/2.png';
// import image2 from '../../../assets/imagesnew/3.png';
// import image3 from '../../../assets/imagesnew/4.png';
// import image4 from '../../../assets/imagesnew/5.png';
import { Link, useNavigate } from 'react-router-dom';
const MobileMenu = () => {
    const navigate = useNavigate();
    const handleClick = (to) => (e) => {
        e.preventDefault();
        navigate(to);
        window.scrollTo(0, 0);
    };
    const image1 = 'https://masakaliottawa.ca/wp-content/uploads/2023/11/Chilli-Mushroom.jpg'
    const image2 = 'https://masakaliottawa.ca/wp-content/uploads/2023/11/Okra-Masala.jpg'
    const image3 = 'https://masakaliottawa.ca/wp-content/uploads/2020/08/Kadai-Chicken-curry.jpg'
    const image4 = 'https://masakaliottawa.ca/wp-content/uploads/2023/12/Plain-Naan.jpg'
  return (
    <div className="container-fluid contsty">
<div className="row">
    <div className="col-md-12">
        <h1 className="services" style={{marginBottom: '19px'}}>Food Menu</h1>
    </div>
</div>
<div className="row">
    <div className="col-lg-3 col-md-6">
        <div className="" style={{boxShadow: '0 0 5px #000'}}>
            <img src={image1} alt="Clove Art of Dining" />
        </div>
    </div>
    <div className="col-lg-3 col-md-6">

        <div className="" style={{boxShadow: '0 0 5px #000'}}>
            <img src={image2} alt="Clove Art of Dining" />
        </div>
    </div>
    <div className="col-lg-3 col-md-6">
        <div className="" style={{boxShadow: '0 0 5px #000'}}>
            <img src={image3} alt="Clove Art of Dining" />
        </div>
    </div>
    <div className="col-lg-3 col-md-6">
        <div className="" style={{boxShadow: '0 0 5px #000'}}>
            <img src={image4} alt="Clove Art of Dining" />
        </div>
    </div>
    <div className="col-md-12" style={{marginTop: '19px'}}>
        <center><Link to='/menu' onClick={handleClick('/menu')} className="btn btn-primary btn11"> View Menu</Link></center>
    </div>
</div>
</div>
  )
}

export default MobileMenu