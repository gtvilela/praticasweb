document.write ("<h3>Matriz</h3>");
var mat = new Array ();
alocarMemoria (mat, 2);
mat[0][0] = 1; mat[0][1] = 2;
mat[1][0] = 3; mat[1][1] = 4;
for (var i = 0; i < mat.length; i++) {
for (var j = 0; j < mat[i].length; j++)
document.write (mat[i][j] + " ");
document.write ("<br/>");
}
document.write ("<br/>");
document.write ("<h3>Matriz com Elementos Adicionais</h3>");
alocarMemoria (mat, 3);
mat[2][0] = 5; mat[2][1] = 6;
for (var i = 0; i < mat.length; i++) {
for (var j = 0; j < mat[i].length; j++)
document.write (mat[i][j] + " ");
document.write ("<br/>");
}
function alocarMemoria (matriz, linhas) {
for (var i = 0; i < linhas; i++)
if (matriz[i] == null)
matriz[i] = new Array ();
}