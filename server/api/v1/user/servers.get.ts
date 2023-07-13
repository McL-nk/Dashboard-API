import { permissions } from "~/server/util/bitfields"
const config = useRuntimeConfig();

export default defineEventHandler(async (event) => {
    let access_token = getCookie(event, "access_token")
    let token_type = getCookie(event, "token_type")

    let userguilds = []
    let botguilds = []

    let userInfo: any[] | undefined;
    let botInfo: any[] | undefined;

    await $fetch('https://discord.com/api/v10/users/@me/guilds', {
        headers: {
            authorization: `${token_type} ${access_token}`,
        },
    }).catch((error) => {return}).then(async userRes => userInfo = userRes as any );

    await $fetch('https://discord.com/api/v10/users/@me/guilds', {
        headers: {
            authorization: `Bot ${config.bot_token}`,
        },
    }).then(async botRes => botInfo = botRes as any );

    if (botInfo == undefined) return;
    if (userInfo == undefined) return;

    for (const i of botInfo){
        botguilds.push(i.id)
    }

    for (const i of userInfo){
        if(permissions(i.permissions).includes("MANAGE_GUILD")){
            if (botguilds.includes(i.id)) {
                userguilds.push({ id: i.id, name: i.name, icon: `https://cdn.discordapp.com/icons/${i.id}/${i.icon}.webp`, mutual: true });
            } else {
                userguilds.push({ id: i.id, name: i.name, icon: `https://cdn.discordapp.com/icons/${i.id}/${i.icon}.webp`, mutual: false });
            };
        }
    }

    return userguilds
})