import { useState } from "react"
import { Label, Select } from "../globals/styledContainers"
const useSelectCripto = (label, options) => {
    const [state, setState] = useState('')

    const SelectCriptos = ()=>(
        <>
        <Label>{label}</Label>
        <Select 
        value={state}
        onChange={(e)=>{setState(e.target.value)}}

        >

        <option value="">Selecione</option>
        {options.map(op=>(
            <option 
                key={op.id}
                value={op.id}
            >
            {op.name}
            </option>
        ))}
        </Select>
        </>
    )

    return [ state,  SelectCriptos ]
}

export default useSelectCripto
