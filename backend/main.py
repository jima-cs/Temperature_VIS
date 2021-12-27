import flask
from flask_cors import CORS
from flask import Flask
from main_hw import app_hw

app = Flask(__name__)
app.register_blueprint(app_hw)
app.config['TEMPLATES_AUTO_RELOAD'] = True
CORS(app)


    
@app.route('/ourweb')
def ourweb():
    return flask.send_from_directory('static', 'ourweb.html')

@app.route('/data.json', methods=['GET']) 
def data(): 
    return flask.send_from_directory('static', 'data.json')

@app.route('/race.json') 
def race(): 
    return flask.send_from_directory('static', 'race.json')

app.run(host='0.0.0.0', port=11666, debug=True)
