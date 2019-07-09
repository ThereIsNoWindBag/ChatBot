var room = ["한상우" ,"우주로가는 카오스", "중학교", "5인팟"];
var primary = ["@운세", "@강화", "@한강", "@궁합", "@학습"];
var custom = {};

var d = new Date();


function isValidRoom(roomName)
{
	return rooName in room;
}

function isPrimaryCommand(msg)
{
	return msg.split(" ")[0] in primary;
}

function response(room, msg, sender, isGroupChat, replier, ImageDB)
{
	if(msg[0] = "@" && isValidRoom(room))
	{
		replier.reply(msg);
		replier.reply(isPrimaryCommand(msg));
	}
}