/* eslint-disable @next/next/no-server-import-in-page */
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();

    const isProduction = process.env.NODE_ENV === 'production' // redirect only in production
    const requestedHost = request.headers.get('X-Forwarded-Host');

    if (isProduction && requestedHost && !requestedHost.match(/64.176.70.84/)) {
        const host = `64.176.70.84`; // set your main domain

        const requestedPort = request.headers.get('X-Forwarded-Port');
        const requestedProto = request.headers.get('X-Forwarded-Proto');

        url.host = host;
        url.protocol = requestedProto || url.protocol;
        url.port = requestedPort || url.port;

        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/',
};
