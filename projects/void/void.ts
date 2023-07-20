const sum = (a: number, b: number): number => {
    return a + b;
}

// khi function có : void là function đó sẽ không  return ,
const mes = (mess: string): void => {
    console.log(">>> mess", mess)
}

console.log(sum(2, 4));
console.log(mes("anh bao"));