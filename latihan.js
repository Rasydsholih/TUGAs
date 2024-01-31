//do while

// let tahun = Number(prompt("Masukkan tahun untuk mengetahui tahun kabisat atau bukan..."));


// do {
// if(tahun % 4 != 0) {
//     ket =` ${tahun} bukan tahun kabisat`;
// } else if(tahun % 100 != 0) {
//     ket = `${tahun} tahun kabisat`;
// } else if (tahun % 400 != 0) {
//     ket = `${tahun} bukan tahun kabisat`;
// } else {
//     ket = `${tahun} bukan tahun kabisat`;
// }
//     tahun += 4;
//     console.log(ket)

// }while(tahun <= 2023)


//while

// let tahun = Number(prompt("Masukkan tahun untuk mengetahui tahun kabisat atau bukan..."));
// while ( tahun <= 2023){
    // if(tahun % 4 != 0) {
    //     ket =` ${tahun} bukan tahun kabisat`;
    // } else if(tahun % 100 != 0) {
    //     ket = `${tahun} tahun kabisat`;
    // } else if (tahun % 400 != 0) {
    //     ket = `${tahun} bukan tahun kabisat`;
    // } else {
    //     ket = `${tahun} bukan tahun kabisat`;
    // }
//         tahun += 4;
// }

// console.log(ket)


for (let tahun = Number(prompt("Masukkan tahun untuk mengetahui tahun kabisat atau bukan...")); tahun <= 2023; tahun += 4 ) {
    if(tahun % 4 != 0) {
        ket =` ${tahun} bukan tahun kabisat`;
    } else if(tahun % 100 != 0) {
        ket = `${tahun} tahun kabisat`;
    } else if (tahun % 400 != 0) {
        ket = `${tahun} bukan tahun kabisat`;
    } else {
    } console.log(ket)
    ket = `${tahun} bukan tahun kabisat`;
}

