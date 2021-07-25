from flask import Flask
from flask import request
from flask import jsonify
from flask.json import dumps
from flask.wrappers import Response
from flask_pymongo import MongoClient
from datetime import datetime
import os
#import sys
#from pymongo import collection, mongo_client
#from flask_cors import CORS

CON_STR=f"{os.environ['CON_STR']}"
MONGO_U=f"{os.environ['MONGO_U']}"
MONGO_P=f"{os.environ['MONGO_P']}"
app = Flask(__name__)
app.config["MONGO_URI"] = CON_STR
#CORS(app)
client = MongoClient('db',
                      username=MONGO_U,
                      password=MONGO_P,
                      authSource='admin',
                      authMechanism='SCRAM-SHA-256')
mongoDB= client["myDatabase"]
mongoCollection=mongoDB["comentarys"]

@app.route('/product/<name>')
def get_product(name):
  return "The product is " + str(name)

@app.route('/comentarys')
def getComentarys():
        mongoCursor=mongoCollection.find()
        response=[]
        
        for item in mongoCursor:
                item["_id"]=str(item["_id"])
                response.append(
                        {
                        "id":str(item["_id"]),
                        "name":item['name'],
                        "email":item['email'],
                        "date":item['date'],
                        "commentary":item['commentary']
                        })
        return jsonify(response)

@app.route('/comentary/<id>')
def getComentary(id):
        result=mongoCollection.find_one({"_id":id})
        return jsonify(result)

@app.route('/comentary', methods=['POST'])
def setUsers():
        dateTimeObj = datetime.now()
        timestampStr = dateTimeObj.strftime("%d-%b-%Y (%H:%M:%S.%f)")
        content=request.json
        user=  {
                "name":content["name"],
                "email":content["email"],
                "date":timestampStr,
                "commentary":content["commentary"]
                }
        mongoCollection.insert(user)
        return jsonify(True)