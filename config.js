const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: 'BHASHI-MD~TF5CnYJL#dTme-SXEi5FwdI_32mLrW-i_o3b6TkyQyhnyjbmdntY',
GITHUB_TOKEN: 'j6J1RIrA#AL_h3IyvUnetQAg08AJSkyhXJ84iolPfZZMYBJoxNzU',

GITHUB_USER_NAME: 'put your github user name',

};

//In this case, you should use a Repo name that was not previously created in your Github account for the Repo name. Should Github username be used as the username of that github account and the token should also be obtained from the same github account.
//මෙහීදි ඔබ විසින් Repo name සදහා බාවිතා කළ යුත්තෙ මින් පෙර ඔබගේ Github account එක තුල නොසෑදූ Repo name එකකි. Github user name එක සදහා යොදා ගත යුත්තේද එම github account එකෙ User name එක වන අතරම token එකද ලබා ගත යුත්තෙ එම github account එකෙන්මය
