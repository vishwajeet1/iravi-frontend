import { FunctionComponent, useEffect, useRef, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
export interface MultiSelectObjectInterface {
  id: number;
  title: string;
}

interface Prop {
  initialValue: Array<MultiSelectObjectInterface>;
  onChangeSelectValue: (data: Array<MultiSelectObjectInterface>) => void;
  label: string;
  placeholder: string;
  maxItems?: number;
  minItems?: number;
}
const MultiSelectTextBox: FunctionComponent<Prop> = ({
  initialValue,
  onChangeSelectValue,
  label,
  placeholder,
  maxItems = 100,
  minItems = 0,
  ...rest
}) => {
  let errorRef = useRef<any>(null);
  const [showError, setShowError] = useState("");
  const [tagList, setTagList] =
    useState<Array<MultiSelectObjectInterface>>(initialValue);
  const [selectedTags, setSelectedTags] = useState<
    Array<MultiSelectObjectInterface>
  >([]);
  const handleInputChange = (e: any, value: string) => {
    if (e.key === "Enter" && value.trim() !== "") {
      const newChip = { id: tagList.length, title: value.trim() };
      setTagList((prevData) => [...prevData, newChip]);
      setSelectedTags((prevState) => [...prevState, newChip]);
    }
  };

  const validatorForSelectHandler = (
    value: Array<MultiSelectObjectInterface>
  ) => {
    if (value.length > maxItems) {
      setShowError(`You can't select more than ${maxItems} element`);
      return false;
    } else if (value.length < minItems) {
      setShowError(`You have to select more than ${minItems} element`);
      return false;
    }
    return true;
  };
  const handleSelect = (value: Array<MultiSelectObjectInterface>) => {
    if (validatorForSelectHandler(value)) {
      setSelectedTags(value);
      onChangeSelectValue(value);
    }
  };

  useEffect(() => {
    if (showError) {
      errorRef.current = setTimeout(() => {
        setShowError("");
      }, 5000);
    }
    return () => {
      if (errorRef.current) clearTimeout(errorRef.current);
    };
  }, [showError]);

  return (
    <div>
      <Autocomplete
        {...rest}
        multiple
        id="tags-standard"
        options={tagList}
        getOptionLabel={(option) => option.title}
        value={selectedTags}
        onChange={(event, value) => {
          handleSelect(value);
        }}
        renderInput={(params: any) => (
          <TextField
            {...params}
            variant="standard"
            label={label}
            placeholder={placeholder}
            onKeyDown={(event) => {
              handleInputChange(event, params.inputProps?.value as string);
            }}
          />
        )}
      />
      {showError && (
        <div className="text-red-900 text-sm text-left">{showError}</div>
      )}
    </div>
  );
};

export default MultiSelectTextBox;
