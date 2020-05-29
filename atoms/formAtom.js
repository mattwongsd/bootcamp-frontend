import { atom } from "recoil";

export const formValidity = atom({
  key: "formValidity",
  default: {
    "create-bootcamp-name-field": false,
    "create-bootcamp-description-field": false,
  },
});

export const formData = atom({
  key: "formData",
  default: {},
});
