Laya.init(600,300);
var txt=new Laya.Text();
txt.text="Hello Laya!";
txt.color= "#FF0000";
txt.fontSize=66;
txt.stroke=5;
txt.strokeColor="#FFFFFF";
txt.bold=true;
txt.pos(60,100);

Laya.stage.bgColor="#23238E"
Laya.stage.addChild(txt);