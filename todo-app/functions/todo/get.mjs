import { db } from "../../utils/db.mjs";

export const handler = async (event) => {
  const { id } = event.pathParameters;

  const data = await db.get({
    TableName: "todos",
    Key: {
      pk: "TODO",
      sk: id,
    },
  });

  return {
    statusCode: 200,
    body: JSON.stringify(data.Item),
  };
};
