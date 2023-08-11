import { CommandInteraction, ChatInputApplicationCommandData, Client } from "discord.js";
import * as BotCommands from './commands';

export interface Command extends ChatInputApplicationCommandData {
    run: (client: Client, interaction: CommandInteraction) => void;
}

export const Commands: Command[] = Object.values(BotCommands);
