import audiLogo from "../Image/Audi/AudiLogo.png";
import A1 from "../Image/Audi/AudiA1.png";
import A5 from "../Image/Audi/AudiA5.jpeg"
import RS3 from "../Image/Audi/AudiRS3.png"
import lamborghiniLogo from "../Image/Lamborghini/LamborghiniLogo.png";
import  Aventador from "../Image/Lamborghini/LamborghiniAventador.png"
import Huracan from "../Image/Lamborghini/LamborghiniHuracan.png"
import STO from "../Image/Lamborghini/LamborghiniSTO.jpeg"
import mercedesLogo from "../Image/Mercedes/MercedesLogo.png";
import GT from "../Image/Mercedes/MercedesAmgGt.png"
import GLC from "../Image/Mercedes/MercedesGLC.png"
import AClass from "../Image/Mercedes/MercedesClasseA.png"
import mustangLogo from "../Image/Mustang/MustangLogo.png";
import GT500 from "../Image/Mustang/MustangGT500.png";
import MachE from "../Image/Mustang/MustangMachE.png";
import renaultLogo from "../Image/Renault/RenaultLogo.png";
import Austral from "../Image/Renault/RenaultAustral.png"
import Clio from "../Image/Renault/RenaultClio.jpeg"
import Megane from "../Image/Renault/RenaultMeganeE-tech.png"
import teslaLogo from "../Image/Tesla/TeslaLogo1.png";
import Model3 from "../Image/Tesla/TeslaModel3.png"
import ModelS from "../Image/Tesla/TeslaModelS.png"
import ModelY from "../Image/Tesla/TeslaModelY.jpeg"

const cars = [
  {
    id: 1,
    logoPath: audiLogo,
    name: "Audi",
    model: "A1",
    photo: A1,
    length: 4.029, // in mm
    height: 1.409, // in mm
    width: 1.740,  // in mm
    price: 22.000, // in USD
  },
  {
    id: 2,
    logoPath: audiLogo,
    name: "Audi",
    model: "A5",
    photo: A5,
    length: 4.697, // in mm
    height: 1.371, // in mm
    width: 1.846,  // in mm
    price: 46.000, // in USD
  },
  {
    id: 3,
    logoPath: audiLogo,
    name: "Audi",
    model: "RS3",
    photo: RS3,
    length: 4.389, // in mm
    height: 1.414, // in mm
    width: 1.851,  // in mm
    price: 61.000, // in USD
  },
  {
    id: 4,
    logoPath: lamborghiniLogo,
    name: "Lamborghini",
    model: "Aventador",
    photo: Aventador,
    length: 4.868, // in mm
    height: 1.136, // in mm
    width: 2.030,  // in mm (excluding mirrors)
    price: 507.000, // in USD
  },
  {
    id: 5,
    logoPath: lamborghiniLogo,
    name: "Lamborghini",
    model: "Huracán",
    photo: Huracan,
    length: 4.520, // in mm
    height: 1.165, // in mm
    width: 1.933,  // in mm
    price: 249.000, // in USD
  },
  {
    id: 6,
    logoPath: lamborghiniLogo,
    name: "Lamborghini",
    model: "Huracán STO",
    photo: STO,
    length: 4.549, // in mm
    height: 1.220, // in mm
    width: 1.945,  // in mm
    price: 327.000, // in USD
  },
  {
    id: 7,
    logoPath: mercedesLogo,
    name: "Mercedes-Benz",
    model: "GT",
    photo: GT,
    length: 4.73, // in meters
    height: 1.28, // in meters
    width: 1.94,  // in meters
    price: 97000, // in USD
  },
  {
    id: 8,
    logoPath: mercedesLogo,
    name: "Mercedes-Benz",
    model: "GLC",
    photo: GLC,
    length: 4.72, // in meters
    height: 1.64, // in meters
    width: 1.89,  // in meters
    price: 48000, // in USD
  },
  {
    id: 9,
    logoPath: mercedesLogo,
    name: "Mercedes-Benz",
    model: "A-Class",
    photo: AClass,
    length: 4.42, // in meters
    height: 1.44, // in meters
    width: 1.80,  // in meters
    price: 37000, // in USD
  },
  {
    id: 10,
    logoPath: mustangLogo,
    name: "Ford",
    model: "Mustang GT500",
    photo: GT500,
    length: 4.83, // in meters
    height: 1.38, // in meters
    width: 1.92,  // in meters
    price: 79000, // in USD
  },
  {
    id: 11,
    logoPath: mustangLogo,
    name: "Ford",
    model: "Mustang Mach-E",
    photo: MachE,
    length: 4.71, // in meters
    height: 1.62, // in meters
    width: 1.88,  // in meters
    price: 46000, // in USD
  },
  {
    id: 12,
    logoPath: renaultLogo,
    name: "Renault",
    model: "Austral",
    photo: Austral,
    length: 4.51, // in meters
    height: 1.62, // in meters
    width: 1.84,  // in meters
    price: 39000, // in USD
  },
  {
    id: 13,
    logoPath: renaultLogo,
    name: "Renault",
    model: "Clio",
    photo: Clio,
    length: 4.05, // in meters
    height: 1.44, // in meters
    width: 1.79,  // in meters
    price: 21000, // in USD
  },
  {
    id: 14,
    logoPath: renaultLogo,
    name: "Renault",
    model: "Mégane",
    photo: Megane,
    length: 4.36, // in meters
    height: 1.45, // in meters
    width: 1.81,  // in meters
    price: 31000, // in USD
  },
  {
    id: 15,
    logoPath: teslaLogo,
    name: "Tesla",
    model: "Model 3",
    photo: Model3,
    length: 4.72, // in meters
    height: 1.44, // in meters
    width: 1.85,  // in meters
    price: 39000, // in USD
  },
  {
    id: 16,
    logoPath: teslaLogo,
    name: "Tesla",
    model: "Model S",
    photo: ModelS,
    length: 4.97, // in meters
    height: 1.45, // in meters
    width: 1.96,  // in meters
    price: 74000, // in USD
  },
  {
    id: 17,
    logoPath: teslaLogo,
    name: "Tesla",
    model: "Model Y",
    photo: ModelY,
    length: 4.75, // in meters
    height: 1.62, // in meters
    width: 1.92,  // in meters
    price: 46000, // in USD
  },
];


export default cars;
