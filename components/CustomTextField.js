import React, { useState, useRef, useEffect } from "react";
import { TextInput } from "carbon-components-react";
import { formValidity, formData } from "../atoms/formAtom";
import { useSetRecoilState } from "recoil";

const CustomTextField = ({ placeholder, name, labelText, validate, id }) => {
  const setFormValidity = useSetRecoilState(formValidity);
  const setFormData = useSetRecoilState(formData);
  const [val, setVal] = useState("");
  const [errors, setErrors] = useState("");
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false; // it's no longer the first render
      return; // skip the code below
    }
    const newErrors = validate(val);
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
    placeholder: placeholder,
    name: name,
    labelText: labelText,
    required: true,
    onChange: (e) => {
      setVal(e.target.value);
    },
    value: val,
    invalid: !!errors === true && firstRender.current === false,
    invalidText:
      !!errors === true && firstRender.current === false ? errors : null,
    id: id,
  };

  return (
    <React.Fragment>
      <TextInput {...props}></TextInput>
    </React.Fragment>
  );
};

export default CustomTextField;
