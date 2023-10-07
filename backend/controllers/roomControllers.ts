import { NextRequest, NextResponse } from "next/server";

const allRooms = async () => {
  return NextResponse.json({
    data: "hello",
  });
};

export default allRooms;
