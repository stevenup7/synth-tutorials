# backend/routes/tutorials.py
from flask_restful import Resource
from flask import jsonify


class Tutorials(Resource):
    def get(self):
        tutorials = [
            {"id": 1, "title": "Sampling on the Digitakt", "content": "..."},
            {"id": 2, "title": "Sequencing Tips", "content": "..."},
        ]
        return jsonify({"tutorials": tutorials})
