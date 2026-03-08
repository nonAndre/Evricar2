import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import cars from "../../data/cars";
import { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FaChevronDown } from "react-icons/fa";

export default function CatalogDisplayer() {
  const navigate = useNavigate();
  const brands = ["Show All", ...new Set(cars.map((car) => car.name))];
  const [brandToDisplay, setBrandToDisplay] = useState("Show All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredCars = cars.filter((car) => {
    const brandMatches =
      brandToDisplay === "Show All" || car.name === brandToDisplay;

    const minOk = minPrice === "" || car.price >= parseFloat(minPrice);
    const maxOk = maxPrice === "" || car.price <= parseFloat(maxPrice);

    console.log(parseFloat(minPrice));
    console.log(parseFloat(maxPrice));

    return brandMatches && minOk && maxOk;
  });

  const handleBrandSelect = (brand: string) => {
    setBrandToDisplay(brand);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <div className="flex flex-col flex-grow p-6">
        <div className="flex flex-row gap-10 ">
          <div>
            <h1 className="text-2xl pb-3">Choose your car</h1>
            <div className="w-full max-w-xs mb-6 cursor-pointer">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger className="flex items-center justify-between w-full px-4 py-2 text-lg font-medium bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100">
                  {brandToDisplay}
                  <FaChevronDown />
                </DropdownMenu.Trigger>

                <DropdownMenu.Content
                  className="bg-white border border-gray-200 rounded-lg shadow-lg p-2 mt-2 z-50"
                  align="start"
                >
                  {brands.map((brand) => (
                    <DropdownMenu.Item
                      key={brand}
                      onSelect={() => handleBrandSelect(brand)}
                      className="px-3 py-2 rounded-md text-sm hover:bg-gray-100 cursor-pointer"
                    >
                      {brand}
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </div>
          </div>
          <div className="flex-col justify-center items-center">
            <h1 className="text-2xl pb-3">Set a price range</h1>
            <div className="flex flex-row gap-3 items-center max-sm:flex-col ">
              <input
                placeholder="min price"
                className="w-3/10 border-2 border-gray-300 text-2xl rounded-2xl px-4 max-sm:w-full"
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <input
                placeholder="max price"
                className="w-3/10 border-2 border-gray-300 text-2xl rounded-2xl px-4 max-sm:w-full"
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCars.map((car) => (
            <button
              key={car.id}
              onClick={() =>
                navigate("/catalog/carDisplayer", { state: { car: car } })
              }
              className="bg-white p-4 rounded-2xl border border-green-400 hover:shadow-md hover:bg-gray-200 transition-all duration-200 flex flex-col items-center text-center cursor-pointer shadow-xl"
            >
              <img
                src={car.photo}
                alt={`${car.name} ${car.model}`}
                className="h-32 object-contain mb-4"
              />
              <div className="flex flex-row gap-2 justify-center items-center">
                <div className="text-lg font-semibold">{car.name}</div>
                <div className="text-lg font-semibold">{car.model}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center px-50 py-20 text-sm gap-4 text-gray-400 max-lg:px-20 font-serif bg-black">
        <p>
          sempio rappresentativo di finanziamento: Model Y Long Range a trazione
          posteriore. Prezzo: 50.970 €. Anticipo: 10.250 €. Durata: 60 mesi.
          Importo totale del credito di 42.738 € da restituire in 60 rate
          mensili da 399 € ciascuna e maxi rata finale di 21.917 €, TAN 2,99%
          (tasso fisso), TAEG 3,06% (tasso fisso). Importo totale dovuto dal
          consumatore: 45.473 €. Spese comprese nel costo totale del credito:
          interessi 4.735 €. Spese di istruttoria: 0 €. Incasso rata: 0 € cad. a
          mezzo SDD, produzione e invio lettera conferma contratto.
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
          Il bonus Tesla è valido solo per i veicoli Model 3 ordinati a partire
          dal 30 aprile 2025 e soggetti a consegna fino al 30 settembre 2025
          incluso. Se la consegna non avviene entro questa data, il bonus Tesla
          non verrà applicato all’ordine. Se il giorno di consegna viene
          posticipato per cause imputabili a Tesla, potresti avere diritto
          all’offerta ritirando il veicolo alla prima data disponibile. Da
          questa offerta sono esclusi i veicoli usati certificati. Questa
          offerta è valida per un periodo di tempo limitato e può essere
          annullata in qualsiasi momento. Questa offerta non è cumulabile con
          altre offerte o programmi finanziari, incluso il leasing operativo. Il
          prezzo si intende escluse spese di immatricolazione e consegna pari a
          980 € e il Contributo PFU pari a 5,09 €. Il bonus Tesla non è
          cumulabile con altre offerte, inclusi, a titolo esemplificativo ma non
          esaustivo, tassi di interesse agevolati. Questo incentivo è indicato
          nella fattura del veicolo come "bonus referral
        </p>
        <p>
          L'offerta relativa a ricariche Supercharger illimitate gratuite e
          Premium Connectivity è valida solo per i nuovi ordini personalizzati e
          per i veicoli Model S e Model X preconfigurati ordinati dopo il 6
          febbraio 2025. Questa offerta è cumulabile con altre offerte
          finanziarie. Questa offerta è valida per i veicoli impiegati per i
          test drive e in esposizione. Da questa offerta sono esclusi i veicoli
          usati certificati. Questa offerta è valida per un periodo di tempo
          limitato e può essere annullata in qualsiasi momento. Tesla non
          garantisce la disponibilità del veicolo entro il termine dell'offerta.
          Il vantaggio di Premium Connectivity e delle ricariche gratuite alle
          stazioni Supercharger è collegato al VIN del veicolo e al primo
          conducente al quale è stato consegnato il veicolo. Non è possibile
          trasferire Premium Connectivity e le ricariche gratuite alle stazioni
          Supercharger a un altro veicolo o a un'altra persona in caso di
          passaggio di proprietà. Le ricariche gratuite alle stazioni
          Supercharger possono essere utilizzate solo presso le stazioni
          Supercharger di proprietà di Tesla. Negli ordini aziendali deve essere
          specificato il nome del conducente che riceve la consegna affinché
          tale conducente possa approfittare del vantaggio. Non è possibile
          trasferire, riscattare o scambiare con crediti o contanti Premium
          Connectivity e le ricariche gratuite alle stazioni Supercharger.
          Coloro che approfittano di questa promozione sono comunque soggetti ad
          addebiti o "tariffe di occupazione"{" "}
        </p>
      </div>
    </div>
  );
}
