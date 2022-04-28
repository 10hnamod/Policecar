// // Learn TypeScript:
// //  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// // Learn Attribute:
// //  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// // Learn life-cycle callbacks:
// //  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

// const {ccclass, property} = cc._decorator;

// @ccclass
// export default class Car extends cc.Component {

//     @property(cc.Node)
//     topPoint: cc.Node = null;
//     @property(cc.Node)
//     bottomPoint: cc.Node = null;
//     @property(cc.Node)
//     leftPoint: cc.Node = null;
//     @property(cc.Node)
//     rightPoint: cc.Node = null;
//     @property(cc.Node) 
//     stopPoint: cc.Node = null;

//     @property(cc.Float)
//     movementSpeed: number = 50;

//     @property(cc.Boolean) lefting: boolean = false;
//     @property(cc.Boolean) righting: boolean = false;
//     @property(cc.Boolean) upping: boolean = false;
//     @property(cc.Boolean) downing: boolean = false;
//     @property(cc.Boolean) stopping: boolean = true;

//     onLoad () {
//         cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPressed, this);
//         cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyReleased, this);
//     }

//     onDestroy () {
//         cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyPressed, this);
//         cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyReleased, this);
//     }

//     start () {

//     }

//     update (dt) {
//         if(this.lefting == true && this.righting == false){
           
//             this.node.x -= this.movementSpeed * dt;
//             console.log("LEFTING");
//         }
         
//         if(this.lefting == false && this.righting == true){
//            console.log("RIGHTING");
//            this.node.x += this.movementSpeed * dt;
//         }

//         if(this.upping == true && this.downing == false){
//            console.log("UPPING");
//            this.node.y += this.movementSpeed * dt;
//         }

//         if(this.downing == true && this.upping == false){
//            console.log("DOWNING");
//            this.node.y -= this.movementSpeed * dt;
//         }
//         if(this.stopping == true){
//             console.log("STOPPING");
//             this.node.y = this.movementSpeed - 50;
//         }

//         this.checkPosition();
//     }

        

//     onKeyPressed(event){
//         switch(event.keyCode) {
//             case cc.macro.KEY.a:
//                 this.lefting = true;
//                 break;
                

//             case cc.macro.KEY.d:
//                 this.righting = true;
//                 break;

//             case cc.macro.KEY.w:
//                 this.upping = true;
//                 break;

//             case cc.macro.KEY.s:
//                 this.downing = true;
//                 break;
            
//             case cc.macro.KEY.space:
//                 this.stopping = true;
//                 break;


//         }
//     }

//     onKeyReleased(event){
//         switch(event.keyCode) {
//             case cc.macro.KEY.a:
//                 this.lefting = false;
//                 break;

//             case cc.macro.KEY.d:
//                 this.righting = false;
//                 break;

//             case cc.macro.KEY.w:
//                 this.upping = false;
//                 break;

//             case cc.macro.KEY.s:
//                 this.downing = false;
//                 break;
            
//             case cc.macro.KEY.space:
//                 this.stopping = false;
//                 break;

//         }
//     }

//     checkPosition() {
//         if(this.node.position.x < this.leftPoint.position.x){
//            this.node.setPosition(this.leftPoint.position.x, this.node.position.y);
//         }
    
//         if(this.node.position.x > this.rightPoint.position.x){
//            this.node.setPosition(this.rightPoint.position.x, this.node.position.y);
//         }
    
//         if(this.node.position.y > this.topPoint.position.y){
//            this.node.setPosition(this.node.position.x, this.topPoint.position.y);
//         }
        
//         if(this.node.position.y < this.bottomPoint.position.y){
//            this.node.setPosition(this.node.position.x, this.bottomPoint.position.y);
//         }
//     }
// }
