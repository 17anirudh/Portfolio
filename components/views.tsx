"use client";

import { useEffect, useState } from "react";

type ViewStats = { count: number } | { error: string };

const sync = async (): Promise<ViewStats> => {
    const res = await fetch("/api/");
    return res.json();
};

export default function Views() {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        sync()
            .then((data) => { "count" in data ? setCount(data.count) : null })
            .catch(() => console.error("Sync failed"));

        const timer = setInterval(sync, 300000);
        return () => clearInterval(timer);
    }, []);

    return (
        <h4 className="font-mono text-[10px] tracking-tight border border-zinc-800 bg-zinc-900/50 p-2 rounded-md text-emerald-400 cursor-pointer" title="Views">{count}</h4>
    );
}