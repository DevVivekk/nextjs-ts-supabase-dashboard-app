import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../prisma/prisma';

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id'); //query param

  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }
    try {
      const deletedStudent = await prisma.student.delete({
        where: {
          id: parseInt(id),
        },
      });

      return NextResponse.json(deletedStudent, { status: 201 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Error deleting student' }, { status: 500 });
    }
  }