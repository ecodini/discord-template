import { Client, Events, GatewayIntentBits } from 'discord.js';

export class DiscordBot {
    private token: string;

    private client: Client<boolean>;

    constructor(token: string) {
        this.token = token;
    }

    public async startBot() {
        this.client = new Client({ intents: [GatewayIntentBits.Guilds] });

        this.client.once(Events.ClientReady, c => {
            console.log(`LOGIN OK: ${c.user.tag}`);
        });
        
        await this.client.login(this.token);
    }
}