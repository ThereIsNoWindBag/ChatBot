var np = /이{0}잉/;

var d = new Date();

var dic = {};
dic['상준'] = 123;
dic['김학영'] = 234;
dic['이건용'] = 345;
dic['황동휘'] = 456;
dic['김지훈'] = 567;

if (msg == "@도움말")
{
	replier.relpy(
		"@운세\
		@한강\
		@궁합\
		[이이이잉]\
		[새봄추]\
		[상준]"
		)
}

function response(room, msg, sender, isGroupChat, replier, ImageDB)
{
	if(room == "중학교")
	{
		if(msg == "@운세")
		{
			var i = Math.random();

			if(0.9 < i)
			{
				replier.reply(sender + "님의 운세는 [극상]입니다.");
			}
			else if(0.8 < i)
			{
				replier.reply(sender + "님의 운세는 [좋음]입니다.");
			}
			else if(0.6 < i)
			{
				replier.reply(sender + "님의 운세는 [조금 좋음]입니다.");
			}
			else if(0.4 < i)
			{
				replier.reply(sender + "님의 운세는 [적당]입니다.");
			}
			else if(0.2 < i)
			{
				replier.reply(sender + "님의 운세는 [조금 나쁨]입니다.");
			}
			else if(0.1 < i)
			{
				replier.reply(sender + "님의 운세는 [나쁨]입니다.");
			}
			else
			{
				replier.reply(sender + "님의 운세는 [최악]입니다.");
			}
		}
		else if(msg == "@한강")
		{
			replier.reply(Utils.getWebText("https://www.wpws.kr/hangang/", false).split("</i>")[1].split("</p>")[0]);
		}
		else if(np.test(msg))
		{
			replier.reply("앗살람알라이쿰~");
		}
		else if(msg.indexOf("새봄추") != -1)
		{
			replier.reply("넘어가겠다냥~!");
		}
		else if(msg.indexOf("상준") != -1)
		{
			replier.reply("근신");
		}
	}
}