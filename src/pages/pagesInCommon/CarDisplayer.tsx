import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import type { Car } from "../../types/car";
import useAuthStore from "../../zustand/usersManager";
import { useState } from "react";

export default function CarDisplayer() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const mail = user?.email;
  const [isOpen, setIsOpen] = useState(false);

  const car: Car = location?.state?.car || {};

  const text = `The new ${car.name} ${car.model} offers an unmatched driving experience that blends
            power, precision, and comfort. Its responsive handling and smooth
            acceleration make every journey feel effortless and engaging.
            Whether cruising down highways or navigating city streets, the ride
            remains quiet and refined. Behind the wheel, you're not just driving
            — you're enjoying every moment of the road.`;

  const checkUser = () => {
    if (mail === null || mail === undefined) {
      setIsOpen(true);
    } else {
      navigate("/catalog/carDisplayer/customize", { state: { car: car } });
    }
  };

  return (
    <>
      {isOpen ? (
        <div className=" flex fixed inset-0 z-50  items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="relative bg-white w-2/3 md:w-2/6 p-6 rounded-lg shadow-lg z-50 flex flex-col justify-between">
            <div>
              <h1 className="font-bold text-lg">
                You can't customize the car if you are not logged in.
              </h1>
            </div>

            <div className="flex flex-row justify-between mt-6">
              <button
                className="cursor-pointer h-10 w-1/3 bg-blue-700 hover:bg-blue-900 rounded text-white"
                onClick={() => setIsOpen(false)}
              >
                <p className="text-xl text-center">Back</p>
              </button>

              <button
                className="cursor-pointer h-10 w-1/3 bg-green-500 hover:bg-green-700 rounded text-white"
                onClick={() => navigate("/login")}
              >
                <p className="text-xl text-center">Login</p>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="flex flex-col h-screen bg-white">
        <Header />

        <div className="relative flex flex-col h-7/8 w-full">
          <div className="flex flex-col h-full w-full justify-center items-center py-2">
            <img
              className="h-full w-full object-cover"
              src={car.desktopImage}
              alt={`${car.name} ${car.model}`}
            />
          </div>

          <div className="absolute bottom-6 left-6 flex flex-col items-start gap-4 max-sm:bottom-3 max-sm:left-3 max-sm:top-0 ">
            <div className="flex flex-row flex-wrap gap-2 items-center">
              <p className="font-bold text-7xl text-white max-sm:text-3xl max-md:text-4xl max-sm:text-black max-sm:invisible">
                {car.name}
              </p>
              <p className="font-bold text-7xl text-white max-sm:text-3xl max-md:text-4xl max-sm:text-black max-sm:invisible">
                {car.model}
              </p>
            </div>

            <button
              className="w-48 h-12 px-4 bg-green-400 rounded-2xl hover:text-white cursor-pointer flex items-center justify-center max-sm:w-40 max-sm:h-10"
              onClick={() => checkUser()}
            >
              <p className="text-2xl font-tesla max-md:text-lg">Configure</p>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full px-4 py-8 text-center">
          <h1 className="text-5xl font-tesla max-sm:text-2xl">
            Driving Pleasure
          </h1>
          <p className="pt-4 text-xl text-gray-500 max-w-3xl">{text}</p>
        </div>

        <div className="flex flex-col items-center px-4 py-8">
          <h1 className="text-2xl mb-6">Technical Information</h1>

          <div className="w-full max-w-4xl aspect-video">
            <img
              src={car.photo}
              className="w-full h-full object-contain"
              alt={`${car.name} technical view`}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center w-full max-w-4xl">
            <div>
              <h2 className="text-sm text-gray-500">Horsepower</h2>
              <p className="text-3xl">{car.horsePower} CV</p>
            </div>
            <div>
              <h2 className="text-sm text-gray-500">Width</h2>
              <p className="text-3xl">{car.width} m</p>
            </div>
            <div>
              <h2 className="text-sm text-gray-500">Height</h2>
              <p className="text-3xl">{car.height} m</p>
            </div>
            <div>
              <h2 className="text-sm text-gray-500">Length</h2>
              <p className="text-3xl">{car.length} m</p>
            </div>
            <div>
              <h2 className="text-sm text-gray-500">Proce</h2>
              <p className="text-3xl">{car.price} $</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full pt-10 px-4 max-xl:flex-col items-center">
          <div className="flex justify-center w-1/2 max-xl:w-full py-10">
            <img
              src={car.inside}
              alt="Car interior"
              className="w-full max-w-[600px] h-auto object-cover"
            />
          </div>
          <div className="flex flex-col w-1/2 px-20 max-xl:w-full max-xl:px-4">
            <h1 className="text-5xl font-serif">An unbelievable quality</h1>
            <p className="py-10 text-xl text-gray-400">
              The interior of this car is a true testament to craftsmanship and
              refined taste. From the moment you step inside, you're enveloped
              in a cabin that radiates sophistication and comfort. Premium
              materials like soft-touch leather, brushed aluminum, and real wood
              accents are seamlessly integrated throughout the space. Every
              stitch, panel, and surface feels intentional and meticulously
              designed. The seats offer exceptional support with ergonomic
              contours, ideal for long drives or daily commutes. Ambient
              lighting adds a calming glow, enhancing the cabin's upscale
              atmosphere. Advanced infotainment systems are intuitively
              positioned, blending cutting-edge technology with elegant
              aesthetics for those who appreciate the finest in automotive
              design.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center px-50 py-20 text-sm gap-4 text-gray-400 max-lg:px-20 font-serif bg-black">
          <p>
            sempio rappresentativo di finanziamento: Model Y Long Range a
            trazione posteriore. Prezzo: 50.970 €. Anticipo: 10.250 €. Durata:
            60 mesi. Importo totale del credito di 42.738 € da restituire in 60
            rate mensili da 399 € ciascuna e maxi rata finale di 21.917 €, TAN
            2,99% (tasso fisso), TAEG 3,06% (tasso fisso). Importo totale dovuto
            dal consumatore: 45.473 €. Spese comprese nel costo totale del
            credito: interessi 4.735 €. Spese di istruttoria: 0 €. Incasso rata:
            0 € cad. a mezzo SDD, produzione e invio lettera conferma contratto.
            Comunicazione periodica annuale: 0 € cad.
          </p>
          <p>
            Esempio rappresentativo di finanziamento: Model 3. Prezzo: 40.970 €.
            Anticipo: 12.000 €. Durata: 36 mesi. Importo totale del credito di
            28.988 € da restituire in 36 rate mensili da 299 € ciascuna e maxi
            rata finale di 19.256 €, TAN 0,99% (tasso fisso), TAEG 1,05% (tasso
            fisso). Importo totale dovuto dal consumatore: 29.727 €. Spese
            comprese nel costo totale del credito: interessi 739 €. Spese di
            istruttoria: 0 €. Incasso rata: 0 € cad. tramite addebito diretto,
            produzione e invio della lettera di conferma del contratto.
            Comunicazione periodica annuale: 0 € cad.
          </p>
          <p>
            Offerta valida per le richieste di finanziamento presentate entro il
            25 settembre 2025, per ordini in consegna entro e non oltre il 30
            settembre 2025. Non cumulabile con altre promozioni. Annuncio
            pubblicitario con finalità promozionale. Condizioni contrattuali ed
            economiche nelle “Informazioni europee di base sul credito ai
            consumatori” presso i concessionari e sul sito Web, sezione
            Trasparenza. Salvo approvazione di Santander Consumer Bank.
          </p>

          <p>
            Il bonus Tesla è valido solo per i veicoli Model 3 ordinati a
            partire dal 30 aprile 2025 e soggetti a consegna fino al 30
            settembre 2025 incluso. Se la consegna non avviene entro questa
            data, il bonus Tesla non verrà applicato all’ordine. Se il giorno di
            consegna viene posticipato per cause imputabili a Tesla, potresti
            avere diritto all’offerta ritirando il veicolo alla prima data
            disponibile. Da questa offerta sono esclusi i veicoli usati
            certificati. Questa offerta è valida per un periodo di tempo
            limitato e può essere annullata in qualsiasi momento. Questa offerta
            non è cumulabile con altre offerte o programmi finanziari, incluso
            il leasing operativo. Il prezzo si intende escluse spese di
            immatricolazione e consegna pari a 980 € e il Contributo PFU pari a
            5,09 €. Il bonus Tesla non è cumulabile con altre offerte, inclusi,
            a titolo esemplificativo ma non esaustivo, tassi di interesse
            agevolati. Questo incentivo è indicato nella fattura del veicolo
            come "bonus referral
          </p>
          <p>
            L'offerta relativa a ricariche Supercharger illimitate gratuite e
            Premium Connectivity è valida solo per i nuovi ordini personalizzati
            e per i veicoli Model S e Model X preconfigurati ordinati dopo il 6
            febbraio 2025. Questa offerta è cumulabile con altre offerte
            finanziarie. Questa offerta è valida per i veicoli impiegati per i
            test drive e in esposizione. Da questa offerta sono esclusi i
            veicoli usati certificati. Questa offerta è valida per un periodo di
            tempo limitato e può essere annullata in qualsiasi momento. Tesla
            non garantisce la disponibilità del veicolo entro il termine
            dell'offerta. Il vantaggio di Premium Connectivity e delle ricariche
            gratuite alle stazioni Supercharger è collegato al VIN del veicolo e
            al primo conducente al quale è stato consegnato il veicolo. Non è
            possibile trasferire Premium Connectivity e le ricariche gratuite
            alle stazioni Supercharger a un altro veicolo o a un'altra persona
            in caso di passaggio di proprietà. Le ricariche gratuite alle
            stazioni Supercharger possono essere utilizzate solo presso le
            stazioni Supercharger di proprietà di Tesla. Negli ordini aziendali
            deve essere specificato il nome del conducente che riceve la
            consegna affinché tale conducente possa approfittare del vantaggio.
            Non è possibile trasferire, riscattare o scambiare con crediti o
            contanti Premium Connectivity e le ricariche gratuite alle stazioni
            Supercharger. Coloro che approfittano di questa promozione sono
            comunque soggetti ad addebiti o "tariffe di occupazione"{" "}
          </p>
        </div>
      </div>
    </>
  );
}
