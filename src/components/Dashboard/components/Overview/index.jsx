import React from "react";
import KeyValuePairs from "@aws-northstar/ui/components/KeyValuePairs";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import data, { sumByItem } from "../../../../data";

const totalOrder = data.length;
const mostSoldItem = sumByItem[sumByItem.length - 1].item;
const totalAmount = sumByItem.reduce((sum, item) => {
  sum += item.amount;
  return sum;
}, 0);

const totalDiscount = sumByItem.reduce((sum, item) => {
  sum += item.discount;
  return sum;
}, 0);

const transactionsWithDiscount = data.reduce((count, order) => {
  if (order.discounted) {
    count++;
  }
  return count;
}, 0);

const pendingOrder = data.reduce((count, order) => {
  if (order.status === "Processing") {
    count++;
  }
  return count;
}, 0);

const Overview = () => {
  return (
    <Container header={<Header>High level overview</Header>}>
      <KeyValuePairs
        items={[
          [
            {
              label: "Total number of order",
              value: totalOrder,
            },
            {
              label: "Number of transactions with discount",
              value: transactionsWithDiscount,
            },
          ],
          [
            {
              label: "Total revenue",
              value: `$${totalAmount}`,
            },
            {
              label: "Total discount",
              value: `$${totalDiscount}`,
            },
          ],
          [
            {
              label: "Most sold item",
              value: mostSoldItem,
            },
            {
              label: "Number of pending orders",
              value: `$${pendingOrder}`,
            },
          ],
        ]}
      />
    </Container>
  );
};

export default Overview;
