from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# MySQL connection configuration
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Ranisona@13",
    database="WebDevMiniApp"
)

@app.route('/')
def index():
    return 'Welcome to the WebDevMiniApp!'

@app.route('/insert', methods=['POST'])
def insert_data():
    data = request.json
    Roll_No = data.get('Roll_No')
    Firstname = data.get('Firstname')
    MiddleInitial = data.get('MiddleInitial')
    Lastname = data.get('Lastname')
    Address = data.get('Address')
    Phone_Number = data.get('Phone_Number')
    Email = data.get('Email')

    cursor = mydb.cursor()
    sql = "INSERT INTO Form_Data (Roll_No, Firstname, MiddleInitial, Lastname, Address, Phone_Number, Email) VALUES (%s, %s, %s, %s, %s, %s, %s)"
    val = (Roll_No, Firstname, MiddleInitial, Lastname, Address, Phone_Number, Email)
    cursor.execute(sql, val)
    mydb.commit()
    cursor.close()

    return 'Record inserted successfully'

@app.route('/display', methods=['GET'])
def display_data():
    cursor = mydb.cursor(dictionary=True)
    cursor.execute("SELECT * FROM Form_Data")
    records = cursor.fetchall()
    cursor.close()

    return jsonify(records)

if __name__ == '__main__':
    app.run(debug=True)
