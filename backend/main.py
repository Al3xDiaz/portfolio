from flask import Flask
from flask import jsonify
import simplejson as json

app = Flask(__name__)

@app.route('/')

def hello():
        return "hola lince"

@app.route('/Usuarios/GetComentarios')
def getUsers():
        lista= []
        lista.append({"name":"alex","email":"adiaz@example.com","commentary":"good site!!!"})
        return jsonify(lista)