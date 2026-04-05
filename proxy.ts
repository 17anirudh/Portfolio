'use server'

import { Redis } from '@upstash/redis'
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import crypto from 'crypto'

const redis = Redis.fromEnv()
export const config = { matcher: '/' }

export default async function proxy(req: NextRequest) {
    if (new URL(req.url).pathname !== '/') return NextResponse.next();

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "127.0.0.1";
    const date = new Date().toISOString().slice(0, 10);

    const hash = crypto
                    .createHash("sha1")
                    .update(`${ip}:${date}`)
                    .digest("hex");

    const fingerPrint = `v:${hash}`;

    redis.set(fingerPrint, "1", { nx: true, ex: 86400 }).then((isNew) => {
        if (isNew) redis.incr("portfolio_visits");
    });

    const count = await redis.get("portfolio_visits") || 0;
    const response = NextResponse.next();
    response.headers.set('x-node-count', String(count));
    return response;
}