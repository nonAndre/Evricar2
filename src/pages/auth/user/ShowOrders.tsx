import { db } from "../../../Firebase/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import Header from "../../../components/Header";
import useAuthStore from "../../../zustand/usersManager";
import { useQuery } from "@tanstack/react-query";

export default function ShowOrders() {
  const { user } = useAuthStore();
  const userId = user?.uid;

  const fetchCars = async () => {
    let ordini: any = [];
    const q = query(
      collection(db, "Archive"),
      where("idUser", "==", user?.uid)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      ordini.push({ ...doc.data(), id: doc.id });
    });

    return ordini;
  };

  const { data } = useQuery({
    queryKey: ["archive"],
    queryFn: fetchCars,
  });

  return (
    <div className="flex flex-col h-screen bg-blue-900">
      <Header />
    </div>
  );
}
