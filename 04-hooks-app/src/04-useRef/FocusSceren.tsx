import { useRef } from "react"

export const FocusSceren = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const onClick = () => {
        inputRef.current?.focus();
    }
    return (
        <div className="bg-gradient  flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-white">Focus Screen</h1>
        <input ref={inputRef}
        type="text" className="p-2 rounded-md px-4 py-2 bg-white text-black" placeholder="Ingrese su nombre"
        autoFocus/>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={onClick}>
            Focus
        </button>
        </div>
    )
}   