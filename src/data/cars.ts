import audiLogo from "../Image/Audi/AudiLogo.png";
import A1 from "../Image/Audi/AudiA1.png";
import A1inside from "../Image/Audi/A1Collage.jpeg";
import A5 from "../Image/Audi/AudiA5.jpeg";
import A5inside from "../Image/Audi/A5Collage.jpeg";
import RS3 from "../Image/Audi/AudiRS3.png";
import RS3inside from "../Image/Audi/Rs3Collage.jpeg";

import lamborghiniLogo from "../Image/Lamborghini/LamborghiniLogo.png";
import  Aventador from "../Image/Lamborghini/LamborghiniAventador.png";
import Huracan from "../Image/Lamborghini/LamborghiniHuracan.png";
import STO from "../Image/Lamborghini/LamborghiniSTO.jpeg";
import  AventadorInside from "../Image/Lamborghini/AventadorCollage.jpeg";
import HuracanInside from "../Image/Lamborghini/HuracanCollage.jpeg";
import STOInside from "../Image/Lamborghini/StoCollage.jpeg";


import mercedesLogo from "../Image/Mercedes/MercedesLogo.png";
import GT from "../Image/Mercedes/MercedesAmgGt.png";
import GLC from "../Image/Mercedes/MercedesGLC.png";
import AClass from "../Image/Mercedes/MercedesClasseA.png";
import GTInside from "../Image/Mercedes/AmgGtCollage.jpeg";
import GLCInside from "../Image/Mercedes/GlcCollage.jpeg";
import AClassInside from "../Image/Mercedes/Acollage.jpeg";


import mustangLogo from "../Image/Mustang/MustangLogo.png";
import GT500 from "../Image/Mustang/MustangGT500.png";
import MachE from "../Image/Mustang/MustangMachE.png";
import GT500Inside from "../Image/Mustang/Gt500Collage.jpeg";
import MachEInside from "../Image/Mustang/MachECollage.jpeg";


import renaultLogo from "../Image/Renault/RenaultLogo.png";
import Austral from "../Image/Renault/RenaultAustral.png"
import Clio from "../Image/Renault/RenaultClio.jpeg";
import Megane from "../Image/Renault/RenaultMeganeE-tech.png"
import AustralInside from "../Image/Renault/AustralCollage.jpeg";
import ClioInside from "../Image/Renault/ClioCollage.jpeg";
import MeganeInside from "../Image/Renault//MeganCollage.jpeg"

import teslaLogo from "../Image/Tesla/TeslaLogo1.png";
import Model3 from "../Image/Tesla/TeslaModel3.png";
import ModelS from "../Image/Tesla/TeslaModelS.png";
import ModelY from "../Image/Tesla/TeslaModelY.jpeg";
import Model3Inside from "../Image/Tesla/3Collage.jpeg";
import ModelSInside from "../Image/Tesla/SCollage.jpeg";
import ModelYInside from "../Image/Tesla/TeslaModelY.jpeg";

const desc="The Vortex X-One is a revolutionary supercar engineered to embody the best of every vehicle class. With the sleek aerodynamics of a Ferrari, the all-terrain adaptability of a Land Rover, and the tech sophistication of a Tesla, it’s the ultimate automotive hybrid. Powered by a twin-turbo V10 engine paired with an electric dual-motor system, it delivers both raw combustion power and silent electric finesse. Inside, the spacious cabin is configurable—luxury sedan comfort in front, foldable rear seats like an SUV, and AI-assisted controls drawn from cutting-edge autonomous systems. Whether cruising city streets, racing on a track, or navigating rugged terrain, the Vortex X-One adapts instantly—making it a true shape-shifter in the automotive world. Advanced air suspension, bulletproof carbon-fiber chassis, and smart energy regeneration ensure it’s not just fast—but intelligent and durable.";

const cars = [
  {
    id: 1,
    logoPath: audiLogo,
    name: "Audi",
    model: "A1",
    photo: A1,
    description:desc,
    inside: A1inside,
    length: 4.029, // in mm
    height: 1.409, // in mm
    width: 1.740,  // in mm
    price: 22.001, // in USD
  },
  {
    id: 2,
    logoPath: audiLogo,
    name: "Audi",
    model: "A5",
    photo: A5,
        description:desc,
    inside:A5inside,
    length: 4.697, // in mm
    height: 1.371, // in mm
    width: 1.846,  // in mm
    price: 46.001, // in USD
  },
  {
    id: 3,
    logoPath: audiLogo,
    name: "Audi",
    model: "RS3",
    photo: RS3,
    description:desc,
    inside: RS3inside,
    length: 4.389, // in mm
    height: 1.414, // in mm
    width: 1.851,  // in mm
    price: 61.001, // in USD
  },
  {
    id: 4,
    logoPath: lamborghiniLogo,
    name: "Lamborghini",
    model: "Aventador",
    photo: Aventador,
        description:desc,
    inside: AventadorInside,
    length: 4.868, // in mm
    height: 1.136, // in mm
    width: 2.030,  // in mm (excluding mirrors)
    price: 507.001, // in USD
  },
  {
    id: 5,
    logoPath: lamborghiniLogo,
    name: "Lamborghini",
    model: "Huracán",
    photo: Huracan,
        description:desc,
    inside:HuracanInside,
    length: 4.520, // in mm
    height: 1.165, // in mm
    width: 1.933,  // in mm
    price: 249.001, // in USD
  },
  {
    id: 6,
    logoPath: lamborghiniLogo,
    name: "Lamborghini",
    model: "STO",
    photo: STO,
        description:desc,
    inside:STOInside,
    length: 4.549, // in mm
    height: 1.220, // in mm
    width: 1.945,  // in mm
    price: 327.001, // in USD
  },
  {
    id: 7,
    logoPath: mercedesLogo,
    name: "Mercedes",
    model: "GT",
    photo: GT,
        description:desc,
    inside:GTInside,
    length: 4.73, // in meters
    height: 1.28, // in meters
    width: 1.94,  // in meters
    price: 97001, // in USD
  },
  {
    id: 8,
    logoPath: mercedesLogo,
    name: "Mercedes",
    model: "GLC",
    photo: GLC,
        description:desc,
        inside:GLCInside,

    length: 4.72, // in meters
    height: 1.64, // in meters
    width: 1.89,  // in meters
    price: 48001, // in USD
  },
  {
    id: 9,
    logoPath: mercedesLogo,
    name: "Mercedes",
    model: "A-Class",
    photo: AClass,
        description:desc,
    inside:AClassInside,

    length: 4.42, // in meters
    height: 1.44, // in meters
    width: 1.80,  // in meters
    price: 37001, // in USD
  },
  {
    id: 10,
    logoPath: mustangLogo,
    name: "Mustang",
    model: "GT500",
    photo: GT500,
        description:desc,
    inside:GT500Inside,

    length: 4.83, // in meters
    height: 1.38, // in meters
    width: 1.92,  // in meters
    price: 79001, // in USD
  },
  {
    id: 11,
    logoPath: mustangLogo,
    name: "Mustang",
    model: "Mach-E",
    photo: MachE,
        description:desc,
    inside:MachEInside,

    length: 4.71, // in meters
    height: 1.62, // in meters
    width: 1.88,  // in meters
    price: 46001, // in USD
  },
  {
    id: 12,
    logoPath: renaultLogo,
    name: "Renault",
    model: "Austral",
    photo: Austral,
        description:desc,
    inside:AustralInside,

    length: 4.51, // in meters
    height: 1.62, // in meters
    width: 1.84,  // in meters
    price: 39001, // in USD
  },
  {
    id: 13,
    logoPath: renaultLogo,
    name: "Renault",
    model: "Clio",
    photo: Clio,
        description:desc,
    inside:ClioInside,

    length: 4.05, // in meters
    height: 1.44, // in meters
    width: 1.79,  // in meters
    price: 21001, // in USD
  },
  {
    id: 14,
    logoPath: renaultLogo,
    name: "Renault",
    model: "Mégane",
    photo: Megane,
        description:desc,
    inside:MeganeInside,

    length: 4.36, // in meters
    height: 1.45, // in meters
    width: 1.81,  // in meters
    price: 31001, // in USD
  },
  {
    id: 15,
    logoPath: teslaLogo,
    name: "Tesla",
    model: "Model 3",
    photo: Model3,
        description:desc,
    inside:Model3Inside,

    length: 4.72, // in meters
    height: 1.44, // in meters
    width: 1.85,  // in meters
    price: 39001, // in USD
  },
  {
    id: 16,
    logoPath: teslaLogo,
    name: "Tesla",
    model: "Model S",
    photo: ModelS,
        description:desc,
    inside:ModelSInside,

    length: 4.97, // in meters
    height: 1.45, // in meters
    width: 1.96,  // in meters
    price: 74001, // in USD
  },
  {
    id: 17,
    logoPath: teslaLogo,
    name: "Tesla",
    model: "Model Y",
    photo: ModelY,
        description:desc,
    inside:ModelYInside,

    length: 4.75, // in meters
    height: 1.62, // in meters
    width: 1.92,  // in meters
    price: 46001, // in USD
  },
];


export default cars;
