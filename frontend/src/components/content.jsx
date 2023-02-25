import React from "react";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import "../style/content.css";
const Content = () => {
  return (
    <div id="ggg">
      <div id="div1">
        <div id="a">
          <div>
            <p>Lowest Prices</p>
            <p>Best quality Shoping</p>
          </div>
          <span> 50 lakh+ Styles |</span> <span> 650+ categories</span>
          <div id="playStoreButton">
            <a href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pow_click_page_type=HP&pow_distinct_id=17f0cd4777b117-04320a26165079-a3e3164-100200-17f0cd4777c3c">
              <div>
                <img
                  src="https://i.pinimg.com/originals/60/a8/b5/60a8b504a19449659ac8e41d3fb807a4.gif"
                  alt="play"
                />
              </div>
              <div>Download the Meesho App</div>
            </a>
          </div>
        </div>
        <div id="b">
          <img
            src="https://images.meesho.com/images/marketing/1631722939962.jpg"
            alt="err"
          />
        </div>
      </div>
      <center>
        <div id="text"> Top Categories to choose from </div>
      </center>
      <div id="div2">
        <div id="leftDiv2">
          <img
            class="img2"
            src="https://images.meesho.com/images/marketing/1631611172021.png"
            alt="fail"
          />
        </div>
        <div id="rightDiv2">
          <div id="single">Fashion Store</div>
          <div id="double">
            {" "}
            <img
              src="https://images.meesho.com/images/marketing/1631610854491.png"
              alt="fail"
            />
            <img
              src="https://images.meesho.com/images/marketing/1631611208025.png"
              alt="fail"
            />
          </div>
        </div>
      </div>
      <div id="homecare">
        <div>
          <div>
            <h1>Homecare</h1>
            <button>VIEW ALL</button>
          </div>
          <div>
            <img
              src="https://images.meesho.com/images/marketing/1629883981751.png"
              alt="bedsheet"
            />
            <button>Bedsheets</button>
          </div>
          <div>
            <img
              src="https://images.meesho.com/images/marketing/1629884011960.png"
              alt="Kitchenware"
            />
            <button>Kitchenware</button>
          </div>
          <div>
            <img
              src="https://images.meesho.com/images/marketing/1629883997863.png"
              alt="Carpets"
            />
            <button>Carpets</button>
          </div>
        </div>
      </div>
      <div class="reseller">
        <div>
          <h2>Become a Reseller and</h2>
        </div>
        <div>
          <h1>
            Start your Online Business <br />
            with Zero Investment
          </h1>
        </div>
        <div class="android">
          <img
            src="https://meesho.com/_next/static/images/playstore-a7dfd2afcd42f96d491912cbec2d6fa2.png"
            alt="android"
          />
          <img
            src="https://meesho.com/_next/static/images/appstore-a689c2ac38f3ed1ab7e7b39e98aaf15a.png"
            alt="ios"
          />
        </div>
      </div>
      <div class="last">
        <div>
          <h1>Register as a Meesho Supplier</h1>
          <h2>Sell your products to crores of customers at 0% commission</h2>
        </div>
        <List spacing={3} marginLeft={"4%"} marginTop={"1%"}>
          <ListItem>
            <ListIcon fontSize="2xl" as={MdCheckCircle} color="green.500" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
          <ListItem>
            <ListIcon fontSize="2xl" as={MdCheckCircle} color="green.500" />
            Assumenda, quia temporibus eveniet a libero incidunt suscipit
          </ListItem>
          <ListItem>
            <ListIcon fontSize="2xl" as={MdCheckCircle} color="green.500" />
            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
          </ListItem>
        </List>
        <button>Sign Up now</button>
      </div>
    </div>
  );
};

export default Content;
