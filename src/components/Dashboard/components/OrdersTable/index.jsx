import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@cloudscape-design/components/box";
import Button from "@cloudscape-design/components/button";
import Checkbox from "@cloudscape-design/components/checkbox";
import SpaceBetween from "@cloudscape-design/components/space-between";
import StatusIndicator from "@cloudscape-design/components/status-indicator";
import Table from "@aws-northstar/ui/components/Table";

import data from "../../../../data";

const columnDefinitions = [
  {
    id: "customer",
    width: 150,
    header: "Customer name",
    cell: (data) => data.customer,
    sortingField: "customer",
  },
  {
    id: "item",
    width: 150,
    header: "Item",
    cell: (data) => data.item,
    sortingField: "item",
  },
  {
    id: "amount",
    width: 150,
    header: "Total",
    cell: (data) => <Box textAlign="right">${data.amount}</Box>,
    sortingField: "amount",
  },
  {
    id: "discounted",
    width: 120,
    header: "Discounted?",
    cell: (data) => (
      <Box textAlign="center">
        <Checkbox checked={data.discounted} disabled />
      </Box>
    ),
    sortingField: "discounted",
  },
  {
    id: "discountAmount",
    width: 100,
    header: "Discount",
    cell: (data) => (
      <Box textAlign="right">
        {data.discountAmount ? `$${data.discountAmount}` : "-"}
      </Box>
    ),
    sortingField: "discountAmount",
  },
  {
    id: "date",
    width: 150,
    header: "Purchase date",
    cell: (data) => data.date,
    sortingField: "date",
  },
  {
    id: "status",
    width: 150,
    header: "Status",
    cell: (data) => {
      const status = data.status;
      switch (status) {
        case "Delivered":
          return <StatusIndicator type="success">Delivered</StatusIndicator>;
        case "Canceled":
          return <StatusIndicator type="error">Canceled</StatusIndicator>;
        case "Returned":
          return <StatusIndicator type="error">Returned</StatusIndicator>;
        case "Processing":
          return <StatusIndicator type="info">Processing</StatusIndicator>;
        default:
          return null;
      }
    },
    sortingField: "status",
  },
];

const OrdersTable = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  const onCreateClick = () => {
    navigate("/createOrder");
  };

  const handleSelectionChange = ({ detail }) => {
    if (!(selectedItems.length === 0 && detail.selectedItems.length === 0)) {
      setSelectedItems(detail.selectedItems);
    }
  };

  const tableActions = (
    <SpaceBetween direction="horizontal" size="s">
      <Button disabled={selectedItems.length !== 1} onClick={() => {}}>
        Delete
      </Button>
      <Button onClick={onCreateClick} variant="primary">
        Create sales order
      </Button>
    </SpaceBetween>
  );

  return (
    <Table
      onSelectionChange={handleSelectionChange}
      header="Sales orders"
      columnDefinitions={columnDefinitions}
      items={data}
      selectedItems={selectedItems}
      actions={tableActions}
      selectionType="multi"
    />
  );
};

export default OrdersTable;
