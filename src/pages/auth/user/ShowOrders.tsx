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
    <div className="flex flex-col min-h-screen bg-blue-900 overflow-hidden">
      <Header />

      <div className="flex flex-col flex-1 overflow-y-auto p-4 space-y-6">
        {data.map((userOrders: UsersOrders, userIndex: number) => (
          <div key={userIndex} className="space-y-4">
            {userOrders.orders.map((order: Orders, orderIndex: number) => (
              <div
                key={orderIndex}
                className="flex flex-col md:flex-row rounded-lg overflow-hidden bg-white gap-4 shadow-md"
              >
                <div className="w-full md:w-1/3 h-48 md:h-auto">
                  <img
                    src={order.photo}
                    alt="Order"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col w-full p-4 text-black space-y-2">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <div className="flex flex-wrap gap-2 text-2xl sm:text-3xl font-bold">
                      <p>{order.brand}</p>
                      <p>{order.model}</p>
                    </div>
                    <button
                      className={`flex h-full w-1/4 bg-red-500 items-center justify-center rounded-sm px-2  hover:bg-red-700 ${
                        order.isReady ? "cursor-pointer " : "cursor-not-allowed"
                      }`}
                      disabled={!order.isReady}
                      onClick={() => deleteOrder(order.idOrder)}
                    >
                      <p className="text-xl text-white font-bold">Deny Order</p>
                    </button>
                  </div>

                  <p className="text-base sm:text-lg lg:text-xl">
                    <span className="font-semibold">Order ID:</span>{" "}
                    {order.idOrder}
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl">
                    <span className="font-semibold">Color:</span>{" "}
                    {order.optional.color}
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl">
                    <span className="font-semibold">Seat Color:</span>{" "}
                    {order.optional.seat}
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl">
                    <span className="font-semibold">Price:</span> {order.price}{" "}
                    $
                  </p>

                  <p
                    className={`pt-2 ${
                      order.isReady
                        ? "text-blue-900 font-bold text-xl sm:text-2xl"
                        : "text-black font-semibold text-base"
                    }`}
                  >
                    {order.isReady
                      ? "Your car is ready to be delivered!"
                      : "Order not ready. The delete button won't work until the car is delivered."}
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
