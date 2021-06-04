export class General {
  getdata(){

  }
}
export function loadDoc(url, metodo,funcion) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function (event) {
    try {
      var s= event.target.response;
      var o = JSON.parse(s);
      funcion(o);
    } catch (e) {

    } finally {

    }

  };
  xhttp.open(metodo,url , true);
  xhttp.send();
}
export default General;
