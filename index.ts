import { DiscordBot } from "./src/bot";
import * as dotenv from "dotenv";

dotenv.config({ path: '.env' });

console.log('----------------------------------------');
console.log('SUPER BOT TEMPLATE COOL v1.0.0');
console.log('BY ECODINI - FROM ARGENTINA TO THE WORLD');
console.log('----------------------------------------');

if (!process.env.TOKEN) {
    console.error('[FATAL ERROR] TOKEN MISSING');
}

const bot = new DiscordBot(process.env.TOKEN!);

bot.startBot().then();
