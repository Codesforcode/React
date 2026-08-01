import { useState, useCallback, useEffect , useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    let char = "!@#$%^&*-+?";
    let number = "0123456789";

    if (numberAllowed) str += number;
    if (charAllowed) str += char;

    for (let i = 1; i <= length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, charAllowed, numberAllowed, setPassword]);

 const copyPasswordToClipBoard = useCallback(async () => {
  try {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);

    toast.success("Password copied to clipboard!");
  } catch (err) {
    toast.error("Failed to copy password!");
  }
}, [password]);

  useEffect(()=>{
    passwordGenerator()
  },[length , numberAllowed , charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-lg mx-auto mt-12 rounded-2xl bg-gray-800 p-6 shadow-2xl border border-gray-700">
        <h1 className="text-3xl font-bold text-center text-orange-400 mb-6">
          Password Generator
        </h1>

        {/* Password Input */}
        <div className="flex items-center overflow-hidden rounded-xl border border-gray-600 bg-gray-900">
          <input
            type="text"
            value={password}
            placeholder="Generated Password"
            readOnly
            ref = {passwordRef}
            className="w-full bg-transparent px-4 py-3 text-white outline-none placeholder:text-gray-500"
          />

          <button onClick={copyPasswordToClipBoard}
           className="bg-orange-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-orange-600">
           
            Copy
          </button>
        </div>

        {/* Controls */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          {/* Length Slider */}
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={8}
              max={25}
              value={length}
              className="w-40 cursor-pointer accent-orange-500"
              onChange={(e) => setLength(Number(e.target.value))}
            />

            <span className="text-white">
              Length:{" "}
              <span className="font-semibold text-orange-400">{length}</span>
            </span>
          </div>

          {/* Numbers */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="numberInput"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="h-4 w-4 cursor-pointer accent-orange-500"
            />

            <label htmlFor="numberInput" className="cursor-pointer text-white">
              Numbers
            </label>
          </div>

          {/* Symbols */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="charInput"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="h-4 w-4 cursor-pointer accent-orange-500"
            />

            <label htmlFor="charInput" className="cursor-pointer text-white">
              Symbols
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
