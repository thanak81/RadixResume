import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// export const GET = async (request,{params}) => {

// }

export const GET = async (request, { params }) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({
      message: "You are unauthorize",
      status: 401,
      date: new Date().toISOString(),
    });
  }

  const user_id = session.user.payload?.id
    ? session.user.payload.id
    : session.user.id;
  const id = parseInt(params.id);
  const getResumeById = await prisma.resume.findUnique({
    where: {
      id: id,
      user_id: user_id,
    },
  });

  if (getResumeById === null) {
    return NextResponse.json({
      message: "ID NOT FOUND",
      status: 200,
      date: new Date().toISOString(),
    });
  }

  return NextResponse.json({
    message: "Resume retrive successfully",
    status: 200,
    payload: getResumeById,
    date: new Date().toISOString(),
  });
};

export const PUT = async (request, { params }) => {
  const id = parseInt(params.id);
  const data = await request.json();

  const getResumeById = await prisma.resume.findUnique({
    where: {
      id: id,
    },
  });
  if (getResumeById === null) {
    return NextResponse.json({
      message: "ID NOT FOUND",
      status: 200,
      date: new Date().toISOString(),
    });
  }
  const session = await getServerSession(authOptions);
  //   if (!session) {
  //     return resp.status(401).json({ error: "Not authenticated" });
  //   }
  const user_id = session.user.payload?.id
    ? session.user.payload.id
    : session.user.id;
  const updateResume = await prisma.resume.update({
    where: {
      id: id,
    },
    data: {
      title: data.resumeInfo.title,
      // slug: resumeData.resumeInfo.slug,
      slug: data.resumeInfo.slug,
      // need to make this dynamic
      user_id: user_id,
      data: data.data,
    },
  });

  console.log("updateddata", updateResume);

  return NextResponse.json({
    message: "Resume updated successfully",
    status: 200,
    payload: updateResume,
    date: new Date().toISOString(),
  });
};

export const DELETE = async (request, { params }) => {
  const id = parseInt(params.id);

  const getResumeById = await prisma.resume.findUnique({
    where: {
      id: id,
    },
  });
  if (getResumeById === null) {
    return NextResponse.json({
      message: "ID NOT FOUND",
      status: 200,
      date: new Date().toISOString(),
    });
  }
  const data = await prisma.resume.delete({
    where: {
      id: id,
    },
  });

  return NextResponse.json({
    message: "Resume succesfully removed",
    date: new Date().toISOString(),
    status: 200,
    payload: data,
  });
};
