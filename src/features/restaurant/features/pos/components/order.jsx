import { OrderItemModel, OrderModel } from "../models";
import OrderHeader from "../components/order_header";
import OrderFooter from "../components/order_footer";
import OrderBody from "../components/order_body";

export default function Order({ order }) {
  var sampleOrder = new OrderModel({
    id: "Q8FS7",
    orderedAt: new Date(),
    orderedBy: "Yohannes T.",
    status: "Pending",
    balance: 1200,
    items: [
      new OrderItemModel({
        itemName: "chicken stew",
        itemId: "fea22129e9812bcc2",
        quantity: 3,
        unitPrice: 450,
        accompanimentName: "Chapati",
        accompanimentId: "ae89798cd9879",
      }),
    ],
  });

  return (
    <>
      <OrderHeader
        id={sampleOrder.id}
        orderedAt={sampleOrder.orderedAt.toISOString()}
        orderedBy={sampleOrder.orderedBy}
        status={sampleOrder.status}
        balance={sampleOrder.balance}
      />
      <div className="mt-2 grow border rounded overflow-y-auto">
        <OrderBody
          items={[
            new OrderItemModel({
              itemName: "chicken roasted kennyeji",
              itemId: "1234567890098765",
              quantity: 4,
              unitPrice: 350,
              accompanimentName: "Ugali",
              accompanimentId: "1234567890098767",
            }),
            new OrderItemModel({
              itemName: "beans with rice",
              itemId: "1234567890098766",
              quantity: 4,
              unitPrice: 350,
              accompanimentId: "1234567890098768",
            }),
            new OrderItemModel({
              itemName: "african tea",
              itemId: "1234567890098767",
              quantity: 4,
              unitPrice: 350,
              accompanimentName: "Ugali",
              accompanimentId: "1234567890098769",
            }),
          ]}
        />
      </div>
      <OrderFooter />
    </>
  );
}
