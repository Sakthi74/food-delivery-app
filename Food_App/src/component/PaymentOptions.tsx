import React, { useEffect, useState } from "react";

interface Payments {
  id: number;
  name: string;
  image: string;
}

function PaymentOptions() {
  const [payments, setPayments] = useState<Payments[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/paymentMethods")
      .then((res) => res.json())
      .then((res) => setPayments(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="w-full overflow-x-auto px-4">
        <div className="flex gap-2 lg:gap-6">
          {payments.map((payment) => (
            <div
              key={payment.id}
              className="flex-shrink-0 flex cursor-pointer flex-col items-center
                   w-20 sm:w-24 md:w-28 lg:w-32"
            >
              <img
                src={payment.image}
                alt={payment.name}
                className="w-12 h-12
                     sm:w-16 sm:h-16
                     md:w-20 md:h-20
                     lg:w-24 lg:h-24
                     object-contain"
              />

              <p
                className="mt-2
                     text-xs
                     sm:text-sm
                     md:text-base
                     text-center"
              >
                {payment.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PaymentOptions;
