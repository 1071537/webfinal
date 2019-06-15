var mapArray, ctx, currentImgMainX, currentImgMainY;
var imgMountain, imgMain, imgEnemy,imgH;

$(document).ready(function(){
	mapArray = [0,0,0,0,0,0,0,3,
				0,1,1,1,0,1,0,0,
				0,0,0,1,0,1,0,0,
				0,1,0,0,0,0,0,3,
				0,1,1,1,1,0,1,1,
				0,1,0,0,0,0,0,0,
				0,1,0,1,0,0,1,0,
				0,0,0,1,0,3,2,0];
	ctx = $("#myCanvas")[0].getContext("2d")

	imgMain = new Image();
	imgMain.src = "images2/spriteSheet.png";
	currentImgMainX = 0;
	currentImgMainY = 0;
	imgMain.onload = function()
	{
		ctx.drawImage(imgMain,0,0,65,65,currentImgMainX,currentImgMainY,100,100);
	};
	imgMountain = new Image();
	imgMountain.src = "images2/material.png";
	imgEnemy = new Image();
	imgEnemy.src="images2/Enemy.png";
	imgMountain.onload=function(){
		imgEnemy.onload=function(){
		for(var x in mapArray)
		{
			if(mapArray[x]==1)
			{
			ctx.drawImage(imgMountain,224,160,32,32,x%8*100,Math.floor(x/8)*100,100,100);
			}
			else if(mapArray[x]==3)
			{
				ctx.drawImage(imgEnemy,7,40,104,135,x%8*100,Math.floor(x/8)*100,100,100);
			}
			else if(mapArray[x]==2)
			{
				ctx.drawImage(imgEnemy,625,50,104,135,x%8*100,Math.floor(x/8)*100,100,100);
			}
		}
		};};
	});
$(document).keydown(function(event){
	var targetImgMainX, targetImgMainY, targetBlock, cutImagePositionX,cutImagePositionY;
	event.preventDefault();
	switch(event.which){
		case 37://左
			targetImgMainX = currentImgMainX-100;
			targetImgMainY = currentImgMainY;
			cutImagePositionX = 0;
			cutImagePositionY = 65; 
			break;
		case 38://上
			targetImgMainX = currentImgMainX;
			targetImgMainY = currentImgMainY-100;
			cutImagePositionX = 130;
			cutImagePositionY = 195;
			break;
		case 39://右
			targetImgMainX = currentImgMainX+100;
			targetImgMainY = currentImgMainY;
			cutImagePositionX = 0;
			cutImagePositionY = 130;
			break;
		case 40://下
			targetImgMainX = currentImgMainX;
			targetImgMainY = currentImgMainY+100;
			cutImagePositionX = 0;
			cutImagePositionY = 0;
			break;	
		default:	
			return;
	}
	if(targetImgMainX<=700 && targetImgMainX>=0 && targetImgMainY<= 700 && targetImgMainY>=0)
	{
		targetBlock = targetImgMainX/100+targetImgMainY/100*8;
	}	
	else
	{
		targetBlock = -1;
	}
	ctx.clearRect(currentImgMainX,currentImgMainY,100,100);
	if(targetBlock==-1||mapArray[targetBlock]==1||mapArray[targetBlock]==3)
	{
		
	}
	else
	{
		$("#talkBox").text("");
		currentImgMainX = targetImgMainX;
		currentImgMainY = targetImgMainY;
	}
	ctx.drawImage(imgMain,cutImagePositionX,cutImagePositionY,65,65,currentImgMainX,currentImgMainY,100,100);
	switch(mapArray[targetBlock])
	{
		case undefined:
			$("#talkBox").text("邊界");
		break;
		case 1:
			$("#talkBox").text("碰壁");
		break;	
		case 2:
			$("#talkBox").text("成功拯救");
		break;	
		case 3:
			$("#talkBox").text("走開啦");
		break;		
	}
	
});