
import { useState } from "react";

export function Counter () {

    const [count, setCount] = useState(0)
    
    return (
        <div className="h-7  felx-row items-center justify-center">
            <span className="px-4 py-1 h-full bg-gradient-to-tl from-transparent  to-slate-800 rounded-lg">{count}</span>
            <button className="ml-5 w-8 rounded-lg bg-green-400 text-green-900 font-bold text-lg" type="button" onClick={() => setCount (count => count + 1) }>+</button>
            <button className="ml-5 w-8 rounded-lg bg-red-400 text-red-900 font-bold text-lg" type="button" onClick={() => setCount (count => count - 1) }>-</button>
            <button className="ml-5 h-full px-2 rounded-lg bg-gray-400 text-gray-900 font-semibold text-xs" type="button" onClick={() => setCount(0) }>Reset</button>
        </div>
    )
}