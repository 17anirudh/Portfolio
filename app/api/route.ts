'use server'

import { Redis } from "@upstash/redis"
import { NextResponse } from "next/server"

const redis = Redis.fromEnv()

type ViewResponse = { count: number } | { error: string };
export async function GET(): Promise<NextResponse<ViewResponse>> {
    try {
        const count = await redis.get<number>("portfolio_visits");
        return NextResponse.json({ count: count ?? 0 }, { status: 200 });
    } catch (e) {
        return NextResponse.json({ error: "Down" }, { status: 500 });
    }
}