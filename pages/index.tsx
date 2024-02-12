import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import styles from '../styles/Home.module.css'
import Layout from "../ components/layout";
import Carousel from "../ components/carousel";
const inter = Inter({ subsets: ["latin"] });
let slides = [
  <div onClick={e => console.log(1)} className="w-full">
    <img
    className="w-full h-full"
      alt="img1"
      src="https://maharishiayurvedaindia.com/cdn/shop/files/Desh_Banner_9865a41b-1e52-4668-9ae5-52e3c7e4636c_2000x.jpg?v=1704285562"
    />
  </div>,
  <div onClick={e => console.log(2)}>
    <img
      alt="img2"
    className="w-full h-full"

      src="https://maharishiayurvedaindia.com/cdn/shop/files/Desktop_Creative_Sleep_2000x.jpg?v=1703747274"
    />
  </div>,
  <div onClick={e => console.log(3)}>
    <img
    className="w-full h-full"

      alt="img3"
      src="https://maharishiayurvedaindia.com/cdn/shop/files/Ghrits_Desktop_Banner_f121bd7f-bf53-4bd5-9c0d-f81392ce5653_2000x.png?v=1705494342"
    />
  </div>
];

export default function Home() {
  return (
    <div className={styles.App}>
      {/* <Carousel slides={slides} animationType="ZOOM" duration={3000} /> */}
      {/* <Carousel
        slides={slides}
        animationType="FADE"
        animationDuration={1000}
        duration={5000}
        animationTimingFunction="linear"
        withNavigation
      /> */}
            <Carousel slides={slides} duration={2500} withNavigation />

    </div>
  );
}
