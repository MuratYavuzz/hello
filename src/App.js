import React from "react";
import "./App.css";
import { Image } from "semantic-ui-react";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";
import image7 from "./images/image7.jpg";
import image8 from "./images/image8.jpg";
import image9 from "./images/image9.jpg";
import image10 from "./images/image10.jpg";
import image11 from "./images/image11.jpg";
import image12 from "./images/image12.jpg";
import image13 from "./images/image13.jpg";
import image14 from "./images/image14.jpg";
import image15 from "./images/image15.jpg";
import image16 from "./images/image16.jpg";
import image17 from "./images/image17.jpg";
import image18 from "./images/image18.jpg";
import image19 from "./images/image19.jpg";
import image20 from "./images/image20.jpg";
import image21 from "./images/image21.jpg";
import image22 from "./images/image22.jpg";
import image23 from "./images/image23.jpg";
import image24 from "./images/image24.jpg";
import image25 from "./images/image25.jpg";
import image26 from "./images/image26.jpg";
import image27 from "./images/image27.jpg";
import image28 from "./images/image28.jpg";
import image29 from "./images/image29.jpg";
import image30 from "./images/image30.jpg";
import image31 from "./images/image31.jpg";
import image32 from "./images/image32.jpg";
import image33 from "./images/image33.jpg";
import image34 from "./images/image34.jpg";
import image35 from "./images/image35.jpg";
import image36 from "./images/image36.jpg";
import pp from "./images/pp.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
        image18,
        image19,
        image20,
        image21,
        image22,
        image23,
        image24,
        image25,
        image26,
        image27,
        image28,
        image29,
        image30,
        image31,
        image32,
        image33,
        image34,
        image35,
        image36,
      ],
    };
  }

  render() {
    function rand(images) {
      return images[~~(images.length * Math.random())];
    }
    function refreshPage() {
      window.location.reload(false);
    }
    return (
        <div className="App">
          {/* <Popup
          trigger={<Icon name="heart" color="red" size="large" circular />}
          backgroundColor="white"
          content="I am positioned to the top left"
        /> */}
          <div
            style={{
              height: "120vh",
              direction:"-moz-initial",
              backgroundColor: "yellow",
              marginTop: "0px",
            }}
          >
            <h1 style={{ fontFamily: "monospace", fontSize: "35px" }}>
              {" "}
              A LOVE GALLERY <i className="heart icon"></i>
              <label style={{ fontFamily: "cursive", fontSize: "15px" }}>
                Click Button for Surprise :)
              </label>
            </h1>

            <div class="ui medium images">
              <Image
                className="ui medium circular image"
                src={rand(this.state.images)}
              ></Image>
              <Image
                className="ui medium circular image"
                src={rand(this.state.images)}
              ></Image>
              <Image
                className="ui medium circular image"
                src={rand(this.state.images)}
              ></Image>
              <Image
                className="ui medium circular image"
                src={rand(this.state.images)}
              ></Image>
            </div>

            <div
              onClick={refreshPage}
              class="ui animated fade button centered inverted youtube"
              tabindex="0"
            >
              <div class="visible content">
                <Image
                  className="centered mini circular"
                  src={pp}
                  alt="image1"
                ></Image>
                Kiss Me!
              </div>
              <div class="hidden content">
                <i class="heartbeat icon"></i>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
export default App;
