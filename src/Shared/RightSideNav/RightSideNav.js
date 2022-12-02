import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle , FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin, FaYoutube} from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandsCarusel/BrandCarousel ';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {
  const {providerLogin}= useContext(AuthContext);
  const provider= new GoogleAuthProvider()

  


  const handleGoogleLogin=()=>{

    providerLogin(provider)
    .then(result=>{
      const u=result.user
      console.log(u);
      
      })
      .catch(error=>{
        console(error)
      })
  }
    return (
        <div>
            <p>{}</p>
    <ButtonGroup vertical>
      <Button className='mb-2' variant="outline-primary" onClick={handleGoogleLogin}><FaGoogle/> Log In With Google</Button>
      <Button variant="outline-dark"><FaGithub/> Log In With Github</Button>
      </ButtonGroup>
      <div>
        <h2>Find Us Or</h2>
        <ListGroup>
      <ListGroup.Item className="mb-2" > <FaFacebook/>Facebook</ListGroup.Item>
      <ListGroup.Item className="mb-2"><FaTwitter/> Twitter</ListGroup.Item>
      <ListGroup.Item className="mb-2"> <FaWhatsapp/> Whatsapp</ListGroup.Item>
      <ListGroup.Item className="mb-2"> <FaLinkedin/> LinkeDin</ListGroup.Item>
      <ListGroup.Item className="mb-2"> <FaYoutube></FaYoutube> Youtube</ListGroup.Item>
    </ListGroup>
      </div>
<div>
  <BrandCarousel></BrandCarousel>
</div>
        </div>
    );
};

export default RightSideNav;