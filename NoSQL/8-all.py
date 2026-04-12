#!/usr/bin/env python3
""" Modulo para listar todos los documentos de una coleccion """


def list_all(mongo_collection):
    """
    Lista todos los documentos en una coleccion de MongoDB
    """
    if mongo_collection is None:
        return []

    return list(mongo_collection.find())
