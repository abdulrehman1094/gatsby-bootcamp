import React from 'react'
import { Link } from 'gatsby'
import images from "../images/surgery.jpg"
import images2 from "../images/Capture.png"
import images3 from "../images/Bring-Back.jpg"
import Background  from "../images/banner.jpg"

import Layout from '../components/layout'



const IndexPage = () => {
    return (
        <Layout>
            <div id="container">
                <img id="banner"src={Background }></img>
            </div>
            <div>
			<h3 class="color-text2" >
            <span class="title-sub2">Take a look</span><br/>
    <span ><b>THE SUCCESS OF THESE CAMPAIGNS<br/>
    </b> <b> DEPEND ON YOUR SUPPORT</b> </span>
            </h3>
            <div class="row">
  <div class="column">
   <img src={images}></img>
  </div>
  <div class="column">
    <h2>Say Thanks to our Masked Heroes</h2>
    <p>People who risk their lives to save ours</p>
    <Link to="/contact" class="button">Say Thanks</Link>
  </div>
  <div class="column" >
   <img src={images2}></img>
  </div>
  <div class="column">
  <h2>Groupon promotes violation of social distancing policy</h2>
    <p>Groupon is promoting the heavily discounted use of a yacht in Miami, of all places.</p>
    <a id="buttonHolder" href="#" class="button">More Info</a>
  </div>
<div class="column" >
   <img src={images3}></img>
  </div>
  <div class="column">
    <h2>Bring back manufacture of strategic products</h2>
    <p>The pandemic is dramatic and fatal proof that is a huge and dangerous mistake to depend on foreign countries for products that are essential to public health and national security.</p>
    <a id="buttonHolder" href="#" class="button">Sign it</a>
  </div></div>
		</div>
        <div class="col-lg-12 col-md-12 col-sm-12">
        <h3 >
            <span class="title-sub2">Share it</span>
            <br/> GIVE ALL YOUR CONTACTS THE OPORTUNITY TO BE A PART OF THIS EFFORT</h3>
            <p>The more people who sign, the more effective it is</p>
        </div>
        </Layout>
    )
}

export default IndexPage