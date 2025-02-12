# backend/app.py
from flask import Flask

from flask_cors import CORS
from flask_restful import Api

from routes.tutorials import Tutorials

app = Flask(__name__)
CORS(app)
api = Api(app)

api.add_resource(Tutorials, "/api/tutorials")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
