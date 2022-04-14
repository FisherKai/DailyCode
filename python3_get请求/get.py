from flask import Flask, request, jsonify
 
app = Flask(__name__)
 
 
@app.route('/getInfo', methods=["GET", "POST"])
def calculate():
    if request.method == 'GET':
        params = request.args
    else:
        params = request.form if request.form else request.json
    name = params.get("name", 'yukai')
    age = params.get("age", 18)
    res = {"result": 'hello world'+name+age}
    return jsonify(content_type='application/json;charset=utf-8',
                   reason='success',
                   charset='utf-8',
                   status='200',
                   content=res)
 
 
if __name__ == '__main__':
    app.run(host='0.0.0.0',
            threaded=True,
            debug=False,
            port=8868)