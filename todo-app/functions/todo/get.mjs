import { db } from "../../utils/db.mjs";
import { sendResponse } from "../../utils/response.mjs";

export const handler = async (event) => {
  const { id } = event.pathParameters;

  const data = await db.get({
    TableName: "todos",
    Key: {
      pk: "TODO",
      sk: id,
    },
  });

  return sendResponse(200, data.Item);
};
