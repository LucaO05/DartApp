import {db, NewPlayer, players} from "../../../db";

export const insertPlayer = async (player: NewPlayer): Promise<void> => {
    await db
        .insert(players).values(player).onConflictDoNothing()
}