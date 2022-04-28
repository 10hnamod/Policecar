// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewBackground extends cc.Component {

    @property(cc.Node)
    bottomPoint: cc.Node = null;

    @property(cc.Node)
    topPoint: cc.Node = null;

    @property(cc.Float)
    duration: number = 0;

    @property(cc.Node)
    backgroundLoop: any;

    private checkWin: boolean = true;

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPressed, this);
//        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyReleased, this);
    }

    start () {
        this.node.position = this.topPoint.position;
        cc.tween(this.node)
        .repeatForever(
            cc.tween().to(this.duration, {y: this.bottomPoint.y})
                    .to(0, {y: this.topPoint.y})
        )
        .start();
    }
    onKeyPressed(event){
        switch(event.keyCode){
            case cc.macro.KEY.space:
                
            // case cc.macro.KEY.space:
            //     this.start();
            //     console.log("START")
            if (this.checkWin == true) {
                cc.Tween.stopAllByTarget(this.node);
                console.log("STOP")   
                this.checkWin = false;
            } else {
                this.checkWin = true;
                this.start();
                console.log("START")
            }               
        }

    }
}
