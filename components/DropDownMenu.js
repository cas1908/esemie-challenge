import { SelectList } from "react-native-dropdown-select-list"
import {AntDesign} from "@expo/vector-icons";
export const DropDownMenu = ({data, setSelected})=>{
    return (
        <SelectList
              setSelected={(val) => setSelected(val)}
              data={data}
              save="value"
              search={false}
              fontFamily="Fellix-Regular"
              defaultOption={{ key: "1", value: "Repeat every" }}
              arrowicon={
                <AntDesign name="caretdown" size={14} color="#A4A4A4" />
              }
              dropdownTextStyles={{ color: "#000" }}
              inputStyles={{ color: "#A4A4A4" }}
              dropdownStyles={{ height: 100, backgroundColor: "#fff" }}
              boxStyles={{ width: 155 }}
            />
    )
}