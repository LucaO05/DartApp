import {createServerFn} from "@tanstack/react-start";
import {z} from "zod";

const body = z.object({
    userID: z.string().optional(),
})

export const addPlayerAction = createServerFn({
    method: 'POST',
}).validator((data: unknown) => {
    return body.parse(data);
})
.handler(async ({ data }) => {
    try {

    }
})