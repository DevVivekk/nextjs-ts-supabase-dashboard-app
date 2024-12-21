import { NextResponse } from 'next/server';
import prisma from '../../../../prisma/prisma';

export async function GET() {
    try {
      const students = await prisma.student.findMany();
      //console.log(students)
      return NextResponse.json(students,{status:201});
    } catch (error) {
        console.log(error);
        return NextResponse.json("Failed request!",{status:500});
    }
}
