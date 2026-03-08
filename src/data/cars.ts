import audiLogo from "../Image/Audi/AudiLogo.png";
import A1 from "../Image/Audi/AudiA1.png";
import A1inside from "../Image/Audi/A1Collage.jpeg";
import A5 from "../Image/Audi/AudiA5.png";
import A5inside from "../Image/Audi/A5Collage.jpeg";
import RS3 from "../Image/Audi/AudiRS3.png";
import RS3inside from "../Image/Audi/Rs3Collage.jpeg";

import A1_front from "../Image/Audi/A1.avif";
import A5_front from "../Image/Audi/A5.webp";
import RS3_front from "../Image/Audi/RS3.avif";

import lamborghiniLogo from "../Image/Lamborghini/LamborghiniLogo.png";
import  Aventador from "../Image/Lamborghini/Aventador.png";
import Huracan from "../Image/Lamborghini/huracan.png";
import STO from "../Image/Lamborghini/STO.png";
import  AventadorInside from "../Image/Lamborghini/AventadorCollage.jpeg";
import HuracanInside from "../Image/Lamborghini/HuracanCollage.jpeg";
import STOInside from "../Image/Lamborghini/StoCollage.jpeg";

import Aventador_front from "../Image/Lamborghini/aventador_svj.jpg";
import Huracan_front from "../Image/Lamborghini/huracan.jpg";
import STO_front from "../Image/Lamborghini/STO.jpg";


import mercedesLogo from "../Image/Mercedes/MercedesLogo.png";
import GT from "../Image/Mercedes/MercedesAmgGt.png";
import GLC from "../Image/Mercedes/MercedesGLC.png";
import AClass from "../Image/Mercedes/Aclass.png";
import GTInside from "../Image/Mercedes/AmgGtCollage.jpeg";
import GLCInside from "../Image/Mercedes/GlcCollage.jpeg";
import AClassInside from "../Image/Mercedes/Acollage.jpeg";

import A_front from "../Image/Mercedes/A45s.jpg";
import GLC_front from "../Image/Mercedes/GLC.jpg";
import GT_front from "../Image/Mercedes/Gt.avif";

import mustangLogo from "../Image/Mustang/MustangLogo.png";
import GT500 from "../Image/Mustang/MustangGT500.png";
import MachE from "../Image/Mustang/MustangMachE.png";
import GT500Inside from "../Image/Mustang/Gt500Collage.jpeg";
import MachEInside from "../Image/Mustang/MachECollage.jpeg";

import GT500_front from "../Image/Mustang/GT500_desktop.jpg";
import MachE_front from "../Image/Mustang/MachEDesktop.jpg";

import renaultLogo from "../Image/Renault/RenaultLogo.png";
import Austral from "../Image/Renault/RenaultAustral.png"
import Clio from "../Image/Renault/clio.png";
import Megane from "../Image/Renault/RenaultMeganeE-tech.png"
import AustralInside from "../Image/Renault/AustralCollage.jpeg";
import ClioInside from "../Image/Renault/ClioCollage.jpeg";
import MeganeInside from "../Image/Renault/MeganCollage.jpeg"

import Austral_front from "../Image/Renault/AustralDesktop.jpg";
import Clio_front from "../Image/Renault/ClioDesktop.jpg";
import Megan_desktop from "../Image/Renault/MeganDesktop.jpg";

import teslaLogo from "../Image/Tesla/TeslaLogo1.png";
import Model3 from "../Image/Tesla/TeslaModel3.png";
import ModelS from "../Image/Tesla/TeslaModelS.png";
import ModelY from "../Image/Tesla/Y.png";
import Model3Inside from "../Image/Tesla/3Collage.jpeg";
import ModelSInside from "../Image/Tesla/SCollage.jpeg";
import ModelYInside from "../Image/Tesla/TeslaModelY.jpeg";

import Model3_front from "../Image/Tesla/Model-3.avif";
import ModelS_front from "../Image/Tesla/Model-S.avif";
import ModelY_front from "../Image/Tesla/Model-S.avif";

const desc="The Vortex X-One is a revolutionary supercar engineered to embody the best of every vehicle class. With the sleek aerodynamics of a Ferrari, the all-terrain adaptability of a Land Rover, and the tech sophistication of a Tesla, it’s the ultimate automotive hybrid. Powered by a twin-turbo V10 engine paired with an electric dual-motor system, it delivers both raw combustion power and silent electric finesse. Inside, the spacious cabin is configurable—luxury sedan comfort in front, foldable rear seats like an SUV, and AI-assisted controls drawn from cutting-edge autonomous systems. Whether cruising city streets, racing on a track, or navigating rugged terrain, the Vortex X-One adapts instantly—making it a true shape-shifter in the automotive world. Advanced air suspension, bulletproof carbon-fiber chassis, and smart energy regeneration ensure it’s not just fast—but intelligent and durable.";

const cars = [
  {
    id: 1,
    logoPath: audiLogo,
    name: "Audi",
    model: "A1",
    photo: A1,
    desktopImage: A1_front,
    description: desc,
    inside: A1inside,
    length: 4.029,
    height: 1.409,
    width: 1.740,
    price: 22.001,
    horsePower: 109,
  },
  {
    id: 2,
    logoPath: audiLogo,
    name: "Audi",
    model: "A5",
    photo: A5,
    desktopImage: A5_front,
    description: desc,
    inside: A5inside,
    length: 4.697,
    height: 1.371,
    width: 1.846,
    price: 46.001,
    horsePower: 261,
  },
  {
    id: 3,
    logoPath: audiLogo,
    name: "Audi",
    model: "RS3",
    photo: RS3,
    desktopImage: RS3_front,
    description: desc,
    inside: RS3inside,
    length: 4.389,
    height: 1.414,
    width: 1.851,
    price: 61.001,
    horsePower: 401,
  },
  {
    id: 4,
    logoPath: lamborghiniLogo,
    name: "Lamborghini",
    model: "Aventador",
    photo: Aventador,
    desktopImage: Aventador_front,
    description: desc,
    inside: AventadorInside,
    length: 4.868,
    height: 1.136,
    width: 2.030,
    price: 507.001,
    horsePower: 769,
  },
  {
    id: 5,
    logoPath: lamborghiniLogo,
    name: "Lamborghini",
    model: "Huracán",
    photo: Huracan,
    desktopImage: Huracan_front,
    description: desc,
    inside: HuracanInside,
    length: 4.520,
    height: 1.165,
    width: 1.933,
    price: 249.001,
    horsePower: 631,
  },
  {
    id: 6,
    logoPath: lamborghiniLogo,
    name: "Lamborghini",
    model: "STO",
    photo: STO,
    desktopImage: STO_front,
    description: desc,
    inside: STOInside,
    length: 4.549,
    height: 1.220,
    width: 1.945,
    price: 327.001,
    horsePower: 631,
  },
  {
    id: 7,
    logoPath: mercedesLogo,
    name: "Mercedes",
    model: "GT",
    photo: GT,
    desktopImage: GT_front,
    description: desc,
    inside: GTInside,
    length: 4.73,
    height: 1.28,
    width: 1.94,
    price: 97.001,
    horsePower: 523,
  },
  {
    id: 8,
    logoPath: mercedesLogo,
    name: "Mercedes",
    model: "GLC",
    photo: GLC,
    desktopImage: GLC_front,
    description: desc,
    inside: GLCInside,
    length: 4.72,
    height: 1.64,
    width: 1.89,
    price: 48.001,
    horsePower: 255,
  },
  {
    id: 9,
    logoPath: mercedesLogo,
    name: "Mercedes",
    model: "A-Class",
    photo: AClass,
    desktopImage: A_front,
    description: desc,
    inside: AClassInside,
    length: 4.42,
    height: 1.44,
    width: 1.80,
    price: 37.001,
    horsePower: 188,
  },
  {
    id: 10,
    logoPath: mustangLogo,
    name: "Mustang",
    model: "GT500",
    photo: GT500,
    desktopImage: GT500_front,
    description: desc,
    inside: GT500Inside,
    length: 4.83,
    height: 1.38,
    width: 1.92,
    price: 79.001,
    horsePower: 760,
  },
  {
    id: 11,
    logoPath: mustangLogo,
    name: "Mustang",
    model: "Mach-E",
    photo: MachE,
    desktopImage: MachE_front,
    description: desc,
    inside: MachEInside,
    length: 4.71,
    height: 1.62,
    width: 1.88,
    price: 46.001,
    horsePower: 346,
  },
  {
    id: 12,
    logoPath: renaultLogo,
    name: "Renault",
    model: "Austral",
    photo: Austral,
    desktopImage: Austral_front,
    description: desc,
    inside: AustralInside,
    length: 4.51,
    height: 1.62,
    width: 1.84,
    price: 39.001,
    horsePower: 200,
  },
  {
    id: 13,
    logoPath: renaultLogo,
    name: "Renault",
    model: "Clio",
    photo: Clio,
    desktopImage: Clio_front,
    description: desc,
    inside: ClioInside,
    length: 4.05,
    height: 1.44,
    width: 1.79,
    price: 21.001,
    horsePower: 90,
  },
  {
    id: 14,
    logoPath: renaultLogo,
    name: "Renault",
    model: "Mégane",
    photo: Megane,
    desktopImage: Megan_desktop,
    description: desc,
    inside: MeganeInside,
    length: 4.36,
    height: 1.45,
    width: 1.81,
    price: 31.001,
    horsePower: 140,
  },
  {
    id: 15,
    logoPath: teslaLogo,
    name: "Tesla",
    model: "Model 3",
    photo: Model3,
    desktopImage: Model3_front,
    description: desc,
    inside: Model3Inside,
    length: 4.72,
    height: 1.44,
    width: 1.85,
    price: 39.001,
    horsePower: 283,
  },
  {
    id: 16,
    logoPath: teslaLogo,
    name: "Tesla",
    model: "Model S",
    photo: ModelS,
    desktopImage: ModelS_front,
    description: desc,
    inside: ModelSInside,
    length: 4.97,
    height: 1.45,
    width: 1.96,
    price: 74.001,
    horsePower: 670,
  },
  {
    id: 17,
    logoPath: teslaLogo,
    name: "Tesla",
    model: "Model Y",
    photo: ModelY,
    desktopImage: ModelY_front,
    description: desc,
    inside: ModelYInside,
    length: 4.75,
    height: 1.62,
    width: 1.92,
    price: 46.001,
    horsePower: 384,
  },
];



export default cars;
