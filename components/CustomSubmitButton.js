import React from "react";
import { Button } from "carbon-components-react";
import { formValidity } from "../atoms/formAtom";
import { useRecoilValue } from "recoil";
import _ from "lodash";

const checkFormValidity = (formValid) => {
  if (!!formValid === false) {
    return true;
  }

  for (const key in formValid) {
    if (formValid[key] == false) return true;
  }
  return false;
};

const CustomSubmitButton = ({ text }) => {
  const formValid = useRecoilValue(formValidity);
  const props = {
    type: "submit",
    disabled: checkFormValidity(formValid),
  };
  return (
    <React.Fragment>
      <Button {...props}>{text}</Button>
    </React.Fragment>
  );
};

export default CustomSubmitButton;
