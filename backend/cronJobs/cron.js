import cron from "node-cron"
import shell from "shelljs"

const cronUpdate = async () => {
    let t = 10;
    cron.schedule('*/10 * * * * *', () => {
        console.log(`At time ${t}`);
        t += 10;
    });
    if(shell.exec("dir").code !== 0){
        console.log(`Something isn't right`);
    }
}

export default cronUpdate;