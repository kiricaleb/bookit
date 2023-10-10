import dbConnect from "@/backend/config/dbConnect";
import { DeleteRoom, updateRoom } from "@/backend/controllers/roomControllers";
import { createEdgeRouter } from "next-connect";
import { NextRequest } from "next/server";

interface RequestContext {
  params: {
    id: string;
  };
}
const router = createEdgeRouter<NextRequest, RequestContext>();
dbConnect();
router.put(updateRoom);
router.delete(DeleteRoom);

export async function PUT(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}

export async function DELETE(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}
