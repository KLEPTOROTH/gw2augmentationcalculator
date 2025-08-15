import type { Placement } from "@floating-ui/react-dom";
import captainMaiTrinBossImage from "../../assets/images/maps/captainMaiTrinBoss.png";
import chaosIslesImage from "../../assets/images/maps/chaosIsles.jpeg";
import deepstoneImage from "../../assets/images/maps/deepstone.jpeg";
import nightmareImage from "../../assets/images/maps/nightmare.jpg";
import snowblindImage from "../../assets/images/maps/snowblind.jpeg";
import sunquaPeakImage from "../../assets/images/maps/sunquaPeak.jpeg";
import thaumnovaReactorImage from "../../assets/images/maps/thaumanovaReactor.jpg";
import volcanicImage from "../../assets/images/maps/volcanic.jpeg";
import CaptainMaiTrinBossPathSVG from "./path-svg/CaptainMaiTrinBoss.astro";
import ChaosIsles from "./path-svg/ChaosIsles.astro";
import Deepstone from "./path-svg/Deepstone.astro";
import Nightmare from "./path-svg/Nightmare.astro";
import SnowblindPathSVG from "./path-svg/Snowblind.astro";
import SunquaPeak from "./path-svg/SunquaPeak.astro";
import ThaumanovaReactorSVG from "./path-svg/ThaumanovaReactor.astro";
import Volcanic from "./path-svg/Volcanic.astro";

export type Encounter = {
  xPercent: number;
  yPercent: number;
  isMajor: boolean;
  area: string;
  tooltipDirection?: Placement;
  index?: number;
};

const mapsData: Record<
  string,
  {
    src: ImageMetadata;
    width: number;
    height: number;
    PathSVG: (_props: { width: number; height: number }) => any;
    encounters: Encounter[];
  }
> = {
  snowblind: {
    src: snowblindImage,
    width: 500,
    height: 518,
    PathSVG: SnowblindPathSVG,
    encounters: [
      {
        xPercent: 25,
        yPercent: 30,
        isMajor: true,
        area: '<polygon points="66,98 235,98 235,194 66,194 66,98"></polygon>',
      },
      {
        xPercent: 65,
        yPercent: 20,
        isMajor: true,
        area: '<circle cx="123" cy="346" r="58"></circle>',
      },
      {
        xPercent: 50,
        yPercent: 52,
        isMajor: false,
        area: '<polygon points="227,450 369,452 373,157 255,165 257,334 227,450"></polygon>',
      },
      {
        xPercent: 50,
        yPercent: 80,
        isMajor: true,
        area: '<circle cx="425" cy="264" r="49"></circle>',
      },
    ],
  },
  "thaumanova-reactor": {
    src: thaumnovaReactorImage,
    width: 3352,
    height: 3348,
    PathSVG: ThaumanovaReactorSVG,
    encounters: [
      {
        xPercent: 65,
        yPercent: 68,
        isMajor: false,
        tooltipDirection: "bottom",
        area: '<rect height="43.07688" width="87.69221" y="1479.84276" x="1465.53477" />',
      },
      {
        xPercent: 75,
        yPercent: 50,
        isMajor: true,
        area: '<rect height="416.92263" width="603.07628" y="2799.84122" x="1293.22729" />',
      },
      {
        xPercent: 50,
        yPercent: 80,
        isMajor: true,
        tooltipDirection: "left",
        area: '<rect height="929.22984" width="378.46113" y="1141.38159" x="2556.30285" />',
      },
      {
        xPercent: 48.5,
        yPercent: 25,
        isMajor: true,
        tooltipDirection: "right",
        area: '<rect height="281.53816" width="749.22997" y="1601.38109" x="151.69004" />',
      },
      {
        xPercent: 18,
        yPercent: 66,
        isMajor: true,
        tooltipDirection: "bottom",
        area: '<ellipse ry="323.84583" rx="366.15344" id="svg_20" cy="408.30542" cx="2665.53352" />',
      },
      {
        xPercent: 35,
        yPercent: 48,
        isMajor: true,
        area: '<ellipse ry="153.846" rx="158.46136" id="svg_17" cy="1499.84274" cx="1745.53448" />',
      },
    ],
  },
  "captain-mai-trin-boss": {
    src: captainMaiTrinBossImage,
    width: 2004,
    height: 2264,
    PathSVG: CaptainMaiTrinBossPathSVG,
    encounters: [
      {
        xPercent: 25,
        yPercent: 52,
        isMajor: true,
        tooltipDirection: "right",
        area: '<ellipse ry="280.00001" rx="356.36364" cy="645.9862" cx="1124.84345" />',
      },
      {
        xPercent: 62,
        yPercent: 60,
        isMajor: true,
        tooltipDirection: "bottom",
        area: '<ellipse ry="365.45455" rx="512.72728"  cy="1460.53168" cx="1152.11618" />',
      },
    ],
  },
  deepstone: {
    src: deepstoneImage,
    width: 2034,
    height: 2634,
    PathSVG: Deepstone,
    encounters: [
      {
        xPercent: 50,
        yPercent: 30,
        isMajor: true,
        tooltipDirection: "right",
        area: "",
      },
      {
        xPercent: 70,
        yPercent: 80,
        isMajor: true,
        tooltipDirection: "bottom",
        area: "",
      },
      undefined,
      {
        xPercent: 70,
        yPercent: 41.5,
        isMajor: true,
        tooltipDirection: "bottom",
        area: "",
        index: 3,
      },
      {
        xPercent: 55,
        yPercent: 42.5,
        isMajor: false,
        index: 4,
        area: '<rect height="390.66675" width="340.00008" y="1281.67197" x="748.20416" />',
      },
      {
        xPercent: 35,
        yPercent: 42.5,
        isMajor: false,
        index: 5,
        area: "",
      },
      {
        xPercent: 8,
        yPercent: 41.5,
        isMajor: true,
        index: 6,
        area: '<rect height="268.00006" width="534.66679" y="379.4496" x="656.20414" />',
      },
    ],
  },
  nightmare: {
    src: nightmareImage,
    width: 2400,
    height: 2400,
    PathSVG: Nightmare,
    encounters: [
      undefined,
      {
        xPercent: 15,
        yPercent: 50,
        isMajor: true,
        tooltipDirection: "bottom",
        area: '<ellipse cx="1289.3022" cy="440.93018" rx="281.44348" ry="218.18765" />',
        index: 1,
      },
      undefined,
      undefined,

      {
        xPercent: 80,
        yPercent: 35,
        isMajor: true,
        tooltipDirection: "bottom",
        area: '<rect width="381.51031" height="426.16144" x="730.17511" y="1738.5471" />',
        index: 2,
      },
      {
        xPercent: 47,
        yPercent: 35,
        isMajor: true,
        tooltipDirection: "bottom",
        area: '<ellipse cx="918.65125" cy="1211.3024" rx="191.20929" ry="193.06975" />',
        index: 3,
      },
    ],
  },
  "sunqua-peak": {
    src: sunquaPeakImage,
    width: 4800,
    height: 4800,
    PathSVG: SunquaPeak,
    encounters: [
      {
        xPercent: 80,
        yPercent: 50,
        isMajor: false,
        area: "",
      },
      {
        xPercent: 80,
        yPercent: 25,
        isMajor: true,
        area: '<ellipse cx="1544.6663" cy="3969.1394" rx="198.28958" ry="168.29329" />',
      },
      {
        xPercent: 70,
        yPercent: 25,
        isMajor: false,
        area: "",
      },
      {
        xPercent: 50,
        yPercent: 30,
        isMajor: true,
        area: '<ellipse cx="1765.2515" cy="2671.8787" rx="181.35222" ry="172.52216" />',
      },
      {
        xPercent: 50,
        yPercent: 55,
        isMajor: false,
        area: "",
      },
      {
        xPercent: 30,
        yPercent: 40,
        isMajor: true,
        area: '<ellipse cx="2225.3352" cy="1661.2903" rx="166.17421" ry="155.61528" />',
      },
      {
        xPercent: 40,
        yPercent: 70,
        isMajor: true,
        area: '<ellipse cx="3689.6628" cy="2146.1562" rx="267.4957" ry="269.25656"',
      },
    ],
  },
  volcanic: {
    src: volcanicImage,
    width: 1398,
    height: 1080,
    PathSVG: Volcanic,
    encounters: [
      {
        xPercent: 50,
        yPercent: 85,
        isMajor: false,
        area: "",
      },
      {
        xPercent: 40,
        yPercent: 50,
        isMajor: true,
        area: "",
      },
      {
        xPercent: 70,
        yPercent: 60,
        isMajor: true,
        area: "",
      },
    ],
  },
  "chaos-isles": {
    src: chaosIslesImage,
    width: 2600,
    height: 1600,
    PathSVG: ChaosIsles,
    encounters: [
      {
        xPercent: 50,
        yPercent: 12,
        isMajor: false,
        area: "",
      },
      {
        xPercent: 60,
        yPercent: 45,
        isMajor: true,
        area: "",
      },
      {
        xPercent: 45,
        yPercent: 70,
        isMajor: false,
        area: "",
      },
      {
        xPercent: 15,
        yPercent: 55,
        isMajor: true,
        area: "",
      },
    ],
  },
};

export const getMapData = (map: string) => mapsData[map];
