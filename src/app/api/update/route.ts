import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../prisma/prisma';

export async function PUT(req: NextRequest) {
    const id = req.nextUrl.searchParams.get('id'); // query param
  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }
    try {
      const { studentName, cohort, courses, status } = await req.json();
      const updatedStudent = await prisma.student.update({
        where: {
          id: parseInt(id as string),
        },
        data: {
          studentName,
          cohort,
          courses,
          lastLogin: new Date(),
          status,
        },
      });

      return NextResponse.json(updatedStudent, { status: 201 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Error updating student' }, { status: 500 });
    }
  }
