import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../prisma/prisma';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        console.log('Received body:', body);
        if (!body) {
            return NextResponse.json({ message: 'Request body is empty or invalid' }, { status: 400 });
        }
        const { studentName, cohort, courses, status } = body;
        if (!studentName || !cohort || !courses || status === undefined) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        // Creating a new student entry in the database
        const newStudent = await prisma.student.create({
            data: {
                studentName,
                cohort,
                courses,
                dateJoined: new Date(), // Automatically using the current date
                lastLogin: new Date(), // Automatically using the current date
                status,
            },
        });

        console.log('Created student:', newStudent);
        return NextResponse.json(newStudent, { status: 201 });
    } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
        return NextResponse.json({ message: 'Failed request', error: errorMessage }, { status: 500 });
    }
}
