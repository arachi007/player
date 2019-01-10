//<![CDATA[
function getQueryVariable(variable)
	{
	var query=window.location.search.substring(1).replace("&m=1","");
	var dec=decodeURIComponent(escape(window.atob(query)));
	var vars=dec.split("&");
	for(var i=0;
	i<vars.length;
	i++)
		{
		var pair=vars[i].split("=");
		if(pair[0]==variable)
			{
			return pair[1];
		}
	}
	return(false);
}
var playerInstance=jwplayer("myvideo");
var gid=decodeURIComponent(escape(window.atob(getQueryVariable("id"))));
var player='https://www.googleapis.com/drive/v3/files/'+gid+'?alt=media&key=AIzaSyDjQy5oGfCBWx-KxyyKQnMlH9y-oIwUhB0';
var img="https://drive.google.com/vt?id="+gid;
playerInstance.setup(
	{
	'autostart':false,'controls':true,'displaydescription':false,'displaytitle':true,'flashplayer':'/flash/jwplayer.flash.swf','playbackRateControls':true,sources:[
		{
		"type":"video/mp4","label":"HD","file":player
	}
	],'description':'','image':img,'title':'Nonton Anime Subtitle Indonesia','tracks':[
		{
		'file':'','label':'Indonesia','kind':'captions','default':true
	}
	],'plugins':
		{
		'ping':
			{
		}
	}	,'logo':
		{
		'file':'https://play.dewamovie21.tech/img/dewamovie21-small-colour.png','link':'https://eiflix.com'
	}	,'preload':'none','repeat':false,'stagevideo':false,'stretching':'uniform','width':'100%','hight':'100%','aspectratio':'21:9','aboutlink':'https://eiflix.com','abouttext':'Player By eiflix.com'
}
);


//]]>
