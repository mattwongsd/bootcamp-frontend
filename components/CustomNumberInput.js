import React, { useState, useEffect } from "react";
import { NumberInput } from "carbon-components-react";
import { formData } from "../atoms/formAtom";
import { useSetRecoilState } from "recoil";

// There is currently a bug with this component
// On first render, the arrow controls do not work because of the way
// Their handle click functions are setup, it uses the inner component's state
// Instead of our own provided controlled state

const CustomNumberInput = ({
  id,
  name,
  label,
  helperText,
  initialValue,
  min,
  max,
  step,
  validate,
}) => {
  const [val, setVal] = useState(initialValue);
  const [errors, setErrors] = useState("");
  const setFormData = useSetRecoilState(formData);

  useEffect(() => {
    const newErrors = validate(val, min, max);
    if (newErrors === errors) {
      return;
    }
    setErrors(newErrors);
    if (!!newErrors === !!errors) {
      return;
    }
    setFormValidity((prev) => {
      const newFormValidity = Object.assign({}, prev);
      newFormValidity[id] = !!newErrors === false;
      return newFormValidity;
    });
    setFormData((prev) => {
      const newFormData = Object.assign({}, prev);
      newFormData[id] = val;
      return newFormData;
    });
  }, [val, errors]);

  const props = {
    light: false,
    name: name,
    label: label,
    required: true,
    onChange: (event, { value }) => {
      setVal(value);
    },
    invalid: !!errors === true,
    invalidText: !!errors === true ? errors : null,
    id: id,
    step: step,
    min: min,
    max: max,
    helperText: helperText,
    value: val,
  };

  return (
    <React.Fragment>
      <NumberInput {...props} />
    </React.Fragment>
  );
};

export default CustomNumberInput;
