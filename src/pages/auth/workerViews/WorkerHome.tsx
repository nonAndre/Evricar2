import {
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import Header from "../../../components/Header";
import { db } from "../../../Firebase/firebaseConfig";
import type { Orders, UsersOrders } from "../../../types/car";
import { useEffect, useState } from "react";

export default function WorkerHome() {
  const [data, setData] = useState<UsersOrders[]>([]);
  const [refetch, setRefetch] = useState(true);

  const fetchCars = async () => {
    let ordini: any = [];
    const q = query(collection(db, "Archive"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      ordini.push({
        ...data,
        id: doc.id,
        orders: Array.isArray(data.orders) ? data.orders : [],
      });
    });

    setData(ordini);
  };

  const deleteOrder = async (
    orderToDelete: string,
    userID: string | undefined,
  ) => {
    try {
      const q = query(collection(db, "Archive"), where("idUser", "==", userID));
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
        (car: any) => car.idOrder !== orderToDelete,
      );

      await updateDoc(docRef, { orders: updatedOrders });

      console.log("Order deleted successfully");
      setRefetch(true);
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const setOrderReady = async (
    orderToChange: string,
    userID: string | undefined,
  ) => {
    try {
      const q = query(collection(db, "Archive"), where("idUser", "==", userID));
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

      const updatedOrders = existingOrders.map((order: any) =>
        order.idOrder === orderToChange ? { ...order, isReady: true } : order,
      );

      await updateDoc(docRef, { orders: updatedOrders });

      console.log("Order marked as ready successfully.");
      setRefetch(true);
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  useEffect(() => {
    if (refetch === true) {
      fetchCars();
    }

    setRefetch(false);
  }, [refetch]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-col flex-1 overflow-y-auto p-4 space-y-6">
        {!data ||
        data.length === 0 ||
        data.every((user) => !user.orders || user.orders.length === 0) ? (
          <div className="flex flex-col items-center justify-center flex-1 h-full py-20">
            <svg
              className="w-24 h-24 text-gray-300 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              ></path>
            </svg>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-500">
              No Orders Found
            </h2>
            <p className="text-lg text-gray-400 mt-2 text-center">
              There are currently no orders waiting to be processed.
            </p>
          </div>
        ) : (
          data.map((userOrders: UsersOrders, userIndex: number) => (
            <div key={userIndex} className="space-y-4">
              {Array.isArray(userOrders.orders) &&
                userOrders.orders.map((order: Orders, orderIndex: number) => (
                  <div
                    key={orderIndex}
                    className="flex bg-white rounded-lg overflow-hidden shadow-xl flex-col md:flex-row"
                  >
                    <div className="flex md:w-1/3 h-48 md:h-auto">
                      <img
                        src={order.photo}
                        alt="Order"
                        className="object-contain w-full h-full"
                      />
                    </div>

                    <div className="flex flex-col w-full p-4 text-black space-y-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <div className="text-2xl sm:text-3xl font-bold flex flex-wrap gap-2 pb-2 sm:pb-3">
                          <p>{order.brand}</p>
                          <p>{order.model}</p>
                        </div>
                        <div className="flex gap-4 w-full sm:w-2/6">
                          <button
                            className={`flex h-10 flex-1 items-center justify-center rounded-sm font-bold text-white transition duration-200 ${
                              order.isReady
                                ? "bg-green-300 cursor-not-allowed"
                                : "bg-green-500 hover:bg-green-700 cursor-pointer"
                            }`}
                            onClick={() =>
                              !order.isReady &&
                              setOrderReady(order.idOrder, userOrders.idUser)
                            }
                            disabled={order.isReady}
                          >
                            Confirm Order
                          </button>

                          <button
                            className={`flex h-10 flex-1 items-center justify-center rounded-sm font-bold text-white transition duration-200 ${
                              order.isReady
                                ? "bg-red-300 cursor-not-allowed"
                                : "bg-red-500 hover:bg-red-700 cursor-pointer"
                            }`}
                            onClick={() => {
                              !order.isReady &&
                                deleteOrder(order.idOrder, userOrders.idUser);
                            }}
                            disabled={order.isReady}
                          >
                            Deny Order
                          </button>
                        </div>
                      </div>

                      <p className="text-lg sm:text-xl">
                        <strong>Order ID:</strong> {order.idOrder}
                      </p>
                      <p className="text-lg sm:text-xl">
                        <strong>Ordered by:</strong> {userOrders.userName}
                      </p>
                      <p className="text-lg sm:text-xl">
                        <strong>User ID:</strong> {userOrders.idUser}
                      </p>
                      <p className="text-lg sm:text-xl">
                        <strong>Color:</strong> {order.optional.color}
                      </p>
                      <p className="text-lg sm:text-xl">
                        <strong>Seat Color:</strong> {order.optional.seat}
                      </p>
                      <p className="text-lg sm:text-xl">
                        <strong>Price:</strong> {order.price} $
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
