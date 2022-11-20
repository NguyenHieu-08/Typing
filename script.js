let a = new Array()
let n = "";

a[1] = 'T'; a[2] = 'Ô'; a[3] = 'I'; a[4] = ' '; a[5] = 'Y'; a[6] = 'Ê'; a[7] = 'U'; a[8] = ' '; a[9] = 'B'; a[10] = 'Ạ'; a[11] = 'N'; a[12] = '!'; a[13] = '!'; a[14] = '!';

function typeTextarea() {
    t = document.f.txt.value;
    j = t.length;
    if (j > 0) {
        for (let i = 1; i <= j; i++) {
            n = n + a[i];
            if (i == 15) {
                document.f.txt.value = "";
                n = "";
            }
        }
    }
    document.f.txt.value = n;
    n = "";
    setTimeout("typeTextarea()", 1);
}