import { db } from "../../../Firebase/firebaseConfig";
import {
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import Header from "../../../components/Header";
import useAuthStore from "../../../zustand/usersManager";
import { useQuery } from "@tanstack/react-query";
import icon from "../../../assets/trash-svgrepo-com.svg";
import type { Orders, UsersOrders } from "../../../types/car";

export default function ShowOrders() {
  const { user } = useAuthStore();

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

  const { data, refetch } = useQuery({
    queryKey: ["archive"],
    queryFn: fetchCars,
  });

  const deleteOrder = async (orderToDelete: string) => {
    try {
      const q = query(
        collection(db, "Archive"),
        where("idUser", "==", user?.uid)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.warn("No document found for this user.");
        return;
      }

      const docRef = querySnapshot.docs[0].ref;
      const docData = querySnapshot.docs[0].data();
      const existingOrders = Array.isArray(docData.orders)
        ? docData.orders
        : [];

      const updatedOrders = existingOrders.filter(
        (car: any) => car.idOrder !== orderToDelete
      );

      await updateDoc(docRef, {
        orders: updatedOrders,
      })
        .then(() => {
          refetch();
        })
        .catch(() => {
          console.error("Error while removing books");
        });

      console.log("Book deleted successfully");
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-blue-900 overflow-hidden">
      <Header />

      <div className="flex flex-col h-full overflow-y-auto p-4 space-y-6">
        {data.map((userOrders: UsersOrders, userIndex: number) => (
          <div key={userIndex} className="space-y-4">
            {userOrders.orders.map((order: Orders, orderIndex: number) => (
              <div
                key={orderIndex}
                className="flex rounded-lg overflow-hidden bg-white gap-4 shadow-md"
              >
                <div className="w-1/4">
                  <img src={order.photo} alt="Order" className="object-cover" />
                </div>

                <div className="flex flex-col w-full  p-4 text-black">
                  <div className="flex w-full h-full  justify-between">
                    <div className="flex flex-row gap-2 text-3xl font-bold pb-3">
                      <p>{order.brand}</p>
                      <p>{order.model}</p>
                    </div>
                    <button
                      disabled={order.isReady === false ? true : false}
                      className="flex justify-center  items-center w-13 h-13 self-center cursor-pointer hover:bg-red-400 rounded-full"
                      onClick={() => deleteOrder(order.idOrder)}
                    >
                      <img src={icon} className="object-cover w-8 h-8"></img>
                    </button>
                  </div>
                  <p className="text-xl pb-3">Order Id : {order.idOrder}</p>

                  <p className="text-xl pb-3">Color: {order.optional.color}</p>
                  <p className="text-xl pb-3">
                    Seat Color: {order.optional.seat}
                  </p>

                  <p className="text-xl pb-3">Price: {order.price} $</p>

                  <p
                    className={` pb-3 ${
                      order.isReady
                        ? "text-blue-900 font-bold text-3xl"
                        : "text-black font-bold text-lg "
                    }`}
                  >
                    {order.isReady === true
                      ? "You're car is ready to be delivered!"
                      : "order not ready , the delete button won't work until the car is delivered"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
