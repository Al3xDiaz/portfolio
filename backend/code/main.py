from flask import Flask
from flask import request
from flask import jsonify
from flask.json import dumps
from flask.wrappers import Response
from flask_pymongo import MongoClient
import os
import sys

from pymongo import collection, mongo_client

app = Flask(__name__)
app.config["MONGO_URI"] = os.environ['CON_STR']
client = MongoClient('db',
                      username=os.environ['MONGO_U'],
                      password=os.environ['MONGO_P'],
                      authSource='admin',
                      authMechanism='SCRAM-SHA-256')
mongoDB= client["myDatabase"]
mongoCollection=mongoDB["users"]

@app.route('/Usuarios/GetComentarios')
def getUsers():
        mongoCursor=mongoCollection.find()
        response=[]
        for item in mongoCursor:
                response.append(
                        {
                        "name":item['name'],
                        "email":item['email'],
                        "commentary":item['commentary']
                        })
        return jsonify(response)

@app.route('/Usuarios/SetComentarios', methods=['POST'])
def setUsers():
        user=  {
                "name":request.args.get('name'),
                "email":request.args.get('email'),
                "commentary":request.args.get('commentary')
                }
        mongoCollection.insert(user)
        return jsonify(True)