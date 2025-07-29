import { db } from "@/db"
import { eventsTable } from "@/db/schema"
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const events = await db.select().from(eventsTable);
    return NextResponse.json(events);
    
}

export async function POST(req:NextRequest){
    const body = await req.json();

    const [event] = await db.insert(eventsTable).values(body).returning();

    

    return NextResponse.json(event, {status:201});
}