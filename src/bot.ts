import { Commands } from './command';
import { Client, CommandInteraction, Events, GatewayIntentBits, Interaction } from 'discord.js';

export class DiscordBot {
    private token: string;

    private client: Client<boolean>;

    constructor(token: string) {
        this.token = token;
    }

    public async startBot() {
        this.client = new Client({ intents: [GatewayIntentBits.Guilds] });

        this.client.once(Events.ClientReady, async c => {
            console.log(`[LOGIN OK] ${c.user.tag}`);

            if (!this.client.user || !this.client.application) {
                return;
            }
    
            await this.client.application.commands.set(Commands);

            console.log('REGISTERED COMMANDS: ');

            const registeredCommands = this.client.application.commands.valueOf().values();

            for (const item of registeredCommands) {
                console.log(' - /' + item.name);
            }
    
            console.log('[BOT READY]');
    
        });

        await this.client.login(this.token);

        this.client.on(Events.InteractionCreate, async (interaction: Interaction) => {
            if (interaction.isCommand() || interaction.isContextMenuCommand()) {
                await this.handleSlashCommand(interaction);
            }
        })
    }

    private async handleSlashCommand(interaction: CommandInteraction) {
        const slashCommand = Commands.find(c => c.name === interaction.commandName);

        console.log('[RUN COMMAND] - /' + slashCommand.name);
    
        if (!slashCommand) {
            interaction.followUp({ content: "An error has occurred" });
            return;
        }

        await interaction.deferReply();

        slashCommand.run(this.client, interaction);
    }
}