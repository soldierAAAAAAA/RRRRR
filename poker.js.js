var poker = [];


for (i = 1; i < 5; i++) {
    for(j = 1; j <14; j++){
        poker.push(i * 100 + j);
    }
}


poker.sort(function(a, b){
    return 0.5 - Math.random();
});


for (i = 0; i < 4; i++){
    var A = "";
    var player = poker.slice(0, 13);
    poker.splice(0, 13);
    player.sort().reverse();
    for (j = 0; j < 13; j++) {
        switch (String(player[j])[0]) {
            case "1":
                A += "C";
                break;
            case "2":
                A += "D";
                break;
            case "3":
                A += "H";
                break;
            case "4":
                A += "S";
                break;
        }
        A += Number(String(player[j]).substring(1, 3)) + ", ";
    }
    console.log("Player" + (i + 1) + ": " + A.substring(0, A.length - 2));
}