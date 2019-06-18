// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Sprite)
    test: cc.Sprite = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let animation= this.test.getComponent(cc.Animation);
        animation.play("test");
        // animation.pause("test");

        // 获取AnimationState的方法：
        let animState = animation.getAnimationState('test');
    　  // 修改播放速度参数使动画减速
        animState.speed = 0.1;
        
        // 动画系统支持动态注册回调事件

        // 注册
        animation.on('play', this.onPlay, this);
        // 取消注册
        // animation.off('play', this.onPlay, this);
        animation.on('stop',      this.onStop,        this);
        // animation.on('lastframe', this.onLastFrame,   this);
        animation.on('finished',  this.onFinished,    this);
        animation.on('pause',     this.onPause,       this);
        animation.on('resume',    this.onResume,      this);


        // 对单个 cc.AnimationState 注册回调
        var animSteate = animation.getAnimationState('test');
        animState.on('lastframe',this.onLastFrame, this);
            
    }

    onPlay() {
        console.log("==>this.onPlay");
    }


    onStop() {
        console.log("==>this.onStop");

    }

    onFinished() {
        console.log("==>this.onFinish");

    }

    onPause() {
        console.log("==>this.onPause");

    }

    onResume(){
        console.log("==>this.onResume");
    }

    onLastFrame (){
        console.log("==>this.onLastFrame");
    }

    onAnimCompleted (num: Number, string:String) {
        console.log('==>onAnimCompleted: param1[%s], param2[%s]', num, string);
    }

    start () {

    }

    // update (dt) {}
}
