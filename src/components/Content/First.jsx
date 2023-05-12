import Lottie from "react-lottie";
import animationData from "../../lottie/scroll.json";
import { useSpring, animated as a, useSpringRef } from "@react-spring/web";
import "../scss/First.scss";
import google from "../../assets/google.svg";
import apple from "../../assets/apple.svg";

const First = () => {
  const [props, api] = useSpring(() => ({
    from: { scale: 0, color: "#fff59a" },
    to: { scale: 1, color: "#fff" },
    config: { mass: 1, friction: 14, tension: 120 },
  }));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="container">
      <div className="center-container">
        <a.h2 style={props}>REAL TIME</a.h2>
        <a.h1 style={props}>5V5 MOBA</a.h1>
        <hr style={{ width: "40%" }} />
        <a.p style={props}>Join as five, battle as one</a.p>
        <div className="image-wrapper">
          <img src={google} />
          <img src={apple} />
        </div>
      </div>
      <div className="lottie-component">
        <Lottie options={defaultOptions} height={100} width={100} />
      </div>
    </div>
  );
};

export default First;
