class Game{

    count=1;

    run(){
        setInterval(()=> {
            this.count++;

            console.log(this.count);
        },1000);
    }
}
const  game=new Game();
game.run();