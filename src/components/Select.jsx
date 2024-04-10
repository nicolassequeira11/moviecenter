import React from "react";
import {Select, SelectItem} from "@nextui-org/select";

export const MySelect = ({array, placeholder, className, nameSection, onChange}) => {
  const [value, setValue] = React.useState(new Set([]));

  return (
    <div className="w-full flex flex-row flex-wrap gap-4 rounded-lg">
        <Select aria-label="Default select example"
          color="default"
          placeholder={placeholder}
          className={`${className} focus:outline-none rounded-lg text-sm text-gray3`}
          onChange={onChange}
          onSelectionChange={setValue}
        >
          {array.map((item, index) => (
            <SelectItem  
              key={item.name} 
              value={"item[nameSection]"}
              className=""
            >
              {item[nameSection]}
            </SelectItem>
          ))}
        </Select>
    </div>  
  );
}
