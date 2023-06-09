import React from "react";
import { useNavigate } from "react-router-dom";
import FormRenderer, {
  componentTypes,
  validatorTypes,
} from "@aws-northstar/ui/components/FormRenderer";

export const items = Array.from(Array(8).keys()).map((i) => ({
  label: `Item ${i + 1}`,
  value: `Item ${i + 1}`,
}));

const formSchema = {
  header: "Sales order form",
  description: "You can create a sales order here",
  fields: [
    {
      component: componentTypes.TEXT_FIELD,
      name: "customer",
      label: "Customer name",
      description: "Name of the customer",
      helperText: "Maxiumn 50 characters",
      isRequired: true,
      validate: [
        {
          type: validatorTypes.REQUIRED,
        },
        {
          type: validatorTypes.MAX_LENGTH,
          threshold: 50,
        },
      ],
    },
    {
      component: componentTypes.SELECT,
      name: "item",
      label: "Item",
      placeholder: "Choose an item",
      options: items,
      isRequired: true,
      isSearchable: true,
      validate: [
        {
          type: validatorTypes.REQUIRED,
        },
      ],
    },
    {
      component: componentTypes.TEXT_FIELD,
      name: "amount",
      label: "Total price of an order",
      type: "number",
      validate: [
        {
          type: validatorTypes.MIN_NUMBER_VALUE,
          includeThreshold: true,
          value: 0,
        },
        {
          type: validatorTypes.MAX_NUMBER_VALUE,
          includeThreshold: false,
          value: 5000,
        },
      ],
    },
    {
      component: componentTypes.DATE_PICKER,
      name: "date",
      label: "Purchase date",
      isRequired: true,
      validate: [
        {
          type: validatorTypes.REQUIRED,
        },
      ],
    },
    {
      component: componentTypes.SELECT,
      name: "status",
      label: "Order status",
      placeholder: "Choose an option",
      options: [
        { label: "Processing", value: "1" },
        { label: "Canceled", value: "2" },
        { label: "Delivered", value: "3" },
      ],
      isRequired: true,
      validate: [
        {
          type: validatorTypes.REQUIRED,
        },
      ],
    },
    {
      component: componentTypes.SWITCH,
      name: "discounted",
      label: "Discount applied?",
    },
    {
      component: componentTypes.TEXT_FIELD,
      name: "discountAmount",
      label: "Discount",
      description: "Discount amount of an order",
      type: "number",
      condition: {
        when: "discounted",
        is: true,
      },
      validate: [
        {
          type: validatorTypes.MIN_NUMBER_VALUE,
          includeThreshold: true,
          value: 0,
        },
        {
          type: validatorTypes.MAX_NUMBER_VALUE,
          includeThreshold: false,
          value: 5000,
        },
      ],
    },
  ],
};

const OrderForm = () => {
  const navigate = useNavigate();
  return (
    <FormRenderer
      schema={formSchema}
      onSubmit={(data) => alert(`Data Submitted: ${JSON.stringify(data)}`)}
      onCancel={() => navigate(-1)}
    />
  );
};

export default OrderForm;
