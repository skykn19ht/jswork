const readline = require('readline');

async function input(msg) {

    return await new Promise((resolve, reject) => {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(msg, (answer) => {

            resolve(answer)

            rl.close();
        });
    })
}

(async () => {
    var choice = await input("请输入你要打印的图形 1:三角形 2:正方形 3:梯形 4:菱形 5:回字\n");
    switch(choice) {
        case "1" :
            var fill = await input("请输入填充的图案:\n");
            var height = await input("请输入你要打印的高度\n");
            var flag = await input("请问图案是否空心?请输入yes or no!\n");            
            var x = "";
            for(var i = 0;i < height;i++) {
                for(var j = 0;j < height - i;j++) {
                    x += " ";
                }
                for(var k = 0;k < 2 * i + 1;k++) {
                    if(flag == "yes") {
                        if(i > 0 && i < height - 1 && k > 0 && k < 2 * i) {
                    x += ' ';
                } else {
                    x += `${fill}`;
                }
                    } else {        
                        x += `${fill}`;
                    }
                }
                x += "\n";
            }
            console.log(x);
        break;
        case "2" :
            var fill = await input("请输入填充的图案:\n");
            var width = await input("请输入你要打印的长度:\n");
            var height = await input("请输入你要打印的宽度\n");
            var flag = await input("请问图案是否空心?请输入yes or no!\n");
            var x="";
            for(var i = 0; i < height; i++){
                if(flag == "yes"){
                    for(var p = 0;p < width ; p++){
                        if(i > 0 && i < height - 1 && p > 0 && p < height - 1) {
                    x += '  ';
                } else {
                    x += `${fill} `;
                }
                    }
                } else {
                for(var j = 0; j < width; j++){
                    x += `${fill} `;
            }
        }
            x +='\n';
        }
            console.log(x);
        break;
        case "3" :
            var fill = await input("请输入填充的图案:\n");
            var height = await input("请输入你要打印的高度\n");
            // var topwidth =await input("请输入上边长\n");
            var flag = await input("请问图案是否空心?请输入yes or no!\n");           
            var x = "";
            for(var i = 0;i < height;i++) {
                for(var j = 0;j < height - i;j++) {
                    x += " ";
                }
                for(var k = 0;k < 2 * i + 1 + 7;k++) {
                    if(flag == "yes") {
                        if(i > 0 && i < height - 1 && k > 0 && k < 2 * i + 7) {
                    x += ' ';
                } else {
                    x += `${fill}`;
                }
                    } else {        
                        x += `${fill}`;
                    }
                }
                x += "\n";
            }
            console.log(x);
        break;
        case "4" :
            var fill = await input("请输入填充的图案:\n");
            var height = await input("请输入你要打印的高度\n");
            var flag = await input("请问图案是否空心?请输入yes or no!\n"); 
            var x = "";
            if( height % 2 == 0) height -= 1;
            for(var i = 0.5 * (height - 1) * (-1); i <= 0.5 * (height - 1);i++) {
                var m = i;
                if(i < 0) m *= -1
                for(var j = 0; j < m; j++) {
                    x+='  '; 
                }
                for(var j = 0; j < height - 2 * m;j++) {
                    if (flag == "yes") {
                        if (i > 0.5 * (height - 1) * (-1) && i < 0.5 * (height-1) && j > 0 && j < height- 1 - 2 * m) {
                            x += '  '
                        } else {
                             x += `${fill} `;  
                        }
                    } else {
                         x += `${fill} `;   
                    }
                   
                }      
                    x +='\n';
            }
            console.log(x);
        break;
        case "5" :
            var fill = await input("请输入填充的图案:\n");
            var width = await input("请输入你要打印的长度(大于9的数):\n");
            // var height = await input("请输入你要打印的宽度(大于9的数):\n");
            var x="";
            for(var i = 0; i < width; i++){
                for(var j = 0; j < width; j++){
                    if(i > 0 && i < width - 1 && j > 0 && j < width - 1){
                        if(i > 2 && i < width - 3 && j > 2 && j < width - 3){
                            if (i >= width / 2 -1 && i <= width / 2 && j >= width / 2 - 1 && j <= width / 2) {
                                    x += "  ";
                        } else {
                            x += `${fill} `;
                    }                       
                        } else {
                            x += "  ";
                    }
                        } else {
                            x += `${fill} `;
                }       
            }
                x += "\n";
        }
                    console.log(x);
        break;
    }
})()

