import flask
from flask import jsonify, request
from flask_cors import CORS
from resources.search_players import SearchPlayers
import json
from dotenv import load_dotenv

load_dotenv()


def create_app():
    app = flask.Flask(__name__)
    configure_extensions(app)
    configure_routes(app)
    configure_error_handlers(app)

    return app


def configure_extensions(app):
    CORS(app, resources={r"/api/*": {"origins": "*"}})


def configure_routes(app):
    fifa_search = SearchPlayers()

    @app.route("/api", methods=["GET"])
    def api_route():
        return (
            "<h2>FIFA API</h2>"
            "<p>Use API routes:</p>"
            "<p>/search</p>"
            "<p>/suggest</p>"
            "<p>/attributes</p>",
            200,
        )

    @app.route("/api/suggest", methods=["GET"])
    def suggest_name():
        part = request.args.get("part", "")
        return jsonify(fifa_search.get_suggestion(part))

    @app.route("/api/search", methods=["POST"])
    def search_players():
        return fifa_search.get_players(json.loads(request.data))

    @app.route("/api/attributes", methods=["GET"])
    def attribute_list():
        return jsonify(fifa_search.get_attributes())

    @app.route("/api/group_attributes", methods=["GET"])
    def attribute_group_list():
        return jsonify(fifa_search.get_grouped_attributes())

    @app.route("/api/version", methods=["GET"])
    def version_update():
        year = request.args.get("year", "")
        fifa_search.update_dataset(year)
        return {"response": True}


def configure_error_handlers(app):
    @app.errorhandler(404)
    def page_not_found(error):
        return f"<h1>{error.code}</h1><p>The resource could not be found.</p>", 404
