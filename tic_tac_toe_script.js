'use strict';

let zero = document.querySelectorAll('#o');
let cross = document.querySelectorAll('#x');
let ox = document.querySelectorAll('#ox');

let arr = [null, null, null, null, null, null, null, null, null];
console.log(arr);

document.getElementById('re').addEventListener('click', function () {
    location.reload();
});

let count = 0;

function z(...zr) {
    for (let x of zr) {
        ox[x].addEventListener('click', function () {
            cross[x].style.display = 'none';
            zero[x].style.display = 'block';
            arr[x] = 0;
            count++;
            console.log("ZeroCount ", count);
            if (count == 16) {
                if (arr[0] == 0 && arr[1] == 0 && arr[2] == 0) {
                    alert("Player ⭕ Wins!!!");
                }
                else if (arr[0] == 0 && arr[4] == 0 && arr[8] == 0) {
                    alert("Player ⭕ Wins!!!");
                }
                else if (arr[0] == 0 && arr[3] == 0 && arr[6] == 0) {
                    alert("Player ⭕ Wins!!!");
                }
                else if (arr[3] == 0 && arr[4] == 0 && arr[5] == 0) {
                    alert("Player ⭕ Wins!!!");
                }
                else if (arr[6] == 0 && arr[7] == 0 && arr[8] == 0) {
                    alert("Player ⭕ Wins!!!");
                }
                else if (arr[6] == 0 && arr[4] == 0 && arr[2] == 0) {
                    alert("Player ⭕ Wins!!!");
                }
                else if (arr[1] == 0 && arr[4] == 0 && arr[7] == 0) {
                    alert("Player ⭕ Wins!!!");
                }
                else if (arr[2] == 0 && arr[5] == 0 && arr[8] == 0) {
                    alert("Player ⭕ Wins!!!");
                }
            }
            else if (count == 64) {
                if (arr[0] == 0 && arr[1] == 0 && arr[2] == 0) {
                    alert("Player ⭕ Wins!!!");
                }
                else if (arr[0] == 0 && arr[4] == 0 && arr[8] == 0) {
                    alert("Player ⭕ Wins!!!");
                }
                else if (arr[0] == 0 && arr[3] == 0 && arr[6] == 0) {
                    alert("Player ⭕ Wins!!!");
                }
                else if (arr[3] == 0 && arr[4] == 0 && arr[5] == 0) {
                    alert("Player ⭕ Wins!!!");
                }
                else if (arr[6] == 0 && arr[7] == 0 && arr[8] == 0) {
                    alert("Player ⭕ Wins!!!");
                }
                else if (arr[6] == 0 && arr[4] == 0 && arr[2] == 0) {
                    alert("Player ⭕ Wins!!!");
                }
                else if (arr[1] == 0 && arr[4] == 0 && arr[7] == 0) {
                    alert("Player ⭕ Wins!!!");
                }
                else if (arr[2] == 0 && arr[5] == 0 && arr[8] == 0) {
                    alert("Player ⭕ Wins!!!");
                }
            }
            else if (count == 256) {
                if (arr[0] == 0 && arr[1] == 0 && arr[2] == 0) {
                    alert("Player ⭕ Wins!!!");
                }
                else if (arr[0] == 0 && arr[4] == 0 && arr[8] == 0) {
                    alert("Player ⭕ Wins!!!");
                }
                else if (arr[0] == 0 && arr[3] == 0 && arr[6] == 0) {
                    alert("Player ⭕ Wins!!!");
                }
                else if (arr[3] == 0 && arr[4] == 0 && arr[5] == 0) {
                    alert("Player ⭕ Wins!!!");
                }
                else if (arr[6] == 0 && arr[7] == 0 && arr[8] == 0) {
                    alert("Player ⭕ Wins!!!");
                }
                else if (arr[6] == 0 && arr[4] == 0 && arr[2] == 0) {
                    alert("Player ⭕ Wins!!!");
                }
                else if (arr[1] == 0 && arr[4] == 0 && arr[7] == 0) {
                    alert("Player ⭕ Wins!!!");
                }
                else if (arr[2] == 0 && arr[5] == 0 && arr[8] == 0) {
                    alert("Player ⭕ Wins!!!");
                }
                else {
                    alert("A Draw!!!");
                }
            }
            c(...zr);
            console.log(arr);
        });
    }
}

function c(...cr) {
    for (let x of cr) {
        ox[x].addEventListener('click', function () {
            zero[x].style.display = 'none';
            cross[x].style.display = 'block';
            arr[x] = 1;
            count++;
            console.log("CrossCount ", count);
            if (count == 32) {
                if (arr[0] == 1 && arr[1] == 1 && arr[2] == 1) {
                    alert("Player ❌ Wins!!!");
                }
                else if (arr[0] == 1 && arr[4] == 1 && arr[8] == 1) {
                    alert("Player ❌ Wins!!!");
                }
                else if (arr[0] == 1 && arr[3] == 1 && arr[6] == 1) {
                    alert("Player ❌ Wins!!!");
                }
                else if (arr[3] == 1 && arr[4] == 1 && arr[5] == 1) {
                    alert("Player ❌ Wins!!!");
                }
                else if (arr[6] == 1 && arr[7] == 1 && arr[8] == 1) {
                    alert("Player ❌ Wins!!!");
                }
                else if (arr[6] == 1 && arr[4] == 1 && arr[2] == 1) {
                    alert("Player ❌ Wins!!!");
                }
                else if (arr[1] == 1 && arr[4] == 1 && arr[7] == 1) {
                    alert("Player ❌ Wins!!!");
                }
                else if (arr[2] == 1 && arr[5] == 1 && arr[8] == 1) {
                    alert("Player ❌ Wins!!!");
                }
            }
            else if (count == 128) {
                if (arr[0] == 1 && arr[1] == 1 && arr[2] == 1) {
                    alert("Player ❌ Wins!!!");
                }
                else if (arr[0] == 1 && arr[4] == 1 && arr[8] == 1) {
                    alert("Player ❌ Wins!!!");
                }
                else if (arr[0] == 1 && arr[3] == 1 && arr[6] == 1) {
                    alert("Player ❌ Wins!!!");
                }
                else if (arr[3] == 1 && arr[4] == 1 && arr[5] == 1) {
                    alert("Player ❌ Wins!!!");
                }
                else if (arr[6] == 1 && arr[7] == 1 && arr[8] == 1) {
                    alert("Player ❌ Wins!!!");
                }
                else if (arr[6] == 1 && arr[4] == 1 && arr[2] == 1) {
                    alert("Player ❌ Wins!!!");
                }
                else if (arr[1] == 1 && arr[4] == 1 && arr[7] == 1) {
                    alert("Player ❌ Wins!!!");
                }
                else if (arr[2] == 1 && arr[5] == 1 && arr[8] == 1) {
                    alert("Player ❌ Wins!!!");
                }
            }
            z(...cr);
            console.log(arr);
        });
    }
}
document.getElementById("ox1").addEventListener('click', function () {
    count++;
    console.log("count ", count);
    arr[0] = 0;
    console.log(arr);
    zero[0].style.display = 'block';
    document.getElementById("ox22").style.height = '0px';
    document.getElementById("ox22").style.height = '0px';
    document.getElementById("ox11").style.width = '0px';
    document.getElementById("ox11").style.height = '0px';
    document.getElementById("ox33").style.height = '0px';
    document.getElementById("ox33").style.height = '0px';
    document.getElementById("ox222").style.height = '0px';
    document.getElementById("ox222").style.height = '0px';
    document.getElementById("ox333").style.height = '0px';
    document.getElementById("ox333").style.height = '0px';
    document.getElementById("ox111").style.height = '0px';
    document.getElementById("ox111").style.height = '0px';
    document.getElementById("ox1").style.height = '0px';
    document.getElementById("ox1").style.height = '0px';
    document.getElementById("ox2").style.height = '0px';
    document.getElementById("ox2").style.height = '0px';
    document.getElementById("ox3").style.height = '0px';
    document.getElementById("ox3").style.height = '0px';
    c(1, 2, 3, 4, 5, 6, 7, 8);
});
document.getElementById("ox11").addEventListener('click', function () {
    count++;
    console.log("count ", count);
    arr[1] = 0;
    console.log(arr);
    zero[1].style.display = 'block';
    document.getElementById("ox22").style.height = '0px';
    document.getElementById("ox22").style.height = '0px';
    document.getElementById("ox11").style.width = '0px';
    document.getElementById("ox11").style.height = '0px';
    document.getElementById("ox33").style.height = '0px';
    document.getElementById("ox33").style.height = '0px';
    document.getElementById("ox222").style.height = '0px';
    document.getElementById("ox222").style.height = '0px';
    document.getElementById("ox333").style.height = '0px';
    document.getElementById("ox333").style.height = '0px';
    document.getElementById("ox111").style.height = '0px';
    document.getElementById("ox111").style.height = '0px';
    document.getElementById("ox1").style.height = '0px';
    document.getElementById("ox1").style.height = '0px';
    document.getElementById("ox2").style.height = '0px';
    document.getElementById("ox2").style.height = '0px';
    document.getElementById("ox3").style.height = '0px';
    document.getElementById("ox3").style.height = '0px';
    c(0, 2, 3, 4, 5, 6, 7, 8);
});
document.getElementById("ox111").addEventListener('click', function () {
    count++;
    console.log("count ", count);
    arr[2] = 0;
    console.log(arr);
    zero[2].style.display = 'block';
    document.getElementById("ox22").style.height = '0px';
    document.getElementById("ox22").style.height = '0px';
    document.getElementById("ox11").style.width = '0px';
    document.getElementById("ox11").style.height = '0px';
    document.getElementById("ox33").style.height = '0px';
    document.getElementById("ox33").style.height = '0px';
    document.getElementById("ox222").style.height = '0px';
    document.getElementById("ox222").style.height = '0px';
    document.getElementById("ox333").style.height = '0px';
    document.getElementById("ox333").style.height = '0px';
    document.getElementById("ox111").style.height = '0px';
    document.getElementById("ox111").style.height = '0px';
    document.getElementById("ox1").style.height = '0px';
    document.getElementById("ox1").style.height = '0px';
    document.getElementById("ox2").style.height = '0px';
    document.getElementById("ox2").style.height = '0px';
    document.getElementById("ox3").style.height = '0px';
    document.getElementById("ox3").style.height = '0px';
    c(1, 0, 3, 4, 5, 6, 7, 8);
});
document.getElementById("ox2").addEventListener('click', function () {
    count++;
    console.log("count ", count);
    arr[3] = 0;
    console.log(arr);
    zero[3].style.display = 'block';
    document.getElementById("ox22").style.height = '0px';
    document.getElementById("ox22").style.height = '0px';
    document.getElementById("ox11").style.width = '0px';
    document.getElementById("ox11").style.height = '0px';
    document.getElementById("ox33").style.height = '0px';
    document.getElementById("ox33").style.height = '0px';
    document.getElementById("ox222").style.height = '0px';
    document.getElementById("ox222").style.height = '0px';
    document.getElementById("ox333").style.height = '0px';
    document.getElementById("ox333").style.height = '0px';
    document.getElementById("ox111").style.height = '0px';
    document.getElementById("ox111").style.height = '0px';
    document.getElementById("ox1").style.height = '0px';
    document.getElementById("ox1").style.height = '0px';
    document.getElementById("ox2").style.height = '0px';
    document.getElementById("ox2").style.height = '0px';
    document.getElementById("ox3").style.height = '0px';
    document.getElementById("ox3").style.height = '0px';
    c(1, 2, 0, 4, 5, 6, 7, 8);
});
document.getElementById("ox22").addEventListener('click', function () {
    count++;
    console.log("count ", count);
    arr[4] = 0;
    console.log(arr);
    zero[4].style.display = 'block';
    document.getElementById("ox22").style.height = '0px';
    document.getElementById("ox22").style.height = '0px';
    document.getElementById("ox11").style.width = '0px';
    document.getElementById("ox11").style.height = '0px';
    document.getElementById("ox33").style.height = '0px';
    document.getElementById("ox33").style.height = '0px';
    document.getElementById("ox222").style.height = '0px';
    document.getElementById("ox222").style.height = '0px';
    document.getElementById("ox333").style.height = '0px';
    document.getElementById("ox333").style.height = '0px';
    document.getElementById("ox111").style.height = '0px';
    document.getElementById("ox111").style.height = '0px';
    document.getElementById("ox1").style.height = '0px';
    document.getElementById("ox1").style.height = '0px';
    document.getElementById("ox2").style.height = '0px';
    document.getElementById("ox2").style.height = '0px';
    document.getElementById("ox3").style.height = '0px';
    document.getElementById("ox3").style.height = '0px';
    c(1, 2, 3, 0, 5, 6, 7, 8);
});
document.getElementById("ox222").addEventListener('click', function () {
    count++;
    console.log("count ", count);
    arr[5] = 0;
    console.log(arr);
    zero[5].style.display = 'block';
    document.getElementById("ox22").style.height = '0px';
    document.getElementById("ox22").style.height = '0px';
    document.getElementById("ox11").style.width = '0px';
    document.getElementById("ox11").style.height = '0px';
    document.getElementById("ox33").style.height = '0px';
    document.getElementById("ox33").style.height = '0px';
    document.getElementById("ox222").style.height = '0px';
    document.getElementById("ox222").style.height = '0px';
    document.getElementById("ox333").style.height = '0px';
    document.getElementById("ox333").style.height = '0px';
    document.getElementById("ox111").style.height = '0px';
    document.getElementById("ox111").style.height = '0px';
    document.getElementById("ox1").style.height = '0px';
    document.getElementById("ox1").style.height = '0px';
    document.getElementById("ox2").style.height = '0px';
    document.getElementById("ox2").style.height = '0px';
    document.getElementById("ox3").style.height = '0px';
    document.getElementById("ox3").style.height = '0px';
    c(1, 2, 3, 4, 0, 6, 7, 8);
});
document.getElementById("ox3").addEventListener('click', function () {
    count++;
    console.log("count ", count);
    arr[6] = 0;
    console.log(arr);
    zero[6].style.display = 'block';
    document.getElementById("ox22").style.height = '0px';
    document.getElementById("ox22").style.height = '0px';
    document.getElementById("ox11").style.width = '0px';
    document.getElementById("ox11").style.height = '0px';
    document.getElementById("ox33").style.height = '0px';
    document.getElementById("ox33").style.height = '0px';
    document.getElementById("ox222").style.height = '0px';
    document.getElementById("ox222").style.height = '0px';
    document.getElementById("ox333").style.height = '0px';
    document.getElementById("ox333").style.height = '0px';
    document.getElementById("ox111").style.height = '0px';
    document.getElementById("ox111").style.height = '0px';
    document.getElementById("ox1").style.height = '0px';
    document.getElementById("ox1").style.height = '0px';
    document.getElementById("ox2").style.height = '0px';
    document.getElementById("ox2").style.height = '0px';
    document.getElementById("ox3").style.height = '0px';
    document.getElementById("ox3").style.height = '0px';
    c(1, 2, 3, 4, 5, 0, 7, 8);
});
document.getElementById("ox33").addEventListener('click', function () {
    count++;
    console.log("count ", count);
    arr[7] = 0;
    console.log(arr);
    zero[7].style.display = 'block';
    document.getElementById("ox22").style.height = '0px';
    document.getElementById("ox22").style.height = '0px';
    document.getElementById("ox11").style.width = '0px';
    document.getElementById("ox11").style.height = '0px';
    document.getElementById("ox33").style.height = '0px';
    document.getElementById("ox33").style.height = '0px';
    document.getElementById("ox222").style.height = '0px';
    document.getElementById("ox222").style.height = '0px';
    document.getElementById("ox333").style.height = '0px';
    document.getElementById("ox333").style.height = '0px';
    document.getElementById("ox111").style.height = '0px';
    document.getElementById("ox111").style.height = '0px';
    document.getElementById("ox1").style.height = '0px';
    document.getElementById("ox1").style.height = '0px';
    document.getElementById("ox2").style.height = '0px';
    document.getElementById("ox2").style.height = '0px';
    document.getElementById("ox3").style.height = '0px';
    document.getElementById("ox3").style.height = '0px';
    c(1, 2, 3, 4, 5, 6, 0, 8);
});
document.getElementById("ox333").addEventListener('click', function () {
    count++;
    console.log("count ", count);
    arr[8] = 0;
    console.log(arr);
    zero[8].style.display = 'block';
    document.getElementById("ox22").style.height = '0px';
    document.getElementById("ox22").style.height = '0px';
    document.getElementById("ox11").style.width = '0px';
    document.getElementById("ox11").style.height = '0px';
    document.getElementById("ox33").style.height = '0px';
    document.getElementById("ox33").style.height = '0px';
    document.getElementById("ox222").style.height = '0px';
    document.getElementById("ox222").style.height = '0px';
    document.getElementById("ox333").style.height = '0px';
    document.getElementById("ox333").style.height = '0px';
    document.getElementById("ox111").style.height = '0px';
    document.getElementById("ox111").style.height = '0px';
    document.getElementById("ox1").style.height = '0px';
    document.getElementById("ox1").style.height = '0px';
    document.getElementById("ox2").style.height = '0px';
    document.getElementById("ox2").style.height = '0px';
    document.getElementById("ox3").style.height = '0px';
    document.getElementById("ox3").style.height = '0px';
    c(0, 1, 2, 3, 4, 5, 6, 7);
});