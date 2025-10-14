import { supabaseServer } from '@/app/_config/supabase-server';
import { NextResponse } from 'next/server';

export async function GET() {


    const { data: info } = await supabaseServer
        .from("info")
        .select("*")

    const { data: familerWith } = await supabaseServer
        .from("familiar-with")
        .select("*")

    const { data: experience } = await supabaseServer
        .from("experience")
        .select("*")


    const { data: skills } = await supabaseServer
        .from("skills")
        .select("*")


    const { data: project } = await supabaseServer
        .from("project")
        .select("*")

    const { data: licenses } = await supabaseServer
        .from("licenses")
        .select("*")

    const { data: social } = await supabaseServer
        .from("social")
        .select("*")




    return NextResponse.json({ info, skills, familerWith, experience, project, licenses, social });
}