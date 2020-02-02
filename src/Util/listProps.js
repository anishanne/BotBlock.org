/* eslint-disable no-multi-spaces */
module.exports = [
    { prop: 'id',                       type: 'String',             desc: 'The id of the list on BotBlock.' },
    { prop: 'added',                    type: 'Integer',            desc: 'The unix timestamp when the list was added to BotBlock.' },
    { prop: 'name',                     type: 'String',             desc: 'The name of the list on BotBlock.' },
    { prop: 'url',                      type: 'String',             desc: 'The link to the list\'s website.' },
    { prop: 'icon',                     type: 'String',             desc: 'The URL of the list\'s icon.' },
    { prop: 'language',                 type: 'String',             desc: 'The primary language (English etc.) of the list.' },
    { prop: 'display',                  type: 'Integer (Boolean)',  desc: 'Whether the list is displayed on BotBlock (0 = list hidden).' },
    { prop: 'defunct',                  type: 'Integer (Boolean)',  desc: 'Whether the list is known to be defunct or not (0 = list active).' },
    { prop: 'discord_only',             type: 'Integer (Boolean)',  desc: 'Whether the list only supports Discord bots or not (0 = allows non-Discord bots).' },
    { prop: 'description',              type: 'String',             desc: 'A short description of the list.' },
    { prop: 'api_docs',                 type: 'String',             desc: 'The URL stored for the API docs of the list.' },
    { prop: 'api_post',                 type: 'String',             desc: 'The URL stored for posting server/guild count to the list.' },
    { prop: 'api_field',                type: 'String',             desc: 'The JSON field name for posting the server/guild count to the list.' },
    { prop: 'api_shard_id',             type: 'String',             desc: 'The JSON field name for posting the current shard ID to the list.' },
    { prop: 'api_shard_count',          type: 'String',             desc: 'The JSON field name for posting the bot shard count to the list.' },
    { prop: 'api_shards',               type: 'String',             desc: 'The JSON field name for posting an array of server counts per shard to the list.' },
    { prop: 'api_get',                  type: 'String',             desc: 'The URL stored for fetching bot information from the list.' },
    { prop: 'api_all',                  type: 'String',             desc: 'The URL stored that allows for all bots on the list to be fetched.' },
    { prop: 'view_bot',                 type: 'String',             desc: 'The URL to view the human page for a bot on the list website.' },
    { prop: 'bot_widget',               type: 'String',             desc: 'The URL stored to get the list\'s widget for a bot.' },
    { prop: 'content',                  type: 'String',             desc: 'The notification message shown at the top of the list\'s page on BotBlock.' },
    { prop: 'owners',                   type: 'String',             desc: 'The list of known owners (Discord accounts) for the list.' },
    { prop: 'discord',                  type: 'String',             desc: 'The URL for the invite to the list\'s Discord server.' },
    { prop: 'features',                 type: 'Array<Object>',      desc: 'An array of all the features for the list (both features the list has and doesn\'t have).' },
    { prop: 'features[].name',          type: 'String',             desc: 'The displayed name for the feature.' },
    { prop: 'features[].id',            type: 'Integer',            desc: 'The internal id used to track the feature.' },
    { prop: 'features[].display',       type: 'Integer',            desc: 'A value used to control the order that features are listed in.' },
    { prop: 'features[].type',          type: 'Integer',            desc: 'The type that the feature is (0 = positive, 1 = neutral, 2 = bad).' },
    { prop: 'features[].description',   type: 'String',             desc: 'An optional description to explain the feature in more detail.' },
    { prop: 'features[].value',         type: 'Integer (Boolean)',  desc: 'Whether the list is known to have this feature or not.' }
];