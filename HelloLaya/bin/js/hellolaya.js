// Laya.init(600,300);
// var txt=new Laya.Text();
// txt.text="Hello Laya!";
// txt.color= "#FF0000";
// txt.fontSize=66;
// txt.stroke=5;
// txt.strokeColor="#FFFFFF";
// txt.bold=true;
// txt.pos(60,100);
// Laya.stage.bgColor="#23238E"
// Laya.stage.addChild(txt);
var LayaSampleTextWrap = /** @class */ (function () {
    function LayaSampleTextWrap() {
        //初始化引擎
        Laya.init(1136, 640);
        var txt = new Laya.Text();
        //设置文本内容
        txt.text = "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！";
        //设置文本颜色
        txt.color = "#ffffff";
        //设置文本字体
        txt.font = "Ya Hei";
        //设置字体大小
        txt.fontSize = 30;
        //设置文本取背景
        txt.bgColor = "#c30c30";
        //设置文本框的颜色
        txt.borderColor = "#23cfcf";
        //设置粗体、斜体
        txt.bold = true;
        //设置斜体
        txt.italic = true;
        txt.width = 400;
        txt.height = 400;
        txt.align = "center";
        txt.valign = "up";
        //自动换行
        txt.wordWrap = true;
        Laya.stage.addChild(txt);
    }
    return LayaSampleTextWrap;
}());
var TextScoll = /** @class */ (function () {
    function TextScoll() {
        this.prevX = 0;
        this.prevY = 0;
        Laya.init(Laya.Browser.clientWidth, Laya.Browser.clientHeight, Laya.WebGL);
        this.CreateText();
    }
    TextScoll.prototype.CreateText = function () {
        this.txt = new Laya.Text();
        this.txt.overflow = Laya.Text.SCROLL;
        this.txt.text = "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
            "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
            "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
            "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
            "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
            "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n";
        this.txt.size(200, 100);
        this.txt.x = Laya.stage.width - this.txt.width >> 1;
        this.txt.y = Laya.stage.height - this.txt.height >> 1;
        this.txt.borderColor = "#ffff00";
        this.txt.fontSize = 20;
        this.txt.color = "#ffffff";
        Laya.stage.addChild(this.txt);
        this.txt.on(Laya.Event.MOUSE_DOWN, this, this.StartScrollText);
    };
    TextScoll.prototype.StartScrollText = function () {
        this.prevX = this.txt.mouseX;
        this.prevY = this.txt.mouseY;
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.ScrollText);
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.FinishScrollText);
    };
    TextScoll.prototype.FinishScrollText = function () {
        Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.ScrollText);
        Laya.stage.off(Laya.Event.MOUSE_UP, this, this.FinishScrollText);
    };
    /* 鼠标滚动文本 */
    TextScoll.prototype.ScrollText = function () {
        var nowX = this.txt.mouseX;
        var nowY = this.txt.mouseY;
        this.txt.scrollX += this.prevX - nowX;
        this.txt.scrollY += this.prevY - nowY;
        this.prevX = nowX;
        this.prevY = nowY;
    };
    return TextScoll;
}());
// new LayaSampleTextWrap();
new TextScoll();
//# sourceMappingURL=hellolaya.js.map