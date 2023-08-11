import { Command } from "command";
import { CommandInteraction, Client, ApplicationCommandType } from "discord.js";

export const Ping: Command = {
    name: "ping",
    description: "Returns a pong",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "Pong!";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
}; 