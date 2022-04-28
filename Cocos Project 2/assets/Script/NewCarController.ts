// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewCar extends cc.Component {

    @property(cc.Node)
    topPoint: cc.Node = null;
    @property(cc.Node)
    bottomPoint: cc.Node = null;
    @property(cc.Node)
    leftPoint: cc.Node = null;
    @property(cc.Node)
    rightPoint: cc.Node = null;
    @property(cc.Node)
    stopPoint: cc.Node = null;
    // @property(cc.Prefab)
    // Bomb_Prefab: cc.Prefab = null;

    @property(cc.Float)
    movementSpeed: number = 0;

    @property(cc.Float)
    moveDuration: number = 0;

    // @property(cc.Boolean) lefting: boolean = false;
    // @property(cc.Boolean) righting: boolean = false;
    // @property(cc.Boolean) upping: boolean = false;
    // @property(cc.Boolean) downing: boolean = false;
    


    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPressed, this);
//        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyReleased, this);
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = false;
    }
    onCollisionEnter(other, self){
        other.node.destroy();
        cc.log("m")
        console.log("minhhh")
    }

    onDestroy () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPressed, this);
//        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyReleased, this);
    }
    start () {

    }        
    
    
    onKeyPressed(event){
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                //this.lefting = true;
                if(this.node.x - this.movementSpeed >= this.leftPoint.x){
                    cc.tween(this.node).by(this.moveDuration, {x: -1 * this.movementSpeed}, {easing: 'cubicOut'}).start();
                }
                else{
                    cc.tween(this.node).to(this.moveDuration, {x: this.leftPoint.x}, {easing: 'cubicOut'}).start();
                }
                console.log("LEFT")
                break;
               

            case cc.macro.KEY.left:
                //this.lefting = true;
                if(this.node.x - this.movementSpeed >= this.leftPoint.x){
                    cc.tween(this.node).by(this.moveDuration, {x: -1 * this.movementSpeed}, {easing: 'cubicOut'}).start();
                }
                else{
                    cc.tween(this.node).to(this.moveDuration, {x: this.leftPoint.x}, {easing: 'cubicOut'}).start();
                }
                console.log("LEFT")
                break;

            case cc.macro.KEY.d:
                //this.righting = true;
                
                if(this.node.x + this.movementSpeed <= this.rightPoint.x){
                    cc.tween(this.node).by(this.moveDuration, {x: this.movementSpeed}, {easing: 'cubicOut'}).start();
                }
                else{
                    cc.tween(this.node).to(this.moveDuration, {x: this.rightPoint.x}, {easing: 'cubicOut'}).start();
                }
                console.log("RIGHT")
                break;
            
            case cc.macro.KEY.right:
                //this.righting = true;
                
                if(this.node.x + this.movementSpeed <= this.rightPoint.x){
                    cc.tween(this.node).by(this.moveDuration, {x: this.movementSpeed}, {easing: 'cubicOut'}).start();
                }
                else{
                    cc.tween(this.node).to(this.moveDuration, {x: this.rightPoint.x}, {easing: 'cubicOut'}).start();
                }
                console.log("RIGHT")
                break;

            case cc.macro.KEY.w:
                //this.upping = true;

                if(this.node.y + this.movementSpeed <= this.topPoint.y){
                    cc.tween(this.node).by(this.moveDuration, {y: this.movementSpeed}, {easing: 'cubicOut'}).start();
                }
                else{
                    cc.tween(this.node).to(this.moveDuration, {y: this.topPoint.y}, {easing: 'cubicOut'}).start();
                }
                console.log("UP")
                break;
        
            case cc.macro.KEY.up:
                //this.upping = true;

                if(this.node.y + this.movementSpeed <= this.topPoint.y){
                    cc.tween(this.node).by(this.moveDuration, {y: this.movementSpeed}, {easing: 'cubicOut'}).start();
                }
                else{
                    cc.tween(this.node).to(this.moveDuration, {y: this.topPoint.y}, {easing: 'cubicOut'}).start();
                }
                console.log("UP")
                break;
    

            case cc.macro.KEY.s:
                //this.downing = true;

                if(this.node.y - this.movementSpeed >= this.bottomPoint.y){
                    cc.tween(this.node).by(this.moveDuration, {y: -1 * this.movementSpeed}, {easing: 'cubicOut'}).start();
                }
                else{
                    cc.tween(this.node).to(this.moveDuration, {y: this.bottomPoint.y}, {easing: 'cubicOut'}).start();
                }
                console.log("DOWN")
                break;
            
            case cc.macro.KEY.down:
                //this.downing = true;

                if(this.node.y - this.movementSpeed >= this.bottomPoint.y){
                    cc.tween(this.node).by(this.moveDuration, {y: -1 * this.movementSpeed}, {easing: 'cubicOut'}).start();
                }
                else{
                    cc.tween(this.node).to(this.moveDuration, {y: this.bottomPoint.y}, {easing: 'cubicOut'}).start();
                }
                console.log("DOWN")
                break;
            
            // case cc.macro.KEY.space:
            //     //this.stopping = true

            //     if(this.node.y - this.movementSpeed == 0){
            //         cc.tween(this.node).by(this.moveDuration, {y: this.movementSpeed}).stop();
            //     }
            //     else{
            //         cc.tween(this.node).to(this.moveDuration, {y: this.stopPoint.y}).stop();
            //     }

            //     cc.tween(this.node).stop();
            //     console.log("STOP")
            
            
        }
    }
    protected update(dt: number): void {
        this.node.angle = 0
    }
}
