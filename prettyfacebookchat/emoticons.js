/*
    Pretty Facebook Chat
    Chrome Extension for improve facebook chat
    Copyright (C) 2012  Luca Rainone <luca.rainone@gmail.com>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
EMOTICONS =  {};
EMOTICONS.pfc_emoticons = {
		':)'       : 'smile.png',
		'>:('      : 'ooooo.png',
		'-_-'      : 'boh.png',
		':('       : 'nu.png',
		':/'       : 'mmmm.png',
		'o.O'      : 'oo.png',
		':p'       : 'pp.png',
		':\'('     : 'sigh.png',
		'>:O'      : 'uffiiii.png',
		':D'       : 'DD.png',
		'3:)'      : 'devil.png',
		':v'       : 'pacman.png',
		':o'       : 'uao.png',
		'O:)'      : 'a.png',
		':3'       : '3.png',
		';)'       : 'ammicc.png',
		':*'       : 'kiss.png',
		':|]'      : 'robot.png',
		'8)'       : '88.png',
		'<3'       : 'cuore.png',
		':putnam:' : 'human.png',
		'8-|'      : 'sole.png',
		'^_^'      : 'gnep.png',
		':42:'     : '42.png',
		'(^^^)'    : 'https://s-static.ak.facebook.com/images/emote/shark.gif',
		'(y)'      : 'thumb.png',
		'<(&quot)' : 'https://s-static.ak.facebook.com/images/emote/penguin.gif'
	}
	
	
EMOTICONS.extrasem = [
		
		
		// skype
		':::GROUP:Smileys'
		,'447573315282245'
		,'447573328615577'
		,'447573341948909'
		,'447573355282241'
		,'447573365282240'
		,'447573375282239'
		,'447573388615571'
		,'447573395282237'
		,'447573401948903'
		,'447573411948902'
		,'447573421948901'
		,'447573428615567'
		,'447573431948900'
		,'447573435282233'
		,'447573438615566'
		,'447573451948898'
		,'447573465282230'
		,'447573471948896'
		,'447573481948895'
		,'447573485282228'
		,'447573495282227'
		,'447573511948892'
		,'447573531948890'
		,'447573541948889'
		,'447573548615555'
		,'447573555282221'
		,'447573571948886'
		,'447573588615551'
		,'447573595282217'
		,'447573601948883'
		,'447573608615549'
		,'447573611948882'
		,'447573615282215'
		,'447573628615547'
		,'447573635282213'
		,'447573641948879'
		,'447573648615545'
		,'447573655282211'
		,'447573671948876'
		,'447573678615542'
		,'447573691948874'
		,'447573701948873'
		,'447573711948872'
		,'447573741948869'
		,'447573755282201'
		,'447573775282199'
		,'447573788615531'
		,'447573791948864'
		,'447573795282197'
		,'447573815282195'
		,'447573835282193'
		,'447573848615525'
		,'447573855282191'
		,'447573868615523'
		,'447573881948855'
		,'447573898615520'
		,'447573915282185'
		,'447573925282184'
		,'447573935282183'
		,'447573948615515'
		,'447573955282181'
		,'447573975282179'
		,'447573991948844'
		,'447574008615509'
		,'447574011948842'
		,'447574015282175'
		,'447574041948839'
		,'447574048615505'
		,'447574061948837'
		,'447574068615503'
		,'447574088615501'
		,'447574105282166'
		,'447574128615497'
		,'447574151948828'
		,'447574181948825'
		,'447574201948823'
		,'447574215282155'
		,'447574258615484'
		,'447574271948816'
		,'447574288615481'
		,'447574311948812'
		,'447574325282144'
		,'447574335282143'
		,'447574341948809'
		,'447574355282141'
		,'447574365282140'
		,'447574368615473'
		,'447574378615472'
		,'447574398615470'
		,'447574418615468'
		,'447574431948800'
		,'447574461948797'
		,'447574478615462'
		,'447574491948794'
		,'447574508615459'
		,'447574518615458'
		,'447574538615456'
		,'447574555282121'
		,'447574585282118'
		,'447574595282117'
		,'447574611948782'
		,'447574621948781'
		,'447574648615445'
		,'447574655282111'
		,'447574661948777'
		,'447574678615442'
		,'447574695282107'
		,'447574698615440'
		,'447574701948773'
		,'447574718615438'
		,'447574731948770'
		,'447574735282103'
		,'447574745282102'
		,'447574778615432'
		,'447574781948765'
		,'447574791948764'
		,'447574801948763'
		,'447574811948762'
		,'447574821948761'
		,'447574835282093'
		,'447574848615425'
		,'447574858615424'
		,'447574871948756'
		,'447574878615422'
		,'447574898615420'
		,'447574911948752'
		,'447574928615417'
		,'447574945282082'
		,'447574958615414'
		,'447574991948744'
		,'447575001948743'
		,'447575015282075'
		,'447575021948741'
		,'447575031948740'
		,'447575035282073'
		,'447575065282070'
		,'447575068615403'
		,'447575091948734'
		,'447575098615400'
		,'447575118615398'
		,'447575128615397'
		,'447575145282062'
		,'447575151948728'
		,'447575175282059'
		,'447575191948724'
		,'447575195282057'
		,'447575205282056'
		,'447575231948720'
		,'447575251948718'
		,'447575271948716'
		,'447575285282048'
		,'447575295282047'
		,'447575311948712'
		,'447575335282043'
		,'447575348615375'
		,'447575351948708'
		,'447575375282039'
		,'447575388615371'
		,'447575391948704'
		,'447575411948702'
		,'447575415282035'
		,'447575431948700'
		,'447575445282032'
		,'447575461948697'
		,'447575475282029'
		,'447575498615360'
		,'447575511948692'
		,'447575521948691'
		,'447575525282024'
		,'447575541948689'
		,'447575568615353'
		,'447575575282019'
		,'447575588615351'
		,'447575605282016'
		,'447575625282014'
		,'447575631948680'
		,'447575655282011'
		,'447575681948675'
		,'447575695282007'
		,'447575721948671'
		,'447575761948667'
		
		
		
		,':::GROUP:MEME'
		,'447584608614449'
		,'447584628614447'
		,'447584638614446'
		,'447584648614445'
		,'447584681947775'
		,'447584685281108'
		,'447584691947774'
		,'447584698614440'
		,'447584708614439'
		,'447584711947772'
		,'447584715281105'
		,'447584721947771'
		,'447584725281104'
		,'447584738614436'
		,'447584748614435'
		,'447584751947768'
		,'447584758614434'
		,'447584768614433'
		,'447584778614432'
		,'447584788614431'
		,'447584791947764'
		,'447584795281097'
		,'447584811947762'
		,'447584815281095'
		,'447584835281093'
		,'447584845281092'
		,'447584851947758'
		,'447584858614424'
		,'447584868614423'
		,'447584875281089'
		,'447584881947755'
		,'447584891947754'
		,'447584895281087'
		,'447584901947753'
		,'447584908614419'
		,'447584925281084'
		,'447584938614416'
		,'447584941947749'
		,'447584948614415'
		,'447584951947748'
		,'447584965281080'
		,'447584978614412'
		,'447584988614411'
		,'447584995281077'
		,'447584998614410'
		,'447585021947741'
		,'447585035281073'
		,'447585051947738'
		,'447585065281070'
		,'447585075281069'
		,'447585088614401'
		,'447585105281066'
		,'447585115281065'
		,'447585121947731'
		,'447585135281063'
		,'447585148614395'
		,'447585151947728'
		,'447585165281060'
		,'447585171947726'
		,'447585178614392'
		,'447585191947724'
		,'447585198614390'
		,'447585225281054'
		,'447585238614386'
		,'447585248614385'
		,'447585251947718'
		,'447585261947717'
		,'447585268614383'
		,'447585271947716'
		,'447585278614382'
		,'447585285281048'
		,'447585295281047'
		,'447585298614380'
		,'447585301947713'
		,'447585305281046'
		,'447585308614379'
		,'447585318614378'
		,'447585328614377'
		,'447585335281043'
		,'447585348614375'
		,'447585371947706'
		,'447585378614372'
		,'447585388614371'
		,'447585395281037'
		,'447585398614370'
		,'447585405281036'
		,'447585408614369'
		,'447585411947702'
		,'447585428614367'
		,'447585431947700'
		,'447585441947699'
		,'447585448614365'
		,'447585458614364'
		,'447585471947696'
		,'447585478614362'
		,'447585481947695'
		,'447585488614361'
		,'447585498614360'
		,'447585508614359'
		,'447585511947692'
		,'447585518614358'
		,'447585521947691'
		,'447585531947690'
		,'447585545281022'
		,'447585578614352'
		,'447585605281016'
		,'447585608614349'
		,'447585625281014'
		,'447585641947679'
		,'447585651947678'
		,'447585658614344'
		,'447585668614343'
		
		,':::GROUP:Various'
		,'167971369931778' // troll
		,'127701797275687' // foreveralone
		,'259548204069438' // challenge accepted
		,'164413893600463' // Me Gusta 
		,'168456309878025' // Lol
		,'352906041391534' // Yaoming 
		,'141986805873080' //uyhm 
		,'167979786599783' //no bitch! 
		,'160723207280093' // You Fucking kidding me?
		,'129627277060203' // poker face
		,'221536391199468' //Lied
		,'224812970902314' // Derp
		,'355890431093095' // shot
		,'392189444130740' // :$
		,'‎355854544430017' // amaro lucano
		,'‎355104307838374' // muscleman
		,'214750058607772' // Barney Gumble
		,'214750085274436' // Homer Simpson
		,'214750115274433' // Fichetto
		,'214750161941095' // Alieno
		,'214750201941091' // Krusty il Clown
		,'214750255274419' // Lisa Simpson
		,'214750291941082' // Bart Simpson
		,'214750315274413' // Reverendo Lovejoy
		,'214750328607745' // Marge Simpson
		,'214750338607744' // Milaus
		,'214750361941075' // Boe Szyslak...
		,'350930184922453' // supermario
		,'353036678045137' // bmw
		,'6604386669' // Mercedes
		,'352093134806158' // homer
		,'351296934885778' // Napoli
		,'350939221588216' // spongebob
		,'45025687601' // gatto stivali
		,'355374000182' // Shrek
		,'118399364892902' // Grande puffo
		,'351385104876961' // pikatchu
		,'193989283975724' // JackSparrow
		,'202555925580' // Ghostbuster
		,'138828096156235' // pallone
		,'46637413257' // Chucky :-)
		,'351317224883749' // XD
	//	,'123107061070952' // Monaco
		,'114172918604528' // Masterchef
		,'100404960050014' // MIlan
		,'155227794509059' // flower
		,'130542590318034' // Apple
		,'5676133521' // Android
		,'321662419491' // Google
		,'104958162837' // Chrome
		,'212635448777769' // Gplus
		,'2231777543' // twitter
		,'6130149579' // Fx
		,'20531316728' // Facebook
		,'84697719333' // Nike
		,'313654572001418' //Cuore Giallio
		,'261996550527456' //Cuore Verde
		,'CaptainJackSparrow'
		,'JustinBieber'
		,'123670240998921'
		,'125160254275198'
		,'228074660644653'
		,'100002679924591'
		,'162437323882666'
		,'319363838135114'
		,'312615488792622'
		,'319363448135153'
		,'336842623036575'	
		
		
		,':::GROUP:Letters'
		,'107015582669715'//  A.
		,'116067591741123' // B.
		,'115602405121532' // C.
		,'112542438763744' // D.
		,'115430438474268' // E.
		,'109225112442557' // F.
		,'111532845537326' // G.
		,'111356865552629' // H.
		,'109294689102123' // I.
		,'115636698451811' // J.
		,'116651741681944' // K.
		,'115807951764667' // L.
		,'106596672714242' // M.
		,'108634132504932' // N.
		,'116564658357124' // O.
		,'111669128857397' // P.
		,'107061805996548' // Q.
		,'106699962703083' // R.
		,'115927268419031' // S.
		,'112669162092780' // T.
		,'108983579135532' // U.
		,'107023745999320' // V.
		,'106678406038354' // W.
		,'116740548336581' // X.
		,'112416755444217'// Y.
		,'165724910215' // Z.
//		,'447561475283429'
//		,'447561458616764'
//		,'447561395283437'
//		,'447561318616778'
//		,'447561258616784'
//		,'447561078616802'
//		,'447561358616774'
//		,'447561295283447'
//		,'447561325283444'
//		,'447561221950121'
//		,'447561418616768'
//		,'447561251950118'
//		,'447561178616792'
//		,'447561338616776'
//		,'447561088616801'
//		,'447561131950130'
//		,'447561405283436'
//		,'447561375283439'
//		,'447561281950115'
//		,'447561441950099'
//		,'447561348616775'
//		,'447561065283470'
//		,'447561231950120'
//		,'447561101950133'
//		,'447561161950127'
//		,'447561198616790'
		
		
	]
	
EMOTICONS.asciicode = '① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨ ⑩ ';
	
EMOTICONS.asciicode = EMOTICONS.asciicode.split(" ");
	
	
EMOTICONS.asciipic = {
	'GUN':"....._\________________,,__\n"+
"..../ `--│││││││││------------_]\n"+
".../_==o _________________\n"+
".....),---.(_(__) /\n"+
"....// (\\) ),------\n"+
"...//___//\n"+
"../`----' / ...\n"+
"./____ / ... .\n",
	
	
	'CAT':"(> \" \" <)\n"+
"( ='o'= )\n"+
"-(,,)-(,,)-",
		

	'PINKPANTHER':"\n ‎[[322450847786845]] [[322450881120175]] [[322450897786840]]\n"+
"[[322450911120172]] [[322450941120169]] [[322450981120165]]\n"+
"[[322451004453496]] [[322451014453495]] [[322451041120159]]"
	};
	
EMOTICONS.CHUCK = "46637413257";