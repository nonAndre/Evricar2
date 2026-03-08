import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import tesla from "../../assets/tesla.avif";
import taycan from "../../assets/taycan-desktop_5-4.jpg";
import lambo from "../../assets/lambo.jpg";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-white">
      <Header />

      <div className="relative w-full h-7/8 bg-white ">
        <img
          src={tesla}
          alt="Car Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center gap-2 px-4 pt-20">
          <div className="flex flex-col gap-2 justify-center items-center max-lg:flex-row  max-lg:w-full ">
            <p className="font-bold text-5xl text-white max-sm:text-3xl max-md:text-md max-sm:hidden ">
              Evri-day
            </p>
            <p className="font-bold text-5xl text-white max-sm:text-3xl max-sm:hidden">
              Evri-where
            </p>
            <p className="font-bold text-5xl text-white max-sm:text-3xl">
              Evricar
            </p>
          </div>

          <button
            className="flex cursor-pointer w-1/7 h-1/12 max-xl:w-2/7 max-lg:w-3/7  max-md:w-3/7 max-sm:w-80 max-sm:h-10 px-4 bg-green-400 items-center justify-center rounded-2xl hover:text-white cursor-"
            onClick={() => navigate("/catalog")}
          >
            <p className="flex text-xl font-tesla max-md:text-md ">
              Explore the catalog
            </p>
          </button>
        </div>
      </div>
      <div className="flex flex-col bg-white py-8 px-4 w-full space-y-8">
        <div className="flex flex-row w-full max-md:flex-col">
          <img
            src={taycan}
            alt="Taycan"
            className="rounded object-fill w-150 max-lg:w-full max-md:w-full max-[104rem]:w-200 "
          />
          <div className="flex flex-col w-full px-10 max-sm:pt-5 max-sm:px-0">
            <h1 className="text-5xl font-tesla max-sm:text-2xl pb-5 max-xl:text-3xl pt-5">
              A LUXURY EXPERIENCE
            </h1>
            <p className="text-lg text-gray-500">
              EVRICAR offers an exceptional selection of fully electric luxury
              vehicles, carefully curated for style, performance, and elegance.¹
              Each model is handpicked from the world’s most prestigious brands
              and undergoes rigorous quality inspections.¹ From high-performance
              SUVs to sophisticated sedans, our lineup combines cutting-edge
              technology with refined design. Choosing EVRICAR means choosing
              expert service, trusted quality, and a commitment to a
              sustainable, luxurious driving experience.
            </p>
          </div>
        </div>

        <div className="flex flex-row w-full max-md:flex-col ">
          <div className="flex flex-col w-full  max-sm:pt-5 max-sm:pb-4">
            <h1 className="text-5xl font-tesla max-sm:text-2xl pb-5 max-xl:text-3xl pt-4">
              GREAT SELECTION OF CARS
            </h1>
            <p className="text-lg text-gray-500">
              EVRICAR offers an exceptional selection luxury vehicles, carefully
              curated for style, performance, and elegance. Each car is
              handpicked from top global brands and undergoes strict quality
              checks.¹ From sporty SUVs to refined sedans, EVRICAR provides only
              the best for those seeking excellence, innovation, and
              sustainability in tomorrow's mobility.
            </p>
          </div>
          <img
            src={lambo}
            alt="Lamborghini"
            className="rounded object-fill max-lg:w-full max-md:w-full px-10 h-150 max-sm:h-90"
          />
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
